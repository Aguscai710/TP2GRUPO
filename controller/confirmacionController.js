import { Confirmacion } from "../models/relaciones.js";

class ConfirmacionController {
	constructor() {}
	getAllConfirmaciones = (req, res) => {
		try {
			const confirmaciones = Confirmacion.findAll({ attributes: ["id"] });
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
			});

			if (!user) throw new Error("no hay Confirmacion");

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
			const { usuario, libro} = req.body;
			const conf = await Confirmacion.create({ usuario, libro});
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
