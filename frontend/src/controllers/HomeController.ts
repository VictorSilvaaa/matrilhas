import { Request, Response } from 'express';

export default class HomeController {
  static async index(req: Request, res: Response): Promise<void> {
    res.render('home');
  }
}
