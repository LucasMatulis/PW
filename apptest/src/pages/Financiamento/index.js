import { Link } from "react-router-dom";
import {useState} from 'react';
import './stylefinanciamento.css';

function Financiamento(){

    const [valor, setValor]=useState(0);
    const [valorCliente, setValorCliente]=useState(0);

    function financiar(evento){

        


        evento.preventDefault();
        alert("Financiamento completo");

        setValor(valorCliente)
    }



return(

    
        <div class="geral">
            <h1>Simulação de Financiamento</h1>

            <p>Nome do cliente: xxxxxxxxxxxxxxxxxx</p>

            <form onSubmit={financiar}>

            <p className="valorsolicitado"> Valor solicitado: </p>
            <input className="valorinput" placeholder="xxxxxxxxx"  
            onChange={(evento)=>setValorCliente(evento.target.value)}></input>

            <br></br>

            <button class='bt'  type="submit">Calcular Financiamento</button>

   

            <div>

            <br></br>

            <h2>Calculo do financiamento</h2>

            <br></br>


            <div className="centerParcelas">

            <span>Valor solicitado : {valor}</span>
            <br></br>
            <span>Taxas de juros : 99,99% </span>

            </div>

            <br></br>



            <div class="leftParcelas">

            <span>2x Parcelas de : {parseInt(valor)/2} </span>
            <br></br>
            <span>3x Parcelas de : {parseInt(valor)/3} </span>
            <br></br>
            <span>4x Parcelas de : {parseInt(valor)/4} </span>
            <br></br>

            </div>
            <br></br>

            <div className="rightTotalPago">

            <span>Total Pago : {valor} </span>
            <br></br>
            <span>Total Pago : {valor} </span>
            <br></br>
            <span>Total Pago : {valor} </span>
            <br></br>

            </div>
            
            





            </div>


            </form>
            

        </div>

        

);


}

export default Financiamento;