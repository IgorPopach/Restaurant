import React from "react";
import HomePage from "./containers/HomePage";
import LogInPage from "./containers/LogIn";
import RegisterPage from "./containers/RegisterPage";
import MenuPage from "./containers/MenuPage";
import EditBase from "./containers/EditBase";
import ChefPage from "./containers/ChefPage";
import { Route, Switch } from "react-router-dom";


const Router = () => (
    <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LogInPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/menu" component={MenuPage} />
        <Route path="/edit-base" component={EditBase} />
        <Route path="/chef-orders" component={ChefPage} />
        <Route render={() => (<div style={{color: "white", textAlign: "center", fontSize: "2rem"}}>Page not found </div>)} />
    </Switch>
);

export default Router;