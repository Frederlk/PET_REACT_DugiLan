import { FC } from "react";
import { Formik, Form as FormikForm } from "formik";
import * as Yup from "yup";
import Input from "../../_components/Input";

interface SearchValues {
    search: string;
}

const initialValues: SearchValues = { search: "" };

const validationScheme = Yup.object({
    search: Yup.string().min(2, "At least 2 symbols").required("Requried!"),
});

const Search: FC = () => {
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
            }}
        >
            <FormikForm className="content-home__form">
                <Input
                    className="content-home__input input"
                    placeholder="e.g Responsive slider"
                    autoComplete="off"
                    type="text"
                    name="search"
                />
                <button type="submit" className="content-home__btn btn">
                    Search
                </button>
            </FormikForm>
        </Formik>
    );
};

export default Search;
