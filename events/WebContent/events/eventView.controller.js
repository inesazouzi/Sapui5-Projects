sap.ui.controller("events.eventView", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf events.eventView
*/
	onInit: function() {
		var oEventViewModel = new sap.ui.model.json.JSONModel({
			login: "",
			password:"",
		});
		sap.ui.getCore( ).setModel( oEventViewModel, 'oEventViewModel' );//we attach the model to the whole application,so it can be accessible

	},

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
	checkPassword:function () {
		var oEventViewModel = sap.ui.getCore( ).getModel( 'oEventViewModel' );

		if (oEventViewModel.getProperty("/password") != "") {
			
			return false;
		}
		return true;		
	},
	onCancel:function(oEvent){
		var oEventViewModel = sap.ui.getCore( ).getModel( 'oEventViewModel' );
		oEventViewModel.setData({
			login: "",
			password:"",
		});
	},
	onLogin:function(oEvent ,oController){
		var oEventViewModel = sap.ui.getCore( ).getModel( 'oEventViewModel' );

		if (oController.checkPassword()){
			var oMainView = sap.ui.getCore().byId("mainView");
			oMainView.getController().showWelcomeView();
			oMainView.getController().setHeadreParameters(oEventViewModel.getProperty("/login"));
		}
	},
	
/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf events.eventView
*/
//	onExit: function() {
//
//	}

});