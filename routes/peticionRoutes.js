import { Router } from "express";
import PeticionController from "../controller/peticionController.js";
const peticionRoutes = Router();

const peticionController = new PeticionController();

peticionRoutes.get("", peticionController.getAllPeticiones);
peticionRoutes.get("/:id/", peticionController.getPeticionById);
peticionRoutes.post("", peticionController.createPeticion);
peticionRoutes.put("/:id", peticionController.updatePeticion);
peticionRoutes.delete("/:id", peticionController.deletePeticion);

export default peticionRoutes;
