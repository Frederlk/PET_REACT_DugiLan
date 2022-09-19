import React from "react";

const MyCard = () => {
    return (
        <div className="page__body body-card">
            <div className="body-card__wrapper">
                <div className="body-card__container _container">
                    <div className="body-card__flex">
                        <section className="body-card__content content-card">
                            <div className="content-card__wrapper">
                                <h2 className="content-card__title">Shopping Card</h2>
                                <div className="content-card__table">
                                    <div className="content-card__row content-card__row_top">
                                        <div className="content-card__td content-card__td_1">Products</div>
                                        <div className="content-card__td content-card__td_2">Order ID</div>
                                        <div className="content-card__td content-card__td_3">Quantity</div>
                                        <div className="content-card__td content-card__td_4">Total</div>
                                    </div>

                                    <div className="content-card__row">
                                        <div className="content-card__td content-card__td_1">
                                            <span>
                                                <img src="img/icons/dugi.svg" alt="" />
                                            </span>
                                            WireDugi
                                        </div>
                                        <div className="content-card__td content-card__td_2">#2306</div>
                                        <div className="content-card__td content-card__td_3">1</div>
                                        <div className="content-card__td content-card__td_4">€ 89,99 </div>
                                    </div>
                                    <div className="content-card__row">
                                        <div className="content-card__td content-card__td_1">
                                            <span>
                                                <img src="img/icons/dugi.svg" alt="" />
                                            </span>
                                            WireDugi
                                        </div>
                                        <div className="content-card__td content-card__td_2">#2306</div>
                                        <div className="content-card__td content-card__td_3">1</div>
                                        <div className="content-card__td content-card__td_4">€ 89,99 </div>
                                    </div>
                                    <div className="content-card__row">
                                        <div className="content-card__td content-card__td_1">
                                            <span>
                                                <img src="img/icons/dugi.svg" alt="" />
                                            </span>
                                            WireDugi
                                        </div>
                                        <div className="content-card__td content-card__td_2">#2306</div>
                                        <div className="content-card__td content-card__td_3">1</div>
                                        <div className="content-card__td content-card__td_4">€ 89,99 </div>
                                    </div>
                                </div>
                                <div className="content-card__bottom bottom-card">
                                    <form className="bottom-card__discount">
                                        <input
                                            autoComplete="off"
                                            type="text"
                                            name="form[]"
                                            data-error="Error"
                                            data-value="Your discount code"
                                            className="bottom-card__input input"
                                        />
                                        <button type="submit" className="bottom-card__btn btn btn_outline">
                                            Apply
                                        </button>
                                    </form>
                                    <div className="bottom-card__text">
                                        If you have a coupon code discount please apply , otherwise please
                                        subscribe to our offers below for a chance to receive one.
                                    </div>
                                </div>
                            </div>
                        </section>
                        <aside className="body-card__aside aside-card">
                            <div className="aside-card__wrapper">
                                <section className="aside-card__menu card">
                                    <div className="card__inner">
                                        <h3 className="card__title">My Profile</h3>
                                        <div className="card__body">
                                            <div className="card__item">
                                                <div className="card__label">Subtotal</div>
                                                <div className="card__price">
                                                    €<span>89,99</span>
                                                </div>
                                            </div>
                                            <div className="card__item">
                                                <div className="card__label">Discount Cupon</div>
                                                <div className="card__price">
                                                    €<span>89,99</span>
                                                </div>
                                            </div>
                                            <div className="card__item card__item_active">
                                                <div className="card__label">Total</div>
                                                <div className="card__price">
                                                    €<span>89,99</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="#" className="card__btn btn">
                                        Proceed to checkout
                                    </a>
                                </section>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCard;
