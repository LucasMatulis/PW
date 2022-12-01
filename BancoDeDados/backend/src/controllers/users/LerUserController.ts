import { Request, response, Response } from "express";
import { LerUserService } from '../../services/user/LerUserService';
class LerUserController {
    async handle(req: Request, res: Response) {
        const { nmuser,id} = req.body

        const lerUserService = new LerUserService();
        const user = await lerUserService.execute(
            {
                nmuser,id
            }
        );

        return res.json(user);
    }
}
export { LerUserController }