import React from "react";

const SingleSide = () => {
    return (
        <aside className="body-workshop__aside aside-single">
            <section
                className="aside-single__search search-workshop"
                data-da=".aside-single__wrapper,992.98,last"
            >
                <div className="search-workshop__inner">
                    <div className="search-workshop__text">
                        If you have a coupon code discount please apply, otherwise please subscribe to our
                        offers below fora chance to receive one.{" "}
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
                            <div className="price-workshop__text">Quality checked by Ceyond </div>
                        </li>
                        <li className="price-workshop__item">
                            <div className="price-workshop__icon">
                                <img src="img/icons/tick.svg" alt="" />
                            </div>
                            <div className="price-workshop__text">Included: Future updates </div>
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
                                            Extend support to 12 months <span>+ 55.50 €</span>
                                        </div>
                                    </div>
                                </label>
                            </form>
                        </li>
                    </ul>
                    <div className="price-workshop__total">
                        <div className="price-workshop__price-item">
                            <div className="price-workshop__label">Discount code %</div>
                            <div className="price-workshop__value">- 3%</div>
                        </div>

                        <div className="price-workshop__price-item">
                            <div className="price-workshop__label">Subtotal Price</div>
                            <div className="price-workshop__value">
                                + <span>85.99</span> €
                            </div>
                        </div>

                        <div className="price-workshop__price-item">
                            <div className="price-workshop__label">Price after Tax</div>
                            <div className="price-workshop__value">
                                + <span>99.99</span> €
                            </div>
                        </div>

                        <div className="price-workshop__price-item">
                            <div className="price-workshop__label">Price after duscount</div>
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
                After your plugin purchase, you’ll get the licence key and plugin option to download. Be aware
                that this plugin can only be activated one time in any of your WordPress Sites.
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
                        <div className="info-workshop__label">Compatible Browsers</div>
                        <div className="info-workshop__value">IE11, Firefox, Chrome, Opera, Edge, Safari</div>
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
        </aside>
    );
};

export default SingleSide;
