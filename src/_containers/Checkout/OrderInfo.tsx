import { format } from "date-fns";
import { memo, FC } from "react";
import { useLocation } from "react-router-dom";
import InfoItem from "./InfoItem";

const OrderInfo: FC = () => {
    const { state } = useLocation();
    const { date, prices, payment, orderNumber } = state;

    return (
        <>
            <h2 className="body-thanks__title">Thank you. Your plugin has been received.</h2>
            <div className="body-thanks__order">
                <InfoItem label="Order number">{orderNumber}</InfoItem>
                <InfoItem label="Date">{format(new Date(date), "MMMM dd, yyyy")}</InfoItem>
                <InfoItem label="Total">$ {prices.total.toFixed(2)}</InfoItem>
                <InfoItem label="Payment method">{payment}</InfoItem>
            </div>
        </>
    );
};

export default memo(OrderInfo);
