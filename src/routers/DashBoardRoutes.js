import React from 'react';
import { Route,Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import DcScreen from '../components/dc/DcScreen';
import HeroesScreen from '../components/heroes/HeroesScreen';
import MarvelScreen from '../components/marvel/MarvelScreen';
import SearchScreen from '../components/search/SearchScreen';
import NavBar from '../ui/NavBar';

const DashBoardRoutes = () => {
    return (
        <>
            <NavBar />
            <div className="container" style={{marginTop:'100px'}}>
                <Switch>
                    <Route exact path="/marvel" component={MarvelScreen} />
                    <Route exact path="/dc" component={DcScreen} />
                    <Route exact path="/buscar" component={SearchScreen} />
                    <Route exact path="/hero/:heroeId" component={HeroesScreen} />
                    <Redirect to="/marvel" />
                </Switch>
            </div> 
        </>
    )
}

export default DashBoardRoutes
