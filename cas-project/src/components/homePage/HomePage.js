import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                Home page here
                <div className="jumbotron">
                    <h1>CAS - Center for Accessability Services </h1>
                    <p>Build using React, Redux and React Router</p>

                    <Link to="login" className="btn btn-primary btn-lg">Login here</Link>
                </div>
            </div>
        );

    }
}

export default HomePage;