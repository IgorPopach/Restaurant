import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import AppHeader from "../components/Header/Header";

import Background from "../images/main.png";

const PageContainer = props => {
    let sectionStyle = {};
    const { user } = props.auth;

    function setStyle() {
        if (user && user.role === "chef") {
        sectionStyle = {
            backgroundColor: "#4d4d4d",
            color: "white",
            fontSize: "25px"
        };
        } else {
        sectionStyle = {
            minHeight: "1600px",
            backgroundImage: `url(${Background})`,
            backgroundRepeat: "repeat-y",
            backgroundPosition: "top"
        };
        }
        return sectionStyle;
    }
  return (
    <main style={setStyle()}>
      <AppHeader />
      {props.children}
    </main>
  );
};

const mapStateToProps = store => ({
  auth: store.auth
});

export default withRouter(connect(mapStateToProps)(PageContainer));

// export default PageContainer;
