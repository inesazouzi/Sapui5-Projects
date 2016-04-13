sap.ui.jsview("events.WelcomeView", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf events.WelcomeView
	*/ 
	getControllerName : function() {
		return "events.WelcomeView";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf events.WelcomeView
	*/ 
	createContent : function(oController) {
		
		// create a simple matrix layout container
		var container = new sap.ui.commons.layout.MatrixLayout({
			id : "WelcomeContainer",
			layoutFixed : false,
			});
	
		//button to redirect to the mail.view
		var oSendEmail =  new sap.ui.commons.Button({
			id : "mail", // sap.ui.core.ID
			text: "Send Mail",
			press: function(){
				var oMainView = sap.ui.getCore().byId("mainView");
				oMainView.getController().showEmailView();
						}
		});
		
		//button to redirect to the manage.view
		var oManageWorkTime =  new sap.ui.commons.Button({
			id : "manage", // sap.ui.core.ID
			text: "Manage Your Work Time",
			press: function(){
				var oMainView = sap.ui.getCore().byId("mainView");
				oMainView.getController().showManageView();
						}
		});
	
		//button to redirect to the stats.view
		var oStatsWorkTime =  new sap.ui.commons.Button({
			id : "stats", // sap.ui.core.ID
			text: "Statistic of your WOrk Time",
			press: function(){
				var oMainView = sap.ui.getCore().byId("mainView");
				oMainView.getController().showStatsView();
						}
		});
		
		//add IU element to the layout container
		container.createRow( oSendEmail, oManageWorkTime,oStatsWorkTime );	
	
		return container;
	}

});
