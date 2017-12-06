import React from 'react';
import FacultyVolunteersPage from "./FacultyVolunteersPage";
import FacultyStudentsPage from "./FacultyStudentsPage";
import FacultyClassesPage from "./FacultyClassesPage";

class FacultyPage extends React.Component {

    openClasses() {
        location.href = './facultyClasses';
    }

    openStudents() {
        location.href = './facultyStudents';
    }

    openVolunteers() {
        location.href = './facultyVolunteers';
    }

    render() {
        return (
            <div>
                <h1>Faculty</h1>
                {/*<button className="btn btn-lg btn-primary" type="submit" onClick={this.openClasses}>View Classes*/}
                {/*</button>*/}
                {/*<button className="btn btn-lg btn-primary" type="submit" onClick={this.openStudents}>View Students*/}
                {/*</button>*/}
                {/*<button className="btn btn-lg btn-primary" type="submit" onClick={this.openVolunteers}>View Notetakers*/}
                {/*</button>*/}


                <ul className="nav  nav-tabs nav-justified">
                    <li className="active"><a data-toggle="tab" href="#classes">View Classes</a></li>
                    <li><a data-toggle="tab" href="#students">View Volunteers</a></li>
                    <li><a data-toggle="tab" href="#notetakers">View Volunteers</a></li>
                </ul>
                <div className="tab-content">
                    <div id="classes" className="tab-pane fade in active">
                        <h3>Classes</h3>
                        <FacultyClassesPage/>
                    </div>
                    <div id="students" className="tab-pane fade">
                        <h3>Students</h3>
                        <FacultyStudentsPage/>
                    </div>
                    <div id="notetakers" className="tab-pane fade">
                        <h3>Notetakers</h3>
                        <FacultyVolunteersPage/>
                    </div>
                </div>
            </div>
        );

    }
}

export default FacultyPage;