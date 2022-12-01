import { Request, response, Response } from "express";
import { DeleteComandaService } from "../../services/comandas/DeleteComandaService";
class DeleteComandaController {
    async handle(req: Request, res: Response) {
        const { idComanda } = req.body

        const createComandaService = new DeleteComandaService();
        const user = await createComandaService.execute(
            {
                idComanda
            }
        );

        return res.json("Comanda "+user+" deletada");
    }
}
export { DeleteComandaController }