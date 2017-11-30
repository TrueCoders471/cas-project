import React from 'react';
import './AdminStyles.css';

class AdminPage extends React.Component {

    viewStudents(){
        location.href = './studentsList';
    }

    viewNotetakers(){
        location.href = './notetakersList';
    }

    viewForms(){
        location.href = './casForms';
    }
    render() {
        return (
            <div>
                <h1>Administrator</h1>
                    <button className="btn btn-lg btn-primary" type="submit" onClick={this.viewStudents}>View Registered Note Viewers</button>
                    <br /><br />
                    <button className="btn btn-lg btn-primary" type="submit" onClick={this.viewNotetakers}>View Note Takers</button>
                    <br /><br />
                    <button className="btn btn-lg btn-primary" type="submit" onClick={this.viewForms}>CAS Forms</button>
                    <br /><br />
            </div>
        );

    }
}

export default AdminPage;