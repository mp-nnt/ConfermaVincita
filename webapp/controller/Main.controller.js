sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("com.pabz.ConfermaVincita.controller.Main", {

		onConfirm: function () {
			this.getOwnerComponent().completeTask(true);
		},

		onReject: function () {
			this.getOwnerComponent().completeTask(false);
		}

	});
});