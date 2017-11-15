import React from 'react';
import {IndexLink, Link} from 'react-router';

class Footer extends React.Component {
    render() {
        return (
            <div>
                <h3>This is a Footer with navigation</h3>
                <IndexLink to="/" activeClassName="active">Home</IndexLink>
                {" | "}
                <Link to="/login" activeClassName="active">Login</Link>
                {" | "}
                <IndexLink to="admin" activeClassName="active">Admin Page</IndexLink>
                {" | "}
                <Link to="/student" activeClassName="active">Student Page</Link>
                {" | "}
                <IndexLink to="/notetaker" activeClassName="active">Notetaker Page</IndexLink>
                {" | "}
                <Link to="/faculty" activeClassName="active">Faculty Page</Link>
                {" | "}
            </div>
        );
    }
}

export default Footer;
