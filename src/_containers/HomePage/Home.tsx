import { FC } from "react";
import { HomeSlider } from "..";
import { Search } from "../../_components";

const Home: FC = () => {
    return (
        <section className="page__home home">
            <div className="home__container">
                <div className="home__content content-home">
                    <h1 className="content-home__title">More than 100 Wordpress Themes & Templates</h1>
                    <Search className="content-home" />
                    <p className="content-home__text">
                        From multipurpose themes to niche templates, you’ll always find something that catches
                        your eye.
                    </p>
                </div>
                <HomeSlider />
            </div>
        </section>
    );
};

export default Home;
