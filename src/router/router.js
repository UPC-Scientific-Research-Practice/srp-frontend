import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from '../pages/Home';
import LoginForm from '../pages/Login';


const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={LoginForm}/>
            <Route exact path="/index" component={Home}/>
        </Switch>
    </HashRouter>
);


export default BasicRoute;