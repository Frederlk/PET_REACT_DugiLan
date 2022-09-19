import React from "react";

const Registr = () => {
    return (
        <div className="page__body body-registr">
            <div className="body-registr__wrapper">
                <div className="body-registr__container _container">
                    <div className="body-registr__flex">
                        <div className="body-registr__column body-registr__column_login">
                            <h2 className="body-registr__title">Login</h2>
                            <form action="#" className="body-registr__form">
                                <div className="body-registr__input-wrap">
                                    <h6 className="body-registr__subtitle">Username or email address</h6>
                                    <input
                                        autoComplete="off"
                                        type="text"
                                        name="form[]"
                                        data-error="Error"
                                        data-value="Username or email address"
                                        className="body-registr__input input _req"
                                    />
                                </div>
                                <div className="body-registr__input-wrap">
                                    <h6 className="body-registr__subtitle">Password</h6>
                                    <input
                                        autoComplete="off"
                                        type="password"
                                        name="form[]"
                                        data-error="Error"
                                        data-value="Password"
                                        className="body-registr__input input _req"
                                    />
                                </div>
                                <button type="submit" className="body-registr__btn btn">
                                    Login to your account
                                </button>
                                <label className="body-registr__checkbox checkbox">
                                    <input
                                        data-error="Ошибка"
                                        className="checkbox__input"
                                        type="checkbox"
                                        value="1"
                                        name="form[]"
                                    />
                                    <span className="checkbox__text">
                                        <span>Remember me</span>
                                    </span>
                                </label>
                                <div className="body-registr__forgot">
                                    <a href="#">Lost your password?</a>
                                </div>
                            </form>
                        </div>
                        <div className="body-registr__column body-registr__column_register">
                            <h2 className="body-registr__title">Register</h2>
                            <form action="#" className="body-registr__form">
                                <div className="body-registr__input-wrap">
                                    <h6 className="body-registr__subtitle">Username or email address</h6>
                                    <input
                                        autoComplete="off"
                                        type="email"
                                        name="form[]"
                                        data-error="Error"
                                        data-value="Username or email address"
                                        className="body-registr__input input _req"
                                    />
                                </div>
                                <div className="body-registr__text">
                                    <p>A password will be sent to your email address.</p>
                                    <p>
                                        Your personal data will be used to support your experience throughout
                                        this website, to manage access to your account, and for other purposes
                                        described in our privacy policy.
                                    </p>
                                </div>
                                <button type="submit" className="body-registr__btn btn">
                                    Register
                                </button>
                            </form>
                        </div>
                        <div className="body-registr__column body-registr__column_forgot">
                            <h2 className="body-registr__title">Forgot password</h2>
                            <div className="body-registr__forgot-text">
                                Lost your password? Please enter your username or email address. You will
                                receive a link to create a new password via email.
                            </div>
                            <form action="#" className="body-registr__form">
                                <div className="body-registr__input-wrap">
                                    <h6 className="body-registr__subtitle">Username or email</h6>
                                    <input
                                        autoComplete="off"
                                        type="email"
                                        name="form[]"
                                        data-error="Error"
                                        data-value="Username or email address"
                                        className="body-registr__input input _req"
                                    />
                                </div>
                                <button type="submit" className="body-registr__btn btn">
                                    Reset password
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registr;
