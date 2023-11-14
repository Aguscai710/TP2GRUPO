import { Peticion,Usuario,Libro } from "../models/relaciones.js";

class PeticionController {
	constructor() {}
	getAllPeticiones = (req, res) => {
		try {
			const peticiones =  Peticion.findAll({ attributes: ["id"] });
			res.status(200).send({
				success: true,
				message: "Todas las peticiones que hay",
				data: peticiones,
			});
		} catch (error) {
			res.status(400).send({ success: false, message: error.message });
		}
	};
	getPeticionById = async (req, res) => {
		try {
			const { id } = req.params;
			const pet = await Peticion.findOne({
				where: { id },
				attributes: ["id"],
				include:[{model:Libro, attributes:["titulo"]}]
			});

			if (!pet) throw new Error("no hay Peticion");

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
			const { descripcion,usuarioid, libroid} = req.body;
			const pet = await Peticion.create({ descripcion,usuarioid, libroid });
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
		try {
			const { id } = req.params;
			const peticion = Peticion.destroy({
				where: { id },
			});
			if (!peticion) throw new Error("no se elimino nada");
			res.status(200).send({ success: true, message: "peticion eliminado", data: peticion });
		} catch (error) {
			res.status(400).send({ success: false, message: error.message });
		}
	};
}

export default PeticionController;
