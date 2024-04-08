import { Button, makeStyles } from "@fluentui/react-components";
import React from "react";
import { useRecoilValue } from "recoil";
import { useLocals } from "../data/locals.data";
import { testSelector } from "../data/test.data";

const useStyles = makeStyles({
    root: { backgroundColor: "red" },
});

export const Test = () => {
    const classes = useStyles();

    const { headline } = useLocals();

    const web = useRecoilValue(testSelector);

    return (
        <div className={classes.root}>
            <h1>{headline}</h1>
            <Button appearance={"primary"}>Fluent UI</Button>
            <p>{web.Title}</p>
        </div>
    );
};
