const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');
const routes = require('./routes/index');
require('dotenv').config(); 

const app = express();
const path = require('path');
app.use(cors());
app.use(express.json());
app.use(routes);
app.use(express.static('public'));

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conectado ao banco de dados PostgreSQL');
    app.listen(process.env.PORT, () => {
      console.log(`Servidor rodando na porta ${process.env.PORT}`);
    });
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  }
};

startServer();
