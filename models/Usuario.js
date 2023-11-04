import { DataTypes as DT, Model } from "sequelize";
import connection from "../connection/connection.js";

class Usuario extends Model {}

Usuario.init(
	{
		nombre: {
			type: DT.STRING(50),
			allowNull: false,
		},
		password: {
			type: DT.STRING(50),
			allowNull: false,
		},
		mail: {
			type: DT.STRING(50),
			allowNull: false,
			validate: {
				isEmail: true,
			},
		},
		telefono: {
			type: DT.INTEGER,
			allowNull: false,
			validate: {
				isInt: true
			},
		},
		
	},
	{
		sequelize: connection,
		modelName: "Usuario",
	}
);

export default Usuario;
