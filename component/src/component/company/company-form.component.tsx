import { Button, Input } from "@fluentui/react-components";
import { useMutation } from "@tanstack/react-query";
import { getIn, useFormik } from "formik";
import React, { useEffect } from "react";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { upsertCompanyMutation } from "../../data/company.data";
import { Company, CompanySchema } from "../../model/list-items/company.model";
import { Stack } from "../common/stack.component";
import { FormGroup } from "../form/form-group.component";

interface CompanyFormProps {
    value: Company;
    onChange: (value: Company) => void;
}

export const CompanyForm = ({ value, onChange }: CompanyFormProps) => {
    // Initialize list item mutation
    const { mutate: upsert, status: upsertStatus, data: upsertResult } = useMutation(upsertCompanyMutation);

    // Using formik allows us to handle forms easily
    const { handleChange, handleSubmit, handleBlur, values, errors, touched, resetForm } = useFormik<Company>({
        initialValues: value,
        enableReinitialize: true,
        validationSchema: toFormikValidationSchema(CompanySchema),
        onSubmit: (value) => upsert(value),
    });

    // Send upserted list item to parent component
    useEffect(() => {
        if (upsertResult) {
            onChange(upsertResult);
        }
    }, [upsertResult, onChange]);

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
                    <Button appearance={"outline"} disabled={upsertStatus !== "idle"} onClick={() => resetForm()}>
                        Zurücksetzen
                    </Button>

                    <Button type={"submit"} appearance={"primary"} disabled={upsertStatus !== "idle"}>
                        Speichern
                    </Button>
                </Stack>
            </Stack>
        </form>
    );
};
