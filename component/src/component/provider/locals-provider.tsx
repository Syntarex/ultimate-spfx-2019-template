import React, { ReactNode, createContext, useMemo } from "react";
import { Locals, LocalsSchema } from "../../model/locals";

export const LocalsContext = createContext<Locals | null>(null);

/**
 * Sets locals in `LocalsContext`.
 */
export const LocalsProvider: React.FC<{
    children: ReactNode;
    value: Locals;
}> = ({ children, value }) => {
    // Validate given Locals
    const locals = useMemo(() => LocalsSchema.parse(value), [value]);

    return <LocalsContext.Provider value={locals}>{children}</LocalsContext.Provider>;
};
