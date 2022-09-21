import { FC } from "react";

interface FeatureItemProps {
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    title: string;
    text: string;
}

const FeatureItem: FC<FeatureItemProps> = ({ icon, text, title }) => {
    const Icon = icon;

    return (
        <div className="features__column">
            <div className="features__icon">
                <Icon />
            </div>
            <div className="features__body">
                <h3 className="features__title">{title}</h3>
                <p className="features__text">{text}</p>
            </div>
        </div>
    );
};

export default FeatureItem;
