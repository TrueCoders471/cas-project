import React from 'react';

class MyClassesStudentPage extends React.Component {

    openClass() {
        location.href = "/studentClass";
    }
    render() {
        return (
            <div>
                <p>My Classes STUDENT: A grid of classes her with a button for each</p>
                <button className="btn btn-lg btn-primary" type="submit" onClick={this.openClass}>View Class</button>
            </div>
        );
    }
}

export default MyClassesStudentPage;