import { FC, useMemo } from "react";
import { useAppSelector } from "../../hooks/useRedux";
import { CardOrderItem, Payment } from "..";
import { CardSide } from "../../_components";

const Order: FC = () => {
    const { cartItems } = useAppSelector((state) => state.product);

    const orderItems = useMemo(() => {
        return cartItems.map((item) => <CardOrderItem id={item.id} key={item.id} />);
    }, [cartItems]);

    return (
        <section className="body-billing__order order-billing">
            <h2 className="order-billing__title">Your order</h2>
            <div className="order-billing__products products-billing">
                {orderItems.length > 0 ? (
                    orderItems
                ) : (
                    <div className="order-billing__empty">Your card is empty</div>
                )}
            </div>
            <CardSide className="order-billing__prices" />

            <Payment />
        </section>
    );
};

export default Order;
