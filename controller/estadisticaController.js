import { Estadistica } from "../models/relaciones.js";
class EstadisticaController {
	constructor() {}
	getEstadisticaById = async (req, res) => {
		try {
			const { id } = req.params;
			const estadistica = await Estadistica.findOne({
				where: { id },
				attributes: ["aceptados", "rechazados"],
				
			});

			if (!estadistica) throw new Error("no hay Estadistica");

			res.status(200).send({
				success: true,
				message: "Estadistica encontrada",
				data: estadistica,
			});
		} catch (error) {
			res.status(400).send({ success: false, message: error.message });
		}
	};
	updateEstadistica = async (req, res) => {
		try {
			const { aceptados } = req.body;
			const { rechazados } = req.body;
			const { id } = req.params;

			const estadistica = await Estadistica.update(
				{ aceptados, rechazados },
				{
					where: { id },
				}
			);
			if (estadistica[0] === 0) throw new Error("no se modifico nada");
			res.status(200).send({ success: true, message: "estadistica modificada" });
		} catch (error) {
			res.status(400).send({ success: false, message: error.message });
		}
	};
	deleteEstadistica = (req, res) => {
		try {
			const { id } = req.params;
			const estadistica = Estadistica.destroy({
				where: { id },
			});
			if (!estadistica) throw new Error("no se elimino nada");
			res.status(200).send({ success: true, message: "estadistica eliminada", data: estadistica });
		} catch (error) {
			res.status(400).send({ success: false, message: error.message });
		}
	};

	createEstadistica = async (req, res) => {
		try {
			const { aceptados, rechazados } = req.body;
			const est = await Estadistica.create({ aceptados, rechazados });
			res.status(200).send({
				success: true,
				message: "Estadistica creada con exito",
				data: est,
			});
		} catch (error) {
			res.status(400).send({ success: false, message: error.message });
		}
	};
}

export default EstadisticaController;
