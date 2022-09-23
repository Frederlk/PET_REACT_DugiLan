import { FC, useMemo } from "react";
import { useParams } from "react-router-dom";
import { data } from "../constants";
import { Banner } from "../_components";
import { ProductItem } from "../_containers";
import SingleBody from "../_containers/SinglePage/SingleBody";
import SingleSide from "../_containers/SinglePage/SingleSide";

const Single: FC = () => {
    const { id } = useParams();

    const product = useMemo(
        () => data.productItems.filter((item) => item.title === id)[0],
        [data.productItems, id]
    );
    const related = useMemo(
        () =>
            data.productItems.filter((item) => item.category === product.category && item.id !== product.id),
        [data.productItems, id]
    );

    return (
        <>
            <div className="page__body body-workshop">
                <div className="body-workshop__container ">
                    <SingleBody item={product} />
                    <SingleSide item={product} />
                </div>
            </div>
            <Banner />
            {related.length > 0 && (
                <section className="page__related related">
                    <div className="related__container">
                        <h2 className="related__title">Related category plugins</h2>
                        <div className="related__body">
                            {related.map((item, i) => {
                                if (i < 4)
                                    return (
                                        <ProductItem className="related__item" key={item.id} item={item} />
                                    );
                            })}
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default Single;
