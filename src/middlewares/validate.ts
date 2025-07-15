import { ZodError, ZodObject } from "zod";
import { Request, Response, NextFunction } from "express";

export const validate =
  (schema: ZodObject<any>) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req);
      next();
    } catch (err) {
      if (err instanceof ZodError) {
        const messages = err.issues.map((issue) => issue.message);
        return res.status(400).json({
          message: "Error de validación",
          errors: messages,
        });
      }

      return res.status(500).json({ message: "Error interno" });
    }
  };
