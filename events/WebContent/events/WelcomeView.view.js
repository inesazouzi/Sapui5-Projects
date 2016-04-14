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
		/**Table : Inbox Emails (Sent and Received)**/
		var oTableInbox = new sap.ui.table.Table({
			title: "My Inbox",
			visibleRowCount: 7,
			selectionMode: sap.ui.table.SelectionMode.Single,
			width:"100%"
		});
		//Type: sent || received
		var oColumn = new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Type"}),
			template: new sap.ui.commons.TextView().bindProperty("text", "type"),
			sortProperty: "type",
			filterProperty: "type",
			width: "100px"
		});
		oTableInbox.addColumn(oColumn);
		
		//To || From : if you sent the mail (To) and if you received (from who)
		var oColumn = new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "From/To"}),
			template: new sap.ui.commons.TextView().bindProperty("text", "creator"),
			sortProperty: "creator",
			filterProperty: "creator",
			width: "100px"
		});
		oTableInbox.addColumn(oColumn);
		
		//date
		var oColumn = new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Date"}),
			template: new sap.ui.commons.DatePicker({editable:false}).bindProperty("value", "date_creation"),
			sortProperty: "date_creation",
			filterProperty: "date_creation",
			width: "100px"
		});
		oTableInbox.addColumn(oColumn);
		
		//Subject
		var oColumn = new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Subject"}),
			template: new sap.ui.commons.TextView().bindProperty("text", "subject"),
			sortProperty: "subject",
			filterProperty: "subject",
			width: "100px"
		});
		oTableInbox.addColumn(oColumn);
		
		container.createRow(oTableInbox);
		return container;
	}
});
