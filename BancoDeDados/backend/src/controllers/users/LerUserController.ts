import { Request, response, Response } from "express";
import { LerUserService } from '../../services/user/LerUserService';
class LerUserController {
    async handle(req: Request, res: Response) {
        const { nmuser} = req.body

        const lerUserService = new LerUserService();
        const user = await lerUserService.execute(
            {
                nmuser
            }
        );

        return res.json(user);
    }
}
export { LerUserController }