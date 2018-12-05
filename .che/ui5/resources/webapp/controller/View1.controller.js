sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
	"use strict";
	return Controller.extend("image.ui5.controller.View1", {
		onInit: function () {
			var oData = {
				"processType": "generic",
				"file": null
			};
			var oModel = new sap.ui.model.json.JSONModel(oData);
			this.getView().setModel(oModel, "mainModel");
		},
		/**
		 *@memberOf image.ui5.controller.View1
		 */
		buttonProcess: function (oEvent) {
			//This code was generated by the layout editor.
			var fileUploader = this.getView.byId("fileUploader");
			var processType = this.getView.byId("selectionBox");
			var image0 = this.getView.byId("image0");
			var image1 = this.getView.byId("image1");
		}
	});
});