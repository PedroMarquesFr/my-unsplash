import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
// import { Container } from './styles';

const Routes: React.FC = () => {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/fav" component={Favorites} />
      </Switch>
    </Router>
  );
};

export default Routes;
