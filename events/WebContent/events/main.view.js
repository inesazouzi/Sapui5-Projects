sap.ui.jsview("events.main", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf events.main
	*/ 
	getControllerName : function() {
		return "events.main";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf events.main
	*/ 
	createContent : function(oController) {
		
		//application cotnainer as a MatrixLayout
		var container = new sap.ui.commons.layout.MatrixLayout({id:"container"});
		
		//create the ApplicationHeader control
		var oAppHeader = new sap.ui.commons.ApplicationHeader({
			id:"appHeader",
			logoSrc:"ressorces/images/SAPLogo.gif",
			logoText:"SAP SAPUI5 Library",
			displayWelcome:true,
			displayLogoff:false,
			logoff:function(){
				oController.logOff(this);
			},
			
		}); 
		// Create a menu bar instance
		if(sap.ui.getCore().byId("menuBar") != undefined )
			sap.ui.getCore().byId("menuBar").destroy();
		

		//cretae our application views
		var oLoginview = sap.ui.view({id:"loginView", viewName:"events.eventView", type:sap.ui.core.mvc.ViewType.JS});
		var oWelcomeview = sap.ui.view({id:"welcomeView", viewName:"events.WelcomeView", type:sap.ui.core.mvc.ViewType.JS});
		var oMail = sap.ui.view({id:"mailView", viewName:"events.mail", type:sap.ui.core.mvc.ViewType.JS});
		var oStats = sap.ui.view({id:"statsView", viewName:"events.stats", type:sap.ui.core.mvc.ViewType.JS});
		var oManage = sap.ui.view({id:"manageView", viewName:"events.manage", type:sap.ui.core.mvc.ViewType.JS});
	
		//make views invisible
		oLoginview.setVisible(true);
		oMail.setVisible(false);
		oStats.setVisible(false);
		oManage.setVisible(false);
		oWelcomeview.setVisible(false);
		
		/* Create a menu bar instance
		var oMenuBar = new sap.ui.commons.MenuBar({
			id:"menuBar",
			design:"Header",
		});

		// Create two main menu items for the menubar - for which you define subitems lateron
		var oMenuBarItem1 = new sap.ui.commons.MenuItem("menuBar-item-1",{
			text:"Home",
			//attachSelect:oController.backToWelcome(this.getParent().getParent()),
				});
		oMenuBar.addItem(oMenuBarItem1);
		// Create a menu instance for the "HOme" menu
		var oMenu1 = new sap.ui.commons.Menu("menu1");
		oMenuBarItem1.setSubmenu(oMenu1);
		// Create and add  sub-items for the "HOme" menu
		var oMenuItem1 = new sap.ui.commons.MenuItem("item1-1",{text:"LogOut"});
		oMenu1.addItem(oMenuItem1);
		/oMenuItem1.attachSelect(oController.logOff());*/
		
		//add views to the matrix layout
		container.createRow(oAppHeader);
		container.createRow(buildMainViewMenuBar(oController));
		container.createRow(oLoginview);
		container.createRow(oWelcomeview);
		container.createRow(oMail);
		container.createRow(oStats);
		container.createRow(oManage);
	
		return container;
	}

});
