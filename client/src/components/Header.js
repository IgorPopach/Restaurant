import React from "react";
import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "./../actions/authentication";
import { withRouter } from "react-router-dom";

class Header extends React.Component {
  onLogout = event => {
    event.preventDefault();
    this.props.logoutUser(this.props.history);
  };

  renderLinks() {
    const { user } = this.props.auth;
    if (user) {
      return (
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <span style={{ color: "white" }}>
              Hello, {user.firstName}! role: {user.role}:)
            </span>
          </li>
          <li className="nav-item">
            <Link to="/logout" onClick={this.onLogout}>
              Logout
            </Link>
          </li>
        </ul>
      );
    } return (
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link to="/register">Register</Link>
        </li>
      </ul>
    );
  }

  render() {
    const { user } = this.props.auth;
    console.log("header user", user, typeof user);

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Link to="/">Restaurant</Link>
          </div>
          <div className="col-8">
            <nav>
              <ul className="nav nav-tabs nav-justified">
                <li className="nav-item">
                  <NavLink to="/" exact className="nav-link">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/menu" className="nav-link">
                    Menu
                  </NavLink>
                </li>
                {user && user.role === "admin" && (
                  <li className="nav-item">
                    <NavLink to="/edit-base" className="nav-link">
                      Edit Data Base
                    </NavLink>
                  </li>
                )}
              </ul>
            </nav>
          </div>
          <div className="col-2">{this.renderLinks()}</div>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = store => ({
  auth: store.auth
});

export default withRouter(
  connect(
    mapStateToProps,
    { logoutUser }
  )(Header)
);
