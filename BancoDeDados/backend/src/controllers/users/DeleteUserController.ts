import { Request, response, Response } from "express";
import { DeleteUserService } from "../../services/user/DeleteUserService";
class DeleteUserController {
    async handle(req: Request, res: Response) {
        const { id } = req.body

        const createUserService = new DeleteUserService();
        const user = await createUserService.execute(
            {
                id
            }
        );

        return res.json("Usuario "+user+" deletado");
    }
}
export { DeleteUserController }
