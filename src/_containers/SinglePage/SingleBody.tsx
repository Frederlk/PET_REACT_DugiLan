import { FC } from "react";
import parse from "html-react-parser";
import { IProduct } from "../../models";
import { Picture } from "../../_components";
import SingleSlider from "./SingleSlider";
import SingleVideo from "./SingleVideo";

import { images } from "../../constants";
import { useAppSelector } from "../../hooks/useRedux";
import { useActions } from "../../hooks";

const { icon_heart_2, icon_heart_full } = images.icons;

const SingleBody: FC<{ item: IProduct }> = ({ item }) => {
    const { content, title, images, video, logo, subtitle, id, inFavourites } = item;

    const { addToFavourites, removeFromFavourites } = useActions();
    const { favourites } = useAppSelector((state) => state.product);
    const isFavourite = favourites.includes(id);

    const onHandleFavourite = () => {
        isFavourite ? removeFromFavourites(id) : addToFavourites(id);
    };

    return (
        <section className="body-workshop__content content-workshop">
            <div className="content-workshop__logo">
                {logo && (
                    <div className="content-workshop__image-logo">
                        <img src={logo} alt={title} />
                    </div>
                )}
                <h1 className="content-workshop__title">{title}</h1>
                <div className="content-workshop__favoutites">
                    <span className="content-workshop__number">
                        {isFavourite ? inFavourites + 1 : inFavourites}
                    </span>
                    <button type="button" onClick={onHandleFavourite} className="content-workshop__heart">
                        {isFavourite ? (
                            <img src={icon_heart_full} alt="Remove from Favourites" />
                        ) : (
                            <img src={icon_heart_2} alt="Add to Favoutites" />
                        )}
                    </button>
                </div>
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
