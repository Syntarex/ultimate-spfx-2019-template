import { atom, useRecoilValue } from "recoil";
import { Locals } from "../model/locals.model";

export const localsAtom = atom<Locals>({
    key: "locals",
    default: {
        headline: "",
    },
});

export const useLocals = () => useRecoilValue(localsAtom);
