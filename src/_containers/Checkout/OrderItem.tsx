import { FC } from "react";
import { Link } from "react-router-dom";
import { data } from "../../constants";
import { useActions } from "../../hooks";
import { RouteNames } from "../../routes";

const OrderItem: FC<{ id: string }> = ({ id }) => {
    const item = data.productItems.find((item) => item.id === id);

    const { removeFromCart } = useActions();

    return (
        <div className="products-billing__item">
            <Link to={RouteNames.PRODUCT_LINK + item?.title} className="products-billing__name">
                {item?.logo && (
                    <span>
                        <img src={item?.logo} alt={item?.title} />
                    </span>
                )}
                {item?.title}
            </Link>
            <button type="button" onClick={() => removeFromCart(id)} className="products-billing__btn">
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M12 4L4 12"
                        stroke="#B9B9B9"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M4 4L12 12"
                        stroke="#B9B9B9"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
        </div>
    );
};

export default OrderItem;
