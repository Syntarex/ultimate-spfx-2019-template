import { WebPartContext } from "@microsoft/sp-webpart-base";
import { sp } from "@pnp/sp";
import "@pnp/sp/presets/core";
import React, { ReactNode, useEffect, useState } from "react";
import { Loading } from "../common/loading.component";

interface PnpProviderProps {
    children: ReactNode;
    webpartContext: WebPartContext;
}

/**
 * Initializes pnpjs.
 * https://pnp.github.io/pnpjs/v2/sp
 */
export const PnpProvider = ({ children, webpartContext }: PnpProviderProps) => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        sp.setup({ spfxContext: webpartContext });
        setInit(true);
    }, [webpartContext]);

    if (!init) {
        return <Loading />;
    }

    return <>{children}</>;
};
