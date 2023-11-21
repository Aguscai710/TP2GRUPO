import { Usuario, Libro } from "../models/relaciones.js";

class LibroController {
	constructor() {}
	getAllLibros = async (req, res) => {
		try {
			const libros = await Libro.findAll({ attributes: ["id","titulo","autor","descripcion","genero","imagen"],
		include:[{model:Usuario,attributes:["nombre","id"]}] });




		
		
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
	updateLibro = async (req, res) => {
		try {
		  const { titulo } = req.body;
		  const { descripcion } = req.body;
		  const { autor } = req.body;
		  const { genero } = req.body;
		  const { imagen } = req.body;
		  const { usuarioid } = req.body;
		  const { id } = req.params;
		  const libro = await Libro.update(
			{titulo,descripcion,genero,autor,imagen,usuarioid},
			{
			  where: { id },
			}
		  );
		  if (libro[0] === 0) throw new Error("no se modifico nada");
		  res.status(200).send({ success: true, message: "libro modificado" });
		} catch (error) {
		  res.status(400).send({ success: false, message: error.message });
		}
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
