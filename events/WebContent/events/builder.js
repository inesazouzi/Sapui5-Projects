/**Here we will provide general builder for all the application**/


function buildMainViewMenuBar(oController){
	if(oMenuBar == undefined)
	{
		var oMenuBar = new sap.ui.commons.layout.MatrixLayout("idMenuBar").addStyleClass("barMenu");
	}
	oMenuBar.removeAllRows();
	
	var oHomeButton =  new sap.ui.commons.Button({
		text: "Home",
	});
	oMenuBar.createRow(oHomeButton)

	return oMenuBar;	
}

function buildWelcomeViewMenuBar(oController){

	var oMenuBar = sap.ui.getCore().byId("idMenuBar");
	oMenuBar.removeAllRows();
	
	var oHomeButton =  new sap.ui.commons.Button({
		text: "Home",
	});
	//button to redirect to the mail.view
	var oSendEmail =  new sap.ui.commons.Button({
		text: "Send Mail",
		press: function(){
			var oMainView = sap.ui.getCore().byId("mainView");
			oMainView.getController().showEmailView();
			buildMailViewMenuBar();
		}
	});
	
	//button to redirect to the manage.view
	var oManageWorkTime =  new sap.ui.commons.Button({
		text: "Manage Your Work-Time",
		press: function(){
			var oMainView = sap.ui.getCore().byId("mainView");
			oMainView.getController().showManageView();
		}
	});

	//button to redirect to the stats.view
	var oStatsWorkTime =  new sap.ui.commons.Button({
		text: "Statistic of your Work-Time",
		press: function(){
			var oMainView = sap.ui.getCore().byId("mainView");
			oMainView.getController().showStatsView();
		}
	});
	
	oMenuBar.createRow(new sap.ui.commons.layout.MatrixLayoutCell({
		content:[oHomeButton,oSendEmail,oManageWorkTime,oStatsWorkTime]
	}));

}

function buildMailViewMenuBar(){
	var oMenuBar = sap.ui.getCore().byId("idMenuBar");
	oMenuBar.removeAllRows();
	
	var oBack =  new sap.ui.commons.Button({
		id : "MailBack", // sap.ui.core.ID
		text: "Back to the Welcome Page",
		press: function(){
			var oMainView = sap.ui.getCore().byId("mainView");
			oMainView.getController().backToWelcome(this.getParent().getParent().getParent().getParent());
		}
	});
	
	oMenuBar.createRow(new sap.ui.commons.layout.MatrixLayoutCell({
		content:[oBack]
	}));
}
