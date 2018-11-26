sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.pabz.ConfermaVincita.controller.Main", {

		onConfirm: function () {
			this.getOwnerComponent().completeTask(true);
		};

		onReject: function () {
			this.getOwnerComponent().completeTask(false);
		};

	});
});