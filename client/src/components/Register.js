import React from "react";

const Register = props => {

    return (
        <div className="container">
            <form className="form-signin" action="/register" method="post" style={{maxWidth: "300px"}}>
                <h2 className="form-signin-heading">Sign Up here</h2>
                <input className="form-control" type="text" name="name" placeholder="Your Name" />
                <input className="form-control" type="text" name="username" placeholder="Your Username" />
                <input className="form-control" type="password" name="password" placeholder="Your Password" />
                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign Up</button>
            </form>
        </div>
    )
}
export default Register