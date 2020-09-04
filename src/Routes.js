import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Contact from './practices/Contact';
import About from './practices/About';
import Menu from './practices/Menu';
import Footer from './practices/Footer';

function RouteConfig(){
    return(
        <>
        <Router>
        <Menu />
            <Switch>
                <Route path="/contact" component={Contact} />
                <Route path="/About" component={About} />
                
            </Switch>
        </Router>
        </>
    )
}
export default RouteConfig;