import React from "react";
import { WebpartProperties } from "../model/webpart-properties.model";
import { RecoilProvider } from "./provider/recoil-provider.component";
import { WebpartPropertiesProvider } from "./provider/webpart-properties-provider.component";

interface MainProps {
    webpartProperties: WebpartProperties;
}

export const Main = ({ webpartProperties }: MainProps) => {
    return (
        <RecoilProvider>
            <WebpartPropertiesProvider value={webpartProperties}>
                <p>Buh 2</p>
            </WebpartPropertiesProvider>
        </RecoilProvider>
    );
};
