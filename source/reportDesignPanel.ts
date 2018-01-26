webix.protoUI({
    name: "reportDesignPanel",
    $init(config: webix.ui.reportDesignPanelConfig) {
        const that = this as webix.ui.reportDesignPanel;
        that.$view.className += " webix_reportdesignpanel";
        (that as any).$ready.push(() => {
            const canvas = document.createElement("canvas");
            canvas.style.width = "300px";
            that.$view.appendChild(canvas);
            webix.DragControl.addDrop(canvas, {
                $drop(source: any, target: any, e: MouseEvent) {
                    const dnd = webix.DragControl.getContext();
                    console.log(dnd);
                }
            }, false);
        });
    }
}, webix.ui.spacer)