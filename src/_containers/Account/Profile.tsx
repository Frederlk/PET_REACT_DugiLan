import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/useRedux";
import { selectedNames } from "../../store/slices/account/account.slice";
import AccountSide from "./AccountSide";
import Dashboard from "./Dashboard";

const { DASHBOARD, ORDERS, ADDRESS, DETAILS } = selectedNames;

const labels = [DASHBOARD, ORDERS, ADDRESS, DETAILS];

const Profile = () => {
    const { selected } = useAppSelector((state) => state.account);

    return (
        <div className="page__body body-account">
            <div className="body-account__container">
                <AccountSide labels={labels} />
                <section className="body-account__content content-account">
                    {selected === DASHBOARD && <Dashboard />}

                    {selected === ORDERS && (
                        <div className="content-account__orders account-orders">
                            <h2 className="account-orders__title">Orders</h2>
                            <div className="account-orders__content">
                                <div className="account-orders__row account-orders__row_top">
                                    <div className="account-orders__td account-orders__td_1">Order name</div>
                                    <div className="account-orders__td account-orders__td_2">Order ID</div>
                                    <div className="account-orders__td account-orders__td_3">Status</div>
                                    <div className="account-orders__td account-orders__td_4">QTY</div>
                                    <div className="account-orders__td account-orders__td_5">Total</div>
                                </div>

                                <div className="account-orders__row">
                                    <div className="account-orders__td account-orders__td_1">
                                        <span>
                                            <img src="img/icons/dugi.svg" alt="" />
                                        </span>
                                        WireDugi
                                    </div>
                                    <div className="account-orders__td account-orders__td_2">#2306</div>
                                    <div className="account-orders__td account-orders__td_3">Processing</div>
                                    <div className="account-orders__td account-orders__td_4">1</div>
                                    <div className="account-orders__td account-orders__td_5">€ 89,99</div>
                                    <div className="account-orders__td account-orders__td_6 account-orders__td_more">
                                        <Link to={""}>details</Link>
                                    </div>
                                    <div className="account-orders__td account-orders__td_7">
                                        <a href="#" download className="account-orders__td_btn btn">
                                            Download
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {selected === ADDRESS && (
                        <div className="content-account__address account-address">
                            <h2 className="account-address__title">Address</h2>
                            <div className="account-address__subtitle">Billing address</div>
                            <div className="account-address__form">
                                <button type="button" className="account-address__btn">
                                    Edit
                                </button>
                                <button
                                    type="submit"
                                    className="account-address__btn account-address__btn_submit"
                                >
                                    Submit
                                </button>
                                <div className="account-address__body">
                                    <div className="account-address__row">
                                        <div className="account-address__label">First Name</div>
                                        <div className="account-address__input-wrap">
                                            <input
                                                autoComplete="off"
                                                type="text"
                                                name="form[]"
                                                data-error="error"
                                                data-value="Sabri"
                                                className="account-address__input"
                                            />
                                        </div>
                                    </div>
                                    <div className="account-address__row">
                                        <div className="account-address__label">Last Name</div>
                                        <div className="account-address__input-wrap">
                                            <input
                                                autoComplete="off"
                                                type="text"
                                                name="form[]"
                                                data-error="error"
                                                data-value="Hakuli"
                                                className="account-address__input"
                                            />
                                        </div>
                                    </div>
                                    <div className="account-address__row">
                                        <div className="account-address__label">Country</div>
                                        <div className="account-address__input-wrap">
                                            <input
                                                autoComplete="off"
                                                type="text"
                                                name="form[]"
                                                data-error="error"
                                                data-value="Kosovo"
                                                className="account-address__input"
                                            />
                                        </div>
                                    </div>
                                    <div className="account-address__row">
                                        <div className="account-address__label">Street Address</div>
                                        <div className="account-address__input-wrap">
                                            <input
                                                autoComplete="off"
                                                type="text"
                                                name="form[]"
                                                data-error="error"
                                                data-value="Chuck Norris 32"
                                                className="account-address__input"
                                            />
                                        </div>
                                    </div>
                                    <div className="account-address__row">
                                        <div className="account-address__label">Town</div>
                                        <div className="account-address__input-wrap">
                                            <input
                                                autoComplete="off"
                                                type="text"
                                                name="form[]"
                                                data-error="error"
                                                data-value="Gjilan"
                                                className="account-address__input"
                                            />
                                        </div>
                                    </div>
                                    <div className="account-address__row">
                                        <div className="account-address__label">State</div>
                                        <div className="account-address__input-wrap">
                                            <input
                                                autoComplete="off"
                                                type="text"
                                                name="form[]"
                                                data-error="error"
                                                data-value="Gjilan"
                                                className="account-address__input"
                                            />
                                        </div>
                                    </div>
                                    <div className="account-address__row">
                                        <div className="account-address__label">Postal Code</div>
                                        <div className="account-address__input-wrap">
                                            <input
                                                autoComplete="off"
                                                type="text"
                                                name="form[]"
                                                data-error="error"
                                                data-value="60000"
                                                className="account-address__input"
                                            />
                                        </div>
                                    </div>
                                    <div className="account-address__row">
                                        <div className="account-address__label">Phone</div>
                                        <div className="account-address__input-wrap">
                                            <input
                                                autoComplete="off"
                                                type="text"
                                                name="form[]"
                                                data-error="error"
                                                data-value="+383 44 201 874"
                                                className="account-address__input"
                                            />
                                        </div>
                                    </div>
                                    <div className="account-address__row">
                                        <div className="account-address__label">Email Address</div>
                                        <div className="account-address__input-wrap">
                                            <input
                                                autoComplete="off"
                                                type="text"
                                                name="form[]"
                                                data-error="error"
                                                data-value="sabrihakuli@outlook.com"
                                                className="account-address__input"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {selected === DETAILS && (
                        <div className="content-account__details account-details">
                            <div className="account-details__inner">
                                <form className="account-details__form">
                                    <h2 className="account-details__title">Account Details</h2>
                                    <div className="account-details__info">
                                        <div className="account-details__input-wrap account-details__input-wrap_half">
                                            <div className="account-details__label">First Name</div>
                                            <input
                                                autoComplete="off"
                                                type="text"
                                                name="form[]"
                                                data-error="Error"
                                                data-value="First Name"
                                                className="account-details__input input _req"
                                            />
                                        </div>
                                        <div className="account-details__input-wrap account-details__input-wrap_half">
                                            <div className="account-details__label">Last Name</div>
                                            <input
                                                autoComplete="off"
                                                type="text"
                                                name="form[]"
                                                data-error="Error"
                                                data-value="Last Name"
                                                className="account-details__input input _req"
                                            />
                                        </div>
                                        <div className="account-details__input-wrap">
                                            <div className="account-details__label">Display name</div>
                                            <input
                                                autoComplete="off"
                                                type="text"
                                                name="form[]"
                                                data-error="Error"
                                                data-value="Display name"
                                                className="account-details__input input _req"
                                            />
                                        </div>
                                        <div className="account-details__input-wrap">
                                            <div className="account-details__label">Email Address</div>
                                            <input
                                                autoComplete="off"
                                                type="email"
                                                name="form[]"
                                                data-error="Error"
                                                data-value="Email Address"
                                                className="account-details__input input _req"
                                            />
                                        </div>
                                    </div>
                                    <h2 className="account-details__subtitle">Change Password</h2>
                                    <div className="account-details__password">
                                        <div className="account-details__input-wrap">
                                            <div className="account-details__label">Current password</div>
                                            <input
                                                autoComplete="off"
                                                type="text"
                                                name="form[]"
                                                data-error="Error"
                                                data-value="Last Name"
                                                className="account-details__input input _req"
                                            />
                                        </div>
                                        <div className="account-details__input-wrap">
                                            <div className="account-details__label">New Password</div>
                                            <input
                                                autoComplete="off"
                                                type="text"
                                                name="form[]"
                                                data-error="Error"
                                                data-value="Last Name"
                                                className="account-details__input input _req"
                                            />
                                        </div>
                                        <div className="account-details__input-wrap">
                                            <div className="account-details__label">Confirm new passowrd</div>
                                            <input
                                                autoComplete="off"
                                                type="text"
                                                name="form[]"
                                                data-error="Error"
                                                data-value="Last Name"
                                                className="account-details__input input _req"
                                            />
                                        </div>
                                    </div>
                                    <div className="account-details__bottom">
                                        <button type="submit" className="account-details__btn btn">
                                            Save changes
                                        </button>
                                        <button type="reset" className="account-details__reset">
                                            Reset
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
};

export default Profile;
