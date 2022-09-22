import { FC, memo, useMemo } from "react";
import { Link } from "react-router-dom";

import { RouteNames, routesConfig } from "../../routes";
import { images, data } from "../../constants";

const { icon_down } = images.icons;

const MenuLinks: FC = () => {
    const menuLinks = useMemo(() => {
        return routesConfig.map(({ path, title, type }, i) => {
            if (type === "main") {
                return (
                    <li key={`${path}` || i} className="menu__item">
                        <Link to={`${path}`} className="menu__link">
                            {title}
                        </Link>
                        {path === RouteNames.BROWSE && (
                            <>
                                <button data-spoller type="button" className="menu__arrow">
                                    <img src={icon_down} alt="activate spoller" />
                                </button>
                                <ul className="menu__sub-list">
                                    {data.categoriesItems.map((item, i) => (
                                        <li key={item.link + i} className="menu__sub-item">
                                            <Link
                                                to={RouteNames.BROWSE + item.link}
                                                className="menu__sub-link"
                                            >
                                                {item.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </li>
                );
            }
        });
    }, [routesConfig]);

    return <>{menuLinks.length > 0 && menuLinks}</>;
};

export default memo(MenuLinks);
