import { FC, memo } from "react";
import { images } from "../../constants";
import { useActions } from "../../hooks";
import { selectedNames } from "../../store/slices/account/account.slice";

const { icon_map, icon_user, icon_shopBag_2 } = images.icons;

const DashboardItem: FC<{ icon: string; title: string }> = ({ icon, title }) => {
    const { setSelected } = useActions();

    return (
        <button type="button" onClick={() => setSelected(title)} className="account-dashboard__item">
            <div className="account-dashboard__icon">
                <img src={icon} alt="Orders" />
            </div>
            <h4 className="account-dashboard__subtitle">{title}</h4>
        </button>
    );
};

const Dashboard = () => {
    return (
        <section className="content-account__dashboard account-dashboard">
            <h2 className="account-dashboard__title">Dashboard</h2>
            <p className="account-dashboard__text">
                From your account dashboard you can view your recent orders, manage your shipping and billing
                addresses, and edit your password and account details.
            </p>
            <div className="account-dashboard__navigation">
                <DashboardItem icon={icon_shopBag_2} title={selectedNames.ORDERS} />
                <DashboardItem icon={icon_map} title={selectedNames.ADDRESS} />
                <DashboardItem icon={icon_user} title={selectedNames.DETAILS} />
            </div>
        </section>
    );
};

export default memo(Dashboard);
