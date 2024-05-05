import { Catch } from "@/component/common/catch";
import { Loading } from "@/component/common/loading";
import { LocalsProvider } from "@/component/provider/locals-provider";
import { PnPInitializer } from "@/component/provider/pnp-initializer";
import { RecoilInitializer } from "@/component/provider/recoil-initializer";
import { WebpartPropertiesProvider } from "@/component/provider/webpart-properties-provider";
import { Locals } from "@/model/locals";
import { WebpartProperties } from "@/model/webpart-properties";
import { WebPartContext } from "@microsoft/sp-webpart-base";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PrimeReactProvider } from "primereact/api";
import React from "react";

// The QueryClient instance all of our queries and mutations will use.
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            throwOnError: true, // enables use of react's error boundary
        },
        mutations: {
            throwOnError: true,
        },
    },
});

export const Main: React.FC<{
    webpartContext: WebPartContext;
    webpartProperties: WebpartProperties;
    locals: Locals;
}> = ({ webpartContext, webpartProperties, locals }) => {
    return (
        <QueryClientProvider client={queryClient}>
            <PnPInitializer webpartContext={webpartContext}>
                <PrimeReactProvider>
                    <RecoilInitializer>
                        <WebpartPropertiesProvider value={webpartProperties}>
                            <LocalsProvider value={locals}>
                                <Catch>
                                    <Loading>
                                        <p className="text-2xl">Hello World</p>
                                    </Loading>
                                </Catch>
                            </LocalsProvider>
                        </WebpartPropertiesProvider>
                    </RecoilInitializer>
                </PrimeReactProvider>
            </PnPInitializer>
        </QueryClientProvider>
    );
};
