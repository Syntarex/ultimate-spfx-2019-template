import { tokens } from "@fluentui/react-components";
import { Property } from "csstype";
import React, { ReactNode } from "react";

interface StackProps {
    children?: ReactNode;
    direction?: Property.FlexDirection;
    wrap?: Property.FlexWrap;
    rowGap?: Property.RowGap;
    columnGap?: Property.ColumnGap;
}

/**
 * A helper component to build a flexbox layout.
 */
export const Stack = ({
    children,
    direction = "column",
    wrap = "nowrap",
    rowGap = tokens.spacingVerticalL,
    columnGap = tokens.spacingHorizontalL,
}: StackProps) => {
    return (
        <div
            style={{
                // makeStyles doesn't support conditional css attributes so to make it easier, I'm using inline styles
                display: "flex",
                flexDirection: direction,
                flexWrap: wrap,
                rowGap,
                columnGap,
            }}
        >
            {children}
        </div>
    );
};
