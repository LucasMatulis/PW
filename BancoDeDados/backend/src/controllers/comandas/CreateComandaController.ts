import { Request, response, Response } from "express";
import { CreateComandaService } from '../../services/comandas/CreateComandaService';
class CreateComandaController {
    async handle(req: Request, res: Response) {
        const { numeroMesa, pedido, idUser } = req.body

        const createComandaService = new CreateComandaService();
        const comanda = await createComandaService.execute(
            {
                numeroMesa,pedido,idUser
            }
        );

        return res.json(comanda);
    }
}
export { CreateComandaController }