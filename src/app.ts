import express from "express";
import userRoutes from "./routes/user.routes";
import facturaRoutes from "./routes/factura.routes";
import { swaggerUi, specs } from "./config/swagger";

const app = express();

app.use(express.json());
app.use("/users", userRoutes);
app.use("/facturas", facturaRoutes);
// Swagger docs
app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs));

export default app;
