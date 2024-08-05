const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Importa a configuração do banco de dados

// Define o modelo Estabelecimento que representa a tabela 'estabelecimentos'
const Estabelecimento = sequelize.define('Estabelecimento', {
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
  icone: {
    type: DataTypes.STRING, 
  },
}, {
  tableName: 'estabelecimentos',
  timestamps: false, 
});

module.exports = Estabelecimento;
