import { Router } from "express";
import ConfirmacionController from "../controller/confirmacionController.js";
const confirmacionRoutes = Router();

const confirmacionController = new ConfirmacionController();

confirmacionRoutes.get("", confirmacionController.getAllConfirmaciones);
confirmacionRoutes.get("/:id/", confirmacionController.getConfirmacionById);
confirmacionRoutes.post("", confirmacionController.createConfirmacion);
confirmacionRoutes.put("/:id", confirmacionController.updateConfirmacion);
confirmacionRoutes.delete("/:id", confirmacionController.deleteConfirmacion);

export default confirmacionRoutes;
