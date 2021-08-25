sap.ui.define([
    'sap/ui/core/mvc/Controller'
], function (Controller) {
    "use strict";

    var Controller = Controller.extend("DemoUXapp.controller.MainNavigation.Example2", {
        getRouter: function () {
            return sap.ui.core.UIComponent.getRouterFor(this);
        },

        onPress: function (itemNo) {
            this.getRouter().navTo("object" + itemNo);
            console.log('object' + itemNo);
        }
    });

    return Controller;
});