import { Router } from "express";
import UsuarioController from "../controller/usuarioController.js";
import { validatetoken } from "../middlewares/validateToken.js";
const usuarioRoutes = Router();

const usuarioController = new UsuarioController();

usuarioRoutes.get("", usuarioController.getAllUsuarios);
usuarioRoutes.get("/:id/", usuarioController.getUsuarioById);
usuarioRoutes.post("", usuarioController.createUser);
usuarioRoutes.delete("/:id/", usuarioController.deleteUser);
usuarioRoutes.use(validatetoken);
usuarioRoutes.post("/login", usuarioController.login);

usuarioRoutes.get("/me",validatetoken, usuarioController.me);


export default usuarioRoutes;
