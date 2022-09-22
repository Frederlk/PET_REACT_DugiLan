import { FC, memo } from "react";
import { Link } from "react-router-dom";
import { images } from "../../../constants";
import { useActions } from "../../../hooks";
import { useAppSelector } from "../../../hooks/useRedux";
import { IProduct } from "../../../models";
import { RouteNames } from "../../../routes";

const { icon_heart_2, icon_heart_full, icon_shopCart_2, icon_shopCart_3, icon_eye } = images.icons;

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
                <span className="product-item__number">{isFavourite ? inFavourites + 1 : inFavourites}</span>
                <button type="button" onClick={onHandleFavourite} className="product-item__heart">
                    {isFavourite ? (
                        <img src={icon_heart_full} alt="Remove from Favourites" />
                    ) : (
                        <img src={icon_heart_2} alt="Add to Favoutites" />
                    )}
                </button>
            </div>
            <div className="product-item__buttons">
                <Link to={RouteNames.BROWSE + "/" + title} className="product-item__icon">
                    <img src={icon_eye} alt="Inspect" />
                </Link>
                <button
                    type="button"
                    onClick={onHandleCart}
                    className={`product-item__icon ${inCart ? "_active" : ""}`}
                >
                    {inCart ? (
                        <img src={icon_shopCart_3} alt="Remove From Cart" />
                    ) : (
                        <img src={icon_shopCart_2} alt="Add to cart" />
                    )}
                </button>
            </div>
        </div>
    );
};

export default memo(ProductHover);
