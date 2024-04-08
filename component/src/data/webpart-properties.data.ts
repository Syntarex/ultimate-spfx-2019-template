import { atom, useRecoilValue } from "recoil";
import { WebpartProperties } from "../model/webpart-properties.model";

export const webpartPropertiesAtom = atom<WebpartProperties>({
    key: "webpart-properties",
    default: {},
});

export const useWebpartProperties = () => useRecoilValue(webpartPropertiesAtom);
