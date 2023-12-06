import { Router } from "express";
import EstadisticaController from "../controller/estadisticaController.js";
const estadisticaRoutes = Router();

const estadisticaController = new EstadisticaController();

estadisticaRoutes.get("/:id", estadisticaController.getEstadisticaById);
estadisticaRoutes.put("/:id", estadisticaController.updateEstadistica);
estadisticaRoutes.post("", estadisticaController.createEstadistica);
estadisticaRoutes.delete("/:id", estadisticaController.deleteEstadistica);



export default estadisticaRoutes;
