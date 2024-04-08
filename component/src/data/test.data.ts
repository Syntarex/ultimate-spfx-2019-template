import { sp } from "@pnp/sp";
import { selector } from "recoil";

export const testSelector = selector({
    key: "test",
    get: async () => {
        const web = await sp.web();

        return web;
    },
});
