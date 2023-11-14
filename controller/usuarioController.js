import { Usuario,Libro } from "../models/relaciones.js";

class UsuarioController {
	constructor() {}
	getAllUsuarios = async (req, res) => {
		try {
			const usuarios = await Usuario.findAll({ attributes: ["id", "nombre", "mail"] });
			res.status(200).send({
				success: true,
				message: "Todos los usuarios que hay",
				data: usuarios,
			});
		} catch (error) {
			res.status(400).send({ success: false, message: error.message });
		}
	};

	getUsuarioById = async (req, res) => {
		try {
			const { id } = req.params;
			const user = await Usuario.findOne({
				where: { id },
				attributes: ["id", "nombre"],
			});

			if (!user) throw new Error("no hay User");

			res.status(200).send({
				success: true,
				message: "Usuario encontrado",
				data: user,
			});
		} catch (error) {
			res.status(400).send({ success: false, message: error.message });
		}
	};
	createUser = async (req, res) => {
		try {
			const { nombre, password, mail, telefono } = req.body;
			const user = await Usuario.create({ nombre, password, mail, telefono });
			res.status(200).send({
				success: true,
				message: "Usuario creado con exito",
				data: user,
			});
		} catch (error) {
			res.status(400).send({ success: false, message: error.message });
		}
	};

	deleteUser = (req, res) => {
		try {
			const { id } = req.params;
			const usuario = Usuario.destroy({
				where: { id },
			});
			if (!usuario) throw new Error("no se elimino nada");
			res.status(200).send({ success: true, message: "usuario eliminado", data: usuario });
		} catch (error) {
			res.status(400).send({ success: false, message: error.message });
		}
	};

	login = async (req, res) => {
		try {
			const { mail, password } = req.body;
			const user = await Usuario.findOne({
				where: { mail },
			});
			if (!user) throw new Error("User chucu");

			const validate = await user.validatePassword(password);
			if (!validate) throw new Error("User chucu");

			const payload = {
				id: user.id,
				name: user.nombre,
				mail: user.mail,
				password: user.password,
			};
			console.log(payload);

			const token = generateToken(payload);
			res.cookie("token", token);

			res.status(200).send({ success: true, message: "usuario logeado" });
		} catch (error) {
			res.status(400).send({ success: false, message: error.message });
		}
	};
	me = async (req, res) => {
    console.log(req.user)
    try {
      res.status(200).send({ success: true, message: "usuario me" });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
}

  


export default UsuarioController;
