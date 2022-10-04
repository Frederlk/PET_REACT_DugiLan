import { memo, FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { ICartProduct } from "../../models";
import { RouteNames } from "../../routes";
import { CardItem } from "../../_components";

const OrderDetails: FC = () => {
    const { state } = useLocation();
    const { total, subtotal, discount } = state.prices;

    return (
        <div className="body-thanks__details thanks-details">
            <h3 className="thanks-details__title">Order details</h3>
            <div className="thanks-details__table">
                <div className="thanks-details__row thanks-details__row_top">
                    <div className="thanks-details__td thanks-details__td_1">Products</div>
                    <div className="thanks-details__td thanks-details__td_2">Order ID</div>
                    <div className="thanks-details__td thanks-details__td_3">Quantity</div>
                    <div className="thanks-details__td thanks-details__td_4">Suptotal</div>
                </div>
                {state.products.map((item: ICartProduct) => (
                    <CardItem className="thanks-details" key={item.id} item={item} />
                ))}

                <div className="thanks-details__row thanks-details__row_total">
                    <div className="thanks-details__td thanks-details__td_label">Subtotal</div>
                    <div className="thanks-details__td thanks-details__td_info">{subtotal.toFixed(2)} $</div>
                </div>
                <div className="thanks-details__row thanks-details__row_total">
                    <div className="thanks-details__td thanks-details__td_label">Discount Cupon</div>
                    <div className="thanks-details__td thanks-details__td_info">
                        - {discount.toFixed(2)} $
                    </div>
                </div>
                <div className="thanks-details__row thanks-details__row_total">
                    <div className="thanks-details__td thanks-details__td_label">Total</div>
                    <div className="thanks-details__td thanks-details__td_info">{total.toFixed(2)} $</div>
                </div>
            </div>
            <Link to={RouteNames.ACCOUNT} state={{ orderSuccess: true }} className="thanks-details__btn btn">
                See your themes
            </Link>
        </div>
    );
};

export default memo(OrderDetails);
