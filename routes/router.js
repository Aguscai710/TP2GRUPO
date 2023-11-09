import { Router } from "express";

import usuarioRoutes from "./usuarioRoutes.js";
import libroRoutes from "./libroRoutes.js";
import peticionRoutes from "./peticionRoutes.js"; 
import confirmacionRoutes from "./confirmacionRoutes.js"; 





const router = Router();

router.use("/usuario", usuarioRoutes);
router.use("/libro", libroRoutes);
router.use("/peticion", peticionRoutes); 
router.use("/confirmacion", confirmacionRoutes); 



export default router;
