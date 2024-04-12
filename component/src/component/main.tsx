import { WebPartContext } from "@microsoft/sp-webpart-base";
import React from "react";
import { Locals } from "../model/locals.model";
import { WebpartProperties } from "../model/webpart-properties.model";
import { Catch } from "./common/catch.component";
import { Loading } from "./common/loading.component";
import { FluentUiProvider } from "./provider/fluent-ui-provider.component";
import { LocalsProvider } from "./provider/locals-provider.component";
import { PnpProvider } from "./provider/pnp-provider.component";
import { QueryProvider } from "./provider/query-provider.component";
import { RecoilProvider } from "./provider/recoil-provider.component";
import { WebpartPropertiesProvider } from "./provider/webpart-properties-provider.component";
import { Test } from "./test";

interface MainProps {
    webpartContext: WebPartContext;
    webpartProperties: WebpartProperties;
    locals: Locals;
}

export const Main = ({ webpartContext, webpartProperties, locals }: MainProps) => {
    return (
        <QueryProvider>
            <PnpProvider webpartContext={webpartContext}>
                <RecoilProvider>
                    <WebpartPropertiesProvider value={webpartProperties}>
                        <LocalsProvider value={locals}>
                            <FluentUiProvider>
                                <Catch>
                                    <Loading>
                                        <Test />
                                    </Loading>
                                </Catch>
                            </FluentUiProvider>
                        </LocalsProvider>
                    </WebpartPropertiesProvider>
                </RecoilProvider>
            </PnpProvider>
        </QueryProvider>
    );
};
