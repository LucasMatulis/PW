import { Request, response, Response } from "express";
import { ValidarUserService } from "../../services/user/ValidarUserService";
class ValidarUserController {
    async handle(req: Request, res: Response) {
        const { nmuser, senha, perfil } = req.body

        const validarUserService = new ValidarUserService();
        const user = await validarUserService.execute(
            {
                nmuser, senha, perfil
            }
        );

        if(user)
        return res.json(user);
        else
        return res.json("Usuario invalido");

        
    }
}
export { ValidarUserController }
