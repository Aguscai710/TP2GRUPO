import { Usuario, Libro } from "../models/relaciones.js";

class LibroController {
	constructor() {}
	getAllLibros = (req, res) => {
		res.send("Libros");
	};
	getLibroById = async (req, res) => {
		try {
			const { id } = req.params;
			const user = await Libro.findOne({
				where: { id },
				attributes: ["id", "titulo"],
				include: [{ model: Usuario,attributes:["nombre"]}]
			});

			if (!user) throw new Error("no hay Libro");

			res.status(200).send({
				success: true,
				message: "Libro encontrado",
				data: user,
			});
		} catch (error) {
			res.status(400).send({ success: false, message: error.message });
		}
	};
	createLibro = async (req, res) => {
		try {
			const { titulo, descripcion, genero, autor, imagen, usuarioid } = req.body;
			const user = await Libro.create({
				titulo,
				descripcion,
				genero,
				autor,
				imagen,
				usuarioid,
			});
			res.status(200).send({
				success: true,
				message: "Libro creado con exito",
				data: user,
			});
		} catch (error) {
			res.status(400).send({ success: false, message: error.message });
		}
	};
	updateLibro = (req, res) => {
		res.send("Libro actualizado");
	};
	deleteLibro = (req, res) => {
		res.send("Libro eliminado");
	};
}

export default LibroController;
