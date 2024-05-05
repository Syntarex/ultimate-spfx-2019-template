import { WebPartContext } from "@microsoft/sp-webpart-base";
import { sp } from "@pnp/sp";
import "@pnp/sp/presets/core";
import React, { ReactNode, useEffect, useState } from "react";

/**
 * Initializes PnPjs.
 * We use PnPjs v2 because it supports SharePoint 2019.
 * If you want to use PnPjs v3, consider providing it by a react context instead of using the global `sp` instance.
 * https://pnp.github.io/pnpjs/v2/sp
 */
export const PnPInitializer: React.FC<{
    children: ReactNode;
    webpartContext: WebPartContext;
}> = ({ children, webpartContext }) => {
    // We need a flag to ensure pnp is setup
    // If we render children before pnp is setup, use of it will throw
    const [init, setInit] = useState(false);

    useEffect(() => {
        sp.setup({ spfxContext: webpartContext });
        setInit(true);
    }, [webpartContext]);

    if (!init) {
        return null;
    }

    return <>{children}</>;
};
