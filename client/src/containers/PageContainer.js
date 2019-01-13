import React from "react";
import AppHeader from "../components/Header";

const PageContainer = props => {
    return (
        <main>
            <AppHeader />
            {props.children}
        </main>
    );
};

export default PageContainer;