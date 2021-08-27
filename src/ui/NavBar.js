import React,{useContext} from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import UserContext from '../context/UserContext';
const NavBar = () => {
    const {user:{user}}  = useContext(UserContext);
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                <NavLink exact activeClassName="active" className="navbar-brand" to="#">HEROES APP</NavLink>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink exact activeClassName="active" className="nav-link" to="/marvel">Marvel</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName="active" className="nav-link" to="/dc">DC</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName="active" className="nav-link" to="/buscar">Buscar</NavLink>
                        </li>
                    </ul>
                    <span className="navbar-text">
                        <NavLink exact activeClassName="active" className="nav-link" to="/login">{`[${user}] Logout`}</NavLink>
                    </span>
                </div>
            </div>
        </nav>
    ) 
}

export default NavBar
