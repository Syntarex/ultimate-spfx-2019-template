import { Caption1, Label, makeStyles, tokens } from "@fluentui/react-components";
import { isString } from "radash";
import React, { ReactNode } from "react";
import { FieldError } from "react-hook-form";
import { Stack } from "../common/stack.component";

const useStyles = makeStyles({
    error: {
        color: tokens.colorPaletteRedForeground1,
    },
});

interface FormGroupProps {
    className?: string;
    children: ReactNode;
    label?: ReactNode;
    helperText?: ReactNode;
    error?: Error | FieldError;
}

export const FormGroup = ({ className, children, label, helperText, error }: FormGroupProps) => {
    const styles = useStyles();

    return (
        <Stack className={className} rowGap={tokens.spacingVerticalXS}>
            {label && (isString(label) ? <Label>{label}</Label> : label)}

            {children}

            {!error && helperText && (isString(helperText) ? <Caption1>{helperText}</Caption1> : helperText)}
            {error && <Caption1 className={styles.error}>{error.message}</Caption1>}
        </Stack>
    );
};
