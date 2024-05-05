import { WebpartProperties, WebpartPropertiesSchema } from "@/model/webpart-properties";
import React, { ReactNode, createContext, useMemo } from "react";

export const WebpartPropertiesContext = createContext<WebpartProperties | null>(null);

/**
 * Sets locals in `WebpartPropertiesContext`.
 */
export const WebpartPropertiesProvider: React.FC<{
    children: ReactNode;
    value: WebpartProperties;
}> = ({ children, value }) => {
    // Validate given webpart properties
    const webpartProperties = useMemo(() => WebpartPropertiesSchema.parse(value), [value]);

    return (
        <WebpartPropertiesContext.Provider value={webpartProperties}>
            {children}
        </WebpartPropertiesContext.Provider>
    );
};
