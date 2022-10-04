import { FC, memo } from "react";
import { Link } from "react-router-dom";
import { data } from "../constants";
import { ICartProduct } from "../models";
import { RouteNames } from "../routes";
import { Quantity } from "./";

const CardItem: FC<{ item: ICartProduct; className: string; card?: boolean }> = ({
    item,
    className,
    card,
}) => {
    const { id, price, qty } = item;
    const { title, logo } = data.productItems.filter((item) => item.id === id)[0];

    return (
        <div className={`${className}__row`}>
            <Link to={RouteNames.PRODUCT_LINK + title} className={`${className}__td ${className}__td_1`}>
                {logo && (
                    <span>
                        <img src={logo} alt={title} />
                    </span>
                )}
                {title}
            </Link>
            <div className={`${className}__td ${className}__td_2`}>$ {price.toFixed(2)}</div>
            {card ? (
                <Quantity className={`${className}__td ${className}__td_3`} item={item} />
            ) : (
                <div className={`${className}__td ${className}__td_3`}>{qty}</div>
            )}

            <div className={`${className}__td ${className}__td_4`}>$ {(price * qty).toFixed(2)}</div>
        </div>
    );
};

export default memo(CardItem);
