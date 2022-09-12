import { BrowserRouter,
        Routes,
        Router, 
        Route} 
        from "react-router-dom";
//
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
//criar componente de roteamento
function RouterApp(){
    return(
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>

    </Routes>
    </BrowserRouter>
    )
}
export default RouterApp;
