import { Router } from "express";
import { createUser, getUser, getUsers } from "../controllers/user.controller";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Endpoints para usuarios
 */

/**
 * @swagger
 * /user:
 *   post:
 *     summary: Crear un nuevo usuario
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuario creado
 */
router.post("/", createUser);

/**
 * @swagger
 * /user:
 *   get:
 *     summary: Obtener todos los usuarios
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Lista de usuarios
 */

router.get("/", getUsers);

/**
 * @swagger
 * /user/{userId}:
 *   get:
 *     summary: Obtener un usuario
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Obtener un usuario
 */
router.get("/:userId", getUser);

export default router;
