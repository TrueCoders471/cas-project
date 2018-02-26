import React from 'react';


class vNoteTakerSignUpSheet extends React.Component {


    render() {
        return (
            <div>
                <legend align="top">Volunteer Note Taker Sign-Up Sheet</legend>
                <div className="form-group col-md-6">
                    <label className=".value" htmlFor="course_section">Course & Section:</label>
                    <input type="text" name="courseAndSectionField" className="form-control" id="course_section"
                           placeholder="Ex. POSC 120 - 01"/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="instructor_name">Instructor Name:</label>
                    <input type="text" className="form-control" name="instructorNameField" id="instructor_name"
                           placeholder="First Last"/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="instructor_email_address">Instructor Email Address:</label>
                    <input type="text" className="form-control" name="instructorEmailAddressField" id="instructor_email_address"
                           placeholder="cas@radford.edu"/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="instructor_contact_number">Instructor Contact Number:</label>
                    <input type="text" className="form-control" name="instructorContactNumber" id="instructor_contact_number"
                           placeholder="000-000-000"/>
                </div>
            </div>
        );
    }


}

export default vNoteTakerSignUpSheet;