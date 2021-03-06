import React from 'react';

class StudentClass1Page extends React.Component {

    openNotes() {
        location.href ='/studentNotes';
    }

    logOut() {
        location.href = "/";
    }
    render() {
        return (
            <div>
                <span className="glyphicon glyphicon-log-out" onClick={this.logOut}/>
                <h4>ITEC 120</h4>
            <button className="btn btn-lg btn-primary" type="submit" onClick={this.openNotes}>Open Notes for this class</button>
            </div>
        );

    }
}

export default StudentClass1Page;