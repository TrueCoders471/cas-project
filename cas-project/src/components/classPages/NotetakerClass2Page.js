import React from 'react';
import NotetakerNotesPage from "../notesPages/NotetakerNotesPage";


class NotetakerClass2Page extends React.Component {
    openClasses() {
        location.href = "/notetakerClasses";
    }

    render() {
        return (

            <div>
                <button className="btn btn-lg btn-primary" type="submit" onClick={this.openClasses}>View All Classes
                </button>
                <h4>ART 100</h4>
                <NotetakerNotesPage/>
            </div>

        );

    }
}

export default NotetakerClass2Page;