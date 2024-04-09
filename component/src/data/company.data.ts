import { sp } from "@pnp/sp";
import { selector } from "recoil";
import { z } from "zod";
import { Company, CompanySchema } from "../model/list-items/company.model";

// This was set by <ListInstance> in /spfx/sharepoint/elements.xml
const companyListId = "7611dde8-a800-47b3-9980-a18e2794485d";

export const companiesSelector = selector<Company[]>({
    key: "companies",
    get: async () => {
        // Getting all keys defined in model
        const select = Object.keys(CompanySchema.keyof().Values);

        // Fetching companies
        const listItems = await sp.web.lists
            .getById(companyListId)
            .items.select(...select)
            .get();

        // Validate response so we know our models are still in sync with our list
        return z.array(CompanySchema).parse(listItems);
    },
});
