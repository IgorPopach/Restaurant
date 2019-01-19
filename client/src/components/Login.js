import React, { Component } from "react";

export default class Login extends Component {

    render() {
        return (
            <div className="container">
                <form class="form-signin" action="/login" method="post" style={{maxWidth: "300px"}}>
                    <h2 class="form-signin-heading">Please sign in</h2>
                    <label class="sr-only" for="inputEmail"></label>
                    <input class="form-control" type="text" name="username" id="inputEmail" placeholder="Username" required autofocus />
                    <input class="form-control" type="password" name="password" id="inputPassword" placeholder="Password" />
                    <button class="btn btn-lg btn-primary btn-block" type="submit">LOGIN</button>
                </form>
            </div>
        )
    }
}