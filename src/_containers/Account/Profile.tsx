import { useEffect } from "react";
import { useActions } from "../../hooks";
import { useAppSelector } from "../../hooks/useRedux";
import { selectedNames } from "../../store/slices/account/account.slice";
import AccountSide from "./AccountSide";
import Address from "./Address";
import Dashboard from "./Dashboard";
import Orders from "./Orders";

const { DASHBOARD, ORDERS, ADDRESS, DETAILS } = selectedNames;

const labels = [DASHBOARD, ORDERS, ADDRESS, DETAILS];

const Profile = () => {
    const { selected } = useAppSelector((state) => state.account);
    const { user } = useAppSelector((state) => state.user);
    const { setSelected } = useActions();

    useEffect(() => {
        setSelected(DASHBOARD);
    }, [user]);

    return (
        <div className="page__body body-account">
            <div className="body-account__container">
                <AccountSide labels={labels} />
                <section className="body-account__content content-account">
                    {selected === DASHBOARD && <Dashboard />}

                    {selected === ORDERS && <Orders />}

                    {selected === ADDRESS && <Address />}

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
