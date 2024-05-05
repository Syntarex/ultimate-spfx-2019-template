import { z } from "zod";

export const LocalsSchema = z.object({
    example: z.string(),
});

export type Locals = z.infer<typeof LocalsSchema>;
