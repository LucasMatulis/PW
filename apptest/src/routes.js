import { BrowserRouter,
        Routes,
        Router, 
        Route} 
        from "react-router-dom";
//
import Home from './pages/Home';
//criar componente de roteamento
function RouterApp(){
    return(
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    )
}
export default RouterApp;
