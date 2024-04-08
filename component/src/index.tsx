import type { WebPartContext } from "@microsoft/sp-webpart-base";
import React from "react";
import { createRoot, type Root } from "react-dom/client";

let root: Root | null = null;

export const render = (context: WebPartContext) => {
    if (!root) {
        root = createRoot(context.domElement);
    }

    root.render(
        <p
            onClick={() => {
                throw new Error("TEST");
            }}
        >
            Super mega World 10
        </p>,
    );
};
