import React from 'react';

class MyClassesNotetakerPage extends React.Component {
    openClass() {
        location.href = "/NotetakerClass";
    }
    render() {
        return (
            <div>
                <p>My Classes Notetaker: A grid of classes her with a button for each</p>
                <button className="btn btn-lg btn-primary" type="submit" onClick={this.openClass}>View Class</button>
            </div>
        );
    }
}

export default MyClassesNotetakerPage;