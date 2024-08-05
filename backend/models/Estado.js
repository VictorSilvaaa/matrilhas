const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Importa a configuração do banco de dados

// Define o modelo Estado que representa a tabela 'estados'
const Estado = sequelize.define('Estado', {
  id: {
    type: DataTypes.INTEGER, 
    autoIncrement: true, 
    primaryKey: true, 
  },
  titulo: {
    type: DataTypes.STRING, 
    allowNull: false, 
  },
  uf: {
    type: DataTypes.STRING, 
  },
  iso: {
    type: DataTypes.STRING,
  },
  slug: {
    type: DataTypes.STRING, 
  },
}, {
  tableName: 'estados', 
  timestamps: false, 
});

module.exports = Estado; 
