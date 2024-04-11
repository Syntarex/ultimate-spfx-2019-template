import { Caption1, Label, makeStyles, tokens } from "@fluentui/react-components";
import { isString } from "radash";
import React, { ReactNode } from "react";
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
    error?: string;
    touched?: boolean;
}

export const FormGroup = ({ className, children, label, helperText, error, touched = false }: FormGroupProps) => {
    const styles = useStyles();

    return (
        <Stack className={className} rowGap={tokens.spacingVerticalXS}>
            {label && (isString(label) ? <Label>{label}</Label> : label)}

            {children}

            {helperText && (isString(helperText) ? <Caption1>{helperText}</Caption1> : helperText)}
            {touched && error && <Caption1 className={styles.error}>{error}</Caption1>}
        </Stack>
    );
};
