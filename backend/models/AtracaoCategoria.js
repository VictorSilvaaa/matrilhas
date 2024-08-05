const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); 
const Atracao = require('./Atracao');
const Categoria = require('./Categoria');

// Define o modelo AtracaoCategoria que representa a tabela 'atracoes_categorias'
const AtracaoCategoria = sequelize.define('AtracaoCategoria', {
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
  categoria_id: {
    type: DataTypes.INTEGER, 
    references: {
      model: Categoria,
      key: 'id' 
    },
    allowNull: false,
  },
}, {
  tableName: 'atracoes_categorias', 
  timestamps: false, 
});

module.exports = AtracaoCategoria; // Exporta o modelo para uso em outros arquivos
