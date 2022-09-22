import { FC } from "react";
import { Link } from "react-router-dom";

import { RouteNames } from "../routes";
import { images } from "../constants";
import { Picture } from ".";

const { more01, more01_WEBP, more02, more02_WEBP } = images.moreImages;

const Banner: FC = () => {
    return (
        <section className="page__banner banner">
            <div className="banner__container">
                <div className="banner__flex">
                    <div className="banner__content">
                        <h2 className="banner__title">We build apps and websites</h2>
                        <p className="banner__text">
                            From multipurpose themes to niche templates,you’ll always find something that
                            catches your eye.
                        </p>
                        <div className="banner__bottom">
                            <Link to={RouteNames.HELP} className="banner__btn btn">
                                Contact us
                            </Link>
                            <Link to={RouteNames.BROWSE} className="banner__more">
                                or see our portfolio
                            </Link>
                        </div>
                    </div>
                    <div className="banner__images">
                        <div className="banner__phone banner__phone_1">
                            <Picture srcWebp={more01_WEBP} fallbackSrc={more01} alt="product 1" />
                        </div>
                        <div className="banner__phone banner__phone_2">
                            <Picture srcWebp={more02_WEBP} fallbackSrc={more02} alt="product 2" />
                        </div>
                        <span className="banner__bg"></span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
