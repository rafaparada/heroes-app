import {BrowserRouter as Router,Switch} from 'react-router-dom';
import React,{useContext} from 'react';
import LoginScreen from '../components/dc/login/LoginScreen';
import DashBoardRoutes from './DashBoardRoutes';
import PrivateRouter from './PrivateRouter';
import { AuthContext } from '../context/AuthContext';
import PublicRoutes from './PublicRoutes';
const AppRouter = () => {
    const {user} = useContext(AuthContext);
    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoutes isAuthenticated={user.logged} exact path="/login" component={LoginScreen} />
                    <PrivateRouter isAuthenticated={user.logged} path="/" component={DashBoardRoutes} />
                </Switch>
                </div>
        </Router>
    )
}

export default AppRouter
