import { z } from "zod";
export const SignUpSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(3).max(5),
    confirmPassword: z.string().min(3),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type FormFields = z.infer<typeof SignUpSchema>;

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3).max(5),
});

export type LoginField = z.infer<typeof LoginSchema>;
