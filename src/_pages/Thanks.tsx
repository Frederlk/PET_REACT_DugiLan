import React from "react";

const Thanks = () => {
    return (
        <div className="page__body body-thanks">
            <div className="body-thanks__wrapper">
                <div className="body-thanks__container _container">
                    <section className="body-thanks__inner">
                        <h2 className="body-thanks__title">Thank you. Your plugin has been received.</h2>
                        <div className="body-thanks__order">
                            <div className="body-thanks__flex">
                                <div className="body-thanks__column">
                                    <div className="body-thanks__item">
                                        <div className="body-thanks__label">Order number</div>
                                        <div className="body-thanks__info">6300</div>
                                    </div>
                                </div>
                                <div className="body-thanks__column">
                                    <div className="body-thanks__item">
                                        <div className="body-thanks__label">Date</div>
                                        <div className="body-thanks__info">February 27, 2020</div>
                                    </div>
                                </div>
                                <div className="body-thanks__column">
                                    <div className="body-thanks__item">
                                        <div className="body-thanks__label">Total</div>
                                        <div className="body-thanks__info">€ 69,99</div>
                                    </div>
                                </div>
                                <div className="body-thanks__column">
                                    <div className="body-thanks__item">
                                        <div className="body-thanks__label">Payment method</div>
                                        <div className="body-thanks__info">Soforte Payment</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="body-thanks__details thanks-details">
                            <div className="thanks-details__inner">
                                <h2 className="thanks-details__title">Order details</h2>
                                <div className="thanks-details__table">
                                    <div className="thanks-details__row thanks-details__row_top">
                                        <div className="thanks-details__td thanks-details__td_1">
                                            Products
                                        </div>
                                        <div className="thanks-details__td thanks-details__td_2">
                                            Order ID
                                        </div>
                                        <div className="thanks-details__td thanks-details__td_3">
                                            Quantity
                                        </div>
                                        <div className="thanks-details__td thanks-details__td_4">
                                            Suptotal
                                        </div>
                                    </div>
                                    <div className="thanks-details__row">
                                        <div className="thanks-details__td thanks-details__td_1">
                                            <span>
                                                <img src="img/icons/dugi.svg" alt="" />
                                            </span>
                                            WireDugi
                                        </div>
                                        <div className="thanks-details__td thanks-details__td_2">#2306</div>
                                        <div className="thanks-details__td thanks-details__td_3">1</div>
                                        <div className="thanks-details__td thanks-details__td_4">
                                            € 89,99{" "}
                                        </div>
                                    </div>
                                    <div className="thanks-details__row">
                                        <div className="thanks-details__td thanks-details__td_1">
                                            <span>
                                                <img src="img/icons/dugi.svg" alt="" />
                                            </span>
                                            WireDugi
                                        </div>
                                        <div className="thanks-details__td thanks-details__td_2">#2306</div>
                                        <div className="thanks-details__td thanks-details__td_3">1</div>
                                        <div className="thanks-details__td thanks-details__td_4">
                                            € 89,99{" "}
                                        </div>
                                    </div>
                                    <div className="thanks-details__row">
                                        <div className="thanks-details__td thanks-details__td_1">
                                            <span>
                                                <img src="img/icons/dugi.svg" alt="" />
                                            </span>
                                            WireDugi
                                        </div>
                                        <div className="thanks-details__td thanks-details__td_2">#2306</div>
                                        <div className="thanks-details__td thanks-details__td_3">1</div>
                                        <div className="thanks-details__td thanks-details__td_4">
                                            € 89,99{" "}
                                        </div>
                                    </div>
                                    <div className="thanks-details__row thanks-details__row_total">
                                        <div className="thanks-details__td thanks-details__td_label">
                                            Subtotal
                                        </div>
                                        <div className="thanks-details__td thanks-details__td_info">
                                            € <span>89,99</span>
                                        </div>
                                    </div>
                                    <div className="thanks-details__row thanks-details__row_total">
                                        <div className="thanks-details__td thanks-details__td_label">
                                            Discount Cupon
                                        </div>
                                        <div className="thanks-details__td thanks-details__td_info">
                                            € <span>89,99</span>
                                        </div>
                                    </div>
                                    <div className="thanks-details__row thanks-details__row_total">
                                        <div className="thanks-details__td thanks-details__td_label">
                                            Total
                                        </div>
                                        <div className="thanks-details__td thanks-details__td_info">
                                            € <span>89,99</span>
                                        </div>
                                    </div>
                                </div>
                                <a href="#" className="thanks-details__btn btn">
                                    See your themes
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Thanks;