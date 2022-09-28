import { FC, memo, useMemo } from "react";
import { Link } from "react-router-dom";
import { IOrder } from "../../models";
import { data } from "../../constants";
import { RouteNames } from "../../routes";
import { useAppSelector } from "../../hooks/useRedux";

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

const Orders: FC = () => {
    const { user } = useAppSelector((state) => state.auth);

    const ordersItems = useMemo(() => {
        if (user && user.orders && user.orders.length > 0) {
            return user.orders.map((item) => <OrderItem key={item.orderId} item={item} />);
        }
    }, [user]);

    return (
        <div className="content-account__orders account-orders">
            <h2 className="account-orders__title">Orders</h2>
            <div className="account-orders__content">
                {ordersItems ? (
                    <>
                        <div className="account-orders__row account-orders__row_top">
                            <div className="account-orders__td account-orders__td_1">Order name</div>
                            <div className="account-orders__td account-orders__td_2">Order ID</div>
                            <div className="account-orders__td account-orders__td_3">Status</div>
                            <div className="account-orders__td account-orders__td_4">QTY</div>
                            <div className="account-orders__td account-orders__td_5">Total</div>
                        </div>
                        {ordersItems}
                    </>
                ) : (
                    <div className="account-orders__empty">Your order history is empty</div>
                )}
            </div>
        </div>
    );
};

export default memo(Orders);
