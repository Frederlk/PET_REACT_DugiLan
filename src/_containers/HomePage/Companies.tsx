import { FC } from "react";
import { data } from "../../constants";

const companiesItems = data.companiesItems.map(({ img, alt }, i) => (
    <div key={alt + i} className="companies__image">
        <img src={img} alt={alt} />
    </div>
));

const Companies: FC = () => {
    return (
        <section className="page__companies companies">
            <div className="companies__container">
                <h5 className="companies__title">Some of our 500 clients already using Dugilan</h5>
                <div className="companies__flex">{companiesItems.length > 0 && companiesItems}</div>
            </div>
        </section>
    );
};

export default Companies;
