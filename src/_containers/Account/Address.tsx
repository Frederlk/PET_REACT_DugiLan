import { FC, memo, useMemo, useState } from "react";
import { Formik, Form as FormikForm } from "formik";
import * as Yup from "yup";
import { useActions } from "../../hooks";
import { IUser, IUserAddress } from "../../models";
import AddressRow from "./AddressRow";
import { useAppSelector } from "../../hooks/useRedux";

const validationSchema = Yup.object({
    email: Yup.string().email("Invalid Email").required("Email Address is required"),
});

const Address: FC = () => {
    const [edit, setEdit] = useState(false);

    const { address } = useAppSelector((state) => state.address);
    const { country, email, firstName, lastName, phone, postalCode, state, streetAddress, town } = address;

    const initialValues: IUserAddress = useMemo(() => {
        return {
            country: country || "",
            email: email || "",
            firstName: firstName || "",
            lastName: lastName || "",
            phone: phone || "",
            postalCode: postalCode || "",
            state: state || "",
            streetAddress: streetAddress || "",
            town: town || "",
        };
    }, [address]);

    return (
        <div className="content-account__address account-address">
            <h2 className="account-address__title">Address</h2>
            <div className="account-address__subtitle">Billing address</div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm }) => {
                    values = {
                        ...values,
                    };
                    resetForm();
                    console.log(JSON.stringify(values, null, 2));
                }}
            >
                <FormikForm className="account-address__form">
                    {edit ? (
                        <button
                            type="submit"
                            onClick={() => setEdit(false)}
                            className="account-address__btn account-address__btn_submit"
                        >
                            Submit
                        </button>
                    ) : (
                        <button type="button" onClick={() => setEdit(true)} className="account-address__btn">
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
