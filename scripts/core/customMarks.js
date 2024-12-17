var customMarks = new function () {

	// custom marks

	var markTypeId = 0;
	var customMarksTable;
	var selectCustomMarkTable;
	var customMarksParams;
	var multiMarkCounter;
	var multiMarkCounterIntial;
	var dropdownFilter = null;
	var markTypeDropdownFilter = null;
	var markName = "";
	var previousMarks = "";
	var marksInThisTransfer = "";

	function initMarkTypeDropdownFilter() {
		if (markTypeDropdownFilter === null) {
			markTypeDropdownFilter = $Qmatic.components.dropdown.markTypeSelection.get$Elem();
		}
	}

	function initFilter() {
		if (!dropdownFilter)
			dropdownFilter = $Qmatic.components.dropdown.multiMarkSelection.get$Elem();
	}

	function clearFilter(dropdown) {
		util.clearSelect(dropdown);
		dropdown.trigger("chosen:updated");
	}

	function resetFilterSeleciton() {
		dropdownFilter.val('').trigger('chosen:updated');
	}

	this.addCustomMarkPressed = function () {
		initFilter();
		initMarkTypeDropdownFilter();
		clearFilter(dropdownFilter);
		clearFilter(markTypeDropdownFilter);
		$Qmatic.components.dropdown.markTypeSelection.update({ placeholder_text_single: jQuery.i18n.prop('info.card.marksCard.selectMarkType') });
		markTypeDropdownFilter.trigger("chosen:updated");
		customMarksTable.fnAdjustColumnSizing();

		if (servicePoint.hasValidSettings()
			&& sessvars.state.userState == servicePoint.userState.SERVING) {
			cardNavigationController.push($Qmatic.components.card.marksCard)
			if (typeof selectCustomMarkTable != 'undefined') {

			} else {
				// find the correct mark type id
				var params = servicePoint.createParams();
				params.branchId = sessvars.state.branchId;
				var markTypesArray = spService.get("branches/"
					+ params.branchId + "/markTypes", true);
				markTypesArray = _.filter(markTypesArray, function (o) { return o.name !== "NPS" });

				markTypesArray = this.evaluateCustomMarkTypes(markTypesArray, customMarkTypeName);
				if (markTypesArray !== undefined && markTypesArray.length === 0) {
					markTypeDropdownFilter.prop('disabled', true);
					$Qmatic.components.dropdown.markTypeSelection.update({ placeholder_text_single: jQuery.i18n.prop('info.card.marksCard.no.markTypes.available') });
					markTypeDropdownFilter.trigger("chosen:updated");
				} else {
					util.sortArrayCaseInsensitive(markTypesArray, "name");
					util.populateSelect(markTypesArray, markTypeDropdownFilter);
					markTypeDropdownFilter.prop('disabled', false);
					markTypeDropdownFilter.trigger("chosen:updated");
				}

				// Make Mark dropdown disabled
				dropdownFilter.prop('disabled', true);
				dropdownFilter.trigger('chosen:updated');
				// for (i = 0; i < markTypesArray.length; i++) {
				// 	if (markTypesArray[i].name == customMarkTypeName) {
				// 		markTypeId = markTypesArray[i].id;
				// 	}
				// }

				// // marks of type according to setting in settings.js
				// var t = new Date();
				// var url = "branches/" + sessvars.branchId
				// 	+ "/markTypes/" + markTypeId + "/marks?call=" + t;
				// var marksResponse = spService.get(url, true)

				// util.sortArrayCaseInsensitive(marksResponse, "name");

				// util.populateSelect(marksResponse, dropdownFilter);
				// dropdownFilter.trigger("chosen:updated");
			}
		}
	};

	this.updateSelectMarkDropdown = function (markTypeId) {
		clearFilter(dropdownFilter);
		dropdownFilter.prop('disabled', true);
		dropdownFilter.trigger('chosen:updated');
		var url = "branches/" + sessvars.branchId
			+ "/markTypes/" + markTypeId + "/marks";
		var marksResponse = spService.get(url, true)

		util.sortArrayCaseInsensitive(marksResponse, "name");

		util.populateSelect(marksResponse, dropdownFilter);
		dropdownFilter.prop('disabled', false);
		dropdownFilter.trigger("chosen:updated");
	}

	this.evaluateCustomMarkTypes = function (allMarks, wantedMarkTypes) {
		var excludeMode = false;
		var allMode = false;

		wantedMarkTypes = wantedMarkTypes.split(/[,:]+/).map(function (value) {
			return value.toLowerCase().trim();
		});

		var excludeIndex = wantedMarkTypes.indexOf('exclude');

		if (excludeIndex > 0) {
			wantedMarkTypes = wantedMarkTypes.slice(0, excludeIndex);
		} else if (excludeIndex === 0) {
			excludeMode = true;
		} else if (wantedMarkTypes.indexOf('*') > -1) {
			allMode = true;
		}

		var filterInMark = _.curry(this.filterIn, 2)(wantedMarkTypes);
		var filterOutMark = _.negate(filterInMark);

		if (excludeMode) {
			wantedMarkTypes = _.pull(wantedMarkTypes, "exclude");
			return _.filter(allMarks, filterOutMark);
		} else if (allMode) {
			return allMarks;
		} else {
			return _.filter(allMarks, filterInMark);
		}
	}

	this.filterIn = function (wantedMarkTypes, mark) {
		return _.includes(wantedMarkTypes, mark.name.toLowerCase());
	}

	this.showAddedMarksTable = function () {
		customMarksTable && customMarksTable.show();
	}

	this.hideAddedMarksTable = function () {
		customMarksTable && customMarksTable.hide();
	}

	this.updateVisitParamaters = function (branchId, visitId) {
		//Update parameter 'marksInThisTransfer' in current visit 	
		var newMarks = sessvars.state.visit.visitMarks;
		var previousMarksMap = previousMarks.map(function (e) { return e.id })

		for (i = 0; i < newMarks.length; i++) {
			/* var isInPreviousMarks = false;
			for (j = 0; j < previousMarks.length; j++) {
				if(newMarks[i].id == previousMarks[j].id){
					isInPreviousMarks = true;
					break; 
				}
			}
			if(!isInPreviousMarks){
				if(marksInThisTransfer != ""){
					marksInThisTransfer = marksInThisTransfer + ","		
				}
				marksInThisTransfer = marksInThisTransfer + newMarks[i].id
			}*/



			if (previousMarksMap.indexOf(newMarks[i].id) == -1) {
				if (marksInThisTransfer != "") {
					marksInThisTransfer = marksInThisTransfer + ","
				}
				marksInThisTransfer = marksInThisTransfer + newMarks[i].id
			}
		}

		var updateParams = servicePoint.createParams();
		updateParams.json = '{"marksInThisTransfer":"' + marksInThisTransfer + '"}';
		spService.putParams("branches/" + branchId + "/visits/" + visitId + "/parameters", updateParams);

	};


	this.customMarkClicked = function (id, numberOfMarks, name) {
		if (servicePoint.hasValidSettings()) {
			customMarksParams = servicePoint.createParams();
			customMarksParams.visitId = sessvars.state.visit.id;
			customMarksParams.servicePointId = sessvars.state.servicePointId;
			customMarksParams.markId = id;
			multiMarkCounter = parseInt(numberOfMarks);
			multiMarkCounterIntial = multiMarkCounter
			markName = name;
			if (multiMarks == true && multiMarkCounter > 1) {
				customMarks.addMultiMarks(null, markName);
			} else {
				//Update parameter in visit 'marksInThisTransfer'
				previousMarks = sessvars.state.visit.visitMarks;
				if ((typeof sessvars.state.visit.parameterMap != 'undefined') && (typeof sessvars.state.visit.parameterMap.marksInThisTransfer != 'undefined')) {
					marksInThisTransfer = sessvars.state.visit.parameterMap.marksInThisTransfer;
				}

				var postResponse = spService
					.post("branches/" + customMarksParams.branchId
						+ "/servicePoints/"
						+ customMarksParams.servicePointId + "/visits/"
						+ customMarksParams.visitId + "/marks/"
						+ customMarksParams.markId);
				sessvars.state = servicePoint.getState(postResponse);
				customMarks.updateVisitParamaters(customMarksParams.branchId, sessvars.state.visit.id);
				if (postResponse) {
					customMarks.getUserStateWorkaround(true);
					util.showMessage(jQuery.i18n
						.prop('success.added.mark') + " " + markName);
				} else {
					customMarks.getUserStateWorkaround();
				}
			}
		}
	};

	this.addMultiMarks = function (updateMarksStatus) {
		multiMarkCounter = multiMarkCounter - 1;
		if (multiMarkCounter > 0) {
			spService.postParse("branches/" + customMarksParams.branchId
				+ "/servicePoints/" + customMarksParams.servicePointId
				+ "/visits/" + customMarksParams.visitId + "/marks/"
				+ customMarksParams.markId, "customMarks.addMultiMarks");
		} else {
			//Update parameter in visit 'marksInThisTransfer'
			previousMarks = sessvars.state.visit.visitMarks;
			if ((typeof sessvars.state.visit.parameterMap != 'undefined') && (typeof sessvars.state.visit.parameterMap.marksInThisTransfer != 'undefined')) {
				marksInThisTransfer = sessvars.state.visit.parameterMap.marksInThisTransfer;
			}
			sessvars.state = servicePoint.getState(spService.post("branches/"
				+ customMarksParams.branchId + "/servicePoints/"
				+ customMarksParams.servicePointId + "/visits/"
				+ customMarksParams.visitId + "/marks/"
				+ customMarksParams.markId));

			customMarks.updateVisitParamaters(customMarksParams.branchId, sessvars.state.visit.id);
			customMarks.getUserStateWorkaround(true);
			util.showMessage(jQuery.i18n
				.prop('success.added.mark') + " " + markName + " X " + multiMarkCounterIntial);
		}

		delServUpdateNeeded = true;
		outcomeUpdateNeeded = true;
	};

	var customMarkRemove = function (rowClicked, markName) {
		if (servicePoint.hasValidSettings()) {
			var removeParams = servicePoint.createParams();
			//Update parameter in visit 'marksInThisTransfer'
			previousMarks = sessvars.state.visit.visitMarks;
			if ((typeof sessvars.state.visit.parameterMap != 'undefined') && (typeof sessvars.state.visit.parameterMap.marksInThisTransfer != 'undefined')) {
				marksInThisTransfer = sessvars.state.visit.parameterMap.marksInThisTransfer;
			}

			removeParams.visitId = sessvars.state.visit.id;
			removeParams.servicePointId = sessvars.state.servicePointId;
			removeParams.visitMarkId = customMarksTable.fnGetData(rowClicked).id;
			var delResponse = spService.del("branches/"
				+ removeParams.branchId + "/servicePoints/"
				+ removeParams.servicePointId + "/visits/"
				+ removeParams.visitId + "/marks/"
				+ removeParams.visitMarkId);
			sessvars.state = servicePoint.getState(delResponse);
			if (delResponse) {
				//Update parameter in visit 'marksInThisTransfer'						
				if (marksInThisTransfer != "") {
					var newMarksInThisTransfer = "";
					var marksInThisTransferArray = marksInThisTransfer.split(',');
					if (marksInThisTransferArray.indexOf((removeParams.visitMarkId).toString()) > -1) {
						for (k = 0; k < marksInThisTransferArray.length; k++) {
							if (marksInThisTransferArray[k] != removeParams.visitMarkId) {
								if (newMarksInThisTransfer != "") {
									newMarksInThisTransfer = newMarksInThisTransfer + ",";
								}
								newMarksInThisTransfer = newMarksInThisTransfer + marksInThisTransferArray[k];
							}
						}
						var updateParams = servicePoint.createParams();
						updateParams.json = '{"marksInThisTransfer":"' + newMarksInThisTransfer + '"}';
						spService.putParams("branches/" + removeParams.branchId + "/visits/" + sessvars.state.visit.id + "/parameters", updateParams);
					}
				}
				customMarks.getUserStateWorkaround(true);
				util.showMessage(jQuery.i18n
					.prop('success.removed.mark') + " " + markName);
				if (servicePoint.isMarkListEmptyInVisit()) {
					util.showError(jQuery.i18n.prop('error.no.mark.visit'));
				} else if (servicePoint.isMarkListEmptyInTransfer()) {
					util.showError(jQuery.i18n.prop('error.no.mark.transfer'));
				}
			} else {
				customMarks.getUserStateWorkaround();
			}
		}
	};

	this.getUserStateWorkaround = function (blockMessages) {
		sessvars.state = servicePoint.getState(spService.get("user/status"));
		spPoolUpdateNeeded = false;
		userPoolUpdateNeeded = false;
		queuesUpdateNeeded = false;
		journeyUpdateNeeded = false;
		trtUpdateNeeded = false;
		sessvars.statusUpdated = new Date();
		servicePoint.updateWorkstationStatus(false, true, blockMessages);
	};

	this.updateCustomMarks = function () {
		if (typeof customMarksTable != 'undefined') {
			customMarksTable.fnClearTable();
			if (sessvars.state.visit != null
				&& sessvars.state.visit.visitMarks != null) {
				if (sessvars.state.visit.visitMarks.length > 0) {
					customMarksTable.fnAddData(sessvars.state.visit.visitMarks);
				}
			}
		} else {

			var columns = [
			/* D.serv. name */{
					"sClass": "firstColumn",
					"mDataProp": "markName",
					"sType": "qm-sort",
					"sDefaultContent": null,
					"bSortable": false,
					"sWidth": "auto"
				},
			/* D.serv. visit mark id */{
					"bSearchable": false,
					"bVisible": false,
					"mDataProp": "id",
					"sType": "qm-sort",
					"bSortable": false,
					"sDefaultContent": null
				},
			/* D.serv. orig id */{
					"bSearchable": false,
					"bVisible": false,
					"mDataProp": "markId",
					"sType": "qm-sort",
					"bSortable": false,
					"sDefaultContent": null
				},
			/* Delivered time */{
					"sClass": "middleColumn",
					"mDataProp": "eventTime",
					"mData": function (source, type, val) {
						return source['eventTime'] ? util.formatHHMMToTimeConvention(source['eventTime']) : source['eventTime'];
					},
					"sType": "qm-sort",
					"sDefaultContent": null,
					"sWidth": "auto",
					"bSortable": false,
					"createdCell": function (td, cellData, rowData, row, col) {
						if (customMarks.checkIfMarkInThisTransferToRemove(rowData.id)) {
							$(td).append(
								"<span class=\"removeMarkBtn\" " + "title=\""
								+ jQuery.i18n.prop("action.remove.mark.click")
								+ "\"> " + '<button class="qm-action-btn qm-action-btn--only-icon">'
								+ '<i class="qm-action-btn__icon icon-close" aria-hidden="true"></i>'
								+ '<span class="sr-only">Remove this mark from the current visit</span>'
								+ '</button>' + "</span>");

							$(td).find(".removeMarkBtn").click(function () {
								customMarkRemove(row, rowData.markName);
							});
						}
					}
				}, {
					"sClass": "lastColumn",
					"bSearchable": false,
					"mDataProp": "id",
					"bVisible": false,
					"bSortable": false,
					"sDefaultContent": ""
				}];

			customMarksTable = $('#customMarks')
				.dataTable(
					{
						"id": "cc",
						"bDestroy": true,
						"oLanguage": {
							"sEmptyTable": translate
								.msg("info.no.marks.added"),
							"sInfo": "",
							"sInfoEmpty": "",
							"sZeroRecords": ""
						},
						"bFilter": false,
						"fnRowCallback": null,
						"fnHeaderCallback": headerCallback,
						"bLengthChange": false,
						"bProcessing": true,
						"bPaginate": false,
						"aoColumns": columns,
						"sScrollX": "100%",
						"sScrollY": "100%",
						"bAutoWidth": false,
						"aaData": (sessvars.state.visit != null
							&& sessvars.state.visit.currentVisitService != null
							&& sessvars.state.visit.visitMarks !== null ? sessvars.state.visit.visitMarks
							: null)
					});
			$('#customMarks').prepend("<caption class='sr-only'>Add marks</caption>");
		}
		var sorting = [[1, 'desc']];
		customMarksTable.fnSort(sorting);
	};
	this.checkIfMarkInThisTransferToRemove = function (markId) {

		var marksInThisTransferArray = [];
		if ((typeof sessvars.state.visit != 'undefined') && (typeof sessvars.state.visit.parameterMap != 'undefined')
			&& (typeof sessvars.state.visit.parameterMap.marksInThisTransfer != 'undefined')) {
			marksInThisTransferArray = sessvars.state.visit.parameterMap.marksInThisTransfer.split(',');
		}

		if ((mandatoryLevel == 'transfer') && (marksInThisTransferArray.indexOf(markId.toString()) == -1)) {
			return false;
		} else {
			return true;
		}

	}

	this.cancelAddCustomMarks = function () {
		util.hideModal("addCustomMarks");
	};

	this.hideAddCustomMarks = function () {
		util.hideModal("addCustomMarks");
	};

	this.clearTable = function () {
		util.clearTable(customMarksTable);
	};

	this.getDataTable = function () {
		return customMarksTable;
	}

	var headerCallback = function (nHead, aasData, iStart, iEnd, aiDisplay) {
		$(nHead).find('th').attr('scope', 'col');
	}

};
