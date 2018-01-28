webix.protoUI({
    name: "reportDesignPanel",
    $init(config: webix.ui.reportDesignPanelConfig) {
        const that = this as webix.ui.reportDesignPanel;
        (that as any).$ready.push(() => {
            const panel = document.createElement("div");
            panel.className = "webix_reportdesignpanel"
            if (config.panelWidth) {
                panel.style.width = config.panelWidth;
            }
            that.$view.appendChild(panel);
            webix.DragControl.addDrop(panel, {
                $drop(source: any, target: any, e: MouseEvent) {
                    const dnd = webix.DragControl.getContext();
                    const off = webix.html.offset(panel);
                    console.log(dnd);
                    console.log(e);
                    console.log(off);
                    const el = document.createElement("div");
                    el.className = "webix_reportitem webix_selected";
                    el.style.position = "absolute";
                    el.style.width = "150px";
                    el.style.height = "25px";
                    el.innerHTML = dnd.source[0];
                    el.style.left = (e.pageX - off.x) + "px";
                    el.style.top = (e.pageY - off.y) + "px";
                    el.style.border = "1px solid red";
                    panel.appendChild(el);
                }
            }, false);
        });
    }
}, webix.ui.view)