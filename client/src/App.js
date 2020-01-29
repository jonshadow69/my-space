import React, { Fragment, } from 'react';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
import Login from './components/Login';
import FetchUser from './components/FetchUser';
import Register from './components/Register';
import ProtectedRoute from './components/ProtectedRoute';
import { Container, } from "semantic-ui-react";
import { Switch, Route, } from 'react-router-dom';
import MyFriends from "./components/MyFriends";


const App = () => (
  <Fragment>
    <center>
      <Navbar />
      <FetchUser>
        <Container>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path='/my_friends' component={MyFriends}/>
            <Route component={NoMatch} />
          </Switch>
        </Container>
      </FetchUser>
    </center>
  </Fragment>
)

export default App;