/* global sap */

sap.ui.define([
	"sap/uxap/BlockBase",
], function (BlockBase) {
	"use strict";

	return BlockBase.extend("com.sap.mentors.lemonaid.view.MentorDetails.BlockAddress", {
		metadata: {
			events : {
				"displayDialogSelectCountry" : {},
				"closeDialogSelectCountry"   : {},
				"searchCountry"              : {}
			}
		}
	});

}, true);
