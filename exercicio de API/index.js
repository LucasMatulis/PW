const express = require('express');
const server = express();
server.use(express.json());
// http://localhost:3000/curso

const usuarios = {
    'usuarios': ["user1","user2","user3","user4","user5","user6"],
    'senha': ["123","456","789","012","345","678"],
}
var Logado=false;
var senhaValida=false;


server.get("/curso/:index", (req, res)=>{
    var {tentativaUsuario} = req.body;
    var {tentativaSenha}= req.body;
    const { index } = req.params;


        if(tentativaUsuario===usuarios.usuarios[index]){
            Logado=true;

            if(tentativaSenha===usuarios.senha[index]){
                senhaValida=true;
            }
        }

    if(Logado && senhaValida){

        return res.json("usuário OK");
    }
    else{
       if(!Logado){

        if(tentativaUsuario==="")
            return res.json("Usuario não informado");
        else
            return res.json("usuário não Cadastrado no BD");
       }
       else if(!senhaValida){

        if(tentativaSenha==="")
            return res.json("Senha não informada");
        else
            return res.json("Senha Inválida");
       }
    }

    var Logado=false;
    var senhaValida=false;
 })
 

server.listen(3000);
