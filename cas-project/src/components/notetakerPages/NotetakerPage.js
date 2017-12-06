import React from 'react';

class NotetakerPage extends React.Component {

    openClasses() {
        location.href = "/notetakerClasses";
    }

    openUploadNotes() {
        location.href = "/uploadNotes";
    }

    logOut() {
        location.href = "/";
    }

    render() {
        return (
            <div>
                <h1>Notateker page here</h1>
                <span className="glyphicon glyphicon-log-out" onClick={this.logOut}/>
                <button className="btn btn-lg btn-primary" type="submit" onClick={this.openClasses}>Open My Classes
                </button>
                <br/><br/>
                <button className="btn btn-lg btn-primary" type="submit" onClick={this.openUploadNotes}>Upload Notes
                </button>
            </div>
        );

    }
}

export default NotetakerPage;