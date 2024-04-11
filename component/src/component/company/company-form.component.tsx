import { Button, Input } from "@fluentui/react-components";
import { useFormik } from "formik";
import React from "react";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { Company, CompanySchema } from "../../model/list-items/company.model";
import { Stack } from "../common/stack.component";
import { FormGroup } from "../form/form-group.component";

interface CompanyFormProps {
    value: Company;
    onSubmit: (value: Company) => void;
}

export const CompanyForm = ({ value, onSubmit }: CompanyFormProps) => {
    const { handleChange, handleSubmit, handleBlur, values, errors, touched, resetForm } = useFormik<Company>({
        initialValues: value,
        enableReinitialize: true,
        validationSchema: toFormikValidationSchema(CompanySchema),
        onSubmit,
    });

    return (
        <form onSubmit={handleSubmit}>
            <Stack>
                <FormGroup
                    label={"Name"}
                    helperText={"The name of the company. Example: Lansco GmbH"}
                    error={errors.Title}
                    touched={touched.Title}
                >
                    <Input name={"Title"} value={values.Title} onChange={handleChange} onBlur={handleBlur} />
                </FormGroup>

                <Stack direction={"row"}>
                    <Button appearance={"outline"} onClick={() => resetForm()}>
                        Zurücksetzen
                    </Button>

                    <Button type={"submit"} appearance={"primary"}>
                        Speichern
                    </Button>
                </Stack>
            </Stack>
        </form>
    );
};
