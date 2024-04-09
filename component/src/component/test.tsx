import { Button, makeStyles } from "@fluentui/react-components";
import React from "react";
import { useRecoilValue } from "recoil";
import { companiesSelector } from "../data/company.data";
import { useLocals } from "../data/locals.data";

const useStyles = makeStyles({
    root: { backgroundColor: "red" },
});

export const Test = () => {
    const classes = useStyles();

    const { headline } = useLocals();

    const companies = useRecoilValue(companiesSelector);

    return (
        <div className={classes.root}>
            <h1>{headline}</h1>
            <Button appearance={"primary"}>Fluent UI</Button>
            <p>{JSON.stringify(companies)}</p>
        </div>
    );
};
