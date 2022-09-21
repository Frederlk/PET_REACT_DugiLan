import { FC } from "react";
import { Link } from "react-router-dom";
import format from "date-fns/format";

import { data } from "../../constants";
import { RouteNames } from "../../routes";
import FooterList from "./FooterList";

const socialItems = data.socialItems.map(({ alt, img, link }, i) => (
    <a key={link + i} href={link} target="_blank" rel="noreferrer" className="footer__social-item">
        <img src={img} alt={alt} />
    </a>
));

const Footer: FC = () => {
    return (
        <footer className="footer">
            <nav className="footer__top __container" data-spollers="479.98,max" data-one-spoller>
                <FooterList label="Envato Market" linksType="envato" />
                <FooterList label="Help" linksType="help" />
                <FooterList label="Our Community" linksType="community" />
                <FooterList label="Contact">
                    <li className="footer__item">
                        <span className="footer__link">Sabri Hakuli</span>
                    </li>
                    <li className="footer__item">
                        <a href="mailto:sabrihakuli@outlook.com" className="footer__link">
                            sabrihakuli@outlook.com
                        </a>
                    </li>
                    <li className="footer__item">
                        <a href="tel:38344201874" className="footer__link">
                            +383 44 201 874
                        </a>
                    </li>
                </FooterList>
            </nav>
            <div className="footer__bottom __container">
                <Link to={RouteNames.LICENSES} className="footer__copy">
                    © {format(new Date(), "yyyy")} DugiLanding All right reserved.
                </Link>
                {socialItems.length > 0 && <div className="footer__social">{socialItems}</div>}
            </div>
        </footer>
    );
};

export default Footer;
