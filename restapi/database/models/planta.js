'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Planta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Planta.init({
    nombre_comun: DataTypes.STRING,
    nombre_cientifico: DataTypes.STRING,
    descripcion: DataTypes.TEXT,
    imagen: {
  	type: DataTypes.TEXT
    }
  }, {
    sequelize,
    modelName: 'Planta',
  });
  return Planta;
};
