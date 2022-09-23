import { FC, memo } from "react";

const PriceItem: FC<{ text: string; price: string; total?: boolean }> = ({ text, price, total }) => (
    <div className="price-workshop__price-item">
        <div className="price-workshop__label">{text}</div>
        <div className={`price-workshop__value ${total ? "price-workshop__value_total" : ""}`}>{price}</div>
    </div>
);

export default memo(PriceItem);
