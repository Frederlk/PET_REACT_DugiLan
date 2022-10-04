import { FC, memo, useMemo, useCallback, useState, useEffect } from "react";
import { useActions, useSetPrices } from "../../../hooks";
import { useAppSelector } from "../../../hooks/useRedux";
import { IProduct } from "../../../models";
import { images } from "../../../constants";
import PriceItem from "./PriceItem";
import Checkbox from "../../../_components/FormComponents/Checkbox";
import { useLocation } from "react-router-dom";

const { icon_check } = images.icons;

const SingleSidePrice: FC<{ item: IProduct }> = ({ item }) => {
    const { price, discount, included, id, extra } = item;

    const { addToCart, removeFromCart } = useActions();
    const { cartItems } = useAppSelector((state) => state.product);

    const [totalPrice, setTotalPrice] = useState(price);
    const { priceDiscount, priceTax } = useSetPrices(price, discount);

    useEffect(() => {
        setTotalPrice(priceDiscount || priceTax);
    }, [price]);

    const includedItems = useMemo(
        () =>
            included?.map((item, i) => (
                <li key={item + i} className="price-workshop__item">
                    <span className="price-workshop__icon">
                        <img src={icon_check} alt="Included" />
                    </span>
                    <div className="price-workshop__text">{item}</div>
                </li>
            )),
        [included]
    );

    const extraItems = useMemo(
        () =>
            extra?.map(({ text, price }, i) => (
                <li key={text + i} className="price-workshop__item">
                    <Checkbox
                        price={price}
                        setTotalPrice={setTotalPrice}
                        name={`extra_${i}`}
                        id={`extra_${i}`}
                    >
                        {text} <span>+ {price.toFixed(2)} $</span>
                    </Checkbox>
                </li>
            )),
        [extra, totalPrice]
    );

    const { pathname } = useLocation();
    const inCart = cartItems.filter((item) => item.id === id)[0];
    const onHandleCart = useCallback(() => {
        inCart
            ? removeFromCart(id)
            : addToCart({
                  id: id,
                  price: totalPrice,
                  qty: 1,
              });
    }, [inCart, pathname, totalPrice]);

    return (
        <div className="aside-single__price price-workshop">
            <div className="price-workshop__top">
                <div className="price-workshop__title">Licence Price</div>
                <div className="price-workshop__price">$ {totalPrice.toFixed(2)}</div>
            </div>

            <ul className="price-workshop__list">
                {included && includedItems}
                {extra && extraItems}
            </ul>

            <div className="price-workshop__total">
                {discount && <PriceItem text="Discount code %" price={`- ${discount}%`} />}

                <PriceItem text="Subtotal price" price={`${price} $`} />

                <PriceItem text="Price after Tax" price={`${priceTax.toFixed(2)} $`} />

                {discount && (
                    <PriceItem text="Price after discount" price={`${priceDiscount.toFixed(2)} $`} />
                )}

                <PriceItem text="Total Price" total price={`${totalPrice.toFixed(2)} $`} />
            </div>

            <div className="price-workshop__btn-wrap">
                <button
                    type="button"
                    onClick={onHandleCart}
                    className={`price-workshop__btn btn ${inCart ? "_inCart" : ""}`}
                >
                    {inCart ? "Remove from cart" : "Add to cart"}
                </button>
            </div>
        </div>
    );
};

export default memo(SingleSidePrice);
