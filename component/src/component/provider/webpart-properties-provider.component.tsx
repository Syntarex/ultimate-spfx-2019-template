import React, { ReactNode, useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { webpartPropertiesAtom } from "../../data/webpart-properties.data";
import { WebpartProperties } from "../../model/webpart-properties.model";

interface WebpartPropertiesProviderProps {
    children: ReactNode;
    value: WebpartProperties;
}

export const WebpartPropertiesProvider = ({ children, value }: WebpartPropertiesProviderProps) => {
    const setWebpartProperties = useSetRecoilState(webpartPropertiesAtom);
    useEffect(() => setWebpartProperties(value), [value]);

    return <>{children}</>;
};
