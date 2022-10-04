import { FC } from "react";
import { Helmet } from "react-helmet";
import Address from "../_containers/Account/Address";
import Order from "../_containers/Checkout/Order";

const Billing: FC = () => {
    return (
        <>
            <Helmet>
                <meta name="Ckeckout & Billing" content="Ckeckout & Billing" />
                <title>Ckeckout & Billing</title>
            </Helmet>

            <div className="page__body body-billing">
                <div className="body-billing__container ">
                    <Address className="body-billing__address" />
                    <Order />
                </div>
            </div>
        </>
    );
};

export default Billing;
