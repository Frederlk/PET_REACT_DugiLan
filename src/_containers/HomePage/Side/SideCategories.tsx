import { FC } from "react";
import { NavLink } from "react-router-dom";
import { data } from "../../../constants";

const itemsCategories = data.categoriesItems.map(({ title, link, icon }, i) => {
    return (
        <li key={link + i} className="categories__item">
            <NavLink to={link} end className="categories__link">
                <div className="categories__icon">
                    <img src={icon} alt={title} />
                </div>
                <span>{title}</span>
            </NavLink>
        </li>
    );
});

const SideCategories: FC = () => {
    if (itemsCategories.length === 0) return null;

    return (
        <section className="aside-body__categories categories" data-spollers="767.98,max">
            <h3 className="categories__title" data-spoller>
                Browse Categories
                <span>
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M3 4.5L6 7.5L9 4.5"
                            stroke="white"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </span>
            </h3>
            <nav className="categories__body">
                <ul className="categories__list">{itemsCategories}</ul>
            </nav>
        </section>
    );
};

export default SideCategories;
