import { DataTypes as DT, Model } from "sequelize";
import connection from "../connection/connection.js";

class Peticion extends Model {}

Peticion.init(
	{
		descripcion: {
			type: DT.STRING(50),
			allowNull: false,
		},
	},
	{
		sequelize: connection,
		modelName: "Peticion",
	}
);

export default Peticion;
