import { FC } from "react";
import { Helmet } from "react-helmet";
import { OrderDetails, OrderInfo } from "../_containers";

const Thanks: FC = () => {
    return (
        <>
            <Helmet>
                <meta name="Thank You" content="Thank You" />
                <title>Thank You</title>
            </Helmet>

            <section className="page__body body-thanks">
                <div className="body-thanks__container">
                    <OrderInfo />
                    <OrderDetails />
                </div>
            </section>
        </>
    );
};

export default Thanks;
