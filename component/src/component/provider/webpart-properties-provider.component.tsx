import React, { ReactNode, useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { webpartPropertiesAtom } from "../../data/webpart-properties.data";
import { WebpartProperties, WebpartPropertiesSchema } from "../../model/webpart-properties.model";
import { Loading } from "../common/loading.component";

interface WebpartPropertiesProviderProps {
    children: ReactNode;
    value: WebpartProperties;
}

/**
 * Sets given webpart properties in a recoil atom and enables the useWebpartProperties() hook.
 */
export const WebpartPropertiesProvider = ({ children, value }: WebpartPropertiesProviderProps) => {
    const [init, setInit] = useState(false);

    // Sets webpart properties in atom to access them everywhere
    const setWebpartProperties = useSetRecoilState(webpartPropertiesAtom);

    // Set webpart properties and validate them by using zod
    useEffect(() => {
        setWebpartProperties(WebpartPropertiesSchema.parse(value));
        setInit(true);
    }, [value]);

    if (!init) {
        return <Loading />;
    }

    return <>{children}</>;
};
