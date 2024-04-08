import type { WebPartContext } from "@microsoft/sp-webpart-base";
import React from "react";
import { Root, createRoot } from "react-dom/client";
import { Main } from "./component/main";

let root: Root | null = null;

export const render = (context: WebPartContext, webpartProperties: any, locals: any) => {
    if (!root) {
        root = createRoot(context.domElement);
    }

    root.render(<Main webpartProperties={webpartProperties} locals={locals} />);
};
