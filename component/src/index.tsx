import type { WebPartContext } from "@microsoft/sp-webpart-base";
import React from "react";
import { Root, createRoot } from "react-dom/client";
import { Main } from "./component/main";

let root: Root | null = null;

export const render = (webpartContext: WebPartContext, webpartProperties: any, locals: any) => {
    if (!root) {
        root = createRoot(webpartContext.domElement);
    }

    root.render(
        <Main
            webpartContext={webpartContext}
            webpartProperties={webpartProperties}
            locals={locals}
        />,
    );
};
