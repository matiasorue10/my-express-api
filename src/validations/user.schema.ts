import { z } from "zod";

export const createUserSchema = z.object({
  body: z.object({
    email: z.email({ error: "El email es invalido" }),
    name: z.string().min(1, "Nombre obligatorio"),
    password: z
      .string()
      .min(6, "La contraseña debe tener al menos 6 caracteres"),
  }),
});

export type CreateUserInput = z.infer<typeof createUserSchema>["body"];
