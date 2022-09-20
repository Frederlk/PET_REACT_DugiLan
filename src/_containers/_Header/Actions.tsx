import { FC } from "react";
import { Link } from "react-router-dom";
import { RouteNames } from "../../routes";

import { images } from "../../constants";

const { icon_shopBag, icon_user, icon_heart } = images.icons;

const Actions: FC = () => {
    return (
        <div className="header__actions actions-header">
            <button type="button" className="actions-header__icon actions-header__icon_favourites">
                <img src={icon_heart} alt="Favourites" />
                <span>1</span>
                <ul className="favourites-header__list"></ul>
            </button>
            <Link to={RouteNames.CARD} className="actions-header__icon actions-header__icon_card">
                <img src={icon_shopBag} alt="Shopping Card" />
                <span>5</span>
            </Link>
            <Link to={RouteNames.ACCOUNT} className="actions-header__btn btn">
                Account
            </Link>
            <Link to={RouteNames.ACCOUNT} className="actions-header__btn-icon">
                <img src={icon_user} alt="Account" />
            </Link>
        </div>
    );
};

export default Actions;
