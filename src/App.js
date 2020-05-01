import React from "react";
import Homepage from "./pages/Homepage";
import { Route, Switch } from "react-router-dom";
import "./App.css";

const HatsPage = () => {
  return <h1>Hats Page</h1>;
};

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Homepage} />
      <Route path="/shop/hats" exact component={HatsPage} />
    </Switch>
  );
}

export default App;
