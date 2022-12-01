import { Request, response, Response } from "express";
import { CreateCardapioService } from "../../services/cardapio/CreateCardapioService";
class CreateCardapioController {
    async handle(req: Request, res: Response) {
        const { nomePrato} = req.body

        const createCardapioService = new CreateCardapioService();
        const comanda = await createCardapioService.execute(
            {
                nomePrato
            }
        );

        return res.json(comanda);
    }
}
export { CreateCardapioController }