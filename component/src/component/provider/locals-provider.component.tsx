import React, { ReactNode, useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { localsAtom } from "../../data/locals.data";
import { Locals, LocalsSchema } from "../../model/locals.model";
import { Loading } from "../common/loading.component";

interface LocalsProviderProps {
    children: ReactNode;
    value: Locals;
}

/**
 * Sets given locals in a recoil atom and enables the useLocals() hook.
 */
export const LocalsProvider = ({ children, value }: LocalsProviderProps) => {
    const [init, setInit] = useState(false);

    // Sets locals in atom to access them everywhere
    const setLocals = useSetRecoilState(localsAtom);

    // Set locals and validate them by using zod
    useEffect(() => {
        setLocals(LocalsSchema.parse(value));
        setInit(true);
    }, [value]);

    if (!init) {
        return <Loading />;
    }

    return <>{children}</>;
};
