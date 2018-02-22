import React from 'react';
import './SignUpForm-Styles.css';
class SignUpForm extends React.Component {

    /**
     * returns the XML Representation of the Basic info fields
     * used to collect the user's inputted Basic Account information.
     * @returns {XML}
     */
    basicAccountFields() {
        return (
            <div>
                <legend align="top">Basic Details</legend>
                <div className="form-group col-md-6">
                    <label className=".value" htmlFor="first_name">First name</label>
                    <input type="text" name = "firstNameField"className="form-control" id="first_name"
                           placeholder="First Name"/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="last_name">Last name</label>
                    <input type="text" className="form-control" name="firstNameField" id=""
                           placeholder="Last Name"/>
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="RUID">RU ID#</label>
                    <input type="text" className="form-control" name="RUIDField" id=""
                           placeholder="000000000"/>
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="DOB">Birth Date: </label>
                    <input type="text" className="form-control" name="DOBField" id=""
                           placeholder="01-23-1998"/>
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="gender">Gender: </label>
                    <select className="form-control" name="gender" id="found_site"/>
                        <option selected>Choose One </option>

                    <select className="form-control" name="genderField" id="found_site">
                        <option selected>Choose...</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </select>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="">Email</label>
                    <input type="email" className="form-control" name="emailField" id="" placeholder="@Email.com"/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="">Phone #</label>
                    <input type="text" className="form-control" name="phoneNumberField" id="" placeholder="000-000-0000"/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" name="passwordField" id="password"
                           placeholder="Password"/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="confirm_password">Confirm Password</label>
                    <input type="password" className="form-control" name="reenterpasswordField" id="confirm_password"
                           placeholder="Confirm Password"/>
                </div>
            </div>
        );
    }

    /**
     * returns the XML Representation of the address fields used to collect the user's inputted Address information.
     * @returns {XML}
     */
    addressField(){
        return (
            <div>
                <div className="form-group col-md-6">
                    <label htmlFor="inputAddress">Street</label>
                    <input type="text" name = "addressField" className="form-control" id="inputAddress"
                           placeholder="1234 Main St"/>
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="Hall">Residential Hall</label>
                    <input type="text" name = "resHallField" className="form-control" id="Hall" placeholder="Tyler Hall"/>
                </div>
                <div className="form-group col-md-2">
                    <label HtmlFor="inputZip">Room #</label>
                    <input type="text" name = "zipField" className="form-control" id="inputZip"/>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label HtmlFor="inputCity">City</label>
                        <input type="text" name = "cityField" className="form-control" id="inputCity"/>
                    </div>
                    <div className="form-group col-md-4">
                        <label HtmlFor="inputState">State</label>

                        <select id="inputState" className="form-control"/>
                            <option selected>Choose One </option>
                        <select id="inputState" name = "stateLetterField" className="form-control">
                            <option selected>Choose...</option>
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="DC">District Of Columbia</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NV">Nevada</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WA">Washington</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY">Wyoming</option>
                        </select>
                    </div>
                    <div className="form-group col-md-2">
                        <label HtmlFor="inputZip">Zip
                        code</label>
                        <input type="text" name = "zipfield" className="form-control" id="inputZip"/>
                    </div>
                </div>
            </div>
        );
    }

