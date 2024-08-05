import express from 'express';
import path from 'path';
import routes from './routes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Configura o diretório das views para resources/views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'resources', 'views')); 

app.use(express.static(path.join(__dirname, 'resources')));

app.use(express.json());
routes(app);

const startServer = async (): Promise<void> => {
  try {
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Servidor rodando na porta ${port}`);
    });
  } catch (error) {
    console.error('Ocorreu um erro ao rodar a aplicação:', error);
  }
};

startServer();
