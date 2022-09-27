import { FC } from "react";
import { Input } from "../../_components";

const AddressRow: FC<{ label: string; name: string; disabled: boolean }> = ({ label, name, disabled }) => {
    return (
        <div className="account-address__row">
            <label htmlFor={name} className="account-address__label">
                {label}
            </label>
            <div className="account-address__input-wrap">
                <Input
                    id={name}
                    address
                    disabled={disabled}
                    className="account-address__input"
                    placeholder={`Your ${label}`}
                    type="text"
                    name={name}
                />
            </div>
        </div>
    );
};
export default AddressRow;
