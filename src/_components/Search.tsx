import { FC } from "react";
import { Formik, Form as FormikForm } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { RouteNames } from "../routes";
import Input from "./FormComponents/Input";

interface SearchValues {
    search: string;
}

const initialValues: SearchValues = { search: "" };

const validationScheme = Yup.object({
    search: Yup.string().min(2, "At least 2 symbols").required("Requried!"),
});

// content-home
const Search: FC<{ className: string }> = ({ className }) => {
    const navigate = useNavigate();

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationScheme}
            onSubmit={(values, { resetForm }) => {
                values = {
                    ...values,
                };
                resetForm();
                console.log(JSON.stringify(values, null, 2));
                navigate(RouteNames.SEARCH + "#" + values.search.toLocaleLowerCase());
            }}
        >
            <FormikForm className={`${className}__form`}>
                <Input
                    className={`${className}__input input`}
                    placeholder="e.g Responsive slider"
                    autoComplete="off"
                    type="text"
                    name="search"
                />
                <button type="submit" className={`${className}__btn btn`}>
                    Search
                </button>
            </FormikForm>
        </Formik>
    );
};

export default Search;
