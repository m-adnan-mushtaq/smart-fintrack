import { PrismaClient } from "@prisma/client";
import { UserDbInput } from "./validation";
import { CreateUserType } from "@/lib/dto";
import * as bcrypt from "bcrypt";
import { SALT_ROUNDS } from "../common/commont";
const prismaClient = new PrismaClient().$extends({
  model: {
    user: {
      /***********************************/
      /* USER MODEL STATIC METHODS */
      /***********************************/
      async signup(user: CreateUserType) {
        //hash password
        const hashedPassword = await bcrypt.hash(user.password, SALT_ROUNDS);
        return prismaClient.user.create({
          data: {
            ...user,
            password: hashedPassword,
          },
        });
      },

      comparePassword(password:string,hashedPassword:string):Promise<boolean>{
        return bcrypt.compare(password,hashedPassword)
      }
    },
  },
  query: {
    /***********************************/
    /* USER CUSTOM VALIDATION */
    /***********************************/
    user: {
      create({ args, query }) {
        args.data = UserDbInput.parse(args.data);
        return query(args);
      },
      update({ args, query }) {
        args.data = UserDbInput.partial().parse(args.data);
        return query(args);
      },
      updateMany({ args, query }) {
        args.data = UserDbInput.partial().parse(args.data);
        return query(args);
      },
      upsert({ args, query }) {
        args.create = UserDbInput.parse(args.create);
        args.update = UserDbInput.partial().parse(args.update);
        return query(args);
      },
    },
  },
});

export default prismaClient;
