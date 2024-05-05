import type { WebPartContext } from "@microsoft/sp-webpart-base";
import React from "react";
import { Root, createRoot } from "react-dom/client";
import { Main } from "./component/main";

// Add tailwind to the bundle
import "./style/global.css";

// The root of your react application
let root: Root | null = null;

/**
 * The entrypoint to your react app. Renders your react tree within the domElement of the webpart.
 * @param webpartContext The context of your webpart. You can get it by calling `this.context` in a `BaseClientSideWebPart`.
 * @param webpartProperties Your webpart properties. You can get them by calling `this.properties` in a `BaseClientSideWebPart`.
 * @param locals Your localized strings. {@link https://learn.microsoft.com/en-us/sharepoint/dev/spfx/web-parts/guidance/localize-web-parts See SPFx Documentation}
 */
export const render = (webpartContext: WebPartContext, webpartProperties: any, locals: any) => {
    // Setup webpart's domElement as react root
    if (!root) {
        root = createRoot(webpartContext.domElement);
    }

    // Render! 🚀
    root.render(
        <React.StrictMode>
            <Main
                webpartContext={webpartContext}
                webpartProperties={webpartProperties}
                locals={locals}
            />
        </React.StrictMode>,
    );
};
