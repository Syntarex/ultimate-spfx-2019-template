import { z } from "zod";

export const WebpartPropertiesSchema = z.object({});

export type WebpartProperties = z.infer<typeof WebpartPropertiesSchema>;
