import React from "react";
import { Locals } from "../model/locals.model";
import { WebpartProperties } from "../model/webpart-properties.model";
import { FluentUiProvider } from "./provider/fluent-ui-provider.component";
import { LocalsProvider } from "./provider/locals-provider.component";
import { RecoilProvider } from "./provider/recoil-provider.component";
import { WebpartPropertiesProvider } from "./provider/webpart-properties-provider.component";
import { Test } from "./test";

interface MainProps {
    webpartProperties: WebpartProperties;
    locals: Locals;
}

export const Main = ({ webpartProperties, locals }: MainProps) => {
    return (
        <RecoilProvider>
            <WebpartPropertiesProvider value={webpartProperties}>
                <LocalsProvider value={locals}>
                    <FluentUiProvider>
                        <Test />
                    </FluentUiProvider>
                </LocalsProvider>
            </WebpartPropertiesProvider>
        </RecoilProvider>
    );
};
