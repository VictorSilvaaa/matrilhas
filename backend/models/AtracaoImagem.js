const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Importa a configuração do banco de dados
const Atracao = require('./Atracao');

// Define o modelo AtracaoImagem que representa a tabela 'atracoes_imagens'
const AtracaoImagem = sequelize.define('AtracaoImagem', {
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
  imagem: {
    type: DataTypes.STRING, 
    allowNull: false, 
  },
}, {
  tableName: 'atracoes_imagens', 
  timestamps: false,
});

module.exports = AtracaoImagem;
