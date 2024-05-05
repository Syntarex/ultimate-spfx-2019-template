import React, { ReactNode } from "react";
import { useErrorBoundary } from "use-error-boundary";

/**
 * Catches errors thrown by children and renders a dismissible error message.
 */
export const Catch: React.FC<{ children: ReactNode }> = ({ children }) => {
    const { ErrorBoundary } = useErrorBoundary();

    // TODO: Render on error
    return (
        <ErrorBoundary
            render={() => children}
            renderError={(error) => <p>{error.error.message ?? "Unknown error"}</p>}
        />
    );
};
