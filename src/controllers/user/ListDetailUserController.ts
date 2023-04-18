import {Request, Response }from 'express'
import { ListDetailUserService } from '../../services/user/ListDetailUserService'

class ListDetailUserController{
  async handle(req: Request, res:Response){
   const user_id = req.user_id;

    const listDetailUserService = new ListDetailUserService();

    const user = await listDetailUserService.execute(user_id)
    
   return res.json(user);

  }
}

export { ListDetailUserController }