webix.protoUI({
    name: "reportDesignPanel",
    $init(config: webix.ui.reportDesignPanelConfig) {
        const that = this as webix.ui.reportDesignPanel;
        (that as any).$ready.push(() => {
            webix.DragControl.addDrop(that.$view, (source: any, target: any) => {
                const dnd = webix.DragControl.getContext();
                console.log(dnd);
            }, false);
        });
    }
}, webix.ui.spacer)