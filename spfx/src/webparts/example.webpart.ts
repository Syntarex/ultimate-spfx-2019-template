import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import { render } from "component";
import { clone } from "lodash";
import "../hot-reload";

export default class ListWebPart extends BaseClientSideWebPart<{}> {
    private renderProxy = render;

    public async onInit() {
        const isDevMode = process.env.NODE_ENV === "dev";

        console.log("webpart", "oninit", process.env.NODE_ENV);

        try {
            if (isDevMode) {
                console.log("webpart", "IS IN DEV MODE");

                // @ts-ignore
                const serve = await import("../../../component/serve/index");

                this.renderProxy = serve.render;
            }
        } catch (ex) {}
    }

    public render(): void {
        console.log("webpart", "render");

        this.renderProxy(clone(this.context));
    }

    protected onDispose(): void {
        console.log("webpart", "ondispose");
    }
}
