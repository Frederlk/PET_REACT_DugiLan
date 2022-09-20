import React from "react";
import { Helmet } from "react-helmet";
import Banner from "../_containers/HomePage/Banner";
import Companies from "../_containers/HomePage/Companies";
import Home from "../_containers/HomePage/Home";

const HomePage = () => {
    // $(".content-workshop__slick").slick({
    //     speed: 800,
    //     arrows: false,
    //     dots: true,
    //     slidesToShow: 1,
    //     autoplay: true,
    //     autoplaySpeed: 3000,
    //     appendDots: ".content-workshop__pagination",
    // });

    return (
        <>
            <Helmet>
                <meta name="Home Page" content="Home Page" />
                <title>DugiLan</title>
            </Helmet>

            <Home />

            <Companies />

            <div className="page__body body">
                <div className="body__wrapper">
                    <div className="body__container _container">
                        <div className="body__flex">
                            <aside className="body__aside aside-body">
                                <div className="aside-body__wrapper">
                                    <section
                                        className="aside-body__categories categories"
                                        data-spollers="767.98,max"
                                    >
                                        <div className="categories__inner">
                                            <h3 className="categories__title _active" data-spoller>
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
                                                <ul className="categories__list">
                                                    <li className="categories__item">
                                                        <a href="" className="categories__link _active">
                                                            <div className="categories__icon">
                                                                <img src="img/icons/home.svg" alt="" />
                                                            </div>
                                                            <span>Home</span>
                                                        </a>
                                                    </li>
                                                    <li className="categories__item">
                                                        <a href="" className="categories__link">
                                                            <div className="categories__icon">
                                                                <img src="img/icons/wordpress.svg" alt="" />
                                                            </div>
                                                            <span>WordPress Themes</span>
                                                        </a>
                                                    </li>
                                                    <li className="categories__item">
                                                        <a href="" className="categories__link">
                                                            <div className="categories__icon">
                                                                <img src="img/icons/shop-cart.svg" alt="" />
                                                            </div>
                                                            <span>eCommerce Templates</span>
                                                        </a>
                                                    </li>
                                                    <li className="categories__item">
                                                        <a href="" className="categories__link">
                                                            <div className="categories__icon">
                                                                <img src="img/icons/tv.svg" alt="" />
                                                            </div>
                                                            <span>Marketing Templates</span>
                                                        </a>
                                                    </li>
                                                    <li className="categories__item">
                                                        <a href="" className="categories__link">
                                                            <div className="categories__icon">
                                                                <img src="img/icons/dashboard.svg" alt="" />
                                                            </div>
                                                            <span>CMS Templates</span>
                                                        </a>
                                                    </li>
                                                    <li className="categories__item">
                                                        <a href="" className="categories__link">
                                                            <div className="categories__icon">
                                                                <img src="img/icons/monitor.svg" alt="" />
                                                            </div>
                                                            <span>Site Templates</span>
                                                        </a>
                                                    </li>
                                                    <li className="categories__item">
                                                        <a href="" className="categories__link">
                                                            <div className="categories__icon">
                                                                <img src="img/icons/edit.svg" alt="" />
                                                            </div>
                                                            <span>Blogging</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </section>
                                    <section
                                        className="aside-body__newsletter newsletter"
                                        data-da=".body__flex,767.98,last"
                                    >
                                        <div className="newsletter__inner">
                                            <h5 className="newsletter__title">Subscribe Newsletter</h5>
                                            <div className="newsletter__text">
                                                Get all the latest information on Events, Sales and Offers.
                                            </div>
                                            <form action="#" className="newsletter__form">
                                                <div className="newsletter__input-wrap">
                                                    <input
                                                        autoComplete="off"
                                                        type="email"
                                                        name="newsletter"
                                                        data-error="error"
                                                        data-value="Email address"
                                                        className="newsletter__input input _req"
                                                    />
                                                    <div className="newsletter__icon">
                                                        <img src="img/icons/mail.svg" alt="" />
                                                    </div>
                                                </div>
                                                <button
                                                    type="submit"
                                                    className="newsletter__btn btn btn_outline"
                                                >
                                                    Subscribe
                                                </button>
                                            </form>
                                        </div>
                                    </section>
                                    <section className="aside-body__users users">
                                        <div className="users__inner">
                                            <div className="users__circle">
                                                <div className="users__percents">+26%</div>
                                                <div className="users__line">
                                                    <svg
                                                        width="66"
                                                        height="121"
                                                        viewBox="0 0 66 121"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M6.19285 120.323C5.42324 120.336 4.65903 120.192 3.94559 119.901C3.23216 119.61 2.58407 119.177 2.0398 118.629C1.49554 118.081 1.06621 117.428 0.777331 116.709C0.488447 115.99 0.345899 115.22 0.35815 114.445C0.357189 112.865 0.965082 111.347 2.05361 110.211C3.14215 109.074 4.62623 108.408 6.19285 108.353C17.5671 108.279 28.559 104.207 37.2709 96.8386C44.6801 90.4092 49.9726 81.8608 52.4457 72.3289C54.9188 62.797 54.4554 52.7326 51.117 43.4723C47.6614 34.2656 41.52 26.329 33.5011 20.7071C25.4822 15.0851 15.9618 12.0414 6.19285 11.9764C5.15691 11.9746 4.14075 11.6905 3.25197 11.1543C2.36319 10.6181 1.63488 9.84963 1.14417 8.93038C0.633389 7.99762 0.365496 6.94967 0.365496 5.88436C0.365496 4.81904 0.633389 3.77109 1.14417 2.83833C1.6623 1.93821 2.41525 1.19829 3.32128 0.69889C4.22731 0.19949 5.2518 -0.0403071 6.28355 0.00553039C15.9225 0.0143815 25.4161 2.3744 33.953 6.88391C42.4899 11.3934 49.8163 17.9184 55.3062 25.9011C60.796 33.8839 64.2861 43.0872 65.4782 52.7246C66.6702 62.3619 65.5289 72.1468 62.1515 81.243C57.776 92.6326 50.1165 102.442 40.1595 109.407C30.2025 116.372 18.404 120.174 6.28355 120.323H6.19285Z"
                                                            fill="#0FAFE9"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                            <h5 className="users__title">Monthly users in your site</h5>
                                            <div className="users__number">1.0286</div>
                                            <div className="users__text">
                                                We accompany you with our versatile expertise in digital
                                                marketing
                                            </div>
                                        </div>
                                    </section>
                                    <section className="aside-body__advert advert">
                                        <a href="#" className="advert__inner">
                                            <div className="advert__image _ibg">
                                                <img src="img/more/1.jpg" alt="" />
                                            </div>
                                            <div className="advert__body">
                                                <div className="advert__text">
                                                    Create your beautiful portfolio website with Squarespace.
                                                    Start your free trial.
                                                </div>
                                                <div className="advert__label">ads via Carbon</div>
                                            </div>
                                        </a>
                                    </section>
                                </div>
                            </aside>
                            <section className="body__shop shop-body">
                                <div className="shop-body__wrapper">
                                    <div className="shop-body__features features">
                                        <div className="features__flex">
                                            <div className="features__column">
                                                <div className="features__icon">
                                                    <img src="img/icons/shield.svg" alt="" />
                                                </div>
                                                <div className="features__body">
                                                    <h3 className="features__title">Security Assurance</h3>
                                                    <div className="features__text">
                                                        Our theme architecture is designed for maximize
                                                        security and prevent malware, Dos Attack other.{" "}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="features__column">
                                                <div className="features__icon">
                                                    <img src="img/icons/help.svg" alt="" />
                                                </div>
                                                <div className="features__body">
                                                    <h3 className="features__title">Best Customer Support</h3>
                                                    <div className="features__text">
                                                        Need help? We’re here for you! <br /> Do not worry we
                                                        provide in depth answer.{" "}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="features__column">
                                                <div className="features__icon">
                                                    <img src="img/icons/circle-check.svg" alt="" />
                                                </div>
                                                <div className="features__body">
                                                    <h3 className="features__title">Great Quality Theme</h3>
                                                    <div className="features__text">
                                                        We will be responsible for delivering the best online
                                                        user experience, which makes my role extremely
                                                        important.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="shop-body__products">
                                        <div className="shop-body__column">
                                            <article className="shop-body__item product-item">
                                                <div className="product-item__wrapper">
                                                    <div className="product-item__image">
                                                        <a href="#" className="product-item__inner _ibg">
                                                            <img src="img/catalog/1.jpg" alt="" />
                                                        </a>
                                                        <div className="product-item__hover">
                                                            <a href="#" className="product-item__top">
                                                                <span className="product-item__number">
                                                                    130
                                                                </span>
                                                                <span className="product-item__heart">
                                                                    <img src="img/icons/heart_b.svg" alt="" />
                                                                </span>
                                                            </a>
                                                            <div className="product-item__buttons">
                                                                <a href="#" className="product-item__icon">
                                                                    <img
                                                                        src="img/icons/eye.svg"
                                                                        alt="Inspect"
                                                                    />
                                                                </a>
                                                                <a href="#" className="product-item__icon">
                                                                    <img src="img/icons/cart.svg" alt="Buy" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h5 className="product-item__title">
                                                        <a href="">RubICons</a>
                                                    </h5>
                                                    <div className="product-item__type">
                                                        <a href="" className="product-item__type-link">
                                                            PHP
                                                        </a>
                                                        <a href="" className="product-item__type-link">
                                                            Wordpress
                                                        </a>
                                                    </div>
                                                    <div className="product-item__price">$29,99</div>
                                                </div>
                                            </article>
                                        </div>
                                        <div className="shop-body__column">
                                            <article className="shop-body__item product-item">
                                                <div className="product-item__wrapper">
                                                    <div className="product-item__image">
                                                        <a href="#" className="product-item__inner _ibg">
                                                            <img src="img/catalog/2.jpg" alt="" />
                                                        </a>
                                                        <div className="product-item__hover">
                                                            <a href="#" className="product-item__top">
                                                                <span className="product-item__number">
                                                                    130
                                                                </span>
                                                                <span className="product-item__heart">
                                                                    <img src="img/icons/heart_b.svg" alt="" />
                                                                </span>
                                                            </a>
                                                            <div className="product-item__buttons">
                                                                <a href="#" className="product-item__icon">
                                                                    <img
                                                                        src="img/icons/eye.svg"
                                                                        alt="Inspect"
                                                                    />
                                                                </a>
                                                                <a href="#" className="product-item__icon">
                                                                    <img src="img/icons/cart.svg" alt="Buy" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h5 className="product-item__title">
                                                        <a href="#	">DugiLan</a>
                                                    </h5>
                                                    <div className="product-item__type">
                                                        <a href="" className="product-item__type-link">
                                                            PHP
                                                        </a>
                                                        <a href="" className="product-item__type-link">
                                                            Wordpress
                                                        </a>
                                                        <a href="" className="product-item__type-link">
                                                            JS
                                                        </a>
                                                    </div>
                                                    <div className="product-item__price">$39,99</div>
                                                </div>
                                            </article>
                                        </div>
                                        <div className="shop-body__column">
                                            <article className="shop-body__item product-item">
                                                <div className="product-item__wrapper">
                                                    <div className="product-item__image">
                                                        <a href="#" className="product-item__inner _ibg">
                                                            <img src="img/catalog/3.jpg" alt="" />
                                                        </a>
                                                        <div className="product-item__hover">
                                                            <a href="#" className="product-item__top">
                                                                <span className="product-item__number">
                                                                    130
                                                                </span>
                                                                <span className="product-item__heart">
                                                                    <img src="img/icons/heart_b.svg" alt="" />
                                                                </span>
                                                            </a>
                                                            <div className="product-item__buttons">
                                                                <a href="#" className="product-item__icon">
                                                                    <img
                                                                        src="img/icons/eye.svg"
                                                                        alt="Inspect"
                                                                    />
                                                                </a>
                                                                <a href="#" className="product-item__icon">
                                                                    <img src="img/icons/cart.svg" alt="Buy" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h5 className="product-item__title">
                                                        <a href="#">Abstract Theme</a>
                                                    </h5>
                                                    <div className="product-item__type">
                                                        <a href="" className="product-item__type-link">
                                                            PHP
                                                        </a>
                                                        <a href="" className="product-item__type-link">
                                                            Wordpress
                                                        </a>
                                                        <a href="" className="product-item__type-link">
                                                            JS
                                                        </a>
                                                    </div>
                                                    <div className="product-item__price">$39,99</div>
                                                </div>
                                            </article>
                                        </div>

                                        <div className="shop-body__column">
                                            <article className="shop-body__item product-item">
                                                <div className="product-item__wrapper">
                                                    <div className="product-item__image">
                                                        <a href="#" className="product-item__inner _ibg">
                                                            <img src="img/catalog/4.jpg" alt="" />
                                                        </a>
                                                        <div className="product-item__hover">
                                                            <a href="#" className="product-item__top">
                                                                <span className="product-item__number">
                                                                    130
                                                                </span>
                                                                <span className="product-item__heart">
                                                                    <img src="img/icons/heart_b.svg" alt="" />
                                                                </span>
                                                            </a>
                                                            <div className="product-item__buttons">
                                                                <a href="#" className="product-item__icon">
                                                                    <img
                                                                        src="img/icons/eye.svg"
                                                                        alt="Inspect"
                                                                    />
                                                                </a>
                                                                <a href="#" className="product-item__icon">
                                                                    <img src="img/icons/cart.svg" alt="Buy" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h5 className="product-item__title">
                                                        <a href="">DugiCon</a>
                                                    </h5>
                                                    <div className="product-item__type">
                                                        <a href="" className="product-item__type-link">
                                                            PHP
                                                        </a>
                                                        <a href="" className="product-item__type-link">
                                                            Wordpress
                                                        </a>
                                                    </div>
                                                    <div className="product-item__price">$29,99</div>
                                                </div>
                                            </article>
                                        </div>
                                        <div className="shop-body__column">
                                            <article className="shop-body__item product-item">
                                                <div className="product-item__wrapper">
                                                    <div className="product-item__image">
                                                        <a href="#" className="product-item__inner _ibg">
                                                            <img src="img/catalog/5.jpg" alt="" />
                                                        </a>
                                                        <div className="product-item__hover">
                                                            <a href="#" className="product-item__top">
                                                                <span className="product-item__number">
                                                                    130
                                                                </span>
                                                                <span className="product-item__heart">
                                                                    <img src="img/icons/heart_b.svg" alt="" />
                                                                </span>
                                                            </a>
                                                            <div className="product-item__buttons">
                                                                <a href="#" className="product-item__icon">
                                                                    <img
                                                                        src="img/icons/eye.svg"
                                                                        alt="Inspect"
                                                                    />
                                                                </a>
                                                                <a href="#" className="product-item__icon">
                                                                    <img src="img/icons/cart.svg" alt="Buy" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h5 className="product-item__title">
                                                        <a href="#">DugiApp</a>
                                                    </h5>
                                                    <div className="product-item__type">
                                                        <a href="" className="product-item__type-link">
                                                            PHP
                                                        </a>
                                                        <a href="" className="product-item__type-link">
                                                            Wordpress
                                                        </a>
                                                        <a href="" className="product-item__type-link">
                                                            JS
                                                        </a>
                                                    </div>
                                                    <div className="product-item__price">$39,99</div>
                                                </div>
                                            </article>
                                        </div>
                                        <div className="shop-body__column">
                                            <article className="shop-body__item product-item">
                                                <div className="product-item__wrapper">
                                                    <div className="product-item__image">
                                                        <a href="#" className="product-item__inner _ibg">
                                                            <img src="img/catalog/6.jpg" alt="" />
                                                        </a>
                                                        <div className="product-item__hover">
                                                            <a href="#" className="product-item__top">
                                                                <span className="product-item__number">
                                                                    130
                                                                </span>
                                                                <span className="product-item__heart">
                                                                    <img src="img/icons/heart_b.svg" alt="" />
                                                                </span>
                                                            </a>
                                                            <div className="product-item__buttons">
                                                                <a href="#" className="product-item__icon">
                                                                    <img
                                                                        src="img/icons/eye.svg"
                                                                        alt="Inspect"
                                                                    />
                                                                </a>
                                                                <a href="#" className="product-item__icon">
                                                                    <img src="img/icons/cart.svg" alt="Buy" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h5 className="product-item__title">
                                                        <a href="#">DugiOS</a>
                                                    </h5>
                                                    <div className="product-item__type">
                                                        <a href="" className="product-item__type-link">
                                                            PHP
                                                        </a>
                                                        <a href="" className="product-item__type-link">
                                                            Wordpress
                                                        </a>
                                                        <a href="" className="product-item__type-link">
                                                            JS
                                                        </a>
                                                    </div>
                                                    <div className="product-item__price">$39,99</div>
                                                </div>
                                            </article>
                                        </div>

                                        <div className="shop-body__column">
                                            <article className="shop-body__item product-item">
                                                <div className="product-item__wrapper">
                                                    <div className="product-item__image">
                                                        <a href="#" className="product-item__inner _ibg">
                                                            <img src="img/catalog/7.jpg" alt="" />
                                                        </a>
                                                        <div className="product-item__hover">
                                                            <a href="#" className="product-item__top">
                                                                <span className="product-item__number">
                                                                    130
                                                                </span>
                                                                <span className="product-item__heart">
                                                                    <img src="img/icons/heart_b.svg" alt="" />
                                                                </span>
                                                            </a>
                                                            <div className="product-item__buttons">
                                                                <a href="#" className="product-item__icon">
                                                                    <img
                                                                        src="img/icons/eye.svg"
                                                                        alt="Inspect"
                                                                    />
                                                                </a>
                                                                <a href="#" className="product-item__icon">
                                                                    <img src="img/icons/cart.svg" alt="Buy" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h5 className="product-item__title">
                                                        <a href="">DugiUI</a>
                                                    </h5>
                                                    <div className="product-item__type">
                                                        <a href="" className="product-item__type-link">
                                                            PHP
                                                        </a>
                                                        <a href="" className="product-item__type-link">
                                                            Wordpress
                                                        </a>
                                                    </div>
                                                    <div className="product-item__price">$29,99</div>
                                                </div>
                                            </article>
                                        </div>
                                        <div className="shop-body__column">
                                            <article className="shop-body__item product-item">
                                                <div className="product-item__wrapper">
                                                    <div className="product-item__image">
                                                        <a href="#" className="product-item__inner _ibg">
                                                            <img src="img/catalog/8.jpg" alt="" />
                                                        </a>
                                                        <div className="product-item__hover">
                                                            <a href="#" className="product-item__top">
                                                                <span className="product-item__number">
                                                                    130
                                                                </span>
                                                                <span className="product-item__heart">
                                                                    <img src="img/icons/heart_b.svg" alt="" />
                                                                </span>
                                                            </a>
                                                            <div className="product-item__buttons">
                                                                <a href="#" className="product-item__icon">
                                                                    <img
                                                                        src="img/icons/eye.svg"
                                                                        alt="Inspect"
                                                                    />
                                                                </a>
                                                                <a href="#" className="product-item__icon">
                                                                    <img src="img/icons/cart.svg" alt="Buy" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h5 className="product-item__title">
                                                        <a href="#">WireDugi</a>
                                                    </h5>
                                                    <div className="product-item__type">
                                                        <a href="" className="product-item__type-link">
                                                            PHP
                                                        </a>
                                                        <a href="" className="product-item__type-link">
                                                            Wordpress
                                                        </a>
                                                        <a href="" className="product-item__type-link">
                                                            JS
                                                        </a>
                                                    </div>
                                                    <div className="product-item__price">$39,99</div>
                                                </div>
                                            </article>
                                        </div>
                                        <div className="shop-body__column">
                                            <article className="shop-body__item product-item">
                                                <div className="product-item__wrapper">
                                                    <div className="product-item__image">
                                                        <a href="#" className="product-item__inner _ibg">
                                                            <img src="img/catalog/9.jpg" alt="" />
                                                        </a>
                                                        <div className="product-item__hover">
                                                            <a href="#" className="product-item__top">
                                                                <span className="product-item__number">
                                                                    130
                                                                </span>
                                                                <span className="product-item__heart">
                                                                    <img src="img/icons/heart_b.svg" alt="" />
                                                                </span>
                                                            </a>
                                                            <div className="product-item__buttons">
                                                                <a href="#" className="product-item__icon">
                                                                    <img
                                                                        src="img/icons/eye.svg"
                                                                        alt="Inspect"
                                                                    />
                                                                </a>
                                                                <a href="#" className="product-item__icon">
                                                                    <img src="img/icons/cart.svg" alt="Buy" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h5 className="product-item__title">
                                                        <a href="#">Dugico</a>
                                                    </h5>
                                                    <div className="product-item__type">
                                                        <a href="" className="product-item__type-link">
                                                            PHP
                                                        </a>
                                                        <a href="" className="product-item__type-link">
                                                            Wordpress
                                                        </a>
                                                        <a href="" className="product-item__type-link">
                                                            JS
                                                        </a>
                                                    </div>
                                                    <div className="product-item__price">$39,99</div>
                                                </div>
                                            </article>
                                        </div>

                                        <div className="shop-body__column">
                                            <article className="shop-body__item product-item">
                                                <div className="product-item__wrapper">
                                                    <div className="product-item__image">
                                                        <a href="#" className="product-item__inner _ibg">
                                                            <img src="img/catalog/10.jpg" alt="" />
                                                        </a>
                                                        <div className="product-item__hover">
                                                            <a href="#" className="product-item__top">
                                                                <span className="product-item__number">
                                                                    130
                                                                </span>
                                                                <span className="product-item__heart">
                                                                    <img src="img/icons/heart_b.svg" alt="" />
                                                                </span>
                                                            </a>
                                                            <div className="product-item__buttons">
                                                                <a href="#" className="product-item__icon">
                                                                    <img
                                                                        src="img/icons/eye.svg"
                                                                        alt="Inspect"
                                                                    />
                                                                </a>
                                                                <a href="#" className="product-item__icon">
                                                                    <img src="img/icons/cart.svg" alt="Buy" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h5 className="product-item__title">
                                                        <a href="">UI Illustrations</a>
                                                    </h5>
                                                    <div className="product-item__type">
                                                        <a href="" className="product-item__type-link">
                                                            PHP
                                                        </a>
                                                        <a href="" className="product-item__type-link">
                                                            Wordpress
                                                        </a>
                                                    </div>
                                                    <div className="product-item__price">$29,99</div>
                                                </div>
                                            </article>
                                        </div>
                                        <div className="shop-body__column">
                                            <article className="shop-body__item product-item">
                                                <div className="product-item__wrapper">
                                                    <div className="product-item__image">
                                                        <a href="#" className="product-item__inner _ibg">
                                                            <img src="img/catalog/11.jpg" alt="" />
                                                        </a>
                                                        <div className="product-item__hover">
                                                            <a href="#" className="product-item__top">
                                                                <span className="product-item__number">
                                                                    130
                                                                </span>
                                                                <span className="product-item__heart">
                                                                    <img src="img/icons/heart_b.svg" alt="" />
                                                                </span>
                                                            </a>
                                                            <div className="product-item__buttons">
                                                                <a href="#" className="product-item__icon">
                                                                    <img
                                                                        src="img/icons/eye.svg"
                                                                        alt="Inspect"
                                                                    />
                                                                </a>
                                                                <a href="#" className="product-item__icon">
                                                                    <img src="img/icons/cart.svg" alt="Buy" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h5 className="product-item__title">
                                                        <a href="#">Login Apps</a>
                                                    </h5>
                                                    <div className="product-item__type">
                                                        <a href="" className="product-item__type-link">
                                                            PHP
                                                        </a>
                                                        <a href="" className="product-item__type-link">
                                                            Wordpress
                                                        </a>
                                                        <a href="" className="product-item__type-link">
                                                            JS
                                                        </a>
                                                    </div>
                                                    <div className="product-item__price">$39,99</div>
                                                </div>
                                            </article>
                                        </div>
                                        <div className="shop-body__column">
                                            <article className="shop-body__item product-item">
                                                <div className="product-item__wrapper">
                                                    <div className="product-item__image">
                                                        <a href="#" className="product-item__inner _ibg">
                                                            <img src="img/catalog/12.jpg" alt="" />
                                                        </a>
                                                        <div className="product-item__hover">
                                                            <a href="#" className="product-item__top">
                                                                <span className="product-item__number">
                                                                    130
                                                                </span>
                                                                <span className="product-item__heart">
                                                                    <img src="img/icons/heart_b.svg" alt="" />
                                                                </span>
                                                            </a>
                                                            <div className="product-item__buttons">
                                                                <a href="#" className="product-item__icon">
                                                                    <img
                                                                        src="img/icons/eye.svg"
                                                                        alt="Inspect"
                                                                    />
                                                                </a>
                                                                <a href="#" className="product-item__icon">
                                                                    <img src="img/icons/cart.svg" alt="Buy" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h5 className="product-item__title">
                                                        <a href="#">Analysis app</a>
                                                    </h5>
                                                    <div className="product-item__type">
                                                        <a href="" className="product-item__type-link">
                                                            PHP
                                                        </a>
                                                        <a href="" className="product-item__type-link">
                                                            JS
                                                        </a>
                                                        <a href="" className="product-item__type-link">
                                                            Wordpress
                                                        </a>
                                                    </div>
                                                    <div className="product-item__price">$139,99</div>
                                                </div>
                                            </article>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>

            <Banner />
        </>
    );
};

export default HomePage;
