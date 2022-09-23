import { FC, useMemo } from "react";
import { data } from "../../../constants";
import BodyFeatures from "./BodyFeatures";
import ProductItem from "./ProductItem";

const Body: FC = () => {
    const products = useMemo(
        () =>
            data.productItems.map((item) => (
                <ProductItem className="shop-body__item" key={item.id} item={item} />
            )),
        [data.productItems]
    );

    return (
        <section className="body__shop shop-body">
            <BodyFeatures />
            <div className="shop-body__products">{products.length > 0 && products}</div>
        </section>
    );
};

export default Body;
