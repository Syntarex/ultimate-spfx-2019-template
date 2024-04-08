import { Spinner } from "@fluentui/react-components";
import React, { ReactNode, Suspense } from "react";

const Fallback = () => <Spinner labelPosition={"after"} label={"Loading..."} />;

interface LoadingProps {
    children?: ReactNode;
}

/**
 * Suspenses children. A spinner will be rendered as fallback.
 */
export const Loading = ({ children = <Fallback /> }: LoadingProps) => {
    return <Suspense fallback={<Fallback />}>{children}</Suspense>;
};
