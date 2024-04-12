import { useQuery } from "@tanstack/react-query";
import React from "react";
import { companiesQuery } from "../../data/company.data";
import { Stack } from "../common/stack.component";
import { CompanyCard } from "./company-card.component";

export const CompanyGrid = () => {
    // Fetch companies
    const { data: companies } = useQuery(companiesQuery);

    if (!companies) {
        return null;
    }

    return (
        <Stack direction={"row"}>
            {companies.map((each, index) => (
                <CompanyCard key={`company-${index}`} value={each} />
            ))}
        </Stack>
    );
};
