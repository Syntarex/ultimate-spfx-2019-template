import { z } from "zod";

export const ListItemSchema = z.object({
    ID: z.number().optional(),
    AuthorId: z.number().optional(),
    EditorId: z.number().optional(),
    Created: z.string().optional(),
    Modified: z.string().optional(),
});

/**
 * The base type of every list item.
 */
export type ListItem = z.infer<typeof ListItemSchema>;

export const UrlFieldSchema = z.object({
    Description: z.string(),
    Url: z.string().url("Please provide a valid url."),
});

/**
 * An url field of a list item.
 */
export type UrlField = z.infer<typeof UrlFieldSchema>;

/**
 * A multi lookup field of a list item.
 * The sharepoint api returns an array of ids.
 * Because we may want to send back an object to sharepoint, we have to capsulate this array in an object.
 */
export const MultiLookupFieldSchema = z
    .number()
    .array()
    .transform((ids) => {
        return {
            results: ids,
        };
    });

/**
 * An multi-lookup field of a list item.
 * You always should fetch the corresponding Id field.
 */
export type MultiLookupField = z.infer<typeof MultiLookupFieldSchema>;
