import { FC, memo } from "react";
import { Link } from "react-router-dom";

import { data, images } from "../../constants";
import { useActions } from "../../hooks";
import { RouteNames } from "../../routes";

const { icon_x } = images.icons;

const FavouritesItem: FC<{ id: string }> = ({ id }) => {
    const { title, price } = data.productItems.filter((item) => item.id === id)[0];

    const { removeFromFavourites } = useActions();

    return (
        <li className="favourites-header__item">
            <div className="favourites-header__info">
                <Link to={RouteNames.PRODUCT_LINK + title} className="favourites-header__title">
                    {title}
                </Link>
                <div className="favourites-header__price">${price}</div>
            </div>
            <button
                type="button"
                onClick={() => removeFromFavourites(id)}
                className="favourites-header__remove"
            >
                <img src={icon_x} alt="Remove From Favourites" />
            </button>
        </li>
    );
};

export default memo(FavouritesItem);
