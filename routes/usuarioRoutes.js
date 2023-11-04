import { Router } from "express";
import UsuarioController from "../controller/usuarioController.js";
const usuarioRoutes = Router();

const usuarioController = new UsuarioController();

usuarioRoutes.get("", usuarioController.getAllUsuarios);
usuarioRoutes.get("/:id/", usuarioController.getUsuarioById);
usuarioRoutes.post("", usuarioController.createUser);
usuarioRoutes.put("/:id", usuarioController.updateUser);
usuarioRoutes.delete("/:id", usuarioController.deleteUser);
usuarioRoutes.put("/:id/libro", usuarioController.agregarLibro);

export default usuarioRoutes;
