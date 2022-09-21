import { FC, memo } from "react";
import { Link } from "react-router-dom";
import { RouteNames } from "../../routes";

import { images } from "../../constants";
import { useAppSelector } from "../../hooks/useRedux";

const { Icon_shopBag, Icon_user, Icon_heart } = images.icons;

const Actions: FC = () => {
    const { cartItems, favourites } = useAppSelector((state) => state.product);

    return (
        <div className="header__actions actions-header">
            <button type="button" className="actions-header__icon actions-header__icon_favourites">
                <Icon_heart />
                {favourites.length > 0 && <span>{favourites.length}</span>}
                <ul className="favourites-header__list"></ul>
            </button>
            <Link to={RouteNames.CARD} className="actions-header__icon actions-header__icon_card">
                <Icon_shopBag />
                {cartItems.length > 0 && <span>{cartItems.length}</span>}
            </Link>
            <Link to={RouteNames.ACCOUNT} className="actions-header__btn btn">
                Account
            </Link>
            <Link to={RouteNames.ACCOUNT} className="actions-header__btn-icon">
                <Icon_user />
            </Link>
        </div>
    );
};

export default memo(Actions);
