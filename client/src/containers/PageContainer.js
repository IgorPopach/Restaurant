import React from "react";
import AppHeader from "../components/Header";

import Background from '../images/main.png';

const sectionStyle = {
    minHeight: "1600px",
    backgroundImage: `url(${Background})`,
    backgroundRepeat: 'repeat-y',
    backgroundPosition: 'top',
};

const PageContainer = props => {
    return (
        <main style={sectionStyle}>
            <AppHeader />
            {props.children}
        </main>
    );
};

export default PageContainer;