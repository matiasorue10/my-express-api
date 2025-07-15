import { Request, Response } from "express";
import * as userService from "../services/user.service";
import bcrypt from "bcrypt";
import { CreateUserInput } from "../validations/user.schema";

export const getUsers = async (_req: Request, res: Response) => {
  const users = await userService.getAllUsers();
  res.json(users);
};

export const createUser = async (
  req: Request<{}, {}, CreateUserInput>,
  res: Response
) => {
  const { email, name, password } = req.body;

  try {
    const userExists = await userService.getUserByEmail(email);
    if (userExists) {
      return res.status(400).json({ error: "El usuario ya existe" });
    }
    const saltRounds = 10;
    let hashedPassword: string;
    try {
      hashedPassword = await bcrypt.hash(password, saltRounds);
    } catch (err) {
      console.error("Error al hashear la contraseña:", err);
      return res.status(500).json({ error: "Error al encriptar contraseña" });
    }

    const newUser = await userService.createUser({
      email,
      name,
      password: hashedPassword,
    });

    res.status(201).json({ message: "Usuario creado" });
  } catch (error) {
    res.status(500).json({ error: "Error al crear usuario" });
  }
};

export const getUser = async (_req: Request, res: Response) => {
  const { userId } = _req.params;
  try {
    const user = await userService.getUser(+userId);
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener usuario" });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await userService.getUserByEmail(email);
    if (!user) {
      return res.status(400).json({ error: "Usuario o contraseña incorrecta" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(400).json({ error: "Usuario o contraseña incorrecta" });
    }

    res.status(200).json({ message: "Login exitoso" });
  } catch (error) {
    res.status(500).json({ error: "Error al iniciar sesión" });
  }
};
