import { FC, ReactNode, useState, useCallback } from "react";

interface CheckboxProps {
    name: string;
    children: ReactNode;
    className?: string;
    id: string;
    price?: number;
    setTotalPrice?: any;
}

const Checkbox: FC<CheckboxProps> = ({ id, name, children, setTotalPrice, price, className }) => {
    const [checked, setChecked] = useState(false);

    const handleChange = useCallback(() => {
        setChecked(!checked);
        if (price) {
            checked
                ? setTotalPrice((totalPrice: number) => totalPrice - price)
                : setTotalPrice((totalPrice: number) => totalPrice + price);
        }
    }, [checked]);

    return (
        <div className={`checkbox ${className || ""}`}>
            <input
                id={id}
                className="checkbox__input"
                type="checkbox"
                name={name}
                checked={checked}
                onChange={handleChange}
            />

            <label htmlFor={id} className="checkbox__label">
                <span className="checkbox__text">{children}</span>
            </label>
        </div>
    );
};

export default Checkbox;
