sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/core/routing/History"],
  function (Controller, History) {
    "use strict";

    var Controller = Controller.extend(
      "DemoUXapp.controller.MainNavigation.Object",
      {
        //function to get route
        getRouter: function () {
          return sap.ui.core.UIComponent.getRouterFor(this);
        },

        //function to get to the previous page
        onNavBack: function (oEvent) {
          var oHistory, sPreviousHash;
          oHistory = History.getInstance();
          sPreviousHash = oHistory.getPreviousHash();
          if (sPreviousHash !== undefined) {
            window.history.go(-1);
          } else {
            this.getRouter().navTo("table", {}, true /*no history*/);
          }
        }
      }
    );

    return Controller;
  }
);
