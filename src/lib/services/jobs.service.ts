import { JOB_NAMES, QUEUE_NAMES } from "@/lib/types";
import Bull, { Queue, JobOptions, Job } from "bull";
import { EmailService} from "./email.service";
class JobQueue {
  private readonly queue: Queue;
  private queueName: string;
  constructor(queueName: string) {
    this.queueName = queueName;
    this.queue = new Bull(queueName, {
      defaultJobOptions: {
        attempts: 2,
        removeOnComplete: true,
        removeOnFail: true,
      },
    });
    this.setupEventHandlers();
    this.setupJobsProcessing()
  }
  private setupJobsProcessing() {
    this.processJob(JOB_NAMES.verifyEmail);
  }
  private processJob(jobName: string) {
    switch (jobName) {
      case JOB_NAMES.verifyEmail:
        this.queue.process(
          JOB_NAMES.verifyEmail,
          EmailService.sendVerificationEmail
        );
        break;
      default:
        break;
    }
  }
  public async addJob(jobName: string, data: any, options?: JobOptions) {
    await this.queue.isReady();
    await this.queue.add(jobName, data, options);
  }
  private async setupEventHandlers() {
    this.queue.on("completed", (job: Job) => {
      console.log("job is completed with => ", this.giveJobDetails(job));
    });
    this.queue.on("active", (job) => {
      console.log("job is active now =>", this.giveJobDetails(job));
    });
    this.queue.on("failed", (job) => {
      console.log("job is failed =>", this.giveJobDetails(job));
    });
  }
  private giveJobDetails(job: Job) {
    return {
      id: job.id,
      name: job.name,
      queue: job.queue.name,
    };
  }
}

export const emailQueue = new JobQueue(QUEUE_NAMES.emailQueue);
