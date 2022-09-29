import { FC } from "react";
import { Input } from "../../_components";

const DetailsItem: FC<{
    name: string;
    disabled: boolean;
    label: string;
    half?: boolean;
    password?: boolean;
}> = ({ name, label, disabled, half, password }) => {
    return (
        <div className={`account-details__input-wrap ${half ? "account-details__input-wrap_half" : ""}`}>
            <label className="account-details__label">{label}</label>
            <Input
                id={name}
                disabled={disabled}
                className="account-details__input"
                placeholder={`Your ${label}`}
                type={`${password ? "password" : "text"}`}
                name={name}
            />
        </div>
    );
};

export default DetailsItem;
