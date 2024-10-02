import { z } from "zod";

export const RegisterApiSchema = z.object({
  user: z.object({
    email: z.string().email({ message: "請輸入您的信箱" }),
    nickname: z.string().min(1, { message: "暱稱最少要1個字" }),
    password: z.string().min(6, { message: "密碼最少要6個字" }),
  }),
});
