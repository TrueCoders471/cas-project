import React from 'react';
import {Link} from 'react-router';
import './homePage-Styles.css';
class HomePage extends React.Component {
    alternateSplashImage(){
        let myMood= document.getElementById("Jumbo-Image");
        let images=[
            "https://609a44a6cdb4586e9598-283665da9ac5a1b900d87ba1896f28bb.ssl.cf1.rackcdn.com/Radford-University-21.jpg",
            "https://cdn.lynda.com/course/373782/373782-636247511734821922-16x9.jpg"
        ];

        function change(){
            myMood.src = images.reverse()[0];
        }

        setInterval(change, 5000);
    }
    render() {
        return (
            <div id= "HomePageView-Container">
            <div id = "jumbo-Container">
                    <img id = "Jumbo-Image" src ="https://bloximages.newyork1.vip.townnews.com/roanoke.com/content/tncms/assets/v3/editorial/e/bc/ebc64c04-3d83-5912-a578-3b51a421d95c/59baa0abb2ffa.image.jpg?resize=1200%2C800"/>
                    {this.alternateSplashImage()}

            </div>
                <br></br>
                <Link to="login" className="btn btn-primary btn-lg">Login here</Link>
            </div>
        );

    }
}

export default HomePage;