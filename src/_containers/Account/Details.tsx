import { FC, useState, useMemo, memo, useEffect, useCallback } from "react";
import { Formik, Form as FormikForm } from "formik";
import { string, object, ref } from "yup";
import { debounce } from "lodash";

import { usernameRegex } from "../../constants/regs";
import { userAPI } from "../../services/userAPI";
import { useAppSelector } from "../../hooks/useRedux";
import DetailsItem from "./DetailsItem";
// import useDebounce from "../../hooks/useDebounce";

const Details: FC = () => {
    const [edit, setEdit] = useState(false);
    const [changeInfo] = userAPI.useChangeInfoMutation();
    const [getUser] = userAPI.useLazyGetUserQuery();

    const { user } = useAppSelector((state) => state.user);
    const { email, username, password, address, id, firstName, lastName } = user;

    const loginValidateSchema = object({
        username: string()
            .test("Display Name", "Invalid Display Name", function (value) {
                if (value && usernameRegex.test(value)) {
                    return true;
                } else {
                    return false;
                }
            })
            .test("Existing Name", "This Display Name is already Existing", function (value) {
                if (value) {
                    const debounceGetUsers = debounce(getUser, 1000);
                    const user = debounceGetUsers(value)?.then((res) => res.data);
                    const isEsisting = async () => {
                        const a = await user;
                        console.log(a);
                        return a?.username ? false : true;
                    };
                    return isEsisting();
                } else {
                    return false;
                }
            }),
        email: string().email("Invalid Email").required("Email Address is required"),
    });

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

    const concatedSchema = validationSchema.concat(loginValidateSchema);

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
    }, [user]);

    return (
        <div className="content-account__details account-details">
            <Formik
                initialValues={initialValues}
                validationSchema={concatedSchema}
                onSubmit={(values, { resetForm }) => {
                    const newDetails = {
                        ...user,
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
                    resetForm();
                }}
            >
                <FormikForm className={`account-details__form ${edit ? "_edit" : ""}`}>
                    <h2 className="account-details__title">Account Details </h2>
                    <div className="account-details__info">
                        <DetailsItem
                            label="First Name"
                            name="firstName"
                            half
                            disabled={edit ? false : true}
                        />
                        <DetailsItem label="Last Name" name="lastName" half disabled={edit ? false : true} />
                        <DetailsItem label="Display Name" name="username" disabled={edit ? false : true} />
                        <DetailsItem label="Email Address" name="email" disabled={edit ? false : true} />
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
            </Formik>
        </div>
    );
};

export default memo(Details);
