import { Link } from "react-router-dom";
import {useState} from 'react';

function ContaCorrente(){


    const [deposito, setDeposito]= useState(0);
    const [saque, setSaque]= useState(0);
    const [saldo, setSaldo]= useState(0);


    function add_sub(evento){

        evento.preventDefault();
        alert("Ação feita com sucesso!!!")

        console.log(deposito);
        console.log(saldo);




        setSaldo(parseInt(saldo)+parseInt(deposito)-parseInt(saque));

    }



    return(
        <div className="contaCorrente">
            <h1 align='center'>Conta Corrente</h1>

            <form onSubmit={add_sub}>

            <p>Deposito: </p>
            <input 
            placeholder="-----"
            onChange={(evento)=>setDeposito(evento.target.value)}>

            </input>

            <p>Saque: </p>
            <input
            placeholder="-----" 
            onChange={(evento)=>setSaque(evento.target.value)}>

            </input>

            <button type="submit">Fazer ação</button>

            </form>

             <div id = "Saldo">

                <span>Saldo atual: {saldo} </span>

            </div>



        </div>
    )
}

export default ContaCorrente;