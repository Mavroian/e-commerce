import React from 'react';
import './App.css'
import { Route, Switch } from "react-router-dom"

import HomePage from "./pages/homepage/Homepage.component"
const Hats = () => {
  return (<div><h1>HatsPage</h1></div>)
}
function App() {
  return (

    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/hats" component={Hats} />
      </Switch>

    </div>
  );
}

export default App;
