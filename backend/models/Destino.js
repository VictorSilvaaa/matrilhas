const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Importa a configuração do banco de dados
const Estado = require('./Estado');

// Define o modelo Destino que representa a tabela 'destinos'
const Destino = sequelize.define('Destino', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true, 
    primaryKey: true, 
  },
  estado_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Estado,
      key: 'id' 
    },
    allowNull: false, 
  },
  titulo: {
    type: DataTypes.STRING, 
    allowNull: false, 
  },
  slug: {
    type: DataTypes.STRING,
  },
  descricao: {
    type: DataTypes.TEXT,
  },
  latitude: {
    type: DataTypes.STRING, 
  },
  longitude: {
    type: DataTypes.STRING,
  },
}, {
  tableName: 'destinos', 
  timestamps: false, 
});

module.exports = Destino;
