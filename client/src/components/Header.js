import React from "react";
import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "./../actions/authentication";
import { withRouter } from "react-router-dom";

class Header extends React.Component {

    onLogout = event => {
        event.preventDefault();
        this.props.logoutUser(this.props.history)
    }

    render() {
        const {isAuthenticated, user} = this.props.auth;
        const userLinks = (
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <span>Hello, {user.name}</span>
                </li>
                <li className="nav-item">
                    <Link to="/logout" onClick={this.onLogout}>Logout</Link>
                </li>
            </ul>
        )

        const guestLinks = (
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <Link to="/login">Login</Link>
                </li>
                <li className="nav-item">
                    <Link to="/register">Register</Link>
                </li>
            </ul>
        )

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
                                    <NavLink to="/" activeClassName="nav-link active">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/menu" activeClassName="nav-link active">Menu</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/add-dishes" activeClassName="nav-link active">Add Dishes</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-2">
                        {isAuthenticated ? userLinks : guestLinks}
                    </div>
                </div>
            </div>
        );
    }
}

Header.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = store => ({
    auth: store.auth
})

export default connect(mapStateToProps, { logoutUser })(withRouter(Header));