import React from 'react';
import './signUpPage-Styles.css';
/**
 * controls Javascript behavior of The Account Creation Page
 */
class SignUpPage extends React.Component {

    /**
     * on click validate email, and passwords are matching
     */
    submitSignupRequest() {
        //switch statements & comparators here
    }

    /**
     * renders the components associated with this Account Creation page
     * @returns {XML} : (Markup Language) for rendering the elements within this page
     */
    render() {
        return (
            <div id="SignupView-Container">
                <div id="loginBackgroundStretch">
                    <img className="background-image" src = "http://hdwarena.com/wp-content/uploads/2017/04/Beautiful-Wallpaper.jpg"/>
                </div>
            <div id="SignupFields-Container">
                <form className="form-signin">

                    <div id="top-div-Container">
                        <h2 className="form-signin-header">Create Account</h2>
                    </div>

                    <label htmlFor="inputUsername" className="sr-only">RU Email</label>
                    <input type="text" id="inputUserName" className="form-control" placeholder="RU Email" required
                           autoFocus />
                    <label htmlFor="inoutPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>

                    <input type="password" id="inputPassword" className="form-control" placeholder="Re-Enter Password" required/>
                    <div className="checkbox">
                      <select id="acctTypeSelect">
                          <option>Select Account Type</option>
                          <option value="Administrator">Administrator</option>
                          <option value="Faculty">Faculty</option>
                          <option value="Student">Student</option>
                          <option value="Notetaker">Notetaker</option>
                      </select>
                        <br/>
                        <br/>
                        <button className="btn btn-lg btn-primary" type="submit" onClick={this.submitSignupRequest}>Sign Up</button>
                        <p>
                            <a href="/forgotPassword">Already Have an Account</a>
                        </p>

                    </div>
                </form>
            </div>
            </div>
        );
    }

}

export default SignUpPage;