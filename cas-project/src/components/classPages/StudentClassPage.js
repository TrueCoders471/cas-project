import React from 'react';

class StudentClassPage extends React.Component {

    openNotes() {
        location.href ='/studentNotes'
    }
    render() {

        return (
            <div>
                <p>Info (notes) in grid for this particular class by weeks</p>
            <button className="btn btn-lg btn-primary" type="submit" onClick={this.openNotes}>Open Notes for this week</button>
            </div>
        );

    }
}

export default StudentClassPage;