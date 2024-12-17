var outcome = new function() {

    var outcomeTable;
    var selectOutcomeTable;

    this.addOutcomePressed = function() {
        if(servicePoint.hasValidSettings() && (sessvars.state.userState == servicePoint.userState.SERVING &&
            (sessvars.state.visit.currentVisitService.outcomeExists == true))) {
            if(typeof selectOutcomeTable != 'undefined') {
                selectOutcomeTable.fnClearTable();
                var params = servicePoint.createParams();
                params.serviceId = sessvars.state.visit.currentVisitService.serviceId;
				var outcomes = spService.get("branches/" + sessvars.branchId + "/services/" + sessvars.state.visit.currentVisitService.serviceId + "/outcomes", true);
                selectOutcomeTable.fnAddData(outcomes);
            } else {
                var columns = [
/* Outcome name */  {"sClass": "firstColumn",
                     "mDataProp": "name"},
/* Outcome id */    {"bSearchable": false,
                     "bVisible": false,
                     "mDataProp": "code"}
                ];
                var url = "/rest/servicepoint/branches/" + sessvars.branchId + "/services/" + sessvars.state.visit.currentVisitService.serviceId + "/outcomes";
                var headerCallback = function(nHead, aasData, iStart, iEnd, aiDisplay) {
                    nHead.style.borderBottom = "1px solid #c0c0c0";
                    nHead.getElementsByTagName('th')[0].innerHTML = jQuery.i18n.prop('info.outcome.name');
                    $(nHead).find('th').attr('scope', 'col');
                };
                var rowCallback = function(nRow, aData, iDisplayIndex) {
                    /* Set onclick action */
                    nRow.onclick = outcomeClicked;
                    return nRow;
                };
                selectOutcomeTable = util.buildTable("selectOutcomeTable", url, rowCallback, columns, true, headerCallback, true);
                $('#selectOutcomeTable').prepend("<caption class='sr-only'>Select Outcomes</caption>");
            }
        }
    };

    this.selectOutcome = function(val, outcomeName) {
        if(val != -1 && servicePoint.hasValidSettings()) {
            var outcomeForServiceParams = servicePoint.createParams();
            outcomeForServiceParams.visitId = sessvars.state.visit.id;
            outcomeForServiceParams.visitServiceId = sessvars.state.visit.currentVisitService.id;
            outcomeForServiceParams.outcomeCode = val;
            sessvars.state = servicePoint.getState(spService.putCallback("branches/" + sessvars.branchId + "/visits/" + sessvars.state.visit.id + "/services/" + sessvars.state.visit.currentVisitService.id + "/outcome/" + val));
            sessvars.statusUpdated = new Date();
            if(sessvars.state.servicePointState == servicePoint.servicePointState.OPEN && sessvars.state.userState == servicePoint.userState.SERVING) {
                sessvars.visit = sessvars.state.visit;
            }
            util.showMessage(jQuery.i18n
					.prop('success.added.outcome') + " " + outcomeName);
            servicePoint.updateWorkstationStatus(false, true);
        }
    };

    var outcomeClicked = function() {
        if(servicePoint.hasValidSettings()) {
            var outcomeForServiceParams = servicePoint.createParams();
            outcomeForServiceParams.visitId = sessvars.state.visit.id;
            outcomeForServiceParams.visitServiceId = sessvars.state.visit.currentVisitService.id;
            outcomeForServiceParams.outcomeCode = selectOutcomeTable.fnGetData(this).code;
            sessvars.state = servicePoint.getState(spService.putCallback("branches/" + sessvars.branchId + "/visits/" + sessvars.state.visit.id + "/services/" + sessvars.state.visit.currentVisitService.id + "/outcome/" + selectOutcomeTable.fnGetData(this).code));
            sessvars.statusUpdated = new Date();
            if(sessvars.state.servicePointState == servicePoint.servicePointState.OPEN && sessvars.state.userState == servicePoint.userState.SERVING) {
                sessvars.visit = sessvars.state.visit;
            }
            servicePoint.updateWorkstationStatus();
        }
    };


    this.updateOutcomes = function() {
        var outcomeSelect = $("#selectOutcome");
        outcomeSelect.parent().removeClass("optionSelected");
        outcomeSelect.parent().hide();
        util.clearSelect(outcomeSelect);

        if(sessvars.state.userState == servicePoint.userState.SERVING && typeof sessvars.state.visit !== "undefined" &&
            sessvars.state.visit != null) {
            var params = servicePoint.createParams();
            params.serviceId = sessvars.state.visit.currentVisitService.serviceId;
            var outcomes = spService.get("branches/" + sessvars.branchId + "/services/" + sessvars.state.visit.currentVisitService.serviceId + "/outcomes", true);
            util.sortArrayCaseInsensitive(outcomes, "name");
            if(typeof outcomes !== 'undefined' && outcomes != null && outcomes.length > 0) {
                outcomeSelect.removeAttr('disabled');
                util.populateSelect(outcomes, outcomeSelect, "code");
                outcomeSelect.parent().show();
                if(null != sessvars.state.visit.currentVisitService.visitOutcome) {
                    outcomeSelect.val(sessvars.state.visit.currentVisitService.visitOutcome.outcomeCode);
                    outcomeSelect.parent().addClass("optionSelected");
                } else {
                    outcomeSelect.val("-1");
                }
            } else {
                outcomeSelect.val("-1");
                outcomeSelect.attr('disabled', '');
            }
        } else {
            outcomeSelect.val("-1");
            outcomeSelect.attr('disabled', '');
        }

        outcomeSelect.find("option:first").prop('disabled', true);
        outcomeSelect.trigger("chosen:updated");
    };

    this.updateOutcomesTable = function() {
        if(typeof outcomeTable != 'undefined') {
            outcomeTable.fnClearTable();
            if(null != sessvars.state.visit && null != sessvars.state.visit.currentVisitService.visitOutcome) {
                outcomeTable.fnAddData([sessvars.state.visit.currentVisitService.visitOutcome]);
            }
        } else {
            var columns = [
/* O. name */           {"sClass": "firstColumn",
                         "mDataProp": "outcomeName",
                         "sDefaultContent" : null},
/* O. id */             {"bSearchable": false,
                         "bVisible": false,
                         "mDataProp": "id",
                         "sDefaultContent" : null},
/* O. event. t*/        {"sClass": "lastColumn",
                         "mDataProp": "eventTime",
                         "sDefaultContent" : null},
/* O. orig. id */       {"bSearchable": false,
                         "bVisible": false,
                         "mDataProp": "outcomeId",
                         "sDefaultContent" : null}
            ];
            var headerCallback = function(nHead, aasData, iStart, iEnd, aiDisplay) {
                if(nHead.getElementsByTagName('th')[0].innerHTML.length == 0) {
                    nHead.style.borderBottom = "1px solid #c0c0c0";
                    nHead.getElementsByTagName('th')[0].innerHTML = jQuery.i18n.prop('info.outcome.name');
                    nHead.getElementsByTagName('th')[1].innerHTML = jQuery.i18n.prop('info.outcome.time');
                }
                $(nHead).find('th').attr('scope', 'col');
            };
            outcomeTable = $('#outcomes').dataTable( {
                "bDestroy": true,
                "aaSorting": [[1, 'desc']],
                "oLanguage": {
                    "sEmptyTable": translate.msg("info.no.outcomes"),
                    "sInfo": "",
                    "sInfoEmpty": "",
                    "sZeroRecords": ""
                },
                "bFilter": false,
                "bLengthChange": false,
                "fnHeaderCallback": headerCallback,
                "bProcessing": true,
                "bPaginate": false,
                "aoColumns": columns,
                "sScrollX": "95%",
                "sScrollY": "115px",
                "aaData": (sessvars.state.visit != null &&
                    sessvars.state.visit.currentVisitService != null &&
                    sessvars.state.visit.currentVisitService.visitOutcome != null ?
                    [sessvars.state.visit.currentVisitService.visitOutcome] : null)
            });
        }
        $('#outcomes').prepend("<caption class='sr-only'>Outcomes</caption>");
        var sorting = [[2, 'desc']];
        outcomeTable.fnSort(sorting);
    };

    this.clearTable = function() {
        util.clearTable(outcomeTable);
    };

    this.clearOutcome = function() {
        util.clearSelect($("#selectOutcome"));
        $("#selectOutcome").trigger("chosen:updated");
    };

};
