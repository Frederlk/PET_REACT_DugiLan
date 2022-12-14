import { FC, memo, useRef } from "react";
import { Link } from "react-router-dom";
import { useSwipeable } from "react-swipeable";

import useMenu from "../../store/slices/menu/useMenu";
import Actions from "./Actions";
import MenuLinks from "./MenuLinks";
import { images } from "../../constants";

const { icon_logo } = images.icons;

const Header: FC = () => {
    const ref = useRef(null);
    const { onToggleMenu } = useMenu(ref);

    const handlers = useSwipeable({
        onSwipedRight: onToggleMenu,
    });

    return (
        <header className="header" data-lp ref={ref}>
            <div className="header__container">
                <Link to="/" className="header__logo">
                    <img src={icon_logo} alt="Logo" />
                </Link>
                <div className="header__menu menu">
                    <nav {...handlers} className="menu__body">
                        <ul className="menu__list" data-spollers="">
                            <MenuLinks />
                        </ul>
                    </nav>
                </div>
                <Actions />
                <button type="button" onClick={onToggleMenu} className="header__icon icon-menu">
                    <span></span>
                </button>
            </div>
        </header>
    );
};

export default memo(Header);
