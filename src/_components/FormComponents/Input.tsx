import { FC } from "react";
import { useField } from "formik";

const Input: FC<{ address?: boolean; textarea?: boolean; [x: string]: any; name: string }> = ({
    address,
    textarea,
    ...props
}) => {
    const [field, meta] = useField({ ...props, type: "textarea" });

    const classNames = `${!address ? "input" : ""} ${props.className || ""} ${
        meta.touched && meta.error ? "_error" : ""
    }`;

    return (
        <>
            {textarea ? (
                <textarea {...props} {...field} className={classNames}></textarea>
            ) : (
                <input {...props} {...field} className={classNames} />
            )}

            {meta.touched && meta.error && <div className="_input__error">{meta.error}</div>}
        </>
    );
};

export default Input;
