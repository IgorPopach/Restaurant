import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "../router";
import { Provider } from "react-redux";
import store from "./../store";

import PageContainer from "../containers/PageContainer";

import "bootstrap/dist/css/bootstrap.css";
require("bootstrap");

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
