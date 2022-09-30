import { FC, memo, useMemo, useState } from "react";
import { Formik, Form as FormikForm } from "formik";
import * as Yup from "yup";
import { IUserAddress } from "../../models";
import AddressRow from "./AddressRow";
import { useAppSelector } from "../../hooks/useRedux";
import { userAPI } from "../../services/userAPI";

const validationSchema = Yup.object({
    email: Yup.string().email("Invalid Email").required("Email Address is required"),
});

const Address: FC = () => {
    const [edit, setEdit] = useState(false);
    const [changeInfo] = userAPI.useChangeInfoMutation();
    const localState = JSON.parse(localStorage.getItem("user") || "{}");
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
        <div className="content-account__address account-address">
            <h2 className="account-address__title">Address</h2>
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
                    localStorage.setItem("user", JSON.stringify(newAddress));
                }}
            >
                <FormikForm className={`account-address__form ${edit ? "_edit" : ""}`}>
                    {edit ? (
                        <button type="button" onClick={() => setEdit(false)} className="account-address__btn">
                            Submit
                        </button>
                    ) : (
                        <button type="submit" onClick={() => setEdit(true)} className="account-address__btn">
                            Edit
                        </button>
                    )}
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
