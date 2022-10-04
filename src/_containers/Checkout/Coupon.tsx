import { FC, memo, useEffect, useState } from "react";
import { Formik, Form as FormikForm } from "formik";
import { object, string } from "yup";

import { useActions } from "../../hooks";
import { useAppSelector } from "../../hooks/useRedux";
import { couponAPI } from "../../services/couponAPI";
import { ICoupon } from "../../models";
import { Input } from "../../_components";

const Discount: FC = () => {
    const [getCoupon, { isLoading, isSuccess, data }] = couponAPI.useLazyGetCouponQuery();
    const { coupon } = useAppSelector((state) => state.product);
    const [status, setStatus] = useState(coupon ? "success" : "initial");

    const initialValues = {
        coupon: coupon?.coupon || "",
    };

    const { setCoupon } = useActions();

    useEffect(() => {
        if (isSuccess && data) {
            setStatus("success");
            setCoupon(data as ICoupon);
        } else if (isSuccess && !data) {
            setStatus("error");
            setCoupon(null);
            setTimeout(() => {
                setStatus("initial");
            }, 5000);
        }
    }, [isSuccess, data]);

    return (
        <div className="content-card__bottom bottom-card">
            <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                    if (values.coupon) {
                        getCoupon(values.coupon);
                    } else {
                        setStatus("initial");
                        setCoupon(null);
                    }
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
                {status === "success" && `This coupon gives you ${coupon?.discount}% discount!`}
            </p>
        </div>
    );
};

export default memo(Discount);
