const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define("Country", {
		id: {
			type: DataTypes.STRING(3),
			allowNull: false,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		flag: {
			// type: DataTypes.BLOB("long"),
			type: DataTypes.STRING,
			allowNull: false
		},
		continents: {
			type: DataTypes.STRING,
			allowNull: false
		},
		capital: {
			type: DataTypes.STRING,
			allowNull: true
		},
		subregion: {
			type: DataTypes.STRING,
			allowNull: true
		},
		area: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		population: {
			type: DataTypes.INTEGER,
			allowNull: false
		}
	}),
		{
			timestamps: false
		};
};
