webix.protoUI({
    name: "reportDesigner",
    $init(config: webix.ui.reportDesignerConfig) {
        delete config.rows;
        config.isolate = true;
        config.cols = [
            {
                header: "Controls",
                body: {
                    view: "list", drag: "source",
                    id: "controlsList"
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
                                            template() {
                                                return "";
                                            }
                                        }
                                    },
                                    { view: "resizer" },
                                    {
                                        header: "Report Body",
                                        body: {
                                            template() {
                                                return "";
                                            }
                                        }
                                    },
                                    { view: "resizer" },
                                    {
                                        header: "Report Footer",
                                        body: {
                                            template() {
                                                return "";
                                            }
                                        }
                                    },
                                    { view: "resizer" },
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
}, webix.ui.layout, webix.AtomDataLoader)