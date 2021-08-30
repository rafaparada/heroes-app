import React,{useContext} from 'react'
import { NavLink,useHistory } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';
import types from '../types';
const NavBar = () => {
    const {user:{user},dispatch}  = useContext(AuthContext);
    const history = useHistory();
    const hanldeLogout = () =>{
        localStorage.removeItem('user');
        dispatch({type:types.logout,logged:false});
        history.replace("/login");
    }
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
                    <span className="navbar-text" onClick={hanldeLogout}>{`[${user.name}] Logout`}</span>
                </div>
            </div>
        </nav>
    ) 
}

export default NavBar
