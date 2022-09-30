
import { Link } from "react-router-dom";
import './style.css';
import Img from "./CV.png";





function Header(){



    return(
        
      
        <header>
            
        <img class="logoheader" src={Img}/>
           Seja  Bem vindo ao Cartão Vermelho
            
            
        <div className="menu">
            <br/> <Link to ='/'>Home</Link> 
             <Link to ='/cadastro'>Cadastro</Link> 
             <Link to ='/contacorrente'>Conta corrente</Link>
             <Link to ='/financiamento'>Financiamento</Link>  
            <Link to ='/sobrenos'>Sobre nós</Link>
        </div>
        </header>
    )
}

export default Header;