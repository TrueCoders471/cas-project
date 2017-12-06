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
            <div id="HomePageView-Container" className="home-page">
            <div id = "jumbo-Container">
                    <img id = "Jumbo-Image"
                         src = {require ('./../../../public/images/homepage.jpg')}/>
                    <div id= "jumbo-caption-container">
                        <jumbo-text>Welcome To The CAS Student Notes Hub</jumbo-text>
                    </div>

            </div>
                <div id ="LowerHomepageView-Container">
                    <a href="signup">
                    <div id = "homepage-panel">
                        <img id = "panel-image"
                             src = {require ('./../../../public/images/signupPanelImage.jpg')}/>
                        <div id= "panel-shroud">
                            <panel-text>Sign Up to Access the
                                <br></br>services CAS has to offer</panel-text>
                        </div>
                    </div>
                    </a>
                    <a href="signup">
                    <div id = "homepage-panel">
                        <img id = "panel-image"
                             src = {require ('./../../../public/images/loginPanelImage.jpg')}/>
                        <div id= "panel-shroud">
                            <panel-text>Already Have An Account?
                                <br></br>Sign In Here.</panel-text>
                        </div>
                    </div>
                    </a>
                </div>
            </div>
        );

    }
}

export default HomePage;