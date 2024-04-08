import React, { ReactNode, useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { localsAtom } from "../../data/locals.data";
import { Locals } from "../../model/locals.model";

interface LocalsProviderProps {
    children: ReactNode;
    value: Locals;
}

/**
 * Sets given locals in a recoil atom and enables the useLocals() hook.
 */
export const LocalsProvider = ({ children, value }: LocalsProviderProps) => {
    // Sets locals in atom to access them everywhere
    const setLocals = useSetRecoilState(localsAtom);

    // Set locals
    useEffect(() => {
        setLocals(value);
    }, [value]);

    return <>{children}</>;
};
