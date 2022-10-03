import { Input } from "../../_components";
import { FC, memo, useEffect, useState } from "react";
import { Formik, Form as FormikForm } from "formik";
import { couponAPI } from "../../services/couponAPI";
import { object, string } from "yup";
import { useActions } from "../../hooks";

const initialValues = {
    coupon: "",
};

const validationSchema = object({
    coupon: string().required("Please, enter coupon"),
});

const Discount: FC = () => {
    const [getCoupon, { isLoading, isSuccess, data }] = couponAPI.useLazyGetCouponQuery();
    const [status, setStatus] = useState("initial");

    const { setCoupon } = useActions();

    useEffect(() => {
        if (isSuccess && data) {
            setStatus("success");
            setCoupon(data.discount);
        } else if (isSuccess && !data) {
            setStatus("error");
            setCoupon(0);
            setTimeout(() => {
                setStatus("initial");
            }, 5000);
        }
        return () => {
            setCoupon(0);
        };
    }, [isSuccess, data]);

    return (
        <div className="content-card__bottom bottom-card">
            <Formik
                validationSchema={validationSchema}
                initialValues={initialValues}
                onSubmit={(values) => {
                    getCoupon(values.coupon);
                }}
            >
                <FormikForm className="bottom-card__discount">
                    <Input
                        name="coupon"
                        className="bottom-card__input"
                        autoComplete="off"
                        type="text"
                        disabled={isLoading}
                        placeholder="Your discount code"
                    />
                    <button type="submit" disabled={isLoading} className="bottom-card__btn btn btn_outline">
                        {isLoading ? "Checking" : "Apply"}
                    </button>
                </FormikForm>
            </Formik>
            <p className={`bottom-card__text ${status}`}>
                {status === "initial" &&
                    "If you have a coupon code discount please apply , otherwise please subscribe to our offers below for a chance to receive one."}
                {status === "error" && "This coupon doesn't exist"}
                {status === "success" && `This coupon gives you ${data?.discount}% discount!`}
            </p>
        </div>
    );
};

export default memo(Discount);
