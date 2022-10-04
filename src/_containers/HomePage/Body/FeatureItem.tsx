import { FC, memo } from "react";

interface FeatureItemProps {
    icon: string;
    title: string;
    text: string;
}

const FeatureItem: FC<FeatureItemProps> = ({ icon, text, title }) => {
    return (
        <div className="features__column">
            <div className="features__icon">
                <img src={icon} alt={title} />
            </div>
            <div className="features__body">
                <h3 className="features__title">{title}</h3>
                <p className="features__text">{text}</p>
            </div>
        </div>
    );
};

export default memo(FeatureItem);
