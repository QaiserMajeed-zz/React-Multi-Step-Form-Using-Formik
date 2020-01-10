import React, { Component } from "react";
import "./App.css";
import Container from "reactstrap/lib/Container";
import LayoutPage from "./components/LayoutPage/LayoutPage";
import Login from './components/Login';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Register from './components/Register'
import ProfileComponent from './components/UserProfile/ProfileComponent';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={'/'}>
        <Container>
          <Switch>
            <Route exact path={`/`} render={(props) => ( <LayoutPage {...props}/> )} />
            <Route exact path={`/login`} render={(props) => ( <Login {...props}/> )} />
            <Route exact path={`/register`} render={(props) => ( <Register {...props}/> )} />
            <Route exact path={`/profile`} render={(props) => ( <ProfileComponent {...props}/> )} />
          </Switch>
        </Container>
      </BrowserRouter>
    );
  }

}

export default App;

// const DefaultLayout = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={props => (
//     !AuthService.isSignedIn() ? (
//       <div>
//         <NavbarComponent {...props} />
//         <Component {...props} />

//       </div>
//     ) : (
//         <div>
//           <NavbarComponent {...props} />
//           <div className="container">
//             <Component {...props} />
//           </div>
//         </div>
//       )
//   )} />
// );

// serviceWorker.register();

