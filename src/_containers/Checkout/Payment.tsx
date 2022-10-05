import { FC, memo, useCallback } from "react";
import { Formik, Form as FormikForm } from "formik";
import { boolean, object, string } from "yup";
import { useNavigate } from "react-router-dom";

import { CheckboxForm, RadioButton } from "../../_components";
import { data, images } from "../../constants";
import { useAppSelector } from "../../hooks/useRedux";
import { RouteNames } from "../../routes";
import { userAPI } from "../../services/userAPI";
import { IOrder } from "../../models";
import { useActions } from "../../hooks";

enum Options {
    SOFORTE = "Soforte",
    PAYPAL = "PayPal",
}

const validationSchema = object({
    payment: string().required("Choose one of payments"),
    terms: boolean().oneOf([true], "You must accept the terms and conditions"),
});

const initialValues = {
    payment: Options.SOFORTE,
    terms: false,
};

const paymentItems = data.soforteItems.map(({ img, alt }, i) => (
    <div key={alt + i} className="form-billing__pay-item">
        <img src={img} alt={alt} />
    </div>
));

const Payment: FC = () => {
    const { cartItems, coupon, prices } = useAppSelector((state) => state.product);
    const { user } = useAppSelector((state) => state.user);
    const { clearCart, setUser } = useActions();

    const [changeInfo, { isLoading }] = userAPI.useChangeInfoMutation();

    const navigate = useNavigate();

    // const onHandleSubmit = useCallback(
    //     (values: any) =>
    //     [user, cartItems, coupon]
    // );

    const emptyAddress = Object.values(user.address).filter((item) => item === "" || !item);

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            validateOnChange={false}
            validateOnBlur={false}
            onSubmit={(values) => {
                const orderDate = Date.now();
                const orderNumber =
                    user.orders.length > 0
                        ? `#${+user.orders[user.orders.length - 1].orderId.replace(/[^+\d]/g, "") + 1}`
                        : "#1";

                const orderItems: IOrder[] = cartItems.map(({ id, price, qty }) => {
                    const subtotal = price * qty;
                    const discount = coupon ? subtotal * (coupon.discount / 100) : 0;

                    return {
                        date: orderDate,
                        download: data.productItems.find((item) => item.id === id)?.download || "",
                        orderId: orderNumber,
                        productId: id,
                        qty: qty,
                        status: "Processing",
                        price: +price.toFixed(2),
                        subTotalPrice: +subtotal.toFixed(2),
                        totalPrice: +(subtotal - discount).toFixed(2),
                        payment: values.payment,
                    };
                });

                const updatedUser = {
                    ...user,
                    orders: [...user.orders, ...orderItems],
                };

                changeInfo({ id: user.id, data: updatedUser });
                setUser(updatedUser);
                localStorage.setItem("user", JSON.stringify(updatedUser));
                clearCart();

                navigate(RouteNames.THANKS, {
                    state: {
                        products: cartItems,
                        date: orderDate,
                        orderNumber: orderNumber,
                        payment: values.payment,
                        prices: prices,
                    },
                });
            }}
        >
            {({ errors }) => (
                <FormikForm className="order-billing__form form-billing">
                    <div className="form-billing__top">
                        <div className="form-billing__soforte">
                            <RadioButton
                                className="form-billing__radio-item"
                                name="payment"
                                value={Options.SOFORTE}
                            >
                                Soforte Payment
                            </RadioButton>
                            <div className="form-billing__payment">{paymentItems}</div>
                        </div>
                        <a
                            href="https://github.com/Frederlk"
                            target="_blank"
                            rel="noreferrer"
                            className="form-billing__btn btn btn_outline"
                        >
                            Go to soforte
                        </a>
                    </div>
                    <div className="form-billing__middle">
                        <RadioButton
                            className="form-billing__radio-item"
                            name="payment"
                            value={Options.PAYPAL}
                        >
                            <img src={images.paymentImages.paymentPayPal} alt="PayPal" />
                        </RadioButton>
                    </div>
                    <div className="form-billing__bottom">
                        <CheckboxForm className="form-billing__checkbox" id="terms-chk" name="terms">
                            I have read and agree to the website terms and conditions
                        </CheckboxForm>
                        {errors.terms && <div className="_input__error">{errors.terms}</div>}
                        <button
                            type="submit"
                            disabled={cartItems.length === 0 || isLoading || emptyAddress.length > 0}
                            className="form-billing__btn btn"
                        >
                            Place order
                        </button>
                        {emptyAddress.length > 0 && (
                            <div className="_input__error">
                                Please check your address info. All fields must be filled
                            </div>
                        )}
                    </div>
                </FormikForm>
            )}
        </Formik>
    );
};

export default memo(Payment);
