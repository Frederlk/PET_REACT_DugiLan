import React from "react";
import { Helmet } from "react-helmet";
import Banner from "../_containers/HomePage/Banner";
import Body from "../_containers/HomePage/Body/Body";
import Companies from "../_containers/HomePage/Companies";
import Home from "../_containers/HomePage/Home";
import Side from "../_containers/HomePage/Side/Side";

const HomePage = () => {
    // $(".content-workshop__slick").slick({
    //     speed: 800,
    //     arrows: false,
    //     dots: true,
    //     slidesToShow: 1,
    //     autoplay: true,
    //     autoplaySpeed: 3000,
    //     appendDots: ".content-workshop__pagination",
    // });

    return (
        <>
            <Helmet>
                <meta name="Home Page" content="Home Page" />
                <title>DugiLan</title>
            </Helmet>

            <Home />

            <Companies />

            <div className="page__body body">
                <div className="body__container">
                    <Side />
                    <Body />
                </div>
            </div>

            <Banner />
        </>
    );
};

export default HomePage;
