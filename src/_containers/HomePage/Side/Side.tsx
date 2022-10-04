import { FC, memo } from "react";
import SideAdvert from "./SideAdvert";
import SideCategories from "./SideCategories";
import SideNewsletter from "./SideNewsletter";
import SideUsers from "./SideUsers";

const Side: FC = () => {
    return (
        <aside className="body__aside aside-body">
            <SideCategories />
            <SideNewsletter />
            <SideUsers />
            <SideAdvert />
        </aside>
    );
};

export default memo(Side);
