import { z } from "zod";
export const LoginApiSchema = z.object({
  user: z.object({
    email: z.string(),
    password: z.string().min(6, { message: "密碼最少要6個字" }),
  }),
});
