import React from 'react';

class LoginPage extends React.Component {


    login() {
        switch (document.getElementById("inputUserName").value) {
            case 'admin@radford.edu' :
                location.href = "/admin";
                break;
            case 'student@radford.edu' :
                location.href = "/student";
                break;
            case  'notetaker@radford.edu' :
                location.href = "/notetaker";
                break;
            case 'faculty@radford.edu':
                location.href = "/faculty";
                break;
            default :
                alert("Wrong Username or Password.");
        }

    }

    forgotPassword() {
        location.href = "/forgotPassword";
    }

    render() {
        return (
            <div className="container">
                <form className="form-signin">
                    <h2 className="form-signin-header">Center for Accessability Services</h2>
                    <label htmlFor="inputUsername" className="sr-only">RU Email</label>
                    <input type="text" id="inputUserName" className="form-control" placeholder="RU Email" required
                           autoFocus/>
                    <label htmlFor="inoutPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" value="remember-me"/>
                            Remember me</label>
                        <br/>
                        <button className="btn btn-lg btn-primary" type="submit" onClick={this.login}>Sign in</button>
                        <br/> <br/>
                        <button className="btn btn-lg btn-primary" onClick={this.forgotPassword}>Forgot password
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default LoginPage;
