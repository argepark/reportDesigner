declare namespace webix {
    namespace ui {
        interface reportDesignerConfig extends layoutConfig {

        }
        interface reportDesigner extends layout, AtomDataLoader {
            config: reportDesignerConfig;
        }
    }
}