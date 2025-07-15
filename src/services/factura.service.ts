import { prisma } from "../prisma/client";

export const getAllFacturas = async () => {
  return await prisma.facturas.findMany();
};

export const createFactura = async (data: {
  numero: string;
  razonSocial: string;
  ruc: string;
  tipo: string;
  cantidadDias: number;
  fecha: Date;
}) => {
  return await prisma.facturas.create({ data });
};

export const getFactura = async (id: number) => {
  return await prisma.facturas.findUnique({ where: { id } });
};
