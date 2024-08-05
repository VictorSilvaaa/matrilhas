const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Importa a configuração do banco de dados
const Destino = require('./Destino');

// Define o modelo DestinoImagem que representa a tabela 'destinos_imagens'
const DestinoImagem = sequelize.define('DestinoImagem', {
  id: {
    type: DataTypes.INTEGER, 
    autoIncrement: true, 
    primaryKey: true, 
  },
  destino_id: {
    type: DataTypes.INTEGER, 
    references: {
      model: Destino,
      key: 'id' 
    },
    allowNull: false, 
  },
  imagem: {
    type: DataTypes.STRING, 
    allowNull: false, 
  },
}, {
  tableName: 'destinos_imagens', 
  timestamps: false, 
});

module.exports = DestinoImagem; 
