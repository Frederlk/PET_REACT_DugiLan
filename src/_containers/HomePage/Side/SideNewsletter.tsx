import { FC, useEffect, useState } from "react";
import { Formik, Form as FormikForm } from "formik";
import * as Yup from "yup";
import { images } from "../../../constants";
import { Input } from "../../../_components";

interface NewsletterValues {
    email: string;
}

const initialValues: NewsletterValues = { email: "" };

const validationScheme = Yup.object({
    email: Yup.string().email("Invalid Email").required("Requried!"),
});

const { icon_mail } = images.icons;

const SideNewsletter: FC = () => {
    const [sended, setSended] = useState(false);

    useEffect(() => {
        sended &&
            setTimeout(() => {
                setSended(false);
            }, 5000);
    }, [sended]);

    return (
        <section className="aside-body__newsletter newsletter" data-da=".body__container,767.98,last">
            <h5 className="newsletter__title">Subscribe Newsletter</h5>
            <p className="newsletter__text">Get all the latest information on Events, Sales and Offers.</p>
            <Formik
                initialValues={initialValues}
                validationSchema={validationScheme}
                onSubmit={(values, { resetForm }) => {
                    values = {
                        ...values,
                    };
                    resetForm();
                    setSended(true);
                    console.log(JSON.stringify(values, null, 2));
                }}
            >
                <FormikForm className="newsletter__form">
                    <div className="newsletter__input-wrap">
                        <Input
                            className={`newsletter__input ${sended ? "_success" : ""}`}
                            placeholder="Email address"
                            type="text"
                            name="email"
                        />
                        <div className="newsletter__icon">
                            <img src={icon_mail} alt="Subscribe" />
                        </div>
                    </div>
                    {sended ? (
                        <span className="newsletter__subscribed">You&apos;ve subscribed!</span>
                    ) : (
                        <button type="submit" className="newsletter__btn btn btn_outline">
                            Subscribe
                        </button>
                    )}
                </FormikForm>
            </Formik>
        </section>
    );
};

export default SideNewsletter;
