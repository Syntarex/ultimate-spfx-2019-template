import { WebPartContext } from "@microsoft/sp-webpart-base";
import { sp } from "@pnp/sp";
import React, { ReactNode, useEffect } from "react";

interface PnpProviderProps {
    children: ReactNode;
    webpartContext: WebPartContext;
}

/**
 * Initializes pnpjs.
 * https://pnp.github.io/pnpjs/v2/sp
 */
export const PnpProvider = ({ children, webpartContext }: PnpProviderProps) => {
    useEffect(() => {
        sp.setup({ spfxContext: webpartContext });
    }, [webpartContext]);

    return <>{children}</>;
};
