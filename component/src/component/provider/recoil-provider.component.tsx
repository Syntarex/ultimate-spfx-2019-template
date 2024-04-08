import React, { ReactNode } from "react";
import { RecoilRoot } from "recoil";

interface RecoilProviderProps {
    children: ReactNode;
}

/**
 * Initializes recoil.
 * https://recoiljs.org
 */
export const RecoilProvider = ({ children }: RecoilProviderProps) => {
    return <RecoilRoot>{children}</RecoilRoot>;
};
