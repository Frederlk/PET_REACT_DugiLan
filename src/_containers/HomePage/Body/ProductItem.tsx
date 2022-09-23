import { FC } from "react";
import { Link } from "react-router-dom";
import { IProduct } from "../../../models";
import { RouteNames } from "../../../routes";
import { Picture } from "../../../_components";
import ProductHover from "./ProductHover";

const ProductItem: FC<{ className: string; item: IProduct }> = ({ className, item }) => {
    const { stack, price, thumbImg, thumbWebp, title } = item;

    return (
        <article className={`${className || ""} product-item`}>
            <div className="product-item__image">
                <Link to={RouteNames.PRODUCT_LINK + title} className="product-item__inner-ibg">
                    <Picture srcWebp={thumbWebp} fallbackSrc={thumbImg} alt={title} />
                </Link>
                <ProductHover item={item} />
            </div>
            <h5 className="product-item__title">
                <Link to={RouteNames.PRODUCT_LINK + title}>{title}</Link>
            </h5>
            <div className="product-item__type">
                {stack.map((item, i) => (
                    <span key={item + i} className="product-item__type-item">
                        {item}
                    </span>
                ))}
            </div>
            <div className="product-item__price">${price}</div>
        </article>
    );
};

export default ProductItem;
