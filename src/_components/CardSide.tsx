import { FC, memo, useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../hooks/useRedux";
import { RouteNames } from "../routes";

const CardSide: FC<{ className: string; card?: boolean }> = ({ className, card }) => {
    const { coupon, cartItems } = useAppSelector((state) => state.product);
    const [total, setTotal] = useState(0);

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
                {card && (
                    <Link to={RouteNames.CHECKOUT} className="card__btn btn">
                        Proceed to checkout
                    </Link>
                )}
            </section>
        </aside>
    );
};

export default memo(CardSide);
