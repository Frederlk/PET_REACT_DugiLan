import { FC } from "react";
import { Formik, Form as FormikForm } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { CheckboxForm, Input } from "../../_components";
import Checkbox from "../../_components/Checkbox";
import { RouteNames } from "../../routes";
import { emailRegex, usernameRegex } from "../../constants/regs";
import { useActions } from "../../hooks";
import { IUser } from "../../models";

interface LoginValues {
    loginNameEmail: string;
    loginPassword: string;
    remember: boolean;
}

const initialValues: LoginValues = { loginNameEmail: "", loginPassword: "", remember: false };

const validationSchema = Yup.object({
    loginPassword: Yup.string()
        .min(2, "Password is too short - should be 2 chars minimum.")
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
    const { login } = useActions();

    return (
        <div className="body-registr__column body-registr__column_login">
            <h3 className="body-registr__title">Login</h3>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm }) => {
                    values = {
                        ...values,
                    };
                    const userData: IUser = {
                        username: !values.loginNameEmail.includes("@") ? values.loginNameEmail : "",
                        email: values.loginNameEmail.includes("@") ? values.loginNameEmail : "",
                        password: values.loginPassword,
                    };
                    resetForm();
                    login(userData);
                    console.log(JSON.stringify(values, null, 2));
                }}
            >
                <FormikForm className="body-registr__form">
                    <div className="body-registr__input-wrap">
                        <label htmlFor="account-email" className="body-registr__subtitle">
                            Username or email address
                        </label>
                        <Input
                            id="accout-email"
                            className="body-registr__input input"
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
                            className="body-registr__input input"
                            autoComplete="off"
                            placeholder="Your Password"
                            type="password"
                            name="loginPassword"
                        />
                    </div>
                    <div className="body-registr__bottom">
                        <button type="submit" className="body-registr__btn btn">
                            Login to your account
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

export default Login;
