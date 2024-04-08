import React, { ReactNode, useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { localsAtom } from "../../data/locals.data";
import { Locals } from "../../model/locals.model";

interface LocalsProviderProps {
    children: ReactNode;
    value: Locals;
}

export const LocalsProvider = ({ children, value }: LocalsProviderProps) => {
    // Sets locals in atom to access them everywhere
    const setLocals = useSetRecoilState(localsAtom);

    // Set locals
    useEffect(() => {
        setLocals(value);
    }, [value]);

    return <>{children}</>;
};
