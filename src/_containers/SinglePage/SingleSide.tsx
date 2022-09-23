import { FC } from "react";
import { IProduct } from "../../models";
import SingleSideCoupon from "./SingleSide/SingleSideCoupon";
import SingleSideInfo from "./SingleSide/SingleSideInfo";
import SingleSidePrice from "./SingleSide/SingleSidePrice";

const SingleSide: FC<{ item: IProduct }> = ({ item }) => {
    return (
        <aside className="body-workshop__aside aside-single">
            <SingleSideCoupon />

            <SingleSidePrice item={item} />

            <p className="aside-single__text">
                After your plugin purchase, you’ll get the licence key and plugin option to download. Be aware
                that this plugin can only be activated one time in any of your WordPress Sites.
            </p>

            <SingleSideInfo item={item} />
        </aside>
    );
};

export default SingleSide;
