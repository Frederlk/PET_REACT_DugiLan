import React from "react";

const Single = () => {
    // if (document.querySelector(".content-workshop__video")) {
    //     const videoFile = document.getElementById("video-file"),
    //         videoWrap = document.getElementById("video-wrap");
    //     function playPause() {
    //         if (videoFile.paused) {
    //             videoFile.play();
    //             videoWrap.classList.add("_play");
    //         } else {
    //             videoFile.pause();
    //             videoWrap.classList.remove("_play");
    //         }
    //     }

    //     videoWrap.addEventListener("click", playPause);
    // }

    return (
        <>
            <div className="page__body body-workshop">
                <div className="body-workshop__wrapper">
                    <div className="body-workshop__container _container">
                        <div className="body-workshop__flex">
                            <section className="body-workshop__content content-workshop">
                                <div className="content-workshop__wrapper">
                                    <div className="content-workshop__logo">
                                        <div className="content-workshop__image-logo">
                                            <img src="img/icons/dugi.svg" alt="" />
                                        </div>
                                        <h1 className="content-workshop__title">WireDugi</h1>
                                    </div>
                                    <div className="content-workshop__subtitle">
                                        Upload a CSV File of people&apos;s names to guess their genders
                                    </div>
                                    <div className="content-workshop__video-wrap _video" id="video-wrap">
                                        <video className="content-workshop__video" id="video-file">
                                            <source type="video/webm" src="videos/video.webm" />
                                            <source type="video/mp4" src="videos/video.mp4" />
                                        </video>
                                        <button
                                            type="button"
                                            className="content-workshop__video-btn"
                                            id="video-btn"
                                        >
                                            <img src="img/icons/play-circle.svg" alt="" />
                                        </button>
                                    </div>
                                    <div className="content-workshop__text">
                                        <p>
                                            Gender detection is a wordpress plugin designed and builded for
                                            detection of genders in large data files. The plugin allows you to
                                            go beyond the usual text messages and contact forms and get closer
                                            to your users. The plugin adds a voice recording button to any
                                            convenient place on the site. This can be useful for reviews,
                                            order comments or any questions.
                                        </p>
                                        <p>
                                            Our WooCommerce cart PDF plugin helps you and your customers to
                                            export their current cart items as PDF. Customize the PDF with
                                            ease:
                                        </p>
                                    </div>
                                    <div className="content-workshop__slider">
                                        <div className="content-workshop__slick">
                                            <div className="content-workshop__slide _ibg">
                                                <img src="img/catalog/1.jpg" alt="" />
                                            </div>
                                            <div className="content-workshop__slide _ibg">
                                                <img src="img/catalog/2.jpg" alt="" />
                                            </div>
                                            <div className="content-workshop__slide _ibg">
                                                <img src="img/catalog/3.jpg" alt="" />
                                            </div>
                                            <div className="content-workshop__slide _ibg">
                                                <img src="img/catalog/4.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div className="content-workshop__pagination"></div>
                                    </div>
                                </div>
                            </section>
                            <aside className="body-workshop__aside aside-single">
                                <div className="aside-single__wrapper">
                                    <section
                                        className="aside-single__search search-workshop"
                                        data-da=".aside-single__wrapper,992.98,last"
                                    >
                                        <div className="search-workshop__inner">
                                            <div className="search-workshop__text">
                                                If you have a coupon code discount please apply, otherwise
                                                please subscribe to our offers below fora chance to receive
                                                one.{" "}
                                            </div>
                                            <form action="#" className="search-workshop__form">
                                                <input
                                                    autoComplete="off"
                                                    type="text"
                                                    name="Search"
                                                    data-error="Error"
                                                    data-value="e.g Responsive slider"
                                                    className="search-workshop__input input"
                                                />
                                                <button type="submit" className="search-workshop__btn btn">
                                                    Search
                                                </button>
                                            </form>
                                        </div>
                                    </section>
                                    <section className="aside-single__price price-workshop">
                                        <div className="price-workshop__inner">
                                            <div className="price-workshop__top">
                                                <div className="price-workshop__title">Licence Price</div>
                                                <div className="price-workshop__price">€ 89,99</div>
                                            </div>
                                            <ul className="price-workshop__list">
                                                <li className="price-workshop__item">
                                                    <div className="price-workshop__icon">
                                                        <img src="img/icons/tick.svg" alt="" />
                                                    </div>
                                                    <div className="price-workshop__text">
                                                        Quality checked by Ceyond{" "}
                                                    </div>
                                                </li>
                                                <li className="price-workshop__item">
                                                    <div className="price-workshop__icon">
                                                        <img src="img/icons/tick.svg" alt="" />
                                                    </div>
                                                    <div className="price-workshop__text">
                                                        Included: Future updates{" "}
                                                    </div>
                                                </li>
                                                <li className="price-workshop__item">
                                                    <div className="price-workshop__icon">
                                                        <img src="img/icons/tick.svg" alt="" />
                                                    </div>
                                                    <div className="price-workshop__text">
                                                        Included: 1 months support from our team
                                                    </div>
                                                </li>
                                                <li className="price-workshop__item">
                                                    <form action="#" className="price-workshop__check-form">
                                                        <label className="price-workshop__checkbox checkbox">
                                                            <input
                                                                data-error="Error"
                                                                className="checkbox__input"
                                                                type="checkbox"
                                                                value="1"
                                                                name="check"
                                                            />
                                                            <div className="checkbox__text">
                                                                <div className="price-workshop__text">
                                                                    Extend support to 12 months{" "}
                                                                    <span>+ 55.50 €</span>
                                                                </div>
                                                            </div>
                                                        </label>
                                                    </form>
                                                </li>
                                            </ul>
                                            <div className="price-workshop__total">
                                                <div className="price-workshop__price-item">
                                                    <div className="price-workshop__label">
                                                        Discount code %
                                                    </div>
                                                    <div className="price-workshop__value">- 3%</div>
                                                </div>

                                                <div className="price-workshop__price-item">
                                                    <div className="price-workshop__label">
                                                        Subtotal Price
                                                    </div>
                                                    <div className="price-workshop__value">
                                                        + <span>85.99</span> €
                                                    </div>
                                                </div>

                                                <div className="price-workshop__price-item">
                                                    <div className="price-workshop__label">
                                                        Price after Tax
                                                    </div>
                                                    <div className="price-workshop__value">
                                                        + <span>99.99</span> €
                                                    </div>
                                                </div>

                                                <div className="price-workshop__price-item">
                                                    <div className="price-workshop__label">
                                                        Price after duscount
                                                    </div>
                                                    <div className="price-workshop__value">
                                                        + <span>89.99</span> €
                                                    </div>
                                                </div>

                                                <div className="price-workshop__price-item">
                                                    <div className="price-workshop__label">Total Price</div>
                                                    <div className="price-workshop__value price-workshop__value_total">
                                                        <span>89.99</span> €
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="price-workshop__btn-wrap">
                                                <a href="" className="price-workshop__btn btn">
                                                    Add to cart
                                                </a>
                                            </div>
                                        </div>
                                    </section>
                                    <p className="aside-single__text">
                                        After your plugin purchase, you’ll get the licence key and plugin
                                        option to download. Be aware that this plugin can only be activated
                                        one time in any of your WordPress Sites.
                                    </p>
                                    <section className="aside-single__info info-workshop">
                                        <div className="info-workshop__inner">
                                            <div className="info-workshop__item">
                                                <div className="info-workshop__label">Last Update</div>
                                                <div className="info-workshop__value">25 February 2020</div>
                                            </div>

                                            <div className="info-workshop__item">
                                                <div className="info-workshop__label">Created</div>
                                                <div className="info-workshop__value">25 February 2020</div>
                                            </div>

                                            <div className="info-workshop__item">
                                                <div className="info-workshop__label">
                                                    Compatible Browsers
                                                </div>
                                                <div className="info-workshop__value">
                                                    IE11, Firefox, Chrome, Opera, Edge, Safari
                                                </div>
                                            </div>

                                            <div className="info-workshop__item">
                                                <div className="info-workshop__label">Stack</div>
                                                <div className="info-workshop__value">PHP, VUE JS</div>
                                            </div>

                                            <div className="info-workshop__item">
                                                <div className="info-workshop__label">Category</div>
                                                <div className="info-workshop__value">Data</div>
                                            </div>

                                            <div className="info-workshop__item">
                                                <div className="info-workshop__label">Current Version</div>
                                                <div className="info-workshop__value">2.0.0 </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
            <section className="page__banner banner">
                <div className="banner__wrapper">
                    <div className="banner__container _container">
                        <div className="banner__flex">
                            <div className="banner__content">
                                <h2 className="banner__title">We build apps and websites</h2>
                                <div className="banner__text">
                                    From multipurpose themes to niche templates,you’ll always find something
                                    that catches your eye.
                                </div>
                                <div className="banner__bottom">
                                    <a href="#" className="banner__btn btn">
                                        Contact us
                                    </a>
                                    <a href="" className="banner__more">
                                        or see our portfolio
                                    </a>
                                </div>
                            </div>
                            <div className="banner__images">
                                <div className="banner__phone banner__phone_1">
                                    <img src="img/more/01.png" alt="phone_1" />
                                </div>
                                <div className="banner__phone banner__phone_2">
                                    <img src="img/more/02.png" alt="phone_2" />
                                </div>
                                <div className="banner__bg"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="page__related related">
                <div className="related__wrapper">
                    <div className="related__container _container">
                        <h2 className="related__title">Related category plugins</h2>
                        <div className="related__lfex">
                            <div className="related__column">
                                <article className="related__item product-item">
                                    <div className="product-item__wrapper">
                                        <div className="product-item__image">
                                            <a href="#" className="product-item__inner _ibg">
                                                <img src="img/catalog/4.jpg" alt="" />
                                            </a>
                                            <div className="product-item__hover">
                                                <a href="#" className="product-item__top">
                                                    <span className="product-item__number">130</span>
                                                    <span className="product-item__heart">
                                                        <img src="img/icons/heart_b.svg" alt="" />
                                                    </span>
                                                </a>
                                                <div className="product-item__buttons">
                                                    <a href="#" className="product-item__icon">
                                                        <img src="img/icons/eye.svg" alt="Inspect" />
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
                            <div className="related__column">
                                <article className="related__item product-item">
                                    <div className="product-item__wrapper">
                                        <div className="product-item__image">
                                            <a href="#" className="product-item__inner _ibg">
                                                <img src="img/catalog/5.jpg" alt="" />
                                            </a>
                                            <div className="product-item__hover">
                                                <a href="#" className="product-item__top">
                                                    <span className="product-item__number">130</span>
                                                    <span className="product-item__heart">
                                                        <img src="img/icons/heart_b.svg" alt="" />
                                                    </span>
                                                </a>
                                                <div className="product-item__buttons">
                                                    <a href="#" className="product-item__icon">
                                                        <img src="img/icons/eye.svg" alt="Inspect" />
                                                    </a>
                                                    <a href="#" className="product-item__icon">
                                                        <img src="img/icons/cart.svg" alt="Buy" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <h5 className="product-item__title">
                                            <a href="">DugiApp</a>
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
                            <div className="related__column">
                                <article className="related__item product-item">
                                    <div className="product-item__wrapper">
                                        <div className="product-item__image">
                                            <a href="#" className="product-item__inner _ibg">
                                                <img src="img/catalog/6.jpg" alt="" />
                                            </a>
                                            <div className="product-item__hover">
                                                <a href="#" className="product-item__top">
                                                    <span className="product-item__number">130</span>
                                                    <span className="product-item__heart">
                                                        <img src="img/icons/heart_b.svg" alt="" />
                                                    </span>
                                                </a>
                                                <div className="product-item__buttons">
                                                    <a href="#" className="product-item__icon">
                                                        <img src="img/icons/eye.svg" alt="Inspect" />
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
                                                DugiOS
                                            </a>
                                            <a href="" className="product-item__type-link">
                                                Wordpress
                                            </a>
                                        </div>
                                        <div className="product-item__price">$29,99</div>
                                    </div>
                                </article>
                            </div>
                            <div className="related__column">
                                <article className="related__item product-item">
                                    <div className="product-item__wrapper">
                                        <div className="product-item__image">
                                            <a href="#" className="product-item__inner _ibg">
                                                <img src="img/catalog/12.jpg" alt="" />
                                            </a>
                                            <div className="product-item__hover">
                                                <a href="#" className="product-item__top">
                                                    <span className="product-item__number">130</span>
                                                    <span className="product-item__heart">
                                                        <img src="img/icons/heart_b.svg" alt="" />
                                                    </span>
                                                </a>
                                                <div className="product-item__buttons">
                                                    <a href="#" className="product-item__icon">
                                                        <img src="img/icons/eye.svg" alt="Inspect" />
                                                    </a>
                                                    <a href="#" className="product-item__icon">
                                                        <img src="img/icons/cart.svg" alt="Buy" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <h5 className="product-item__title">
                                            <a href="">Analysis app</a>
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
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Single;
