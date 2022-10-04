import { FC, memo, ReactNode } from "react";

const InfoItem: FC<{ label: string; children: ReactNode }> = ({ label, children }) => (
    <div className="body-thanks__column">
        <div className="body-thanks__item">
            <div className="body-thanks__label">{label}</div>
            <div className="body-thanks__info">{children}</div>
        </div>
    </div>
);
export default memo(InfoItem);
