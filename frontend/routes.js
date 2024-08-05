import HomeController from './controllers/HomeController.js';
import DestinoController from './controllers/DestinoController.js';
import AtracaoController from './controllers/AtracaoController.js';

const routes = (app) => {
  app.get('/', HomeController.index);
  app.get('/destinos/:id/atracoes', DestinoController.index);
  app.get('/atracoes/:id', AtracaoController.index);
};

export default routes;
