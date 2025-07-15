import { Request, Response } from "express";
import * as facturaService from "../services/factura.service";

export const getFacturas = async (_req: Request, res: Response) => {
  const facturas = await facturaService.getAllFacturas();
  res.json(facturas);
};

export const createFactura = async (req: Request, res: Response) => {
  const { numero, razonSocial, ruc, tipo, cantidadDias, fecha } = req.body;

  try {
    const newFactura = await facturaService.createFactura({
      numero,
      razonSocial,
      ruc,
      tipo,
      cantidadDias,
      fecha,
    });
    res.status(201).json({ message: "Factura creada" });
  } catch (error) {
    res.status(500).json({ error: "Error al crear factura" });
  }
};

export const getFactura = async (_req: Request, res: Response) => {
  const { id } = _req.params;
  try {
    const user = await facturaService.getFactura(+id);
    if (!user) {
      return res.status(404).json({ message: "Factura no encontrada" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener factura" });
  }
};
