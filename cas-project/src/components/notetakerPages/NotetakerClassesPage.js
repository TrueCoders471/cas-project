import React from 'react';
import './NTCPStyleSheet.css';

class MyClassesNotetakerPage extends React.Component {
    openClass1() {
        location.href = "/notetakerClass1";
    }

    openClass2() {
        location.href = "/notetakerClass2";
    }

    openClass3() {
        location.href = "/notetakerClass3";
    }

    openClass4() {
        location.href = "/notetakerClass4";
    }

    openClass5() {
        location.href = "/notetakerClass5";
    }

    logOut() {
        location.href = "/";
    }
    render() {
        return (
            <div>
                <span className="glyphicon glyphicon-log-out" onClick={this.logOut}/>
                <div className="section group">
                    <div className="col span_1_of_5">
                        <div className="card">
                            <br/>
                            <div className="container" onClick={this.openClass1}>
                                <h4><b>ITEC 120</b></h4>
                                <p>Principles of Computer Science I</p>
                            </div>
                        </div>
                    </div>
                    <div className="col span_1_of_5">
                        <div className="card" onClick={this.openClass4}>
                            <div className="container">
                                <h4><b>ITEC 110</b></h4>
                                <p>Information Technology</p>
                            </div>
                        </div>
                    </div>
                    <div className="col span_1_of_5">
                        <div className="card" onClick={this.openClass5}>
                            <div className="container">
                                <h4><b>CORE 102</b></h4>
                                <p>Core Curriculum</p>
                            </div>
                        </div>
                    </div>
                    <div className="col span_1_of_5">
                        <div className="card" onClick={this.openClass2}>
                            <div className="container">
                                <h4><b>ART 100</b></h4>
                                <p>Art appreciation</p>
                            </div>
                        </div>
                    </div>
                    <div className="col span_1_of_5">
                        <div className="card" onClick={this.openClass3}>
                            <div className="container">
                                <h4><b>GEOG 101</b></h4>
                                <p>World Geography</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<p>My Classes Notetaker: A grid of classes her with a button for each</p> */}
            </div>
        );
    }
}

export default MyClassesNotetakerPage;