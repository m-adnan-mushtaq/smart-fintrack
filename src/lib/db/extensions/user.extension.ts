import { Prisma } from "@prisma/client";
import { UserDbInput } from "../validation/user.validation";
import { CreateUserType } from "@/lib/dto";
import { PasswordServie } from "@/lib/services";

export default Prisma.defineExtension((client)=>{
  return client.$extends({
    name:"user-extension",
    model: {
      user: {
        /***********************************/
        /* USER MODEL STATIC METHODS */
        /***********************************/
        async signup(user: CreateUserType) {
          //hash password
          const hashedPassword = await PasswordServie.generateHash(
            user.password
          );
          return client.user.create({
            data: {
              ...user,
              password: hashedPassword,
            },
          });
        },

        comparePassword(
          password: string,
          hashedPassword: string
        ): Promise<boolean> {
          return PasswordServie.verifyPassword(password, hashedPassword);
        },
      },
    },
    query: {
      /***********************************/
      /* USER CUSTOM VALIDATION */
      /***********************************/

      user: {
        findUnique({ args, model, query }) {
          return query(args);
        },
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
  })
})
