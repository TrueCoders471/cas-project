import React from 'react';
import './loginPage-Styles.css';

/**
 * controls Javascript behavior of The Account Creation Page
 */

class LoginPage extends React.Component {

    drawLogBackground() {
        return (<div id="loginBackgroundStretch" src>
            <img className="background-image" src={require('./../../../public/images/loginBackground.jpg')}/>
        </div>);
    }

    /**
     * transitions the user to a particular Log-in persona specific view
     * based upon there account type
     */
    submit(e) {
        e.preventDefault();
        const admin = document.getElementById("inputUserName").value === 'admin@radford.edu'; // User validate
        const adminPassword = document.getElementById("inputPassword").value === 'admin';

        const student = document.getElementById("inputUserName").value === 'student@radford.edu'; // User validate
        const studentPassword = document.getElementById("inputPassword").value === 'student';

        const notetaker = document.getElementById("inputUserName").value === 'notetaker@radford.edu'; // User validate
        const notetakerPassword = document.getElementById("inputPassword").value === 'notetaker';

        const faculty = document.getElementById("inputUserName").value === 'faculty@radford.edu'; // User validate
        const facultyPassword = document.getElementById("inputPassword").value === 'faculty';


        if (admin === true && adminPassword === true) {
            location.href = "/admin";

        } else if (student === true && studentPassword === true) {
            location.href = "/student";

        } else if (notetaker === true && notetakerPassword === true) {
            location.href = "/notetaker";

        } else if (faculty === true && facultyPassword === true) {
            location.href = "/faculty";

        }
        else {
            alert("Wrong Username or Password.");
        }
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
                    <form className="form-signin" onSubmit={this.submit}>
                        <div id="top-div-Container">
                            <h2 className="form-signin-header">LOGIN</h2>
                        </div>
                        <br/>
                        <label htmlFor="inputUsername" className="sr-only">RU Email</label>
                        <input type="text" id="inputUserName" className="form-control" required
                               placeholder="RU Email" autoFocus/>
                        <br/>
                        <label htmlFor="inoutPassword" className="sr-only">Password</label>
                        <input type="password" id="inputPassword" className="form-control" required
                               placeholder="Password"/>
                        <br/>
                        <br/>
                        <button className="btn btn-lg btn-primary" type="submit">Sign in</button>
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
