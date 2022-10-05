import { FC, memo, useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useActions } from "../hooks";
import { useAppSelector } from "../hooks/useRedux";
import { RouteNames } from "../routes";

const CardSide: FC<{ className: string; card?: boolean }> = ({ className, card }) => {
    const { coupon, cartItems } = useAppSelector((state) => state.product);
    const { setPrices } = useActions();
    const [total, setTotal] = useState(0);
    const { isAuth } = useAppSelector((state) => state.user);

    const subtotal = useMemo(() => {
        return cartItems
            .map((item) => item.price * item.qty)
            .reduce((previousValue: number, currentValue: number) => previousValue + currentValue, 0);
    }, [cartItems]);

    const discount = useMemo(() => {
        return coupon ? subtotal * (coupon.discount / 100) : 0;
    }, [subtotal, coupon]);

    useEffect(() => {
        setTotal(subtotal - discount);
    }, [subtotal, discount]);

    useEffect(() => {
        setPrices({
            subtotal,
            discount,
            total,
        });
    }, [total]);

    return (
        <aside className={`${className || ""} aside-card`}>
            <section className="aside-card__menu card">
                <div className="card__inner">
                    {card && <h3 className="card__title">My Profile</h3>}
                    <div className="card__body">
                        <div className="card__item">
                            <div className="card__label">Subtotal</div>
                            <div className="card__price">{subtotal.toFixed(2)} $</div>
                        </div>
                        <div className="card__item">
                            <div className="card__label">Discount Cupon</div>
                            <div className="card__price">- {discount.toFixed(2)} $</div>
                        </div>
                        <div className="card__item card__item_active">
                            <div className="card__label">Total</div>
                            <div className="card__price">{total.toFixed(2)} $</div>
                        </div>
                    </div>
                </div>
                {card && isAuth && cartItems.length > 0 && (
                    <Link to={RouteNames.CHECKOUT} className="card__btn btn">
                        Proceed to checkout
                    </Link>
                )}
                {cartItems.length === 0 && isAuth && (
                    <Link to={RouteNames.BROWSE} className="card__btn btn">
                        Browse Products
                    </Link>
                )}
                {!isAuth && (
                    <Link to={RouteNames.ACCOUNT} className="card__btn btn">
                        Please Login
                    </Link>
                )}
            </section>
        </aside>
    );
};

export default memo(CardSide);
