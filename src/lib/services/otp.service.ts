import { redis } from "@/lib/services";
import { OPT_EXIPIRE_TIME } from "@/lib/common/commont";

class OtpService {
  constructor(private otpLen: number) {
    this.otpLen = otpLen;
  }
  public async generateOtop(email: string): Promise<string> {
    try {
      const numbersSet = "1234567890";
      const setLeng = numbersSet.length;
      let otp = "";
      for (let i = 0; i <= this.otpLen; i++) {
        otp += numbersSet[Math.floor(Math.random() * setLeng)];
      }
      await redis.set(otp, email, "EX", OPT_EXIPIRE_TIME);
      return otp;
    } catch (error) {
      throw error;
    }
  }
  public async verifyOtp(email:string,otp: string): Promise<boolean> {
    try {
      const emailOtp = await redis.get(otp);
      if (!emailOtp) throw Error("Invalid Otp");
      return emailOtp===email
    } catch (error) {
      throw error
    }
  }
}

const otpService = new OtpService(6);
export { otpService };
