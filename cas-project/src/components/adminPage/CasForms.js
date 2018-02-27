import React from 'react';
import './AdminStyles.css';
//import AAC from "../../../public/forms/AcademicAccommodationsContract-RevisedSpring2017.pdf";
class CasForms extends React.Component {

    deleteForm() {
        alert("Deleted form!");
    }

    downloadForm() {
        alert("Download Form");
    }

    render() {
        return (
            <div>
                <h3> Fillable forms</h3>
                <ul className="list-group">
                    <li className="list-group-item justify-content-between">
                            <span className="glyphicon glyphicon-download"/>
                            <b>Academic Accommodations Contract </b>(Rev. Spring 2017)
                        <span className="glyphicon glyphicon-trash" onClick={this.deleteForm}/>
                    </li>
                    <li className="list-group-item justify-content-between">
                            <span className="glyphicon glyphicon-download"/>
                            <b>Proctoring Request Form</b> (Rev. Aug. 2017)
                        <span className="glyphicon glyphicon-trash" onClick={this.deleteForm}/>
                    </li>
                    <li className="list-group-item justify-content-between">
                            <span className="glyphicon glyphicon-download"/>
                            <b>Request for Accommodations Form </b>(Rev. Feb. 2016)
                        <span className="glyphicon glyphicon-trash" onClick={this.deleteForm}/>
                    </li>
                    <li className="list-group-item justify-content-between">
                            <span className="glyphicon glyphicon-download"/>
                            <b>Student Accommodation Eligibility Form</b> (Rev. June 2016)
                        <span className="glyphicon glyphicon-trash" onClick={this.deleteForm}/>
                    </li>
                    <li className="list-group-item justify-content-between">
                            <span className="glyphicon glyphicon-download"/>
                            <b>Student Registration Form </b>(Rev. Feb. 2016)
                        <span className="glyphicon glyphicon-trash" onClick={this.deleteForm}/>
                    </li>
                    <li className="list-group-item justify-content-between">
                            <span className="glyphicon glyphicon-download"/>
                            <b>Volunteer Notetaker Form</b> (Rev. July 2015)
                        <span className="glyphicon glyphicon-trash" onClick={this.deleteForm}/>
                    </li>
                </ul>
                <br/>
                <h3>Info Packet</h3>
                <ul className="list-group">
                    <li className="list-group-item justify-content-between">
                        <span className="glyphicon glyphicon-download"/>
                        <b>Becoming a Registered Student</b> (Rev. Oct. 2015)

                        <span className="glyphicon glyphicon-trash" onClick={this.deleteForm}/>

                    </li>

                    <li className="list-group-item justify-content-between">

                        <span className="glyphicon glyphicon-download"/>
                        <b>Documentation Guidelines </b>(Rev. June 2016)

                        <span className="glyphicon glyphicon-trash" onClick={this.deleteForm}/>

                    </li>
                    <li className="list-group-item justify-content-between">
                        <span className="glyphicon glyphicon-download" onClick={this.downloadForm}/>
                        <b>Policies and Procedures for Receiving Services</b> (Rev. Aug. 2017)
                        <span className="glyphicon glyphicon-trash" onClick={this.deleteForm}/>
                    </li>
                </ul>
            </div>
        );
    }
}

export default CasForms;