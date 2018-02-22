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
                    <input type="text" className="form-control" name="" id="first_name"
                           placeholder="First Name"/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="last_name">Last name</label>
                    <input type="text" className="form-control" name="last_name" id=""
                           placeholder="Last Name"/>
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="RUID">RU ID#</label>
                    <input type="text" className="form-control" name="RUID" id=""
                           placeholder="000000000"/>
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="DOB">Birth Date: </label>
                    <input type="text" className="form-control" name="DOB" id=""
                           placeholder="01-23-1998"/>
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="gender">Gender: </label>
                    <select className="form-control" name="gender" id="found_site">
                        <option selected>Choose One </option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </select>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="">Email</label>
                    <input type="email" className="form-control" name="" id="" placeholder="@Email.com"/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="">Phone #</label>
                    <input type="text" className="form-control" name="" id="" placeholder="000-000-0000"/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" name="" id="password"
                           placeholder="Password"/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="confirm_password">Confirm Password</label>
                    <input type="password" className="form-control" name="" id="confirm_password"
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
                    <label htmlFor="inputAddress2">Street</label>
                    <input type="text" className="form-control" id="inputAddress"
                           placeholder="1234 Main St"/>
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="inputAddress">Residential Hall</label>
                    <input type="text" className="form-control" id="Hall" placeholder="Tyler Hall"/>
                </div>
                <div className="form-group col-md-2">
                    <label HtmlFor="inputZip">Room #</label>
                    <input type="text" className="form-control" id="inputZip"/>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label HtmlFor="inputCity">City</label>
                        <input type="text" className="form-control" id="inputCity"/>
                    </div>
                    <div className="form-group col-md-4">
                        <label HtmlFor="inputState">State</label>
                        <select id="inputState" className="form-control">
                            <option selected>Choose One </option>
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
                        <input type="text" className="form-control" id="inputZip"/>
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
                  <select className="form-control" name="" id="country">
                      <option selected>Choose...</option>
                      <option>Transfer</option>
                      <option>Freshman</option>
                      <option>Sophomore</option>
                      <option>Junior</option>
                      <option>Senior</option>
                      <option>Graduate</option>
                  </select>
              </div>

              <div className="form-group col-md-6" id = "classStandings">
                  <label htmlFor="classStandings">Time Status </label>
                  <br/>
                  <label className="radio-inline"><input type="radio" name="optradio"/>Full Time</label>
                  <label className="radio-inline"><input type="radio" name="optradio"/>Part Time</label>
              </div>
              <div className="form-group col-md-8">
                  <label htmlFor="found_site">Major</label>
                  <select className="form-control" name="" id="found_site">
                      <option selected>Choose...</option>
                      <option>Pre-Major</option>
                      <option disabled>College of Business and Economics</option>
                      <option>Accounting</option>
                      <option>Economics</option>
                      <option>Finance</option>
                      <option>Management</option>
                      <option>Marketing</option>

                      <option disabled>College of Education and Human Development</option>
                      <option>Athletic Training</option>
                      <option>Exercise, Sport and Health Education</option>
                      <option>Interdisciplinary Studies</option>
                      <option>Nutrition and Dietetics</option>
                      <option>Recreation, Parks and Tourism</option>

                      <option disabled>College of Humanities and Behavioral Sciences</option>
                      <option>Communication</option>
                      <option>Criminal Justice</option>
                      <option>English</option>
                      <option>Foreign Languages</option>
                      <option>History</option>
                      <option>Interdisciplinary Studies in Liberal Arts</option>
                      <option>Media Studies</option>
                      <option>Philosophy and Religious Studies</option>
                      <option>Political Science</option>
                      <option>Psychology</option>
                      <option>Social Science</option>
                      <option>Sociology</option>
                      <option disabled>Artis College of Science and Technology</option>
                      <option disabled>College of Visual and Performing Arts</option>
                      <option disabled>Waldron College of Health and Human Services</option>
                  </select>
              </div>
              <div className="form-group col-md-4">
                  <label htmlFor="GraduationDate">Graduation Date: </label>
                  <input type="text" className="form-control" name="GraduationDate" id=""
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
                                    </label>
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox" value="" id=""/>
                                        I need an emergency responder for medical transport to a hospital to receive time
                                        sensative medications for a current medical condition?
                                    </label>
                                </div>
                            </fieldset>
                            <div className="form-group">
                                <div id ="submit-Container">
                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox" value="" id=""/>
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