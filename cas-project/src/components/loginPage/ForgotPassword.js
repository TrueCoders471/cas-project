import React from 'react';

class ForgotPassword extends React.Component {

    resetPassword() {
        alert("Sent out email here!");
    }

    render() {
        return (
            <div className="container">
                <form className="form-signin">
                    <h2 className="form-signin-header">Center for Accessability Services</h2>
                    <h4>Enter the E-mail address that was used to create the account, an E-mail will then be sent to the
                        specified E-mail address that will allow you to reset your password.</h4>

                    <input type="text" id="inputUserName" className="form-control" placeholder="RU Email" required
                           autoFocus/>
                    <button className="btn btn-lg btn-primary" type="submit" onClick={this.resetPassword}>Submit</button>
                </form>
            </div>
        );
    }
}

export default ForgotPassword;
