import React from 'react';

export default class FacultyClassesPage extends React.Component {

    openClass1() {
        location.href = './facultyClass1';
    }

    openClass2() {
        location.href = './facultyClass2';
    }

    openClass3() {
        location.href = './facultyClass3';
    }

    render() {
        return (
            <div >
                <h1>Faculty's Classes List</h1>
                <button className="btn btn-lg btn-primary" type="submit" onClick={this.openClass1}>View Class 1</button>
                <br/><br/>
                <button className="btn btn-lg btn-primary" type="submit" onClick={this.openClass2}>View Class 2</button>
                <br/><br/>
                <button className="btn btn-lg btn-primary" type="submit" onClick={this.openClass3}>View Class 3</button>
            </div>
        );
    }
}