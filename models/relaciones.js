import Libro from "./Libro.js"
import Usuario from "./Usuario.js"
import Peticion from "./Peticion.js"
import Confirmacion from "./Confirmacion.js"

Usuario.hasMany(Libro,{
    foreignKey:"usuarioid"
})//Usuario tiene muchos libros

Libro.belongsTo(Usuario,{
    foreignKey:"usuarioid"
})//Libro tiene 1 solo usuario


Usuario.hasMany(Peticion, {
	foreignKey: "usuarioid",
});//Usuario tiene muchas peticiones

Peticion.belongsTo(Usuario, {
	foreignKey: "usuarioid",
});//Peticion pertenece a  un usuario

Usuario.hasMany(Confirmacion,{
    foreignKey:"usuarioid"
})//Usuario tiene muchas confirmaciones

Confirmacion.belongsTo(Usuario, {
	foreignKey: "usuarioid",
});//Confirmacion tiene un usuario


Libro.hasMany(Peticion, {
	foreignKey: "libroid",
});//Peticion tiene un libro

Peticion.belongsTo(Libro, {
	foreignKey: "libroid",
});//Peticion tiene un libro

Libro.hasMany(Confirmacion, {
	foreignKey: "libroid",
});//Peticion tiene un libro

Confirmacion.belongsTo(Libro, {
	foreignKey: "libroid",
});//Peticion tiene un libro



export {Libro,Usuario,Peticion,Confirmacion}