import { FC, memo } from "react";

const DetailsDebounceItem: FC<{
    name: string;
    disabled: boolean;
    label: string;
    value: string;
    error: any;
    handleDebounceChange: (props: any) => void;
    // handleBlur: (props: any) => void;
}> = ({ disabled, label, name, handleDebounceChange, value, error }) => {
    return (
        <div className="account-details__input-wrap">
            <label className="account-details__label">{label}</label>
            <input
                className={`account-details__input input ${error ? "_error" : ""}`}
                id={name}
                type="text"
                name={name}
                placeholder={`Your ${label}`}
                onChange={handleDebounceChange}
                // onBlur={handleBlur}
                disabled={disabled}
                value={value}
            />
            {error && <div className="_input__error">{error}</div>}
        </div>
    );
};

export default memo(DetailsDebounceItem);
