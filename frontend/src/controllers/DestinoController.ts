import { Request, Response } from 'express';

export default class DestinoController {
  static async index(req: Request, res: Response): Promise<void> {
    const id: string = req.params.id;
    res.render('destino', { id });
  }
}
