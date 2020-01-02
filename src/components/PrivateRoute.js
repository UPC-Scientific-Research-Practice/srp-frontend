import  React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {inject} from "mobx-react";

@inject("store")
class PrivateRoute extends Component{
    render(){
      let { store } = this.props;
      // 获取localStorage中的token
      store.getTokenToStorage();
      let { component: Component, ...rest } = this.props;
      return (<Route {...rest} render={props => (
        "" !== store.token ? (
          <Component {...props}/>
        ):(
          <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
          }}/>
        )
      )}/>
      );
    }
}



// const PrivateRoute = ({ component: Component, ...rest }) => (
//     <Route {...rest} render={props => (
//       "" !== props.params.token ? (
//         <Component {...props}/>
//       ):(
//         <Redirect to={{
//           pathname: '/login',
//           state: { from: props.location }
//         }}/>
//       )
//     )}/>
// );

export default PrivateRoute;
