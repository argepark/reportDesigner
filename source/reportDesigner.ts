webix.protoUI({
    name: "reportDesigner",
    $init(config: webix.ui.reportDesignerConfig) {
        delete config.rows;
        config.isolate = true;
        config.cols = [
            {
                width: 300,
                header: "Controls",
                body: {
                    view: "list", drag: "source",
                    id: "controlsList", select: true,
                    data: [
                        "Text",
                        "Table",
                        "Barcode"
                    ],
                    on: {
                        onBeforeDrag(context: any) {
                            if (context.from === this) {
                                this.select(context.start);
                            }
                        }
                    }
                }
            },
            { view: "resizer" },
            {
                view: "tabview",
                cells: [
                    {
                        header: "Design",
                        body: {
                            view: "scrollview",
                            body: {
                                rows: [
                                    {
                                        header: "Report Header",
                                        body: {
                                            template(obj: any, tmp: webix.ui.template) {
                                                webix.DragControl.addDrop(tmp.$view, {
                                                    $drop(source: any, target: any, e: Event) {
                                                        var dnd = webix.DragControl.getContext();
                                                        console.log(e);
                                                    }
                                                }, false);
                                                return "";
                                            }
                                        },
                                        height: 200
                                    },
                                    {
                                        header: "Report Body",
                                        body: {
                                            view: "reportDesignPanel",
                                            height: 200, panelWidth: 500
                                        }
                                    },
                                    {
                                        header: "Report Footer",
                                        body: {
                                            template() {
                                                return "";
                                            }
                                        },
                                        height: 200
                                    },
                                    {}
                                ]
                            }
                        }
                    },
                    {
                        header: "Preview",
                        body: {
                            view: "pdfviewer", id: "reportPreview"
                        }
                    }
                ]
            }
        ]
    }
}, webix.ui.headerlayout)