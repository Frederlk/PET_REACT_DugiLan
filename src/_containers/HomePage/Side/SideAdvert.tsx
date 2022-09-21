import { FC } from "react";
import { images } from "../../../constants";
import { Picture } from "../../../_components";

const { more03, more03_WEBP } = images.moreImages;

const SideAdvert: FC = () => {
    return (
        <section className="aside-body__advert advert">
            <a href="https://www.squarespace.com/" target="_blank" rel="noreferrer" className="advert__inner">
                <div className="advert__image-ibg">
                    <Picture srcWebp={more03_WEBP} fallbackSrc={more03} alt="Squarespace" />
                </div>
                <div className="advert__body">
                    <p className="advert__text">
                        Create your beautiful portfolio website with Squarespace. Start your free trial.
                    </p>
                    <div className="advert__label">ads via Carbon</div>
                </div>
            </a>
        </section>
    );
};

export default SideAdvert;
