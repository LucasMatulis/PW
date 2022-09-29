import { Link } from "react-router-dom";
import {useState} from 'react';
import './cadstyle.css';

function Cadastro(){

    const [nome, setNome]= useState('.....');
    const [cpf, setcpf]= useState('.....');
    const [endereco, setendereco]= useState('.....');


    const [dadosCliente, setDadosCliente]=useState({
        nomeCliente:"-----------",
        cpfCliente:"------------",
        enderecoCliente:"------------"
     })
     

    function cadastrarCliente(evento){

        


        evento.preventDefault();
        alert("Cliente cadastrado com sucesso!!!!");

        setDadosCliente({

            nomeCliente:nome,
            cpfCliente:cpf,
            enderecoCliente:endereco

        })
    }



    return(
        <div className="cadastro">
            <h1 >Pagina Cadastro</h1>
            <form onSubmit={cadastrarCliente} className="results"> 
            
            <p> Nome do cliente: </p>
            <input placeholder="Informe o nome do cliente"  valeu={nome} 
            onChange={(evento)=>setNome(evento.target.value)}>

            </input>
    

            <p> Numero do CPF: </p>
            <input placeholder="Informe o CPF do cliente"  valeu={cpf} 
            onChange={(evento)=>setcpf(evento.target.value)}>

            
            </input>
           

            <p> Endereco do cliente: </p>
            <input placeholder="Informe o endereco do cliente"  valeu={endereco} 
            onChange={(evento)=>setendereco(evento.target.value)}>

            </input>


            
            <button type="submit">Cadastrar</button>
            
            </form>
            <br></br>

            <div id= "results">

                <span>Nome do cliente: {dadosCliente.nomeCliente} </span>
                <br></br>
                <span>CPF do cliente: {dadosCliente.cpfCliente} </span>
                <br></br>
                <span>Endereço do cliente: {dadosCliente.enderecoCliente} </span>

            </div>

            
        </div>
        
    )
}

export default Cadastro;