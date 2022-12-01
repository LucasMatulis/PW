import { Request, response, Response } from "express";
import { LerComandaService } from '../../services/comandas/LerComandaService';
class LerComandaController {
    async handle(req: Request, res: Response) {
        const { numeroMesa,idUser,pedido} = req.body

        const lerComandaService = new LerComandaService();
        const user = await lerComandaService.execute(
            {
                numeroMesa,idUser,pedido
            }
        );

        return res.json(user);
    }
}
export { LerComandaController }