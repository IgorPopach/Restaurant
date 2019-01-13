import React from "react";
import PageContainer from "../containers/PageContainer";
import { BrowserRouter } from "react-router-dom";
import Router from "../router";
import 'bootstrap/dist/css/bootstrap.css';
require('bootstrap');

import 'bootstrap/dist/css/bootstrap.css';
require('bootstrap');

const App = () => {
    return (
        <BrowserRouter>
            <PageContainer>
                <Router />
            </PageContainer>
        </BrowserRouter>
    );
};

export default App;