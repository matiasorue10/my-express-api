import { Router } from "express";
import {
  createFactura,
  getFactura,
  getFacturas,
} from "../controllers/factura.controller";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Facturas
 *   description: Endpoints para facturas
 */

/**
 * @swagger
 * /facturas:
 *   post:
 *     summary: Crear una factura
 *     tags: [Facturas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - numero
 *               - razonSocial
 *               - ruc
 *               - tipo
 *               - cantidadDias
 *               - fecha
 *             properties:
 *                numero:
 *                  type: string
 *                razonSocial:
 *                  type: string
 *                ruc:
 *                  type: string
 *                tipo:
 *                  type: string
 *                cantidadDias:
 *                  type: number
 *                fecha:
 *                  type: date
 *     responses:
 *       201:
 *         description: Factura creada
 */
router.post("/", createFactura);

/**
 * @swagger
 * /facturas:
 *   get:
 *     summary: Obtener todos las facturas
 *     tags: [Facturas]
 *     responses:
 *       200:
 *         description: Lista de facturas
 */
router.get("/", getFacturas);

/**
 * @swagger
 * tags:
 *   name: Facturas
 *   description: Endpoints para facturas
 */

/**
 * @swagger
 * /facturas/{facturaId}:
 *   get:
 *     summary: Obtener una factura
 *     tags: [Facturas]
 *     responses:
 *       200:
 *         description: Obtener una factura
 */
router.get("/:facturaId", getFactura);

export default router;
