import Libro from "./Libro.js"
import Usuario from "./Usuario.js"
import Intercambio from "./Intercambio.js"
import Peticion from "./Peticion.js"
import Confirmacion from "./Confirmacion.js"

Libro.hasMany(Usuario,{
    foreignKey:"libroid"
})//Usuario tiene muchos libros

Usuario.hasOne(Libro,{
    foreignKey:"usuarioId"
})//Libro tiene 1 solo usuario


Peticion.hasMany(Usuario,{
    foreignKey:"peticionId"
})//Usuario tiene muchas peticiones

Confirmacion.hasMany(Usuario,{
    foreignKey:"confirmacionId"
})//Usuario tiene muchas confirmaciones

Intercambio.hasMany(Usuario,{
    foreignKey:"intercambioId"
})//Usuario tiene muchos intercambios


Usuario.hasOne(Peticion, {
	foreignKey: "usuarioId",
});//Peticion tiene un usuario

Libro.hasOne(Peticion, {
	foreignKey: "libroId",
});//Peticion tiene un libro

Usuario.hasOne(Confirmacion, {
	foreignKey: "usuarioId",
});//Confirmacion tiene un usuario

Libro.hasOne(Confirmacion, {
	foreignKey: "libroId",
});//Confirmacion tiene un libro


Usuario.hasOne(Intercambio,{
    foreignKey:"usuarioId"
})//Intercambio tiene un usuario

Libro.hasMany(Intercambio,{
    foreignKey:"libroId"
})//Intercambio tiene dos libros


export {Libro,Usuario,Intercambio,Peticion,Confirmacion}