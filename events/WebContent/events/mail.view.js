sap.ui.jsview("events.mail", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf events.mail
	*/ 
	getControllerName : function() {
		return "events.mail";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf events.mail
	*/ 
	createContent : function(oController) {
		var container = new sap.ui.commons.layout.MatrixLayout({id:"MailContainer"});
		
		var oBack =  new sap.ui.commons.Button({
			id : "MailBack", // sap.ui.core.ID
			text: "Back to the Welcome Page",
			style: sap.ui.commons.ButtonStyle.Emph,
			press: function(){
				var oMainView = sap.ui.getCore().byId("mainView");
				oMainView.getController().backToWelcome(this.getParent().getParent().getParent().getParent());
						}
		});
		var oSendMailForm = new sap.ui.layout.form.SimpleForm(
				"sendMail",
				{
					
					editable: true,
					maxContainerCols: 2,
					content:[
							new sap.ui.core.Title({text:"Send New Mail"}),
							
							new sap.ui.commons.Label({text:"To"}),
							new sap.ui.commons.TextField({id:"toInput"}),
							new sap.ui.commons.Label({text:"Object"}),
							new sap.ui.commons.TextField({id:"objectInput"}),
							new sap.ui.commons.Label({text:"Message"}),
							new sap.ui.commons.TextArea(
									{
										id : "MessageInput",
									}),
							new sap.ui.commons.Label({text:"Attachement"}),		
							new sap.ui.commons.FileUploader({
										id : "attachement", 
										uploadOnChange: true,
										
									}),	
							new sap.ui.commons.Label({text:""}),				
							new sap.ui.commons.Button({
								id:"sendBtn",
								text:"Send",
								style: sap.ui.commons.ButtonStyle.Accept,
									}),	
							new sap.ui.commons.Button({
								id:"cancelBtn",
								text:"Cancel",
								style: sap.ui.commons.ButtonStyle.Reject,
									}),	
								
							]
				
				
				});
		
		
		container.createRow(oSendMailForm,oBack);
		
		
		return container ;
	}

});
