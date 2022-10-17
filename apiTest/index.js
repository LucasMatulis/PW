const express = require('express');
const server = express();
server.use(express.json());
/*    
http://localhost:3000/cursos
Tratando Request BODY = {nome:’NodeJS’, tipoCurso:’presencial’}
*/
const cursos = ['Novo POO', 'Lógica de Prog', 'PI-III']
//Rota para EXCLUIR algum curso
server.delete("/cursos/:index", (req, res) => {
    const { index } = req.params;
    cursos.splice(index,1);
    return res.json({message:"Curso deletado com Sucesso!!"});
})
//Rota para Alterar 9Atualizar) curso
server.put("/cursos/:index", (req, res) => {
    const { index } = req.params;
    const { novoNome} = req.body;
    cursos[index]=novoNome;
    return res.json(cursos);
})
//Rota para criar novo curso
server.post("/cursos", (req, res) => {
    const { nomeDoCurso } = req.body;
    cursos.push(nomeDoCurso);
    return res.json(cursos);
})
//Rota para retornar TODOS os cursos
server.get("/cursos", (req, res) => {
    const { index } = req.params;

    return res.json(cursos);
})
//Rota para retornar um único  curso
server.get("/cursos/:index", (req, res) => {
    const { index } = req.params;

    return res.json(cursos[index]);
})




