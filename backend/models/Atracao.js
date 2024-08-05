const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); 
const Destino = require('./Destino');

// Define o modelo Atracao que representa a tabela 'atracoes'
const Atracao = sequelize.define('Atracao', {
  id: {
    type: DataTypes.INTEGER, 
    autoIncrement: true, 
    primaryKey: true, 
  },
  titulo: {
    type: DataTypes.STRING, 
    allowNull: false, 
  },
  descricao: {
    type: DataTypes.TEXT, 
  },
  bairro: {
    type: DataTypes.STRING, 
  },
  rua: {
    type: DataTypes.STRING, 
  },
  numero: {
    type: DataTypes.INTEGER, 
  },
  longitude: {
    type: DataTypes.STRING, 
  },
  latitude: {
    type: DataTypes.STRING, 
  },
  destino_id: {
    type: DataTypes.INTEGER, 
    references: {
      model: Destino, 
      key: 'id' 
    },
    allowNull: false,
  },
}, {
  tableName: 'atracoes',
  timestamps: false, 
});

module.exports = Atracao; 
