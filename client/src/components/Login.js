import React, { Component } from "react";

export default class Login extends Component {

    render() {
        return (
            <div className="container">
                <form className="form-signin" method="post" style={{maxWidth: "300px"}}>
                    <h2 className="form-signin-heading">Please sign in</h2>
                    <input className="form-control" type="text" name="username" id="inputEmail" placeholder="Username" required />
                    <input className="form-control" type="password" name="password" id="inputPassword" placeholder="Password" />
                    <button className="btn btn-lg btn-primary btn-block" type="submit">LOGIN</button>
                </form>
            </div>
        )
    }
}