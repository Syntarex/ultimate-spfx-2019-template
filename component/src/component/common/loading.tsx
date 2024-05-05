import React, { ReactNode, Suspense } from "react";

/**
 * Suspenses children.
 */
export const Loading: React.FC<{ children: ReactNode; fallback?: ReactNode }> = ({
    children,
    fallback = <p>TODO: Style me</p>,
}) => {
    return <Suspense fallback={fallback}>{children}</Suspense>;
};
