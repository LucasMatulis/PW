import { Link } from "react-router-dom";
import style from './style.css';

function Header(){



    return(

        <header>
            Bem vindo a nossa empresa
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