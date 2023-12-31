'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Agendamento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Agendamento.init({
    data: DataTypes.DATEONLY,
    hora: DataTypes.TIME,
    cpf: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Agendamento',
  });
  return Agendamento;
};