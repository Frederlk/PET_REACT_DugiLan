import { FC, memo, useMemo } from "react";
import { Link } from "react-router-dom";

import { routesConfig } from "../../routes";
import { images } from "../../constants";

const MenuLinks: FC = () => {
    const { Icon_down } = images.icons;

    const menuLinks = useMemo(() => {
        return routesConfig.map(({ path, title, type, nested }, i) => {
            if (type === "main") {
                return (
                    <li key={`${path}` || i} className="menu__item">
                        <Link to={`${path}`} className="menu__link">
                            {title}
                        </Link>
                        {nested && nested.length > 0 && (
                            <>
                                <button data-spoller type="button" className="menu__arrow">
                                    <Icon_down />
                                </button>
                                <ul className="menu__sub-list">
                                    {nested.map((item, i) => (
                                        <li key={`${item.path}_${i}`} className="menu__sub-item">
                                            <a href={`${item.path}`} className="menu__sub-link">
                                                {item.title}
                                            </a>
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
