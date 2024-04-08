import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import { render } from "component";
import { clone } from "lodash";
import "../hot-reload";

export default class ListWebPart extends BaseClientSideWebPart<{}> {
    public async onInit() {
        console.info("onInit");
    }

    public render(): void {
        console.info("render");

        render(clone(this.context), this.properties);
    }

    protected onDispose(): void {
        console.log("onDispose");
    }
}
