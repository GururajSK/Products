/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"gsklist/mylist/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
