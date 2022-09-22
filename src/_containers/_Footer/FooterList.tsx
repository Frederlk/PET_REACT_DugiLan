import { FC, memo, ReactNode } from "react";
import { Link } from "react-router-dom";
import { routesConfig } from "../../routes";

import images from "../../constants/images";
interface FooterListProps {
    label: string;
    linksType?: string;
    children?: ReactNode;
}

const { icon_down } = images.icons;

const FooterList: FC<FooterListProps> = ({ label, linksType, children }) => {
    return (
        <div className="footer__item">
            <div className="footer__label" data-spoller>
                {label}
                <span>
                    <img src={icon_down} alt="activate spoller" />
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