    studentStatusFields(){
        return(
          <div>
              <div className="form-group col-md-6">
                  <label htmlFor="country">Class Standing</label>
                  <select className="form-control" name="classStandingField" id="country">
                      <option selected>Choose...</option>
                      <option value = "Transfer">Transfer</option>
                      <option value = "Freshman">Freshman</option>
                      <option value = "Sophomore">Sophomore</option>
                      <option value = "Junior">Junior</option>
                      <option value = "Senior">Senior</option>
                      <option value = "Graduate">Graduate</option>
                  </select>
              </div>

              <div className="form-group col-md-6" id = "classStandings">
                  <label htmlFor="classStandings">Time Status </label>
                  <br/>
                  <label className="radio-inline"><input type="radio" name="classStandingField" value = "Full Time"/>
                      Full Time</label>
                  <label className="radio-inline"><input type="radio" name="classStandingField" value = "Part Time"/>
                      Part Time</label>
              </div>
              <div className="form-group col-md-8">
                  <label htmlFor="Select Major">Major</label>
                  <select className="form-control" name="majorField" id="Select Major">
                      <option selected>Choose...</option>
                      <option value = "Pre-Major">Pre-Major</option>
                      <option disabled>---College of Business and Economics</option>
                      <option value = "Accounting">Accounting</option>
                      <option value = "Economics">Economics</option>
                      <option value = "Finance">Finance</option>
                      <option value = "Management">Management</option>
                      <option value = "Marketing">Marketing</option>

                      <option disabled>College of Education and Human Development</option>
                      <option value = "Athletic Training">Athletic Training</option>
                      <option value = "Exercise, Sport and Health Education">Exercise, Sport and Health Education</option>
                      <option value = "Interdisciplinary Studies<">Interdisciplinary Studies</option>
                      <option value = "Nutrition and Dietetics">Nutrition and Dietetics</option>
                      <option value = "Recreation, Parks and Tourism">Recreation, Parks and Tourism</option>

                      <option disabled>College of Humanities and Behavioral Sciences</option>
                      <option value = "Communication">Communication</option>
                      <option value = "Criminal Justice">Criminal Justice</option>
                      <option value = "English">English</option>
                      <option value = "Foreign Languages">Foreign Languages</option>
                      <option value = "History">History</option>
                      <option value = "Interdisciplinary Studies in Liberal Arts<">
                          Interdisciplinary Studies in Liberal Arts</option>
                      <option value = "Media Studies">Media Studies</option>
                      <option value = "Philosophy and Religious Studies">Philosophy and Religious Studies</option>
                      <option value = "Political Science">Political Science</option>
                      <option value = "Psychology">Psychology</option>
                      <option value = "Social Science">Social Science</option>
                      <option value = "Sociology">Sociology</option>
                      <option disabled>Artis College of Science and Technology</option>
                      <option disabled>College of Visual and Performing Arts</option>
                      <option disabled>Waldron College of Health and Human Services</option>
                  </select>
              </div>
              <div className="form-group col-md-4">
                  <label htmlFor="GraduationDate">Graduation Date: </label>
                  <input type="text" className="form-control" name="GraduationDateField" id="GraduationDate"
                         placeholder="Spring 2021"/>
              </div>
          </div>
        );
    }
    /**
     * renders the components associated with this Account Creation page.
     * @returns {XML} : (Markup Language) for rendering the elements within this page
     */
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <form role="form" method="POST" action="#">
                            <fieldset>
                                <legend><h1 className="text-center">General Registration </h1></legend>
                                {this.basicAccountFields()}
                            </fieldset>
                            <fieldset>
                                <legend align="top">Location Details</legend>
                                {this.addressField()}
                            </fieldset>
                            <fieldset>
                                <legend align="top">Student Information</legend>
                                {this.studentStatusFields()}
                                <div className="form-group col-md-12 hidden">
                                    <label htmlFor="specify">Please Specify</label>
                                    <textarea className="form-control" id="specify" name=""> </textarea>
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend align="top"> Emergency Info</legend>
                                <div className="checkbox">
                                    <label>

                                        <input type="checkbox" value="" id=""/>
                                         I have a mobility concern that would require an emergency responder?

                                        <input type="checkbox" name = "hasMobilityConcernField" id="mobilityCheckbox"/>
                                         have a mobility concern that would require an emergency responder?

                                    </label>
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox" value="" id=""/>
                                        I need an emergency responder for medical transport to a hospital to receive time

                                        <input type="checkbox" name = "reqEmsTransportField" id="emsCheckbox"/>
                                        need an emergency responder for medical transport to a hospital to receive time
>>>>>>> .merge_file_kIrYKb
                                        sensative medications for a current medical condition?
                                    </label>
                                </div>
                            </fieldset>
                            <div className="form-group">
                                <div id ="submit-Container">
                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox" id=""/>
                                            I accept the <a href="#">terms and conditions</a>
                                        </label>
                                    </div>
                                    <br/>
                                    <button type="submit" className="btn btn-primary">Register</button>
                                    <br/>
                                    <br/>
                                    <a href="#">Already have an account?</a>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default SignUpForm;