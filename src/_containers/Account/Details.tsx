import { FC, ChangeEvent, useState, useMemo, memo } from "react";
import { Formik, Form as FormikForm } from "formik";
import { string, object, ref } from "yup";
import { debounce } from "lodash";

import { usernameRegex } from "../../constants/regs";
import { userAPI } from "../../services/userAPI";
import { useAppSelector } from "../../hooks/useRedux";
import DetailsItem from "./DetailsItem";
import DetailsDebounceItem from "./DetailsDebounceItem";

const Details: FC = () => {
    const [edit, setEdit] = useState(false);
    const [changeInfo] = userAPI.useChangeInfoMutation();
    const [getUser] = userAPI.useLazyGetUserQuery();
    const localState = JSON.parse(localStorage.getItem("user") || "{}");

    const { user } = useAppSelector((state) => state.user);
    const { email, username, password, address, id, firstName, lastName } = localState;

    const debouncedValidation = debounce(
        (val, setFieldError, name) => {
            getUser(val.toLowerCase()).then((res) => {
                const user = res.data;
                if (
                    user?.username &&
                    user?.username.toLowerCase() !== username.toLowerCase() &&
                    user?.email &&
                    user?.email.toLowerCase() !== email.toLowerCase()
                ) {
                    setFieldError(name, `${name} already exists`);
                }
            });
        },
        1000,
        {
            trailing: true,
        }
    );

    const validationSchema = useMemo(
        () =>
            object().shape(
                {
                    firstName: string()
                        .min(2, "Should be 2 chars minimum")
                        .max(25, "Should be 25 chars max")
                        .required("First Name is required"),
                    lastName: string()
                        .min(2, "Should be 2 chars minimum")
                        .max(25, "Should be 25 chars max")
                        .required("Last Name is required"),
                    username: string().test("Display Name", "Invalid Display Name", function (value) {
                        if (value && usernameRegex.test(value)) {
                            return true;
                        } else {
                            return false;
                        }
                    }),
                    email: string().email("Invalid Email").required("Email Address is required"),
                    currentPassword: string()
                        .matches(
                            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                            "Minimum eight characters, at least one uppercase letter, one lowercase letter and one number"
                        )
                        .oneOf([password, null], "Wrong Current Password")
                        .when(["newPassword"], {
                            is: (newPassword: string) => newPassword?.length > 0,
                            then: (schema) => schema.required("Current Password is Required"),
                        }),
                    newPassword: string()
                        .matches(
                            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                            "Minimum eight characters, at least one uppercase letter, one lowercase letter and one number"
                        )
                        .when(["currentPassword"], {
                            is: (currentPassword: string) => currentPassword?.length > 0,
                            then: (schema) => schema.required("Enter your New Password"),
                        })
                        .test("New Password", "New Password must differ", function (value, testContext) {
                            const currPass = testContext.parent.currentPassword;
                            if (value !== currPass || (!value && !currPass)) {
                                return true;
                            } else {
                                return false;
                            }
                        }),
                    confirmPassword: string()
                        .when(["newPassword"], {
                            is: (newPassword: string) => newPassword?.length > 0,
                            then: (schema) => schema.required("Passwords must match"),
                        })
                        .oneOf([ref("newPassword"), null], "Passwords must match"),
                },
                [["currentPassword", "newPassword"]]
            ),
        [user]
    );

    const initialValues = useMemo(() => {
        return {
            firstName: firstName || address.firstName || "",
            lastName: lastName || address.lastName || "",
            username: username,
            email: email || address.email || "",
            currentPassword: "",
            newPassword: "",
            confirmPassword: "",
        };
    }, [localState]);

    return (
        <div className="content-account__details account-details">
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm }) => {
                    const newDetails = {
                        ...localState,
                        email: values.email,
                        username: values.username,
                        firstName: values.firstName,
                        lastName: values.lastName,
                        password: values.confirmPassword.length > 1 ? values.confirmPassword : password,
                    };
                    changeInfo({
                        id: id,
                        data: newDetails,
                    });
                    localStorage.setItem("user", JSON.stringify(newDetails));
                    setEdit(false);
                    resetForm({
                        values: { ...values, currentPassword: "", newPassword: "", confirmPassword: "" },
                    });
                }}
            >
                {({ values, errors, handleBlur, handleChange, setFieldError }) => {
                    const handleDebounceChange = (e: ChangeEvent<HTMLInputElement>, name: string) => {
                        handleChange(e);
                        debouncedValidation(e.target.value, setFieldError, name);
                    };
                    return (
                        <FormikForm className={`account-details__form ${edit ? "_edit" : ""}`}>
                            <h2 className="account-details__title">Account Details</h2>
                            <div className="account-details__info">
                                <DetailsItem
                                    label="First Name"
                                    name="firstName"
                                    half
                                    disabled={edit ? false : true}
                                />
                                <DetailsItem
                                    label="Last Name"
                                    name="lastName"
                                    half
                                    disabled={edit ? false : true}
                                />
                                <DetailsDebounceItem
                                    label="Display Name"
                                    name="username"
                                    disabled={edit ? false : true}
                                    handleDebounceChange={(e) => handleDebounceChange(e, "username")}
                                    value={values.username}
                                    error={errors.username}
                                />
                                <DetailsDebounceItem
                                    label="Email Address"
                                    name="email"
                                    disabled={edit ? false : true}
                                    handleDebounceChange={(e) => handleDebounceChange(e, "email")}
                                    value={values.email}
                                    error={errors.email}
                                />
                            </div>
                            <h2 className="account-details__subtitle"> Change Password</h2>
                            <div className="account-details__password">
                                <DetailsItem
                                    label="Current Password"
                                    name="currentPassword"
                                    disabled={edit ? false : true}
                                    password
                                />
                                <DetailsItem
                                    label="New Password"
                                    name="newPassword"
                                    disabled={edit ? false : true}
                                    password
                                />
                                <DetailsItem
                                    label="Confirm New Password"
                                    name="confirmPassword"
                                    disabled={edit ? false : true}
                                    password
                                />
                            </div>
                            <div className="account-details__bottom">
                                <button
                                    type="submit"
                                    className="account-details__btn account-details__btn_submit btn"
                                >
                                    Save changes
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setEdit(true)}
                                    className="account-details__btn account-details__btn_edit btn"
                                >
                                    Edit
                                </button>
                                <button
                                    type="reset"
                                    onClick={() => setEdit(false)}
                                    className="account-details__reset"
                                >
                                    Reset
                                </button>
                            </div>
                        </FormikForm>
                    );
                }}
            </Formik>
        </div>
    );
};

export default memo(Details);
