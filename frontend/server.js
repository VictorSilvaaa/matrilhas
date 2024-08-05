import express from 'express';
import routes from './routes.js';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.static('public'));
routes(app);

const startServer = async () => {
  try {
    app.listen(process.env.PORT, () => {
      console.log(`Servidor rodando na porta ${process.env.PORT}`);
    });
  } catch (error) {
    console.error('Errou um erro ao rodar aplicação:', error);
  }
};

startServer();
