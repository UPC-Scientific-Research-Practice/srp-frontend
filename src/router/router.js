import React from 'react';
import {BrowserRouter, Route , Switch} from 'react-router-dom';
import Home from '../pages/Home';
import LoginForm from '../pages/Login';
import PrivateRoute from '../components/PrivateRoute'
import { inject } from "mobx-react";

@inject("store")
class BasicRoute extends React.Component{
    render() {
        let {store} = this.props;
        return (
            <BrowserRouter history={this.props.history}>
                <Switch>
                    <Route exact path="/login"  component={LoginForm} />
                    <PrivateRoute {...store.token} exact path="/" component={Home}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default BasicRoute;
