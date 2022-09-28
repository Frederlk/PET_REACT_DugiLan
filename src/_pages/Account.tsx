import { FC, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Login from "../_containers/Account/Login";
import Email from "../_containers/Account/Email";
import { useLocation } from "react-router-dom";
import { useAppSelector } from "../hooks/useRedux";
import Profile from "../_containers/Account/Profile";

const Account: FC = () => {
    const [forgotPage, setForgotPage] = useState(false);
    const { hash } = useLocation();
    const { isAuth } = useAppSelector((state) => state.user);

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

            {isAuth ? (
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
