import { FC, memo, ReactNode } from "react";
import { Link } from "react-router-dom";
import { routesConfig } from "../../routes";

interface FooterListProps {
    label: string;
    linksType?: string;
    children?: ReactNode;
}

const FooterList: FC<FooterListProps> = ({ label, linksType, children }) => {
    return (
        <div className="footer__item">
            <div className="footer__label" data-spoller>
                {label}
                <span>
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M3 4.5L6 7.5L9 4.5"
                            stroke="#0B0B0C"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </span>
            </div>
            <ul className="footer__list">
                {linksType &&
                    routesConfig.map(({ path, title, type }, i) => {
                        if (type === linksType) {
                            return (
                                <li key={`${path}` || i} className="footer__item">
                                    <Link to={`${path}`} className="footer__link">
                                        {title}
                                    </Link>
                                </li>
                            );
                        }
                    })}
                {children && children}
            </ul>
        </div>
    );
};

export default memo(FooterList);
