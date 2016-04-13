sap.ui.jsview("events.stats", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf events.stats
	*/ 
	getControllerName : function() {
		return "events.stats";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf events.stats
	*/ 
	createContent : function(oController) {
		
		var container = new sap.ui.commons.layout.MatrixLayout({id:"StatContainer"});
		
		var oBack =  new sap.ui.commons.Button({
			id : "StatsBack", // sap.ui.core.ID
			text: "Back to the Welcome Page",
			press: function(){
				var oMainView = sap.ui.getCore().byId("mainView");
				oMainView.getController().backToWelcome(this.getParent().getParent().getParent().getParent());
						}
		});
		
		var oLabel= new sap.ui.commons.Label({
			id : "statsLabel", // sap.ui.core.ID
			text:"stats",
		});
		
		container.createRow(oLabel,oBack);
		
		
		return container ;
	}

});
