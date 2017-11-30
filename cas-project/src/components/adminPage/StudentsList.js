import React from 'react';
import './AdminStyles.css';


class StudentsList extends React.Component {

    viewNotetakers(){
        location.href = './notetakersList';
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
                                Ruby Jones
                            </td>
                            <td>
                                Note Viewer
                            </td>
                            <td>
                                01/21/2016
                            </td>
                        </tr>
                        <tr>
                            <td>
                                John Snow
                            </td>
                            <td>
                                Note Viewer
                            </td>
                            <td>
                                09/02/2017
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Jack Black
                            </td>
                            <td>
                                Note Viewer
                            </td>
                            <td>
                                03/11/2017
                            </td>
                        </tr>
                    </table>
                </div>
                <br/>
                <button className="btn btn-lg btn-primary" type="submit" onClick={this.viewNotetakers}>View Note Takers</button>
                <br/><br/>
                <button className="btn btn-lg btn-primary" type="submit" onClick={this.viewForms}>CAS Forms</button>
            </div>
        );
    }
}

export default StudentsList;