import React from 'react';

class StudentPage extends React.Component {
    openClasses() {
        location.href = "/studentClasses";
    }
    logOut() {
        location.href = "/";
    }
     render() {
        return (
            <div>
                <p>Student here</p>
                <span className="glyphicon glyphicon-log-out" onClick={this.logOut}/>
                <button className="btn btn-lg btn-primary" type="submit" onClick={this.openClasses}>Open Classes</button>
                <br /><br />
            </div>
        );

    }
}

export default StudentPage;