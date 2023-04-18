import {Request, Response }from 'express'
import { DeleteReceiveService } from '../../services/receive/DeleteReceiveService'

class DeleteReceiveController{
  async handle(req: Request, res:Response){
    const user_id = req.user_id;
    const item_id = req.query.item_id as string;

    const deleteReceiveService = new DeleteReceiveService();

    const deleteItem = await deleteReceiveService.execute({
      item_id,
      user_id,
    })

    return res.json(deleteItem);

  }
}

export { DeleteReceiveController }