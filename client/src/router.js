import React from "react";
import HomePage from "./containers/HomePage";
import LogInPage from "./containers/LogInPage";
import MenuPage from "./containers/MenuPage";
import AddDishes from "./components/AddDishes";
import { Route, Switch } from "react-router-dom";
import ProfilePage from "./containers/ProfilePage";


class Router extends React.Component {
    render() {
        return (
            <>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/log-in" component={LogInPage} />
                    <Route path="/menu" component={MenuPage} />
                    <Route path="/add-dishes" component={AddDishes} />
                    <Route path="/profile" component={ProfilePage} />
                </Switch>
            </>
        );
    }
}
export default Router;