import React from 'react';
import './AdminStyles.css';
//import AAC from "../../../public/forms/Academic Accommodations Contract - Revised Spring 2017.pdf";

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
                        <a href="../../../public/forms/Academic%20Accommodations%20Contract%20-%20Revised%20Spring%202017.pdf" download>
                            <span className="glyphicon glyphicon-download"/>
                            <b>Academic Accommodations Contract </b>(Rev. Spring 2017)
                        </a>
                        <span className="glyphicon glyphicon-trash" onClick={this.deleteForm}/>

                    </li>
                    <li className="list-group-item justify-content-between">
                        <a href="../../../public/forms/Proctoring%20Request%20Form-August%202017.pdf" download>
                            <span className="glyphicon glyphicon-download"/>
                            <b>Proctoring Request Form</b> (Rev. Aug. 2017)
                        </a>
                        <span className="glyphicon glyphicon-trash" onClick={this.deleteForm}/>

                    </li>
                    <li className="list-group-item justify-content-between">
                        <a href="../../../public/forms/Request%20for%20Accomm%20-%20February%202016.pdf" download>
                            <span className="glyphicon glyphicon-download"/>
                            <b>Request for Accommodations Form </b>(Rev. Feb. 2016)
                        </a>
                        <span className="glyphicon glyphicon-trash" onClick={this.deleteForm}/>

                    </li>
                    <li className="list-group-item justify-content-between">
                        <a href="../../../public/forms/Student%20Accom%20Eligibility%20-%20June%202016.pdf" download>
                            <span className="glyphicon glyphicon-download"/>
                            <b>Student Accommodation Eligibility Form</b> (Rev. June 2016)
                        </a>
                        <span className="glyphicon glyphicon-trash" onClick={this.deleteForm}/>

                    </li>
                    <li className="list-group-item justify-content-between">
                        <a href="../../../public/forms/Student-Regis-Form%20-%20February%202016.pdf" download>
                            <span className="glyphicon glyphicon-download"/>
                            <b>Student Registration Form </b>(Rev. Feb. 2016)
                        </a>
                        <span className="glyphicon glyphicon-trash" onClick={this.deleteForm}/>

                    </li>
                    <li className="list-group-item justify-content-between">
                        <a href="../../../public/forms/Volunteer%20Notetaker%20Form%20-%20July%202015.pdf" download>
                            <span className="glyphicon glyphicon-download"/>
                            <b>Volunteer Notetaker Form</b> (Rev. July 2015)
                        </a>
                        <span className="glyphicon glyphicon-trash" onClick={this.deleteForm}/>
                    </li>
                </ul>
                <br/>
                <h3>Info Packet</h3>
                <ul className="list-group">
                    <li className="list-group-item justify-content-between">
                        <a href="../../../public/forms/Becoming%20a%20Regis%20Student%20-%20October%202015.pdf" download>
                            <span className="glyphicon glyphicon-download"/>
                            <b>Becoming a Registered Student</b> (Rev. Oct. 2015)
                        </a>
                        <span className="glyphicon glyphicon-trash" onClick={this.deleteForm}/>

                    </li>

                    <li className="list-group-item justify-content-between">
                        <a href="../../../public/forms/Doc%20Guidelines%20-%20June%202016.pdf" download>
                            <span className="glyphicon glyphicon-download"/>
                            <b>Documentation Guidelines </b>(Rev. June 2016)
                        </a>
                        <span className="glyphicon glyphicon-trash" onClick={this.deleteForm}/>

                    </li>
                    <li className="list-group-item justify-content-between">
                        <a href="../../../public/forms/Policies%20and%20Prodecues%20for%20Receiving%20Services%20-%20Aug%20%202017.pdf" download>
                            <span className="glyphicon glyphicon-download" onClick={this.downloadForm}/>
                            <b>Policies and Procedures for Receiving Services</b> (Rev. Aug. 2017)
                        </a>
                        <span className="glyphicon glyphicon-trash" onClick={this.deleteForm}/>
                    </li>
                </ul>
            </div>
        );
    }
}

export default CasForms;