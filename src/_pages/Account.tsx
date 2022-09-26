import { FC, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Login from "../_containers/Account/Login";
import Email from "../_containers/Account/Email";
import { useLocation } from "react-router-dom";
import { useAppSelector } from "../hooks/useRedux";
import { Spinner } from "../_components";
import Profile from "../_containers/Account/Profile";

const Account: FC = () => {
    const [forgotPage, setForgotPage] = useState(false);
    const { hash } = useLocation();
    const { isLoading, isAuth, user } = useAppSelector((state) => state.auth);

    useEffect(() => {
        if (hash === "#forgot") {
            setForgotPage(true);
        } else setForgotPage(false);
    }, [hash]);

    return (
        <>
            <Helmet>
                <meta name="Account" content="Account" />
                <title>Account</title>
            </Helmet>

            {isLoading && <Spinner />}

            {isAuth && !isLoading ? (
                <Profile />
            ) : (
                <div className="page__body body-registr">
                    <div className="body-registr__container">
                        {forgotPage ? (
                            <Email forgot />
                        ) : (
                            <>
                                <Login />
                                <Email />
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default Account;
