import { sp } from "@pnp/sp";
import { UseMutationOptions, UseQueryOptions } from "@tanstack/react-query";
import { queryClient } from "../component/provider/query-provider.component";
import { Company, CompanySchema } from "../model/list-items/company.model";

// This was set by <ListInstance> in /spfx/sharepoint/elements.xml
const companyListId = "7611dde8-a800-47b3-9980-a18e2794485d";

/**
 * Fetches all list items of the companies sharepoint list.
 */
export const companiesQuery: UseQueryOptions<Company[]> = {
    queryKey: ["companies"],
    queryFn: async () => {
        // Getting all keys defined in model
        const select = Object.keys(CompanySchema.keyof().Values);

        // Fetching companies
        const listItems = await sp.web.lists
            .getById(companyListId)
            .items.select(...select)
            .get();

        return listItems;
    },
};

/**
 * Inserts or updates a list item of the companies sharepoint list.
 */
export const upsertCompanyMutation: UseMutationOptions<Company, Error, Company> = {
    mutationKey: ["companies"],
    mutationFn: async (value: Company) => {
        const result = await sp.web.lists.getById(companyListId).items.add(value);

        return result.data;
    },
    onSuccess: () =>
        // Force company queries to refetch
        queryClient.invalidateQueries({
            queryKey: ["companies"],
        }),
};
