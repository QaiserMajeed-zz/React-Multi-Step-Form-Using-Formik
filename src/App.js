import React, { Component, Fragment } from "react";
import "./App.css";
import Container from "reactstrap/lib/Container";
import LayoutPage from "./components/LayoutPage/LayoutPage";
import Login from './components/Login';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Register from './components/Register'
import ProfileComponent from './components/UserProfile/ProfileComponent';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthService from '../src/services/Auth';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={'/'}>
        <Container>
          <Switch>
            <PrivateRoute exact path={`/`} component={LayoutPage} />
            <Route exact path={`/login`} component={Login} />
            <Route exact path={`/register`} component={Register} />
            <Route exact path={`/profile`} component={ProfileComponent} />
          </Switch>
        </Container>
      </BrowserRouter>
    );
  }

}

export default App;



const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      AuthService.isSignedIn() ? (
        
         
          <Redirect
            to={{
              pathname: "/profile"
            }}

          />
       
      ) : (
        <Component {...props} />
        )
    }
  />
);

const DefaultLayout = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    !AuthService.isSignedIn() ? (
      <Redirect to='/' />
      //<LayoutPage {...props} />
    ) : (
        <Fragment>

          <Component {...props} />
        </Fragment>
      )
  )} />
);

// serviceWorker.register();

