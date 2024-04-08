import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import strings from "WebpartStrings";
import { render } from "component";
import "../hot-reload";

export default class ListWebPart extends BaseClientSideWebPart<{}> {
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
