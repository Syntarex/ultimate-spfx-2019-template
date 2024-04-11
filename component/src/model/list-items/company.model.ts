import { z } from "zod";
import { ListItemSchema, UrlFieldSchema } from "./list-item.model";

export const CompanySchema = z
    .object({
        Title: z.string().min(1, "Give me a name."),
        USpfxDescription: z.string().nullable(),
        USpfxPhoneNumber: z.string().nullable(),
        USpfxImage: UrlFieldSchema.nullable(),
        USpfxWebsite: UrlFieldSchema.nullable(),
    })
    .merge(ListItemSchema);

/**
 * A company list item.
 */
export type Company = z.infer<typeof CompanySchema>;
