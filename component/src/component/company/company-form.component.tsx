import { Button, Input } from "@fluentui/react-components";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { Company, CompanySchema } from "../../model/list-items/company.model";
import { Stack } from "../common/stack.component";
import { FormGroup } from "../form/form-group.component";

interface CompanyFormProps {
    value: Company;
    onSubmit: (value: Company) => void;
}

export const CompanyForm = ({ value, onSubmit }: CompanyFormProps) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Company>({
        defaultValues: value,
        resolver: zodResolver(CompanySchema),
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack>
                <FormGroup
                    label={"Name"}
                    helperText={"The name of the company. Example: Lansco GmbH"}
                    error={errors.Title}
                >
                    <Input {...register("Title")} />
                </FormGroup>

                <Stack direction={"row"}>
                    <Button appearance={"outline"} onClick={() => reset()}>
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
