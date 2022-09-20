import { FC, useRef } from "react";
import { Link } from "react-router-dom";
import useMenu from "../../store/slices/menu/useMenu";
import Actions from "./Actions";
import MenuLinks from "./MenuLinks";

import { images } from "../../constants";

const { icon_logo } = images.icons;

const Header: FC = () => {
    const ref = useRef(null);
    const { onToggleMenu } = useMenu(ref);

    return (
        <header className="header" data-lp ref={ref}>
            <div className="header__container">
                <Link to="/" className="header__logo">
                    <img src={icon_logo} alt="Logo" />
                </Link>
                <div className="header__menu menu">
                    <nav className="menu__body">
                        <ul className="menu__list" data-spollers="767.98,max">
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

export default Header;
