import { FC, useMemo } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useAppSelector } from "../hooks/useRedux";
import { RouteNames } from "../routes";
import { CardItem, CardSide } from "../_components";
import { Coupon } from "../_containers";

const ShoppingCard: FC = () => {
    const { cartItems } = useAppSelector((state) => state.product);

    const productItems = useMemo(
        () => cartItems.map((item) => <CardItem className="content-card" key={item.id} card item={item} />),
        [cartItems]
    );

    return (
        <>
            <Helmet>
                <meta name="Shopping Card" content="Shopping Card" />
                <title>Shopping Card</title>
            </Helmet>

            <div className="page__body body-card">
                <div className="body-card__container">
                    <h2 className="body-card__title">Shopping Card</h2>
                    <div className="body-card__flex">
                        {productItems.length > 0 ? (
                            <section className="body-card__content content-card">
                                <div className="content-card__table">
                                    <div className="content-card__row content-card__row_top">
                                        <div className="content-card__td content-card__td_1">Products</div>
                                        <div className="content-card__td content-card__td_2">Price</div>
                                        <div className="content-card__td content-card__td_3">Quantity</div>
                                        <div className="content-card__td content-card__td_4">Subtotal</div>
                                    </div>
                                    {productItems}
                                </div>
                                <Coupon />
                            </section>
                        ) : (
                            <section className="body-card__empty">
                                <h4 className="body-card__empty-title">Your Shopping Card is empty</h4>
                            </section>
                        )}
                        <CardSide className="body-card__aside" card />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShoppingCard;
