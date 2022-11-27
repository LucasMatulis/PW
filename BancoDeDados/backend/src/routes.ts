import { Router, Request, Response } from "express";
 import {CreateUserController} from './controllers/users/CreateUserController';
const router = Router();
 //Rotas USER ------------
router.post('/users',new CreateUserController().handle)
export { router };
