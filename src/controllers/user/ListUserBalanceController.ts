import {Request, Response }from 'express'
import { ListUserBalanceService } from '../../services/user/ListUserBalanceService'

class ListUserBalanceController{
  async handle(req: Request, res:Response){
    const user_id = req.user_id;
    const date = req.query.date as string;

    const listUserBalanceService = new ListUserBalanceService();

    const detail = await listUserBalanceService.execute({
      user_id,
      date,
    })
    
    return res.json(detail);

  }
}

export { ListUserBalanceController }