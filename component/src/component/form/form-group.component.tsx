import { Caption1, Label, tokens, useId } from "@fluentui/react-components";
import { isString } from "radash";
import React, { ReactNode } from "react";
import { Stack } from "../common/stack.component";

interface FormGroupProps {
    className?: string;
    children: ReactNode;
    label?: ReactNode;
    helperText?: ReactNode;
    error?: ReactNode;
}

export const FormGroup = ({ className, children, label, helperText, error }: FormGroupProps) => {
    const inputId = useId();

    // slot shown below the input prioritizes error
    const caption = error ?? helperText;

    return (
        <Stack className={className} rowGap={tokens.spacingVerticalXS}>
            {label && (isString(label) ? <Label htmlFor={inputId}>{label}</Label> : label)}

            {children}

            {caption && (isString(caption) ? <Caption1>{helperText}</Caption1> : caption)}
        </Stack>
    );
};
