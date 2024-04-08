declare interface IWebpartStrings {
    headline: string;
}

declare module "WebpartStrings" {
    const strings: IWebpartStrings;
    export = strings;
}
