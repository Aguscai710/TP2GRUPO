import { Peticion } from "../models/relaciones.js";

class PeticionController {
	constructor() {}
	getAllPeticiones = (req, res) => {
		res.send("Peticiones");
	};
	getPeticionById = async (req, res) => {
		try {
			const { id } = req.params;
			const pet = await Peticion.findOne({
				where: { id },
				attributes: ["id"],
			});

			if (!user) throw new Error("no hay Peticion");

			res.status(200).send({
				success: true,
				message: "Peticion encontrada",
				data: pet,
			});
		} catch (error) {
			res.status(400).send({ success: false, message: error.message });
		}
	};
	createPeticion = async (req, res) => {
		try {
			const { usuario, libro} = req.body;
			const pet = await Peticion.create({ usuario, libro });
			res.status(200).send({
				success: true,
				message: "Peticion creada con exito",
				data: pet,
			});
		} catch (error) {
			res.status(400).send({ success: false, message: error.message });
		}
	};
	updatePeticion = (req, res) => {
		res.send("Peticion actualizada");
	};
	deletePeticion = (req, res) => {
		res.send("Peticion eliminada");
	};
}

export default PeticionController;
