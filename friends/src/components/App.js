import React, { useEffect } from 'react';
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

import { Link, Route, Switch } from "react-router-dom";
import "./App.css";
import NavigationBar from "./NavigationBar";
import LoginForm from "./LoginForm";
import FriendsList from "./FriendsList";
import PrivateRoute from "./PrivateRoute";

function App() 
{

  useEffect( () => { M.AutoInit() }, [] );

  return (
    <> 
      <NavigationBar />
  
      <Switch>
        <PrivateRoute path = "/friends" component = { FriendsList } />
        <Route exact path = "/" component = { LoginForm } />    
      </Switch>
    </>
  );
}

export default App;
