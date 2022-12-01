import { Router, Request, Response } from "express";
 import {CreateUserController} from './controllers/users/CreateUserController';
 import { LerUserController } from "./controllers/users/LerUserController";
 import { CreateComandaController } from "./controllers/comandas/CreateComandaController";
import { CreateCardapioController } from "./controllers/cardapio/CreateCardapioController";
import { LerComandaController } from "./controllers/comandas/LerComandaController";
import { LerCardapioController } from "./controllers/cardapio/LerCardapioController";
import { DeleteUserController } from "./controllers/users/DeleteUserController";
import { DeleteComandaController } from "./controllers/comandas/DeleteComandaController";
import { DeleteCardapioController } from "./controllers/cardapio/DeleteCardapioController";
import { ValidarUserController } from "./controllers/users/ValidarUserController";
const router = Router();
 //Rotas USER ------------
router.post('/users',new CreateUserController().handle)
router.post('/users/ler',new LerUserController().handle)
router.post('/users/delete', new DeleteUserController().handle)
router.post('/users/validar', new ValidarUserController().handle)
router.post('/comandas', new CreateComandaController().handle)
router.post('/comandas/ler', new LerComandaController().handle)
router.post('/comandas/delete', new DeleteComandaController().handle)
router.post('/cardapio',new CreateCardapioController().handle)
router.post('/cardapio/ler', new LerCardapioController().handle)
router.post('/cardapio/delete', new DeleteCardapioController().handle)

export { router };
