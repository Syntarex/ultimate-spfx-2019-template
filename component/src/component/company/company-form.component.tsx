import { Button, Input } from "@fluentui/react-components";
import { getIn, useFormik } from "formik";
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
    // Using formik allows us to handle forms easily
    const { handleChange, handleSubmit, handleBlur, values, errors, touched, resetForm, setFieldValue } =
        useFormik<Company>({
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
                    helperText={"The name of the company."}
                    error={errors.Title}
                    touched={touched.Title}
                >
                    <Input name={"Title"} value={values.Title} onChange={handleChange} onBlur={handleBlur} />
                </FormGroup>

                <FormGroup
                    label={"Website"}
                    helperText={"A logo or some kind of banner will do."}
                    error={getIn(errors, "USpfxWebsite.Url")}
                    touched={touched.USpfxWebsite}
                >
                    <Input
                        name={"USpfxWebsite.Url"}
                        value={values.USpfxWebsite?.Url ?? ""}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </FormGroup>

                <FormGroup
                    label={"Description"}
                    helperText={"A brief summary of what the company is doing."}
                    error={errors.USpfxDescription}
                    touched={touched.USpfxDescription}
                >
                    <Input
                        name={"USpfxDescription"}
                        value={values.USpfxDescription ?? ""}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </FormGroup>

                <FormGroup
                    label={"Phone Number"}
                    helperText={"Who to call for business?"}
                    error={errors.USpfxPhoneNumber}
                    touched={touched.USpfxPhoneNumber}
                >
                    <Input
                        name={"USpfxPhoneNumber"}
                        value={values.USpfxPhoneNumber ?? ""}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </FormGroup>

                <FormGroup
                    label={"Picture"}
                    helperText={"A logo or some kind of banner will do."}
                    error={getIn(errors, "USpfxImage.Url")}
                    touched={touched.USpfxImage}
                >
                    <Input
                        name={"USpfxImage.Url"}
                        value={values.USpfxImage?.Url ?? ""}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
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
