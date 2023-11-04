import { DataTypes as DT, Model } from "sequelize";
import connection from "../connection/connection.js";

class Confirmacion extends Model {}

Confirmacion.init(
	{
		descripcion: {
			type: DT.STRING(50),
			allowNull: false,
		},
	},
	{
		sequelize: connection,
		modelName: "Confirmacion",
	}
);

export default Confirmacion;
