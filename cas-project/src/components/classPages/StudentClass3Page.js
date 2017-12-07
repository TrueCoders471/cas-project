import React from 'react';

class StudentClass3Page extends React.Component {

    openNotes() {
        location.href ='/studentNotes';
    }
    render() {

        return (
            <div>
                <h4>GEOG 101</h4>
            <button className="btn btn-lg btn-primary" type="submit" onClick={this.openNotes}>Open Notes for this class</button>
            </div>
        );

    }
}

export default StudentClass3Page;