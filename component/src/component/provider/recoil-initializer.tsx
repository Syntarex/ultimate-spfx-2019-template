import React, { ReactNode } from "react";
import { RecoilRoot } from "recoil";

/**
 * Initializes Recoil.
 * https://recoiljs.org
 */
export const RecoilInitializer: React.FC<{
    children: ReactNode;
}> = ({ children }) => {
    return <RecoilRoot>{children}</RecoilRoot>;
};
