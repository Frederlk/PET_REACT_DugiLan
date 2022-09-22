import { Helmet } from "react-helmet";
import { Banner, Body, Companies, Home, Side } from "../_containers";

const HomePage = () => {
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
