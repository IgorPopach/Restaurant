import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "../router";
import { Provider } from "react-redux";
import store from "./../store";
import setAuthToken from "./../setAuthToken";
import { setCurrentUser, logoutUser } from "./../actions/authentication";
import jwt_decode from "jwt-decode";

import PageContainer from "../containers/PageContainer";

import "bootstrap/dist/css/bootstrap.css";
require("bootstrap");

if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const decoded = jwt_decode(localStorage.jwtToken);
    store.dispatch(setCurrentUser(decoded));
    const time = Date() / 1000;
    if (decoded.exp < time) {
        store.dispatch(logoutUser());
        window.location.href = '/login';
    }
}

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <PageContainer>
                        <Router />
                    </PageContainer>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
