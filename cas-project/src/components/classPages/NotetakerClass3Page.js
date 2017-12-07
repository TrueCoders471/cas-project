import React from 'react';
import NotetakerNotesPage from "../notesPages/NotetakerNotesPage";


class NotetakerClass3Page extends React.Component {
    openClasses() {
        location.href = "/notetakerClasses";
    }
    logOut() {
        location.href = "/";
    }
    render() {
        return (
            <div>

                <span className="glyphicon glyphicon-log-out" onClick={this.logOut}/>
                <button className="btn btn-lg btn-primary" type="submit" onClick={this.openClasses}>View All Classes
                </button>
                <h4>GEOG 101</h4>
                <NotetakerNotesPage/>
            </div>
        );
    }
}

export default NotetakerClass3Page;