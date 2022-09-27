import { FC, useEffect, useState, memo } from "react";
import { Formik, Form as FormikForm } from "formik";
import * as Yup from "yup";
import { Input } from "../../_components";

interface EmailValues {
    email: string;
}

const initialValues: EmailValues = { email: "" };

const validationSchema = Yup.object({
    email: Yup.string().email("Invalid Email").required("Email Address is required"),
});

const Email: FC<{ forgot?: boolean }> = ({ forgot }) => {
    const [sended, setSended] = useState(false);

    useEffect(() => {
        sended &&
            setTimeout(() => {
                setSended(false);
            }, 5000);
    }, [sended]);

    return (
        <div
            className={`body-registr__column ${
                forgot ? "body-registr__column_forgot" : "body-registr__column_register"
            }`}
        >
            <h3 className="body-registr__title">{forgot ? "Forgot password" : "Register"}</h3>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm }) => {
                    values = {
                        ...values,
                    };
                    resetForm();
                    setSended(true);
                    console.log(JSON.stringify(values, null, 2));
                }}
            >
                <FormikForm className="body-registr__form">
                    {forgot && (
                        <p className="body-registr__forgot-text">
                            Lost your password? Please enter your username or email address. You will receive
                            a link to create a new password via email.
                        </p>
                    )}
                    <div className="body-registr__input-wrap">
                        <label
                            htmlFor={forgot ? "account-email" : "forgot-email"}
                            className="body-registr__subtitle"
                        >
                            Email address
                        </label>
                        <Input
                            id={forgot ? "account-email" : "forgot-email"}
                            className="body-registr__input input"
                            placeholder="Your Email Address"
                            type="text"
                            name="email"
                        />
                    </div>
                    {!forgot && (
                        <div className="body-registr__text">
                            <p>A password will be sent to your email address.</p>
                            <p>
                                Your personal data will be used to support your experience throughout this
                                website, to manage access to your account, and for other purposes described in
                                our privacy policy.
                            </p>
                        </div>
                    )}
                    {sended ? (
                        <span className="body-registr__subscribed">Check your email</span>
                    ) : (
                        <button type="submit" className="body-registr__btn btn">
                            {forgot ? "RESET PASSWORD" : "REGISTER"}
                        </button>
                    )}
                </FormikForm>
            </Formik>
        </div>
    );
};

export default memo(Email);
