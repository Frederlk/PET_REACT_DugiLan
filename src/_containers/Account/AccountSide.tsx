import { FC, memo } from "react";
import { useActions } from "../../hooks";
import { useAppSelector } from "../../hooks/useRedux";

const AccountSide: FC<{ labels: string[] }> = ({ labels }) => {
    const { selected } = useAppSelector((state) => state.account);
    const { setSelected } = useActions();

    const { logout } = useActions();

    const asideItems = labels.map((item, i) => (
        <li key={item + i} className="categories__item">
            <button
                onClick={() => setSelected(item)}
                className={`categories__link ${selected === item ? "_active" : ""}`}
            >
                <span>{item}</span>
            </button>
        </li>
    ));

    return (
        <aside className="body-account__aside aside-account categories">
            <h3 className="categories__title">My Profile</h3>
            <nav className="categories__body">
                <ul className="categories__list">
                    {asideItems.length > 0 && asideItems}
                    <li className="categories__item">
                        <button type="button" onClick={logout} className="categories__link logout">
                            <span>Logout</span>
                        </button>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default memo(AccountSide);
