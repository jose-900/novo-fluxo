import {Request, Response }from 'express'
import { ListReceivesService } from '../../services/receive/ListReceivesService'

class ListReceivesController{
  async handle(req: Request, res:Response){
    const date = req.query.date as string;
    const user_id = req.user_id;

    const listReceivesService = new ListReceivesService();

    const user = await listReceivesService.execute({
      user_id,
      date
    })

    return res.json(user);

  }
}

export { ListReceivesController }