import React from "react";
import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import classes from "./Header.css";
import { logoutUser } from "../../actions/authentication";
import { withRouter } from "react-router-dom";

class Header extends React.Component {
  onLogout = event => {
    event.preventDefault();
    this.props.logoutUser(this.props.history);
  };
  renderNav() {
    const { user } = this.props.auth;
    if (user && user.role === "chef") {
      return (
        <nav>
          <ul className="nav nav-tabs nav-justified">
            <li className="nav-item">
              <NavLink to="/chef-orders" className="nav-link">
                Orders
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/archive" className="nav-link">
                Archive
              </NavLink>
            </li>
          </ul>
        </nav>
      );
    } else
      return (
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
      );
  }
  renderLinks() {
    const { user } = this.props.auth;
    if (user) {
      return (
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <span style={{ color: "white" }}>
              Hello, {user.firstName} {user.lastName}!
            </span>
          </li>
          <li className="nav-item">
            <Link to="/logout" onClick={this.onLogout}>
              Logout
            </Link>
          </li>
        </ul>
      );
    }
    return (
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
    return (
      <div className={classes.Header}>
        <div className="row">
          <div className="col-2">
            <Link to="/">Restaurant</Link>
          </div>
          <div className="col-8">{this.renderNav()}</div>
          <div className="col-2">{this.renderLinks()}</div>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
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
