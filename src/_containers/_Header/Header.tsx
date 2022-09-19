import { FC } from "react";

const Header: FC = () => {
    document.addEventListener("click", documentActions);
    // Actions (Делегирование событий Click)
    function documentActions(e) {
        const targetElement = e.target;
        if (window.innerWidth > 768 && isMobile.any()) {
            if (targetElement.classList.contains("menu__arrow")) {
                targetElement.closest(".menu__item").classList.toggle("_hover");
            }
            if (
                !targetElement.closest(".menu__item") &&
                document.querySelectorAll(".menu__item._hover").length > 0
            ) {
                _removeClasses(document.querySelectorAll(".menu__item._hover"), "_hover");
            }
        }

        if (
            targetElement.classList.contains("cart-header__icon") ||
            targetElement.closest(".cart-header__icon")
        ) {
            if (document.querySelector(".cart-list").children.length > 0) {
                document.querySelector(".cart-header").classList.toggle("_active");
            }
            e.preventDefault();
        } else if (
            !targetElement.closest(".cart-header") &&
            !targetElement.classList.contains("actions-product__button")
        ) {
            document.querySelector(".cart-header").classList.remove("_active");
        }

        if (targetElement.classList.contains("cart-list__delete")) {
            const productId = targetElement.closese(".cart-list__item").dataset.cartPid;
            updateCart(targetElement, productId, false);
            e.preventDefault();
        }
    }

    return (
        <header className="header">
            <div className="header__wrapper">
                <div className="header__container _container">
                    <div className="header__body">
                        <a href="#" className="header__logo">
                            <img src="img/Logo.svg" alt="logo" />
                        </a>
                        <div className="header__menu menu">
                            <div className="menu__wrapper">
                                <nav className="menu__body">
                                    <ul className="menu__list" data-spollers="768,max">
                                        <li className="menu__item">
                                            <a href="#" className="menu__link">
                                                Browse
                                            </a>
                                            <button data-spoller type="button" className="menu__arrow-btn">
                                                <img
                                                    src="img/icons/down.svg"
                                                    alt="arrow"
                                                    className="menu__arrow"
                                                />
                                            </button>
                                            <ul className="menu__sub-list">
                                                <li className="menu__sub-item">
                                                    <a href="" className="menu__sub-link">
                                                        Product #1
                                                    </a>
                                                </li>
                                                <li className="menu__sub-item">
                                                    <a href="" className="menu__sub-link">
                                                        Product #2
                                                    </a>
                                                </li>
                                                <li className="menu__sub-item">
                                                    <a href="" className="menu__sub-link">
                                                        Product #3
                                                    </a>
                                                </li>
                                                <li className="menu__sub-item">
                                                    <a href="" className="menu__sub-link">
                                                        Product #4
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu__item">
                                            <a href="#" className="menu__link">
                                                All-Exclusive
                                            </a>
                                        </li>
                                        <li className="menu__item">
                                            <a href="#" className="menu__link">
                                                Docs
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="header__actions actions-header">
                            <a href="#" className="actions-header__favorites">
                                <img src="img/icons/heart.svg" alt="heart" />
                                <span>1</span>
                            </a>
                            <div className="actions-header__cart cart-header">
                                <a href="" className="cart-header__icon">
                                    <img src="img/icons/shop-bag.svg" alt="shop-bag" />
                                    <span>5</span>
                                </a>
                                <div className="cart-header__body">
                                    <ul className="cart-header__list cart-list"></ul>
                                </div>
                            </div>
                            <div className="actions-header__account">
                                <a href="#" className="actions-header__login btn">
                                    Account
                                </a>
                                <a href="#" className="actions-header__login actions-header__login_icon">
                                    <img src="img/icons/user.svg" alt="user" />
                                </a>
                            </div>
                        </div>
                        <div className="header__icon icon-menu">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
