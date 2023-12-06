import { Router } from "express";

import usuarioRoutes from "./usuarioRoutes.js";
import libroRoutes from "./libroRoutes.js";
import peticionRoutes from "./peticionRoutes.js"; 
import confirmacionRoutes from "./confirmacionRoutes.js"; 
import estadisticaRoutes from "./estadisticaRoutes.js"; 




const router = Router();

router.use("/usuario", usuarioRoutes);
router.use("/libro", libroRoutes);
router.use("/peticion", peticionRoutes); 
router.use("/confirmacion", confirmacionRoutes); 
router.use("/estadistica",estadisticaRoutes)



export default router;
