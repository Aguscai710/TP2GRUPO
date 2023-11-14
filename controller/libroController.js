import { Usuario, Libro } from "../models/relaciones.js";

class LibroController {
	constructor() {}
	getAllLibros = (req, res) => {
		try {
			const libros = Libro.findAll({ attributes: ["id"] });
			res.status(200).send({
				success: true,
				message: "Todos los libros que hay",
				data: libros,
			});
		} catch (error) {
			res.status(400).send({ success: false, message: error.message });
		}
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
		try {
			const { id } = req.params;
			const libro = Libro.destroy({
				where: { id },
			});
			if (!libro) throw new Error("no se elimino nada");
			res.status(200).send({ success: true, message: "libro eliminado", data: libro });
		} catch (error) {
			res.status(400).send({ success: false, message: error.message });
		}
	};
}

export default LibroController;
