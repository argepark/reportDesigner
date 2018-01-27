webix.protoUI({
    name: "reportDesignPanel",
    $init(config: webix.ui.reportDesignPanelConfig) {
        const that = this as webix.ui.reportDesignPanel;
        (that as any).$ready.push(() => {
            const panel = document.createElement("div");
            const panelWidth = config.panelWidth || 0;
            panel.className = "webix_reportdesignpanel"
            panel.style.width = panelWidth ? (panelWidth + "px") : "100%";
            panel.style.marginLeft = panelWidth ? (-panelWidth / 2 + "px") : null;
            that.$view.appendChild(panel);
            webix.DragControl.addDrop(panel, {
                $drop(source: any, target: any, e: MouseEvent) {
                    const dnd = webix.DragControl.getContext();
                    const off = getNodeOffset(panel);
                    console.log(dnd);
                    console.log(e);
                    console.log(off);
                    const el = document.createElement("div");
                    el.style.position = "relative";
                    el.style.width = "150px";
                    el.style.height = "25px";
                    el.innerHTML = dnd.source[0];
                    el.style.left = (e.pageX - off.left) + "px";
                    el.style.top = (e.pageY - off.top) + "px";
                    el.style.border = "1px solid red";
                    panel.appendChild(el);
                }
            }, false);
        });
    }
}, webix.ui.spacer)