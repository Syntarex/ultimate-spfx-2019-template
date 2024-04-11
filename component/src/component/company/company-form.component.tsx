import { Button, Input } from "@fluentui/react-components";
import { useFormik } from "formik";
import { isObject } from "radash";
import React, { useCallback, useEffect } from "react";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { Company, CompanySchema } from "../../model/list-items/company.model";
import { Stack } from "../common/stack.component";
import { FormGroup } from "../form/form-group.component";

interface CompanyFormProps {
    value: Company;
    onSubmit: (value: Company) => void;
}

export const CompanyForm = ({ value, onSubmit }: CompanyFormProps) => {
    const { handleChange, handleSubmit, handleBlur, values, errors, touched, resetForm, setFieldValue } =
        useFormik<Company>({
            initialValues: value,
            enableReinitialize: true,
            validationSchema: toFormikValidationSchema(CompanySchema),
            onSubmit,
        });

    useEffect(() => console.log(errors), [errors]);

    const onUrlFieldChange = useCallback(
        (ev: React.ChangeEvent<HTMLInputElement>, fieldName: string) =>
            setFieldValue(
                fieldName,
                !ev.target.value
                    ? null
                    : {
                          Description: ev.target.value,
                          Url: ev.target.value,
                      },
            ),
        [setFieldValue],
    );

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
                    // TODO: I hate that the zod-adapter puts the error in an object. It makes sense but it breaks Formiks typing.
                    error={isObject(errors.USpfxWebsite) ? (errors.USpfxWebsite as any)?.Url : errors.USpfxWebsite}
                    touched={touched.USpfxWebsite}
                >
                    <Input
                        name={"USpfxWebsite"}
                        value={values.USpfxWebsite?.Url ?? ""}
                        onChange={(ev) => onUrlFieldChange(ev, "USpfxWebsite")}
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
                    // TODO: I hate that the zod-adapter puts the error in an object. It makes sense but it breaks Formiks typing.
                    error={isObject(errors.USpfxImage) ? (errors.USpfxImage as any)?.Url : errors.USpfxImage}
                    touched={touched.USpfxImage}
                >
                    <Input
                        name={"USpfxImage"}
                        value={values.USpfxImage?.Url ?? ""}
                        onChange={(ev) => onUrlFieldChange(ev, "USpfxImage")}
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
