import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Header from './common/Header';
import Footer from './common/Footer';
import '../styles/styles.css';

class App extends Component {

    render() {
        return (
            <div className="App">
                <Header/>
                {this.props.children}
                <div className="footer">
                    <Footer/>
                </div>
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;
