sap.ui.jsview("events.eventView", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf events.eventView
	*/ 
	getControllerName : function() {
		return "events.eventView";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf events.eventView
	*/ 
	createContent : function(oController) {

//		//Create a layout instance for the login form
//		var oLayout = new sap.ui.commons.layout.AbsoluteLayout({width:"400px",height:"150px"});
//		oLayout.addStyleClass("LayoutStyle"); 
//
//		var oLabel = new sap.ui.commons.Label({text:"User Name"});
//		var oNameInput = new sap.ui.commons.TextField({id:"userName",width:"190px"});
//		oLabel.setLabelFor(oNameInput);
//		oLayout.addContent(oLabel, {right:"300px",top:"20px"});
//		oLayout.addContent(oNameInput, {left:"110px",top:"20px"});
//
//		oLabel = new sap.ui.commons.Label({text:"Password"});
//		oPWInput = new sap.ui.commons.PasswordField({width:"190px"});
//		oLabel.setLabelFor(oPWInput);
//		oLayout.addContent(oLabel, {right:"300px",top:"62px"});
//		oLayout.addContent(oPWInput, {left:"110px",top:"62px"});
//
//		var oLoginButton = new sap.ui.commons.Button({text:"Login",width:"133px",style: sap.ui.commons.ButtonStyle.Accept});
//		var oCancelButton = new sap.ui.commons.Button({text:"Cancel",width:"133px",style: sap.ui.commons.ButtonStyle.Reject});
//		
//		oLoginButton.attachPress(function(){				
//					if (oController.checkPassword(oPWInput.getValue())){
//						var oMainView = sap.ui.getCore().byId("mainView");
//						oMainView.getController().showWelcomeView();
//						oMainView.getController().setHeadreParameters(oNameInput.getValue());
//					}					
//		});
//		
//		oCancelButton.attachPress(
//				function(){
//					oNameInput.setValue("");
//					oPWInput.setValue("");
//				});
//		
//		oLayout.addContent(oLoginButton, {left:"70px",top:"104px"});
//		oLayout.addContent(oCancelButton, {left:"210px",top:"104px"});
//
//		
//		return oLayout;
		/****/
		
		var oLayoutResponsive = new sap.ui.layout.form.ResponsiveGridLayout();

		var oLoginForm = new sap.ui.layout.form.Form({
			//title: new sap.ui.core.Title({text: oBundle.getText("lb_evalrun_title"), tooltip: "Lieferantenbewertung",emphasized:true}),
			editable: true,
			layout: oLayoutResponsive,
			formContainers: [
							new sap.ui.layout.form.FormContainer({
								title: "Login-Details",
								formElements: [
										new sap.ui.layout.form.FormElement({
											label: "User Name",
											fields: [new sap.ui.commons.TextField({}).bindProperty("value", "oEventViewModel>/login")]
										}),
										new sap.ui.layout.form.FormElement({
											label: "Password",
											fields: [new sap.ui.commons.PasswordField({}).bindProperty("value", "oEventViewModel>/password")]
										}),
										new sap.ui.layout.form.FormElement({
											label: "",
											fields: [new sap.ui.commons.Button({
														text:"Login",
														width:"133px",
														style: sap.ui.commons.ButtonStyle.Accept,
														press:function(oEvent){oController.onLogin(oEvent,oController);}
													}),
											        new sap.ui.commons.Button({
											        	text:"Cancel",
											        	width:"133px",
											        	style: sap.ui.commons.ButtonStyle.Reject,
											        	press: oController.onCancel
											        	
											        })
											       ]
										})
							]}),
			]
		});
		
		return oLoginForm;
	}
});
