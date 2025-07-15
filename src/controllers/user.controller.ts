import { Request, Response } from "express";
import * as userService from "../services/user.service";

export const getUsers = async (_req: Request, res: Response) => {
  const users = await userService.getAllUsers();
  res.json(users);
};

export const createUser = async (req: Request, res: Response) => {
  const { email, name, password } = req.body;

  try {
    const userExists = await userService.getUserByEmail(email);
    if (userExists) {
      return res.status(400).json({ error: "El usuario ya existe" });
    }
    const bcrypt = require("bcrypt");
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
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
  const { id } = _req.params;
  try {
    const user = await userService.getUser(+id);
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
    const bcrypt = require("bcrypt");

    const result = await bcrypt.compare(password, user.password);

    res.status(201).json({ message: "Login exitoso" });
  } catch (error) {
    res.status(500).json({ error: "Error al iniciar sesión" });
  }
};
