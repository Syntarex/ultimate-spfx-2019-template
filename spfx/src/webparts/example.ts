import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import strings from "ExampleStrings";
import { render } from "component";

import "component/dist/index.css";

export default class ExampleWebPart extends BaseClientSideWebPart<{}> {
    public async onInit() {
        console.info("onInit");
    }

    public render(): void {
        console.info("render");

        render(this.context, this.properties, strings);
    }

    protected onDispose(): void {
        console.log("onDispose");
    }
}
