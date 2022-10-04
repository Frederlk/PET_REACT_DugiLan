import { FC, useEffect, useState, useMemo, memo } from "react";
import { Formik, Form as FormikForm } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

import { CheckboxForm, Input } from "../../_components";
import { RouteNames } from "../../routes";
import { emailRegex, usernameRegex } from "../../constants/regs";
import { useActions } from "../../hooks";
import { userAPI } from "../../services/userAPI";
import { useAppSelector } from "../../hooks/useRedux";

interface LoginValues {
    loginNameEmail: string;
    loginPassword: string;
    remember: boolean;
}

const validationSchema = Yup.object({
    loginPassword: Yup.string()
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
            "Minimum eight characters, at least one uppercase letter, one lowercase letter and one number"
        )
        .required("Password is required"),

    loginNameEmail: Yup.string()
        .required("Username or Email Address is required")
        .test("test-username", "Invalid Username or Email Address", function (value) {
            if (value) {
                const isValidEmail = emailRegex.test(value);
                const isValidUsername = usernameRegex.test(value);
                if (!isValidEmail && !isValidUsername) {
                    return false;
                }
                return true;
            }
            return false;
        }),
});

const Login: FC = () => {
    const [userData, setUserData] = useState<{ login: string; password: string }>({
        login: "",
        password: "",
    });
    const { login } = useActions();
    const { error, isLoading } = useAppSelector((state) => state.user);
    const [getUser, { data: user, isLoading: loadingUser }] = userAPI.useLazyGetUserQuery();

    const localState = JSON.parse(localStorage.getItem("remembered") || "{}");
    const initialValues: LoginValues = useMemo(() => {
        return {
            loginNameEmail: localState.loginNameEmail || "",
            loginPassword: localState.loginPassword || "",
            remember: localState.remember || "",
        };
    }, [localState]);

    useEffect(() => {
        user && login(userData, user);
    }, [user, userData]);

    return (
        <div className="body-registr__column body-registr__column_login">
            <h3 className="body-registr__title">Login</h3>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    values = {
                        ...values,
                    };
                    setUserData({
                        login: values.loginNameEmail,
                        password: values.loginPassword,
                    });
                    getUser(values.loginNameEmail);
                    if (values.remember) {
                        localStorage.setItem("remembered", JSON.stringify(values));
                    } else {
                        localStorage.removeItem("remembered");
                    }
                }}
            >
                <FormikForm className="body-registr__form">
                    <div className="body-registr__input-wrap">
                        {error && <div className="_input__error _incorrect">{error}</div>}
                        <label htmlFor="account-email" className="body-registr__subtitle">
                            Username or email address
                        </label>
                        <Input
                            id="accout-email"
                            className={`body-registr__input input ${error && "_incorrect"}`}
                            placeholder="Ypur Username or Email Address"
                            type="text"
                            name="loginNameEmail"
                        />
                    </div>
                    <div className="body-registr__input-wrap">
                        <label htmlFor="account-password" className="body-registr__subtitle">
                            Password
                        </label>
                        <Input
                            id="accout-password"
                            className={`body-registr__input input ${error && "_incorrect"}`}
                            autoComplete="off"
                            placeholder="Your Password"
                            type="password"
                            name="loginPassword"
                        />
                    </div>
                    <div className="body-registr__bottom">
                        <button
                            type="submit"
                            disabled={isLoading || loadingUser}
                            className="body-registr__btn btn"
                        >
                            {isLoading || loadingUser ? "Loading..." : "Login to your account"}
                        </button>
                        <CheckboxForm className="checkbox_account" name="remember" id="remember-me">
                            Remember me
                        </CheckboxForm>
                    </div>
                    <div className="body-registr__forgot">
                        <Link to={RouteNames.ACCOUNT + "#forgot"}>Lost your password?</Link>
                    </div>
                </FormikForm>
            </Formik>
        </div>
    );
};

export default memo(Login);
