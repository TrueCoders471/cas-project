import React from 'react';
//npm install --save html-to-reactimport ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import './Accommodation-Styles.css';

class AcademicAccommodationsContract extends React.Component {
    formInfo(){
        return(
        <div className="form-group col-md-12">
            <div id="RegStudent-border">
                <div className="form-group col-md-6">
                    <label htmlFor="inputAddress">Street</label>
                    <input type="text" name = "addressField" className="form-control" id="inputAddress"
                           placeholder="1234 Main St"/>
                </div>
            </div>
        </div>
        );
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div id = "primary" className="col-md-8 col-md-offset-2">
                        <form role="form" method="POST" action="#">
                            <fieldset>
                                <legend><h1 className="text-center">Academic Accommodations Contract</h1></legend>
                                {this.formInfo()}
                            </fieldset>

                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default AcademicAccommodationsContract;