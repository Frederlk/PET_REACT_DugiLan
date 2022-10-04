import { FieldHookConfig, useField } from "formik";
import { FC, ReactNode } from "react";

interface RadioButtonProps {
    children: ReactNode;
    className?: string;
}

const RadioButton: FC<RadioButtonProps & FieldHookConfig<string>> = ({ children, className, ...props }) => {
    const [field] = useField({ ...props, type: "radio" });

    return (
        <div className={`${className || ""} options__item`}>
            <input hidden id={field.value} type="radio" className="options__input" {...field} />
            <label className="options__label" htmlFor={field.value}>
                <span className="options__text">{children}</span>
            </label>
        </div>
    );
};

export default RadioButton;
