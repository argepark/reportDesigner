webix.protoUI({
    name: "reportDesigner",
    $init(config: webix.ui.reportDesignerConfig) {
        config.type = "line";
        config.rows = [
            {
                view: "toolbar",
                cols: [
                    {
                        view: "icon", icon: "file-o"
                    },
                    {
                        view: "icon", icon: "folder-open-o"
                    },
                    {
                        view: "icon", icon: "floppy-o"
                    },
                    {
                        view: "icon", icon: "eye"
                    },
                    {
                        view: "counter", min: 50, max: 200, step: 5,
                        value: 100, attributes: { readonly: "readonly" }
                    },
                    {}
                ]
            },
            {
                cols: [
                    {
                        width: 300, type: "line",
                        rows: [
                            {
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
                            {
                                header: "Properties",
                                body: {
                                    view: "property"
                                }
                            }
                        ]
                    },
                    { view: "resizer" },
                    {
                        view: "multiview",
                        cells: [
                            {
                                view: "scrollview",
                                body: {
                                    type: "line",
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
                                                height: 200, panelWidth: "30pc"
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
                            },
                            {
                                view: "pdfviewer", innertype: "reportPreview"
                            }
                        ]
                    }
                ]
            }
        ]
    }
}, webix.ui.layout)