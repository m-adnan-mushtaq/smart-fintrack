import { otpService } from ".";
import { Job } from "bull";
import { transporter } from "../config";

class EmailService {
  constructor() {}
  static async sendVerificationEmail(job: Job) {
    try {
      const { email } = job.data;
      const otpCode = await otpService.generateOtop(email);

      await transporter.sendMail({
        from: "noreplay, smartfintrack@support.com",
        to: email,
        subject: "Verify Your Email at SmartFinTrack",
        html: `
            <style>
          .container {
            font-family: Arial, sans-serif;
            background-color: #fcfcfc;
            text-align: center;
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
        }
        .header {
            background-color: #f0f0f0;
            padding: 20px;
        }
        .footer {
            background-color: #f0f0f0;
            padding: 20px;
        }
        .content {
            padding: 20px;
        }
        .link{
          font-size:1.3rem;
        }
        .primary{
          color:#1a103c;
        }
    </style>
    <div class="container">
      <div class="header">
      <h1 class="primary">Welcome to SmartFinTrack</h1>
      <p>You are just a step away!</p>
      </div>
      <div class="content">
      <p>Please use the following verification code:</p>
      <h2 class="primary">${otpCode}</h2>
      <p style="font-weight:bold;">Note: Otp will be expired in 30mins</p>
    </div>
    `,
      });
    } catch (error) {
      console.log(error);
      throw Error("Failed to send email!");
    }
  }

  static async sendSupportMail(job: Job) {
    try {
      const { email, message, name } = job.data;
      console.log(job.data);
      
      await transporter.sendMail({
        from: "noreplay, smartfintrack@support.com",
        to: "malikkingoo68@gmail.com",
        subject: "Support Required from client!",
        html: `
        <h1>Message from ${name}</h1>
        <p>Email : ${email}</p>
        <h5>
        Message : ${message}
        </h5>
        `,
      });
    } catch (error) {
      throw error
    }
  }
}

export { EmailService };
