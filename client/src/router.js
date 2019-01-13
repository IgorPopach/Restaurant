import React from "react";
import HomePage from "./containers/HomePage";
import LogInPage from "./containers/LogInPage";
import MenuPage from "./containers/MenuPage";
import { Route, Switch } from "react-router-dom";


class Router extends React.Component {
    render() {
        return (
            <>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/log-in" component={LogInPage} />
                    <Route path="/menu" component={MenuPage} />
                </Switch>
            </>
        );
    }
}
export default Router;