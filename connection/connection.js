import { Sequelize } from "sequelize";

const database = "bookxchange";
const username = "root";
const password = ""; //para windows dejar vacio
const dialect = "mysql";
const host = "localhost";
const port = 3306;

const connection = new Sequelize(database, username, "", {
	host,
	dialect /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
	port,
});

try {
	await connection.authenticate();
	console.log("Connection has been established successfully.");
} catch (error) {
	console.error("Unable to connect to the database:", error);
}

export default connection;
