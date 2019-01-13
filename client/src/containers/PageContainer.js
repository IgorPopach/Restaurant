import React from "react";
import AppHeader from "../components/Header";

import Background from '../images/main.png';

const sectionStyle = {
  width: "100%",
  maxHeight: "1600px",
  backgroundImage: `url(${Background})`,
  backgroundSize: "cover"
};

const PageContainer = props => {
    return (
        <main style={ sectionStyle }>
            <AppHeader />
            {props.children}
        </main>
    );
};

export default PageContainer;