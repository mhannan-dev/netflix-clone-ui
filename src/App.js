import React from 'react';
import './Css/App.css';
import Main from './Pages/Index'
import Login from './Pages/Login'
import { Switch, Route } from 'react-router-dom';

function App() {
  return (

      <Switch>
          <Route exact path='/' component={ Main }/>
          <Route exact path='/login' component={ Login }/>

      </Switch>

  );
}

export default App;
