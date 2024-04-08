import { z } from "zod";

export const LocalsSchema = z.object({
    headline: z.string(),
});

export type Locals = z.infer<typeof LocalsSchema>;
