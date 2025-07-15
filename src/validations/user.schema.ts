import { z } from 'zod';

export const createUserSchema = z.object({
  body: z.object({
    email: z.string().email({ message: 'Email inválido' }),
    name: z.string().min(1, 'El nombre no puede estar vacío').optional(),
  }),
}) ; 