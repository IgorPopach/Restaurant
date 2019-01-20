import React, { Component } from "react";

export default class Login extends Component {
    state = {
        username: 'TEST-USER',
        password: 'TEST-PASSWORD',
    }
    handleSubmit = (event) => {
        event.preventDefault();
        // axios.post('/api/auth/login', {
        //     username: 'TEST-USER',
        //     password: 'TEST-PASSWORD',
        // }).then((user) =>  this.setState({ user }))
        setTimeout(() => {
            this.setState({ user: {
                username,
                password,
            } })
        }, 1000)
    }
    render() {
        const { username, password } = this.state;
        return (
            <div className="container">
                <form className="form-signin" action="/auth/login" method="post" onSubmit={this.handleSubmit} style={{maxWidth: "300px"}}>
                    <h2 className="form-signin-heading">Please sign in</h2>
                    <label className="sr-only" for="inputEmail"></label>
                    <input className="form-control" type="text" name="username" value={username} id="inputEmail" placeholder="Username" required autofocus />
                    <input className="form-control" type="password" name="password" value={password} id="inputPassword" placeholder="Password" />
                    <button className="btn btn-lg btn-primary btn-block" type="submit">LOGIN</button>
                </form>
            </div>
        )
    }
}