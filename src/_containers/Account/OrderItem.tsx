import { FC, memo } from "react";
import { Link } from "react-router-dom";
import { data } from "../../constants";
import { IOrder } from "../../models";
import { RouteNames } from "../../routes";

const OrderItem: FC<{ item: IOrder }> = ({ item }) => {
    const { orderId, productId, totalPrice, download, qty, status } = item;
    const { title, logo } = data.productItems.filter((p) => p.id === productId)[0];

    return (
        <div className="account-orders__row">
            <Link to={RouteNames.PRODUCT_LINK + title} className="account-orders__td account-orders__td_1">
                {logo && (
                    <span>
                        <img src={logo} alt={title} />
                    </span>
                )}
                {title}
            </Link>
            <div className="account-orders__td account-orders__td_2">{orderId}</div>
            <div className="account-orders__td account-orders__td_3">{status}</div>
            <div className="account-orders__td account-orders__td_4">{qty}</div>
            <div className="account-orders__td account-orders__td_5">$ {totalPrice}</div>
            <div className="account-orders__td account-orders__td_6 account-orders__td_more">
                <Link to={RouteNames.PRODUCT_LINK + title}>details</Link>
            </div>
            <div className="account-orders__td account-orders__td_7">
                <a href={download} download className="account-orders__td_btn btn">
                    Download
                </a>
            </div>
        </div>
    );
};

export default memo(OrderItem);
