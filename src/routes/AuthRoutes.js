
import { React, useContext } from "react";
import {
    BrowserRouter as Router,
    Routes as RoutesR,
    Route,
    Navigate,
} from 'react-router-dom'

// Páginas da aplicação 
import Signup from "../pages/Auth/Signup";


const AuthRoutes = () => {

    return (
        <Router>
            <RoutesR>
                <Route path='/' element={<Signup />}></Route>
            </RoutesR>
        </Router>
    )
}

export default AuthRoutes;