declare interface IExampleStrings {
    example: string;
}

declare module "ExampleStrings" {
    const strings: IExampleStrings;
    export = strings;
}
