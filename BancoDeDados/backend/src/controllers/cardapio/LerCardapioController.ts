import { Request, response, Response } from "express";
import { LerCardapioService } from "../../services/cardapio/LerCardapioService";
class LerCardapioController {
    async handle(req: Request, res: Response) {
        const { nomePrato} = req.body

        const lerCardapioService = new LerCardapioService();
        const user = await lerCardapioService.execute(
            {
                nomePrato
            }
        );

        return res.json(user);
    }
}
export { LerCardapioController }