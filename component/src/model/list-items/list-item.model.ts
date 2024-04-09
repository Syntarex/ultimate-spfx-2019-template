import { z } from "zod";

export const ListItemSchema = z.object({
    ID: z.number().optional(),
    Title: z.string(),
    Created: z.string().optional(),
    Modified: z.string().optional(),
});

/**
 * The base type of every list item.
 */
export type ListItem = z.infer<typeof ListItemSchema>;

export const UrlFieldSchema = z.object({
    Description: z.string(),
    Url: z.string(),
});

/**
 * An url field of a list item.
 */
export type UrlField = z.infer<typeof UrlFieldSchema>;