const express = require('express');
const server = express();


        const usuarios = {
                'usuarios': ["user1","user2","user3","user4","user5","user6"],
                'senha': ["123","456","789","012","345","678"],
        }

var tentativaUsuario="asdads";
var tentativaSenha="asdasd";
var Logado=false;
var senhaValida=false;


//...localhost:3000/curso
server.get("/curso", ()=>{

    for(var i=0;i<usuarios.usuarios.length;i++){
        if(tentativaUsuario===usuarios.usuarios[i]){
            Logado=true;

            if(tentativaSenha===usuarios.senha[i]){
                senhaValida=true;
            }
        }
    }

    if(Logado && senhaValida){

        console.log("usuário OK")
    }
    else{
       if(!Logado){
        console.log("usuário não Cadastrado no BD");
       }
       else if(!senhaValida){
        console.log("Senha Inválida");
       }
    }

 })
 




server.listen(3000);
