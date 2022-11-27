import express, { Request, Response, NextFunction } from"express";
import'express-async-errors'; //sempre no segundo import

import cors from'cors';

import{ router } from'./routes';
const app = express();
app.use(express.json()); //utilizando JSON
app.use(cors());
app.use(router);
/*
*  tratando erro
*IMPORTANTE: todas as rotas passam por este "middleware"
*/
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
if (err instanceof Error) {
//se for uma instância do tipo error
return res.status(400).json({
error:err.message
        })
    }
return res.status(500).json({
status:'error',
message:'InternalserverError.'
    })
})

app.listen(3333, () =>console.log("servidor online!"));



