import { FC } from "react";

import Search from "../../../_components/Search";

const SingleSideCoupon: FC = () => {
    return (
        <div className="aside-single__search search-workshop" data-da=".aside-single,991.98,last">
            <p className="search-workshop__text">
                More than 100 Wordpress Themes & Templates. <br /> From multipurpose themes to niche
                templates, you’ll always find something that catches your eye.
            </p>
            <Search className="search-workshop" />
        </div>
    );
};

export default SingleSideCoupon;
