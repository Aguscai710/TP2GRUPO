import { Confirmacion,Usuario,Libro } from "../models/relaciones.js";

class ConfirmacionController {
	constructor() {}
	getAllConfirmaciones = async (req, res) => {
		try {
			const confirmaciones = await Confirmacion.findAll({
				attributes: ["id"],
				include: [
					{ model: Libro, attributes: ["titulo", "id"] },
					{ model: Usuario, attributes: ["nombre", "id"] },
				],
			});
			res.status(200).send({
				success: true,
				message: "Todas las confirmaciones que hay",
				data: confirmaciones,
			});
		} catch (error) {
			res.status(400).send({ success: false, message: error.message });
		}
	};
	getConfirmacionById = async (req, res) => {
		try {
			const { id } = req.params;
			const conf = await Confirmacion.findOne({
				where: { id },
				attributes: ["id"],
				include: [
					{ model: Usuario, attributes: ["nombre"] },
					{ model: Libro, attributes: ["titulo"] },
				],
			});	

			if (!conf) throw new Error("no hay Confirmacion");

			res.status(200).send({
				success: true,
				message: "Confirmacion encontrada",
				data: conf,
			});
		} catch (error) {
			res.status(400).send({ success: false, message: error.message });
		}
	};
	createConfirmacion = async (req, res) => {
		try {
			const {descripcion, usuarioid, libroid} = req.body;
			const conf = await Confirmacion.create({ descripcion,usuarioid, libroid});
			res.status(200).send({
				success: true,
				message: "Confirmacion creada con exito",
				data: conf,
			});
		} catch (error) {
			res.status(400).send({ success: false, message: error.message });
		}
	};
	updateConfirmacion = (req, res) => {
		res.send("Confirmacion actualizada");
	};
	deleteConfirmacion = (req, res) => {
		try {
			const { id } = req.params;
			const confirmacion = Confirmacion.destroy({
				where: { id },
			});
			if (!confirmacion) throw new Error("no se elimino nada");
			res.status(200).send({ success: true, message: "confirmacion eliminada", data: confirmacion });
		} catch (error) {
			res.status(400).send({ success: false, message: error.message });
		}
	};
}

export default ConfirmacionController;
