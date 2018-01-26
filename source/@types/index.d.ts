declare namespace webix {
    namespace ui {
        interface reportDesignerConfig extends headerlayoutConfig {

        }
        interface reportDesigner extends headerlayout {
            config: reportDesignerConfig;
        }
        interface reportDesignPanelConfig extends spacerConfig {

        }
        interface reportDesignPanel extends spacer {
            config: reportDesignPanelConfig
        }
    }
}