sap.ui.controller("events.main", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf events.main
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf events.main
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf events.main
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf events.main
*/
//	onExit: function() {
//
//	}
	//show the welcome.view
	showWelcomeView:function(){
		buildWelcomeViewMenuBar();
		var oLogin = sap.ui.getCore().byId("loginView");
		oLogin.setVisible(false);
		var oWelcome = sap.ui.getCore().byId("welcomeView");
		oWelcome.setVisible(true);
		
	},
	
	//show the login.view
	showLoginView:function(){
		var oLogin = sap.ui.getCore().byId("loginView");
		if(oLogin != undefined)
			oLogin.setVisible(true);
		var oWelcome = sap.ui.getCore().byId("welcomeView");
		if(oWelcome != undefined)
			oWelcome.setVisible(false);
	},
	
	//set the parameters of the header of aour application
	setHeadreParameters:function (oNewUserName){
		var oAppHeader = sap.ui.getCore().byId("appHeader");
		oAppHeader.setUserName(oNewUserName);
		oAppHeader.setDisplayLogoff(true);
	},
	
	//log off 
	logOff:function(oAppHeader){
		/*this.showLoginView();
		oAppHeader.setDisplayLogoff(false);
		oAppHeader.setUserName("");
		var oUserName = sap.ui.getCore().byId("userName");
		if(oUserName != undefined)
			oUserName.setValue("");*/
	},
	
	//show the mail.view
	showEmailView:function(){
		var oWelcome = sap.ui.getCore().byId("welcomeView");
		oWelcome.setVisible(false);
		var oEmail = sap.ui.getCore().byId("mailView");
		oEmail.setVisible(true);
		
	},
	
	//show manage.view
	showManageView:function(){
		var oWelcome = sap.ui.getCore().byId("welcomeView");
		oWelcome.setVisible(false);
		var oManage = sap.ui.getCore().byId("manageView");
		oManage.setVisible(true);
		
	},
	
	//show the stats.view
	showStatsView:function(){
		var oWelcome = sap.ui.getCore().byId("welcomeView");
		oWelcome.setVisible(false);
		var oStats = sap.ui.getCore().byId("statsView");
		oStats.setVisible(true);
		
	},
	
	//back to the welcome.view 
	backToWelcome:function(oView){
		oView.setVisible(false);
		var oWelcome = sap.ui.getCore().byId("welcomeView");
		oWelcome.setVisible(true);	
		buildWelcomeViewMenuBar();
	},
});