const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Importa a configuração do banco de dados

// Define o modelo Categoria que representa a tabela 'categorias'
const Categoria = sequelize.define('Categoria', {
  id: {
    type: DataTypes.INTEGER, 
    autoIncrement: true, 
    primaryKey: true, 
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false, 
  },
  slug: {
    type: DataTypes.STRING, 
  },
}, {
  tableName: 'categorias', 
  timestamps: false, 
});

module.exports = Categoria; // Exporta o modelo para uso em outros arquivos
