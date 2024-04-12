import { Title1, makeStyles, tokens } from "@fluentui/react-components";
import React, { useEffect, useState } from "react";
import { useLocals } from "../data/locals.data";
import { Company } from "../model/list-items/company.model";
import { Loading } from "./common/loading.component";
import { CompanyForm } from "./company/company-form.component";
import { CompanyGrid } from "./company/company-grid.component";

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        rowGap: tokens.spacingVerticalL,
    },
});

export const Test = () => {
    const styles = useStyles();

    const { headline } = useLocals();

    const [company, setCompany] = useState<Company>({
        Title: "",
        USpfxDescription: null,
        USpfxImage: null,
        USpfxPhoneNumber: null,
        USpfxWebsite: null,
    });

    useEffect(() => {
        console.log("company changed", company);
    }, [company]);

    return (
        <div className={styles.root}>
            <Title1>{headline}</Title1>

            <Loading>
                <CompanyGrid />
            </Loading>

            <Loading>
                <CompanyForm value={company} onChange={setCompany} />
            </Loading>
        </div>
    );
};
