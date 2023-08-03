import { PrismaClient } from "@prisma/client";
import { UserDbInput } from "./validation";

const prismaClient = new PrismaClient().$extends({
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
