import { Button, MessageBar, MessageBarActions, MessageBarBody, MessageBarTitle } from "@fluentui/react-components";
import { DismissRegular } from "@fluentui/react-icons";
import React, { ReactNode } from "react";
import { useErrorBoundary } from "use-error-boundary";

interface CatchProps {
    children: ReactNode;
}

/**
 * Catches errors thrown by children. Also catches errors of recoil selectors.
 * An alert box will be rendered to show the error.
 */
export const Catch = ({ children }: CatchProps) => {
    const { ErrorBoundary, reset } = useErrorBoundary({
        onDidCatch: (error, errorInfo) => {
            // TODO: Log error and errorInfo
        },
    });

    return (
        <ErrorBoundary
            render={() => children}
            renderError={(error) => (
                <MessageBar intent={"error"}>
                    <MessageBarBody>
                        <MessageBarTitle>Error</MessageBarTitle>
                        {error.error.message}
                    </MessageBarBody>

                    <MessageBarActions
                        containerAction={
                            <Button appearance={"transparent"} icon={<DismissRegular />} onClick={reset} />
                        }
                    />
                </MessageBar>
            )}
        />
    );
};
