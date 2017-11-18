import React from 'react';

class ForgotPassword extends React.Component {

    resetPassword() {
        alert("Sent out email here!");
    }

    render() {
        return (
            <div id="container">
                <form className="form-signin">
                    <div id="top-div-Container">
                        <h2 className="form-signin-header">Forgot Password</h2>
                    </div>

                    <h5>Enter the E-mail address that was used to create the account, an E-mail will then be sent to the
                        specified E-mail address that will allow you to reset your password.</h5>

                    <input type="text" id="inputUserName" className="form-control" placeholder="RU Email" required
                               autoFocus/>
                    <br/><br/>

                        <button className="btn btn-lg btn-primary" type="submit" onClick={this.resetPassword}>Submit</button>
                </form>
            </div>
        );
    }
}

export default ForgotPassword;
