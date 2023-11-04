import { Usuario, Libro, Intercambio } from "../models/relaciones.js";
class IntercambioController {
	constructor() {}
	getAllIntercambios = (req, res) => {
		res.send("Intercambios");
	};
	getIntercambioById = async (req, res) => {
		try {
			const { id } = req.params;
			const user = await Libro.findOne({
				where: { id },
				attributes: ["id"],
				
			});

			if (!user) throw new Error("no hay Intercambio");

			res.status(200).send({
				success: true,
				message: "Intercambio encontrado",
				data: user,
			});
		} catch (error) {
			res.status(400).send({ success: false, message: error.message });
		}
	};
	createIntercambio = async (req, res) => {
		try {
			const { miLibro, suLibro, usuarioAlQueLeIntercambio, usuarioId } = req.body;
			const user = await Intercambio.create({
				miLibro,
				suLibro,
				usuarioAlQueLeIntercambio,
				usuarioId,
			});
			res.status(200).send({
				success: true,
				message: "Intercambio creado con exito",
				data: user,
			});
		} catch (error) {
			res.status(400).send({ success: false, message: error.message });
		}
	};
	updateIntercambio = (req, res) => {
		res.send("Intercambio actualizado");
	};
	deleteIntercambio = (req, res) => {
		res.send("Intercambio eliminado");
	};
}

export default IntercambioController;
