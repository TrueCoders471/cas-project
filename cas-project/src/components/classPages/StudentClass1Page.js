import React from 'react';

class StudentClass1Page extends React.Component {

    openNotes() {
        location.href ='/studentNotes';
    }
    render() {

        return (
            <div>
                <h4>ITEC 120</h4>
            <button className="btn btn-lg btn-primary" type="submit" onClick={this.openNotes}>Open Notes for this class</button>
            </div>
        );

    }
}

export default StudentClass1Page;