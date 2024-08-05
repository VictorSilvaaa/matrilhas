const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); 
const Atracao = require('./Atracao');
const Estabelecimento = require('./Estabelecimento');

// Define o modelo AtracaoEstabelecimento que representa a tabela 'atracoes_estabelecimentos'
const AtracaoEstabelecimento = sequelize.define('AtracaoEstabelecimento', {
  id: {
    type: DataTypes.INTEGER, 
    autoIncrement: true, 
    primaryKey: true, 
  },
  atracao_id: {
    type: DataTypes.INTEGER, 
    references: {
      model: Atracao, 
      key: 'id' 
    },
    allowNull: false, 
  },
  estabelecimento_id: {
    type: DataTypes.INTEGER, 
    references: {
      model: Estabelecimento, 
      key: 'id' 
    },
    allowNull: false, 
  },
}, {
  tableName: 'atracoes_estabelecimentos', 
  timestamps: false, 
});

module.exports = AtracaoEstabelecimento; 
