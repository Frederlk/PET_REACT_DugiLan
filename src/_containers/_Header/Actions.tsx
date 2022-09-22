import { FC, memo, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RouteNames } from "../../routes";

import { images } from "../../constants";
import { useAppSelector } from "../../hooks/useRedux";
import Favourites from "./Favourites";

const { icon_shopBag_1, icon_user } = images.icons;

const Actions: FC = () => {
    const { cartItems } = useAppSelector((state) => state.product);

    return (
        <div className="header__actions actions-header">
            <Favourites />
            <Link to={RouteNames.CARD} className="actions-header__icon actions-header__icon_card">
                <img src={icon_shopBag_1} alt="Cart" />
                {cartItems.length > 0 && <span>{cartItems.length}</span>}
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

export default memo(Actions);
