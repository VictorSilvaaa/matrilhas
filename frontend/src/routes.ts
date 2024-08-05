import express, { Request, Response } from 'express';
import HomeController from './controllers/HomeController';
import DestinoController from './controllers/DestinoController';
import AtracaoController from './controllers/AtracaoController';

type RoutesFunction = (app: express.Application) => void;

const routes: RoutesFunction = (app) => {
  app.get('/', (req: Request, res: Response) => HomeController.index(req, res));
  app.get('/destinos/:id/atracoes', (req: Request, res: Response) => DestinoController.index(req, res));
  app.get('/atracoes/:id', (req: Request, res: Response) => AtracaoController.index(req, res));
};

export default routes;
