import React from "react";

const Billing = () => {
    return    <div className="page__body body-billing">
    <div className="body-billing__wrapper">
       <div className="body-billing__container _container">
          <div className="body-billing__flex">
             <section className="body-billing__address account-address">
                <div className="account-address__inner">
                   <h2 className="account-address__subtitle">Billing address</h2>
                   <div className="account-address__form">
                      <button type="button" className="account-address__btn">Edit</button>
                      <button type="submit" className="account-address__btn account-address__btn_submit">
                         Submit</button>
                      <div className="account-address__body">
                         <div className="account-address__row">
                            <div className="account-address__label">First Name</div>
                            <div className="account-address__input-wrap">
                               <input autoComplete="off" type="text" name="form[]" data-error="error"
                                  data-value="Sabri" className="account-address__input"/>
                            </div>
                         </div>
                         <div className="account-address__row">
                            <div className="account-address__label">Last Name</div>
                            <div className="account-address__input-wrap">
                               <input autoComplete="off" type="text" name="form[]" data-error="error"
                                  data-value="Hakuli" className="account-address__input"/>
                            </div>
                         </div>
                         <div className="account-address__row">
                            <div className="account-address__label">Country</div>
                            <div className="account-address__input-wrap">
                               <input autoComplete="off" type="text" name="form[]" data-error="error"
                                  data-value="Kosovo" className="account-address__input"/>
                            </div>
                         </div>
                         <div className="account-address__row">
                            <div className="account-address__label">Street Address</div>
                            <div className="account-address__input-wrap">
                               <input autoComplete="off" type="text" name="form[]" data-error="error"
                                  data-value="Chuck Norris 32" className="account-address__input"/>
                            </div>
                         </div>
                         <div className="account-address__row">
                            <div className="account-address__label">Town</div>
                            <div className="account-address__input-wrap">
                               <input autoComplete="off" type="text" name="form[]" data-error="error"
                                  data-value="Gjilan" className="account-address__input"/>
                            </div>
                         </div>
                         <div className="account-address__row">
                            <div className="account-address__label">State</div>
                            <div className="account-address__input-wrap">
                               <input autoComplete="off" type="text" name="form[]" data-error="error"
                                  data-value="Gjilan" className="account-address__input"/>
                            </div>
                         </div>
                         <div className="account-address__row">
                            <div className="account-address__label">Postal Code</div>
                            <div className="account-address__input-wrap">
                               <input autoComplete="off" type="text" name="form[]" data-error="error"
                                  data-value="60000" className="account-address__input"/>
                            </div>
                         </div>
                         <div className="account-address__row">
                            <div className="account-address__label">Phone</div>
                            <div className="account-address__input-wrap">
                               <input autoComplete="off" type="text" name="form[]" data-error="error"
                                  data-value="+383 44 201 874" className="account-address__input"/>
                            </div>
                         </div>
                         <div className="account-address__row">
                            <div className="account-address__label">Email Address</div>
                            <div className="account-address__input-wrap">
                               <input autoComplete="off" type="text" name="form[]" data-error="error"
                                  data-value="sabrihakuli@outlook.com" className="account-address__input"/>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
             </section>
             <section className="body-billing__order order-billing">
                <div className="order-billing__inner">
                   <h2 className="order-billing__title">Your order</h2>
                   <div className="order-billing__products products-billing">
                      <div className="products-billing__body">
                         <div className="products-billing__item">
                            <div className="products-billing__name">
                               <span>
                                  <img src="img/icons/dugi.svg" alt=""/>
                               </span>
                               WireDugi
                            </div>
                            <button type="submit" className="products-billing__btn">
                               <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <path d="M12 4L4 12" stroke="#B9B9B9" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round" />
                                  <path d="M4 4L12 12" stroke="#B9B9B9" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round" />
                               </svg>
                            </button>
                         </div>
                         <div className="products-billing__item">
                            <div className="products-billing__name">
                               <span>
                                  <img src="img/icons/dugi.svg" alt=""/>
                               </span>
                               WireDugi
                            </div>
                            <button type="submit" className="products-billing__btn">
                               <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <path d="M12 4L4 12" stroke="#B9B9B9" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round" />
                                  <path d="M4 4L12 12" stroke="#B9B9B9" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round" />
                               </svg>
                            </button>
                         </div>
                         <div className="products-billing__item">
                            <div className="products-billing__name">
                               <span>
                                  <img src="img/icons/dugi.svg" alt=""/>
                               </span>
                               WireDugi
                            </div>
                            <button type="submit" className="products-billing__btn">
                               <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <path d="M12 4L4 12" stroke="#B9B9B9" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round" />
                                  <path d="M4 4L12 12" stroke="#B9B9B9" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round" />
                               </svg>
                            </button>
                         </div>
                      </div>
                   </div>
                   <div className="order-billing__prices prices-billing">
                      <div className="prices-billing__body">
                         <div className="prices-billing__item">
                            <div className="prices-billing__label">Subtotal</div>
                            <div className="prices-billing__price">€<span>89,99</span></div>
                         </div>
                         <div className="prices-billing__item">
                            <div className="prices-billing__label">Discount Cupon</div>
                            <div className="prices-billing__price">€<span>89,99</span></div>
                         </div>
                         <div className="prices-billing__item prices-billing__item_active">
                            <div className="prices-billing__label">Total</div>
                            <div className="prices-billing__price">€<span>89,99</span></div>
                         </div>
                      </div>
                   </div>
                   <form action="#" className="order-billing__form form-billing">
                      <div className="form-billing__body">
                         <div className="form-billing__top">
                            <div className="form-billing__soforte">
                               <label className="form-billing__checkbox checkbox">
                                  <input data-error="Ошибка" className="checkbox__input" type="checkbox" value="1"
                                     name="form[]"/>
                                  <span className="checkbox__text"><span>Soforte Payment</span></span>
                               </label>
                               <div className="form-billing__payment">
                                  <div className="form-billing__pay-item">
                                     <img src="img/payment/mastercard.svg" alt=""/>
                                  </div>
                                  <div className="form-billing__pay-item">
                                     <img src="img/payment/amex.svg" alt=""/>
                                  </div>
                                  <div className="form-billing__pay-item">
                                     <img src="img/payment/visa.svg" alt=""/>
                                  </div>
                                  <div className="form-billing__pay-item">
                                     <img src="img/payment/diners.svg" alt=""/>
                                  </div>
                                  <div className="form-billing__pay-item">
                                     <img src="img/payment/jcb.svg" alt=""/>
                                  </div>
                                  <div className="form-billing__pay-item">
                                     <img src="img/payment/discover.svg" alt=""/>
                                  </div>
                               </div>
                            </div>
                            <a href="#" className="form-billing__btn btn btn_outline">Go to soforte</a>
                         </div>
                         <div className="form-billing__middle">
                            <label className="form-billing__checkbox checkbox">
                               <input data-error="error" className="checkbox__input" type="checkbox" value="1"
                                  name="form[]"/>
                               <span className="checkbox__text">
                                  <span>
                                     <img src="img/payment/PayPal.svg" alt=""/>
                                  </span>
                               </span>
                            </label>
                         </div>
                         <div className="form-billing__bottom">
                            <div className="form-billing__checkbox-wrap">
                               <label className="form-billing__checkbox checkbox">
                                  <input data-error="error" className="checkbox__input" type="checkbox" value="1"
                                     name="form[]"/>
                                  <span className="checkbox__text"><span>I have read and agree to the website terms
                                        and
                                        conditions</span></span>
                               </label>
                            </div>
                            <button type="submit" className="form-billing__btn btn">Place order</button>
                         </div>
                      </div>
                   </form>
                </div>
             </section>
          </div>
       </div>
    </div>
 </div>;
};

export default Billing;
