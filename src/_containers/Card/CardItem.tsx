import { FC, memo } from "react";
import { Link } from "react-router-dom";
import { data } from "../../constants";
import { ICartProduct } from "../../models";
import { RouteNames } from "../../routes";
import Quantity from "../../_components/Quantity";

const CardItem: FC<{ item: ICartProduct }> = ({ item }) => {
    const { id, price, qty } = item;
    const { title, logo } = data.productItems.filter((item) => item.id === id)[0];

    return (
        <div className="content-card__row">
            <Link to={RouteNames.PRODUCT_LINK + title} className="content-card__td content-card__td_1">
                {logo && (
                    <span>
                        <img src={logo} alt={title} />
                    </span>
                )}
                {title}
            </Link>
            <div className="content-card__td content-card__td_2">$ {price.toFixed(2)}</div>
            <Quantity className="content-card__td content-card__td_3" item={item} />
            <div className="content-card__td content-card__td_4">$ {(price * qty).toFixed(2)}</div>
        </div>
    );
};

export default memo(CardItem);
