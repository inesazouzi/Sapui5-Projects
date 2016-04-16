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
		
		/*var container = new sap.ui.commons.layout.MatrixLayout({id:"ManageContainer"});
		
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
		
		container.createRow(oLabel,oBack);*/
		var jsonData = {
				"Tasks": [{
					
					"SAP__Origin": "LOCALHOST_C73_00",
					"InstanceID": "InstId01",
					"TaskModelID": "TaskModel01",
					"TaskDefinitionID": "TaskDefinitionID01",
					"TaskDefinitionName": "Sales Order Approval",
					"TaskTitle": "Sales Order Approval - Laptops",
					"Priority": "VERY_HIGH",
					"Status": "READY",
					"CreatedOn": "\/Date(1335439338973)\/",
					"CreatedBy": "",
					"CreatedByName": "",
					"StartDeadLine": "",
					"CompletionDeadLine": "",
					"ExpiryDate": "",
					"LastChangedTime": "\/Date(1384328867199)\/",
					"LastChangedBy": "",
					"IsEscalated": true,
					"SupportsClaim": true,
					"SupportsRelease": false,
					"SupportsForward": true,
					"SupportsComments": true,
					"HasComments": false,
					"HasAttachments": false,
					"HasPotentialOwners": false,
					"IsSubstituted": false,
					"SubstitutedUser": "",
//					"TaskDefinitionData": {
//						"__metadata": {
//							"uri": "http://10.66.182.230:50000/sap.com~tc~tm~wl~odata~web/BPMTasks.svc/TaskCollection(SAP__Origin='LOCALHOST_C73_00',TaskDefinitionID='bpm%3A%2F%2Fbpm.sap.com%2Ftask-definition%2Ffd677a30fcc47ecbf323aa4543a2f815')",
//							"type": "TASKPROCESSING.Task"
//						},
//						"SAP__Origin": "LOCALHOST_C73_00",
//						"TaskModelID": "bpm%3A%2F%2Fbpm.sap.com%2Ftask-model%2Fe0faf6e82eece80fb14811e1a5a5005056aa00d1",
//						"TaskDefinitionID": "bpm://bpm.sap.com/task-definition/fd677a30fcc47ecbf323aa4543a2f815",
//						"TaskName": "Sales Order Approval",
//						"Category": "TASK"
//					}
				}],
				"__count": "1"
			}
		  
		
		  
				
		var locale = 'en';
		var inx = new sap.uiext.inbox.Inbox();
		inx.setHandleBindings(false);
		var taskFilter = new sap.uiext.inbox.TaskInitialFilters(["READY"],null,null,null);// (It is the Status, Priority filters as array)
		var oModel = new sap.ui.model.json.JSONModel();
	    oModel.setData(jsonData);

		inx.setModel(oModel);
		inx.bindTaskTypeDynamicFilter(function(){
			var t = [];
			t.push('Raise Purchase Request');
			t.push('Some Dummy Task');
			t.push('Purchase Order Form');
			t.push('LeaveReq');
			return t;
		})
		inx.bindTaskTable("/Tasks",taskFilter);
		inx.bindTaskExecutionURL(function(id){return "http://www.google.com";},function(id){return "COMPLETED";});
	    inx.bindSearch(function(){
	    	alert('Not Supported');
	    });
  		inx.attachRefresh(function(){
  			oModel.setData(jsonData);
  		});
  		inx.attachTaskAction(function(oEvent){
  			alert(oEvent.getParameter('action'));
  			alert(oEvent.getParameter('selectedIDs'));
  			oModel.setData(jsonData);
  		});
		
		
		
		return inx;
	}

});
