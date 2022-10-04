import { FC, memo } from "react";
import { images } from "../../../constants";
import FeatureItem from "./FeatureItem";

const { icon_shield, icon_help, icon_circle } = images.icons;

const BodyFeatures: FC = () => {
    return (
        <div className="shop-body__features features">
            <FeatureItem
                icon={icon_shield}
                title="Security Assurance"
                text="Our theme architecture is designed for maximize security and prevent malware,
                    Dos Attack other."
            />
            <FeatureItem
                icon={icon_help}
                title="Best Customer Support"
                text="Need help? We’re here for you! Do not worry we provide in depth answer. "
            />
            <FeatureItem
                icon={icon_circle}
                title="Great Quality Theme"
                text="We will be responsible for delivering the best online user experience, which
            makes my role extremely important."
            />
        </div>
    );
};

export default memo(BodyFeatures);
