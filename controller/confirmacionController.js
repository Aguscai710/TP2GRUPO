import { Confirmacion } from "../models/relaciones.js";

class ConfirmacionController {
	constructor() {}
	getAllConfirmaciones = (req, res) => {
		res.send("Confirmaciones");
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
		res.send("Confirmacion eliminada");
	};
}

export default ConfirmacionController;
