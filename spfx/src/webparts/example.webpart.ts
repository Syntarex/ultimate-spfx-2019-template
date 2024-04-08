import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import { render } from "component";
import { clone } from "lodash";

export default class ListWebPart extends BaseClientSideWebPart<{}> {
    public async onInit() {
        console.log("webpart", "oninit");
    }

    public render(): void {
        console.log("webpart", "render");

        render(clone(this.context));
    }

    protected onDispose(): void {
        console.log("webpart", "ondispose");
    }
}
