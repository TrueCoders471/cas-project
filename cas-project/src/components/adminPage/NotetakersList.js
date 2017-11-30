import React from 'react';
import './AdminStyles.css';

class NotetakersList extends React.Component {

    viewStudents(){
        location.href = './studentsList';
    }

    viewForms(){
        location.href = './casForms';
    }

    render() {
        return (
            <div>
                <br/>
                <div id="Center">
                    <table>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Account Type
                            </th>
                            <th>
                                Date Submitted
                            </th>
                        </tr>
                        <tr>
                            <td>
                                Jane Doe
                            </td>
                            <td>
                                Note Taker
                            </td>
                            <td>
                                08/14/2017
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Bob Ross
                            </td>
                            <td>
                                Note Taker
                            </td>
                            <td>
                                06/20/2017
                            </td>
                        </tr>
                        <tr>
                            <td>
                                James Smith
                            </td>
                            <td>
                                Note Taker
                            </td>
                            <td>
                                05/11/2016
                            </td>
                        </tr>
                    </table>
                </div>
                <br/>
                <button className="btn btn-lg btn-primary" type="submit" onClick={this.viewStudents}>View Registered Note Viewers</button>
                <br/><br/>
                <button className="btn btn-lg btn-primary" type="submit" onClick={this.viewForms}>CAS Forms</button>
            </div>
        );
    }
}

export default NotetakersList;