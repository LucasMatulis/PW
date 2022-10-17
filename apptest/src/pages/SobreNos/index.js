import { Link } from "react-router-dom";
import { Style } from './stylesobrenos.css';
import Imge from "./rei.jpg";

function SobreNos(){



    return(
        <div id="sobrenos">

            <h1 align='center'>Sobre nós</h1>

            <img class="rei" src={Imge} aling="left"/>

            <br>
            </br>


            <br>
            </br>

            <p>
                Nós somos o Cartão vermelho, o maior banco de todos os tempos, criado em 1800 A.C, focamos na maior
                 satisfação profissional e materna para nossos clientes ou clientxs, criado pelo nosso fundador, Jacinto Rego Roxo IV rei 
                 da grécia e inventor do beijo grego, junto com suas 
                comcubinas que ajudaram a criar esse famoso banco, na qual utilizamos até hoe, eu sou do cartão vermelho
             </p>
        </div>
    )
}

export default SobreNos;