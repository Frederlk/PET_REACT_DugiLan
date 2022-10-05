import { FC, memo, useMemo, useState } from "react";
import { Formik, Form as FormikForm } from "formik";
import { IUserAddress } from "../../models";
import { useAppSelector } from "../../hooks/useRedux";
import { userAPI } from "../../services/userAPI";
import AddressRow from "./AddressRow";
import { object, string } from "yup";
import { useActions } from "../../hooks";

const validationSchema = object({
    country: string().required("Required"),
    email: string().email("Invalid Email").required("Required"),
    firstName: string()
        .min(2, "Should be 2 chars minimum")
        .max(25, "Should be 25 chars max")
        .required("Required"),
    lastName: string()
        .min(2, "Should be 2 chars minimum")
        .max(25, "Should be 25 chars max")
        .required("Required"),
    phone: string().required("Required"),
    postalCode: string().required("Required"),
    state: string().required("Required"),
    streetAddress: string().required("Required"),
    town: string().required("Required"),
});

const Address: FC<{ className?: string; address?: boolean }> = ({ className, address }) => {
    const [edit, setEdit] = useState(false);
    const [changeInfo] = userAPI.useChangeInfoMutation();
    const localState = JSON.parse(localStorage.getItem("user") || "{}");
    const { setUser } = useActions();
    const { user } = useAppSelector((state) => state.user);
    const { country, email, firstName, lastName, phone, postalCode, state, streetAddress, town } =
        localState.address;

    const initialValues: IUserAddress = useMemo(() => {
        return {
            country: country || "",
            email: email || user.email || "",
            firstName: firstName || "",
            lastName: lastName || "",
            phone: phone || "",
            postalCode: postalCode || "",
            state: state || "",
            streetAddress: streetAddress || "",
            town: town || "",
        };
    }, [localState]);

    return (
        <div className={`${className || ""} account-address`}>
            {address && <h2 className="account-address__title">Address</h2>}
            <div className="account-address__subtitle">Billing address</div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    const newAddress = {
                        ...localState,
                        address: {
                            country: values.country,
                            email: values.email,
                            firstName: values.firstName,
                            lastName: values.lastName,
                            phone: values.phone,
                            postalCode: values.postalCode,
                            state: values.state,
                            streetAddress: values.streetAddress,
                            town: values.town,
                        },
                    };
                    changeInfo({
                        id: user.id,
                        data: newAddress,
                    });
                    setUser(newAddress);
                    localStorage.setItem("user", JSON.stringify(newAddress));
                    setEdit(false);
                }}
            >
                <FormikForm className={`account-address__form ${edit ? "_edit" : ""}`}>
                    <button type="submit" className="account-address__btn account-address__btn_submit ">
                        Save changes
                    </button>
                    <button
                        type="button"
                        onClick={() => setEdit(true)}
                        className="account-address__btn account-address__btn_edit "
                    >
                        Edit
                    </button>
                    <div className="account-address__body">
                        <AddressRow disabled={edit ? false : true} label="First Name" name="firstName" />
                        <AddressRow disabled={edit ? false : true} label="Last Name" name="lastName" />
                        <AddressRow disabled={edit ? false : true} label="Country" name="country" />
                        <AddressRow
                            disabled={edit ? false : true}
                            label="Street Address"
                            name="streetAddress"
                        />
                        <AddressRow disabled={edit ? false : true} label="Town" name="town" />
                        <AddressRow disabled={edit ? false : true} label="State" name="state" />
                        <AddressRow disabled={edit ? false : true} label="Postal Code" name="postalCode" />
                        <AddressRow disabled={edit ? false : true} label="Phone" name="phone" />
                        <AddressRow disabled={edit ? false : true} label="Email Address" name="email" />
                    </div>
                </FormikForm>
            </Formik>
        </div>
    );
};

export default memo(Address);
