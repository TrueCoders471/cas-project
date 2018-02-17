import React from 'react';
import './SignUpForm-Styles.css';
class SignUpForm extends React.Component {
    basicAccountFields() {
        return (<fieldset>
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
            <div className="form-group col-md-12">
                <label htmlFor="">Email</label>
                <input type="email" className="form-control" name="" id="" placeholder="Email"/>
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
        </fieldset>
        );
    }
    addressField(){
        return (
            <div>
                <div className="form-group col-md-12">
                    <label htmlFor="inputAddress">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                </div>
                <div className="form-group col-md-12">
                    <label htmlFor="inputAddress2">Address 2</label>
                    <input type="text" className="form-control" id="inputAddress2"
                           placeholder="Apartment, studio, or floor"/>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label HtmlFor="inputCity">City</label>
                        <input type="text" className="form-control" id="inputCity"/>
                    </div>
                    <div className="form-group col-md-4">
                        <label HtmlFor="inputState">State</label>
                        <select id="inputState" className="form-control">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div className="form-group col-md-2">
                        <label HtmlFor="inputZip">Zip</label>
                        <input type="text" className="form-control" id="inputZip"/>
                    </div>
                </div>
            </div>
        );
    }

    /**
     * renders the components associated with this Account Creation page
     * @returns {XML} : (Markup Language) for rendering the elements within this page
     */
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <form role="form" method="POST" action="#">
                            <legend><h1 className="text-center">General Registration </h1></legend>
                            {this.basicAccountFields()}
                            <fieldset>
                                <legend align="top">Location Details</legend>
                                {this.addressField()}
                                <legend align="top">Student Information</legend>
                                <div className="form-group col-md-6">
                                    <label htmlFor="country">Class Standing</label>
                                    <select className="form-control" name="" id="country">
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
                                <div className="form-group col-md-12">
                                    <label htmlFor="found_site">Major</label>
                                    <select className="form-control" name="" id="found_site">

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

                                        <option value="other" >Other</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-12 hidden">
                                    <label htmlFor="specify">Please Specify</label>
                                    <textarea className="form-control" id="specify" name=""> </textarea>
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