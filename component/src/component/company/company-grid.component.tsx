import React from "react";
import { useRecoilValue } from "recoil";
import { companiesSelector } from "../../data/company.data";
import { Stack } from "../common/stack.component";
import { CompanyCard } from "./company-card.component";

export const CompanyGrid = () => {
    // Fetch companies
    const companies = useRecoilValue(companiesSelector);

    return (
        <Stack direction={"row"}>
            {companies.map((each, index) => (
                <CompanyCard key={`company-${index}`} value={each} />
            ))}
        </Stack>
    );
};
