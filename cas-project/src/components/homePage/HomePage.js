import React from 'react';
import {Link} from 'react-router';
import './homePage-Styles.css';
class HomePage extends React.Component {
    // alternateSplashImage(){
    //     let myMood= document.getElementById("Jumbo-Image");
    //     let images=[
    //         "https://609a44a6cdb4586e9598-283665da9ac5a1b900d87ba1896f28bb.ssl.cf1.rackcdn.com/Radford-University-21.jpg",
    //         "https://cdn.lynda.com/course/373782/373782-636247511734821922-16x9.jpg"
    //     ];
    //
    //     function change(){
    //         myMood.src = images.reverse()[0];
    //     }
    //
    //     setInterval(change, 5000);
    // }
    render() {
        return (
            <div id= "HomePageView-Container">
            <div id = "jumbo-Container">
                    <img id = "Jumbo-Image"
                         src = {require ('./../../../public/images/homepage.jpg')}/>
            </div>
                <br></br>
                <Link to="login" className="btn btn-primary btn-lg">Login here</Link>
            </div>
        );

    }
}

export default HomePage;