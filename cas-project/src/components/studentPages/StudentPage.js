import React from 'react';

class StudentPage extends React.Component {
//Commentt
    openClasses() {
        location.href = "/studentClasses";
    }
     render() {
        return (
            <div>
                <p>Student here</p>
                <button className="btn btn-lg btn-primary" type="submit" onClick={this.openClasses}>Open Classes</button>
                <br /><br />
            </div>
        );

    }
}

export default StudentPage;