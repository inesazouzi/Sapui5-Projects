sap.ui.jsview("events.manage", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf events.manage
	*/ 
	getControllerName : function() {
		return "events.manage";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf events.manage
	*/ 
	createContent : function(oController) {
		
		var container = new sap.ui.commons.layout.MatrixLayout({id:"ManageContainer"});
		
		var oBack =  new sap.ui.commons.Button({
			id : "ManageBack", // sap.ui.core.ID
			text: "Back to the Welcome Page",
			press: function(){
				var oMainView = sap.ui.getCore().byId("mainView");
				oMainView.getController().backToWelcome(this.getParent().getParent().getParent().getParent());
						}
		});
		var oLabel= new sap.ui.commons.Label({
			id : "manageLabel", // sap.ui.core.ID
			text:"manage",
		});
		
		container.createRow(oLabel,oBack);
		
		
		return container ;
	}

});
