import React from "react";
import { useLocals } from "../data/locals.data";

export const Test = () => {
    const { headline } = useLocals();

    return <h1>{headline}</h1>;
};
