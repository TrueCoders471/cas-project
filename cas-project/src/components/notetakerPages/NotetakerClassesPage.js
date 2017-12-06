import React from 'react';
//import '../notetakerPages/NTCPStyleSheet.css';

class MyClassesNotetakerPage extends React.Component {
    openClass() {
        location.href = "/NotetakerClass";
    }

    render() {
        return (
            <div>
                <div className="section group">
                    <div className="col span_1_of_5">
                        <div className="card">
                            <div className="container">

                                <h4><b>ITEC 120</b></h4>
                                <p>Principles of Computer Science I</p>
                            </div>
                        </div>
                    </div>
                    <div className="col span_1_of_5">
                        <div className="card">
                            <div className="container">
                                <h4><b>ITEC 110</b></h4>
                                <p>Information Technology</p>
                            </div>
                        </div>
                    </div>
                    <div className="col span_1_of_5">
                        <div className="card">
                            <div className="container">
                                <h4><b>ITEC 110</b></h4>
                                <p>Information Technology</p>
                            </div>
                        </div>
                    </div>
                    <div className="col span_1_of_5">
                        <div className="card">
                            <div className="container">
                                <h4><b>ITEC 110</b></h4>
                                <p>Information Technology</p>
                            </div>
                        </div>
                    </div>
                    <div className="col span_1_of_5">
                        <div className="card">
                            <div className="container">
                                <h4><b>ITEC 110</b></h4>
                                <p>Information Technology</p>
                            </div>
                        </div>
                    </div>
                </div>
                <p>My Classes Notetaker: A grid of classes her with a button for each</p>
                <button className="btn btn-lg btn-primary" type="submit" onClick={this.openClass}>View Class</button>
            </div>
        );
    }
}

export default MyClassesNotetakerPage;