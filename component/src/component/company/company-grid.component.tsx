import { makeStyles, tokens } from "@fluentui/react-components";
import React from "react";
import { useRecoilValue } from "recoil";
import { companiesSelector } from "../../data/company.data";
import { CompanyCard } from "./company-card.component";

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexWrap: "wrap",
        columnGap: tokens.spacingHorizontalL,
        rowGap: tokens.spacingVerticalL,
    },
});

export const CompanyGrid = () => {
    const styles = useStyles();

    // Fetch companies
    const companies = useRecoilValue(companiesSelector);

    return (
        <div className={styles.root}>
            {companies.map((each, index) => (
                <CompanyCard key={`company-${index}`} value={each} />
            ))}
        </div>
    );
};
