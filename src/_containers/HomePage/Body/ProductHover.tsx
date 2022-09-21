import { FC, memo } from "react";
import { Link } from "react-router-dom";
import { images } from "../../../constants";
import { useActions } from "../../../hooks";
import { useAppSelector } from "../../../hooks/useRedux";
import { IProduct } from "../../../models";
import { RouteNames } from "../../../routes";

import { ReactComponent as ReactLogo } from "../../../assets/img/icons/heart_full.svg";

const { Icon_heart_b, Icon_heart_full, Icon_cart, Icon_eye } = images.icons;

const ProductHover: FC<{ item: IProduct }> = ({ item }) => {
    const { id, inFavourites, title } = item;

    const { addToCart, addToFavourites, removeFromCart, removeFromFavourites } = useActions();
    const { cartItems, favourites } = useAppSelector((state) => state.product);

    const isFavourite = favourites.includes(id);
    const inCart = cartItems.includes(id);

    const onHandleFavourite = () => {
        isFavourite ? removeFromFavourites(id) : addToFavourites(id);
    };

    const onHandleCart = () => {
        inCart ? removeFromCart(id) : addToCart(id);
    };

    return (
        <div className="product-item__hover">
            <div className="product-item__top">
                <span className="product-item__number">{inFavourites}</span>
                <button type="button" onClick={onHandleFavourite} className="product-item__heart">
                    {isFavourite ? <Icon_heart_full /> : <Icon_heart_b />}
                </button>
            </div>
            <div className="product-item__buttons">
                <Link to={RouteNames.BROWSE + "/" + title} className="product-item__icon">
                    <Icon_eye />
                </Link>
                <button type="button" onClick={onHandleCart} className="product-item__icon">
                    <Icon_cart />
                </button>
            </div>
        </div>
    );
};

export default memo(ProductHover);
