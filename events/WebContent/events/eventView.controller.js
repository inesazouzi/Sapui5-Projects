sap.ui.controller("events.eventView", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf events.eventView
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf events.eventView
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf events.eventView
*/
//	onAfterRendering: function() {
//
//	},
	checkPassword:function (oPsw) {
		if (oPsw != "") {
			
			
			return false;
			
		}
		return true;
		
	}

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf events.eventView
*/
//	onExit: function() {
//
//	}

});