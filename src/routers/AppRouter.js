import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import React from 'react'
import LoginScreen from '../components/dc/login/LoginScreen';
import DashBoardRoutes from './DashBoardRoutes';
const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/login" component={LoginScreen} />
                    <Route path="/" component={DashBoardRoutes} />
                </Switch>
                </div>
        </Router>
    )
}

export default AppRouter
