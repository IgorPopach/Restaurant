import React from "react";
import HomePage from "./containers/HomePage";
import LogInPage from "./containers/LogInPage";
import RegisterPage from "./containers/RegisterPage";
import MenuPage from "./containers/MenuPage";
import AddDishes from "./components/AddDishes";
import { Route, Switch } from "react-router-dom";


class Router extends React.Component {
    render() {
        return (
            <>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/home" component={HomePage} />
                    <Route path="/log-in" component={LogInPage} />
                    <Route path="/register" component={RegisterPage} />
                    <Route path="/menu" component={MenuPage} />
                    <Route path="/add-dishes" component={AddDishes} />
                </Switch>
            </>
        );
    }
}
export default Router;