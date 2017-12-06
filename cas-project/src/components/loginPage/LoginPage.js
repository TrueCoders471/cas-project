import React from 'react';
import './loginPage-Styles.css';

/**
 * controls Javascript behavior of The Account Creation Page
 */

class LoginPage extends React.Component {

    /**
     * transitions the user to a particular Log-in persona specific view
     * based upon there account type
     */
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

    drawLogBackground() {
        return(<div id="loginBackgroundStretch" src>
            <img className = "background-image" src = {require('./../../../public/images/loginBackground.jpg')}/>
        </div>);
    }

    /**
     * renders the components associated with the Login page
     * @returns {XML} (Markup Language) for rendering the elements within this page
     */
    render() {
        return (
            <div id="LoginView-Container" className="login-page">
                {this.drawLogBackground()}
            <div id="loginFields-container">
                    <form className="form-signin">
                        <div id="top-div-Container">
                            <h2 className="form-signin-header">LOGIN</h2>
                        </div>
                        <br/>
                        <label htmlFor="inputUsername" className="sr-only">RU Email</label>
                        <input type="text" id="inputUserName" className="form-control" placeholder="RU Email" required
                           autoFocus />
                        <br/>
                        <label htmlFor="inoutPassword" className="sr-only">Password</label>
                        <input type="password" id="inputPassword" className="form-control"
                                placeholder="Password" required/>
                        <br/>
                        <br/>
                        <button className="btn btn-lg btn-primary" type="submit" onClick={this.login}>Sign in</button>
                        <div className="checkbox">
                            <label>

                                <input type="checkbox" value="remember-me"/>
                                Remember me
                            </label>
                            <br/>
                            <p>
                                <a href="/forgotPassword">Forgot your password?</a>

                                <a href="/Signup">Don't Have An Account?</a>
                            </p>

                        </div>
                    </form>
            </div>
            </div>
        );
    }
}

export default LoginPage;
