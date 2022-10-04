import { useEffect, FC, memo } from "react";
import { useActions } from "../../hooks";
import { useAppSelector } from "../../hooks/useRedux";
import { selectedNames } from "../../store/slices/account/account.slice";
import { AccountSide, Dashboard, Orders, Address, Details } from "..";

const { DASHBOARD, ORDERS, ADDRESS, DETAILS } = selectedNames;

const labels = [DASHBOARD, ORDERS, ADDRESS, DETAILS];

const Profile: FC = () => {
    const { selected } = useAppSelector((state) => state.account);
    const { user } = useAppSelector((state) => state.user);
    const { setSelected } = useActions();

    useEffect(() => {
        setSelected(DASHBOARD);
    }, [user]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [selected]);

    return (
        <div className="page__body body-account">
            <div className="body-account__container">
                <AccountSide labels={labels} />
                <section className="body-account__content content-account">
                    {selected === DASHBOARD && <Dashboard />}

                    {selected === ORDERS && <Orders />}

                    {selected === ADDRESS && <Address className="content-account__address" address />}

                    {selected === DETAILS && <Details />}
                </section>
            </div>
        </div>
    );
};

export default memo(Profile);
