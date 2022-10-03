import { FC, memo, useMemo } from "react";
import { useAppSelector } from "../../hooks/useRedux";
import OrderItem from "./OrderItem";

const Orders: FC = () => {
    const { user } = useAppSelector((state) => state.user);

    const ordersItems = useMemo(() => {
        if (user && user.orders && user.orders.length > 0) {
            return user.orders.map((item) => <OrderItem key={item.orderId} item={item} />);
        }
    }, [user]);

    return (
        <div className="content-account__orders account-orders">
            <h2 className="account-orders__title">Orders</h2>
            <div className={`account-orders__content ${ordersItems ? "_full" : ""}`}>
                {ordersItems ? (
                    <>
                        <div className="account-orders__table">
                            <div className="account-orders__row account-orders__row_top">
                                <div className="account-orders__td account-orders__td_1">Order name</div>
                                <div className="account-orders__td account-orders__td_2">Order ID</div>
                                <div className="account-orders__td account-orders__td_3">Status</div>
                                <div className="account-orders__td account-orders__td_4">QTY</div>
                                <div className="account-orders__td account-orders__td_5">Total</div>
                            </div>
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
