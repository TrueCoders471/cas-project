import React from 'react';

class LoginPage extends React.Component {


    login() {
        location.href = "/admin";
    }

    forgotPassword() {
        location.href = "/forgotPassword";
    }

    render() {
        return (
            <div className="container">
                <form className="form-signin">
                    <h2 className="form-signin-header">Center for Accessability Services</h2>
                    <label htmlFor="inputUsername" className="sr-only">Username</label>
                    <input type="text" id="inputUserName" className="form-control" placeholder="Username" required
                           autoFocus/>
                    <label htmlFor="inoutPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" value="remember-me"/>
                            Remember me</label>
                        <button className="btn btn-lg btn-primary" type="submit" onClick={this.login}>Sign in</button>
                        <br /> <br/>
                        <button className="btn btn-lg btn-primary" onClick={this.forgotPassword}>Forgot password</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default LoginPage;
