import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { ReactNode } from "react";

// The queryclient instance all of our queries and mutations will use
// Can be used to set the behaviour of react query
export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            throwOnError: true, // enables use of react's error boundary
        },
        mutations: {
            throwOnError: true,
        },
    },
});

interface QueryProviderProps {
    children: ReactNode;
}

/**
 * Initializes react query.
 * https://tanstack.com/query/latest
 */
export const QueryProvider = ({ children }: QueryProviderProps) => {
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
