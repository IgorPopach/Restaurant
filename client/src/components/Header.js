import React from "react";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";


class Header extends React.Component {
    render() {

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2">
                        <Link to="/home">Restaurant</Link>
                    </div>
                    <div className="col-8">
                        <nav>
                            <ul className="nav nav-tabs nav-justified">
                                <li className="nav-item">
                                    <NavLink to="/home" activeClassName="nav-link active">Home</NavLink>
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
                        <ul class="nav justify-content-center">
                            <li class="nav-item">
                            <Link to="/log-in">Login</Link>
                            </li>
                            <li class="nav-item">
                            <Link to="/register">Register</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;