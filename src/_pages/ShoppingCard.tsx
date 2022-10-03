import { FC, useMemo } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useAppSelector } from "../hooks/useRedux";
import { RouteNames } from "../routes";
import CardItem from "../_containers/Card/CardItem";
import Coupon from "../_containers/Card/Coupon";
import Side from "../_containers/Card/Side";

const ShoppingCard: FC = () => {
    const { cartItems } = useAppSelector((state) => state.product);

    const productItems = useMemo(
        () => cartItems.map((item) => <CardItem key={item.id} item={item} />),
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
                                    <div className="content-card__inner">
                                        <div className="content-card__row content-card__row_top">
                                            <div className="content-card__td content-card__td_1">
                                                Products
                                            </div>
                                            <div className="content-card__td content-card__td_2">Price</div>
                                            <div className="content-card__td content-card__td_3">
                                                Quantity
                                            </div>
                                            <div className="content-card__td content-card__td_4">
                                                Subtotal
                                            </div>
                                        </div>
                                        {productItems}
                                    </div>
                                </div>
                                <Coupon />
                            </section>
                        ) : (
                            <section className="body-card__empty">
                                <h4 className="body-card__empty-title">Your Shopping Card is empty</h4>
                                <Link to={RouteNames.BROWSE} className="body-card__empty-btn btn">
                                    Browse Products
                                </Link>
                            </section>
                        )}
                        <Side />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShoppingCard;
