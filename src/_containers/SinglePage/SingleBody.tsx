import { FC } from "react";
import { IProduct } from "../../models";
import parse from "html-react-parser";
import SingleVideo from "./SingleVideo";
import SingleSlider from "./SingleSlider";
import { Picture } from "../../_components";

const SingleBody: FC<{ item: IProduct }> = ({ item }) => {
    const { content, title, images, video, logo, subtitle } = item;

    return (
        <section className="body-workshop__content content-workshop">
            <div className="content-workshop__logo">
                {logo && (
                    <div className="content-workshop__image-logo">
                        <img src={logo} alt={title} />
                    </div>
                )}
                <h1 className="content-workshop__title">{title}</h1>
            </div>
            {subtitle && <div className="content-workshop__subtitle">{subtitle}</div>}
            {video && <SingleVideo video={video} />}
            {content && <div className="content-workshop__text">{parse(content)}</div>}
            {images && images.length > 1 && <SingleSlider images={images} />}
            {images && images.length === 1 && (
                <div className="content-workshop__image-ibg">
                    <Picture srcWebp={images[0].webp!} fallbackSrc={images[0].img} alt={images[0].alt} />
                </div>
            )}
        </section>
    );
};

export default SingleBody;
