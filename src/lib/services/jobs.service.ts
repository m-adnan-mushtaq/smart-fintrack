import { JOB_NAMES, QUEUE_NAMES } from "@/lib/types";
import Bull, { Queue, JobOptions, Job } from "bull";
import { EmailService} from "./email.service";
import { logger } from "./logger.service";
class JobQueue {
  private readonly queue: Queue;
  private queueName: QUEUE_NAMES;
  constructor(queueName: QUEUE_NAMES) {
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
    this.processJob(JOB_NAMES.supportEmail);
  }
  private processJob(jobName: JOB_NAMES) {
    switch (jobName) {
      case JOB_NAMES.verifyEmail:
        this.queue.process(
          JOB_NAMES.verifyEmail,
          EmailService.sendVerificationEmail
        );
        break;
      case JOB_NAMES.supportEmail:
        this.queue.process(
          JOB_NAMES.supportEmail,
          EmailService.sendSupportMail
        );
        break;
      default:
        break;
    }
  }
  public async addJob(jobName: JOB_NAMES, data: any, options?: JobOptions) {
    await this.queue.isReady();
    await this.queue.add(jobName, data, options);
  }
  private async setupEventHandlers() {
    this.queue.on("completed", (job: Job) => {
      logger.debug("job is completed with => ", this.giveJobDetails(job));
    });
    this.queue.on("active", (job) => {
      logger.debug("job is active now =>", this.giveJobDetails(job));
    });
    this.queue.on("failed", (job) => {
      logger.error("job is failed =>", this.giveJobDetails(job));
    });
  }
  private giveJobDetails(job: Job) {
    return {
      id: job.id,
      name: job.name,
      queue: job.queue.name,
      reason:job.failedReason
    };
  }
}

export const emailQueueService = new JobQueue(QUEUE_NAMES.emailQueueService);
