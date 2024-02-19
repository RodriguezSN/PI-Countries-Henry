const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
	sequelize.define("Activity", {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		dificult: {
			type: DataTypes.INTEGER,
			allowNull: false,
			validate: {
				max: 5,
				min: 1
			}
		},
		duration: {
			type: DataTypes.TIME
		},
		season: {
			type: DataTypes.ENUM,
			values: ["Verano", "Otoño", "Invierno", "Primavera"]
		}
	}),
		{
			timestamps: false
		};
};
