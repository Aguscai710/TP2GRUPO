import { DataTypes as DT, Model } from "sequelize";
import connection from "../connection/connection.js";

class Estadistica extends Model {}

Estadistica.init(
	{
		aceptados: {
			type: DT.INTEGER,
			allowNull: false,
		},
		rechazados: {
			type: DT.INTEGER,
			allowNull: false,
		},
	},
	{
		sequelize: connection,
		modelName: "Estadistica",
	}
);

export default Estadistica;
