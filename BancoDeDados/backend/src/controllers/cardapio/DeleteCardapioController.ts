import { Request, response, Response } from "express";
import { DeleteCardapioService } from "../../services/cardapio/DeleteCardapioService";
class DeleteCardapioController {
    async handle(req: Request, res: Response) {
        const { idPrato } = req.body

        const createCardapioService = new DeleteCardapioService();
        const user = await createCardapioService.execute(
            {
                idPrato
            }
        );

        return res.json("item "+user+" deletado");
    }
}
export { DeleteCardapioController }