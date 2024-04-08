import { Button, makeStyles } from "@fluentui/react-components";
import React from "react";
import { useLocals } from "../data/locals.data";

const useStyles = makeStyles({
    root: { backgroundColor: "red" },
});

export const Test = () => {
    const classes = useStyles();

    const { headline } = useLocals();

    return (
        <div className={classes.root}>
            <h1>{headline}</h1>
            <Button appearance={"primary"}>Fluent UI</Button>
        </div>
    );
};
