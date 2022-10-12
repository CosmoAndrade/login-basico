import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useContext } from 'react'
import Menu from "../components/Menu";
import Home from "../pages/Home";
import Login from "../pages/Login";

import { AuthContext } from '../contexts/auth';

function Rotas() {

    const {logged} = useContext(AuthContext)

    return ( 
        <BrowserRouter>

       { logged && <Menu/>}
        
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/home" element={<Home/>} />
            </Routes>
        
        </BrowserRouter>
     );
}

export default Rotas;

