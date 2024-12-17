var queues = new function () {

    var myQueuesTable;
    var queuesTable;
    var ticketsTable;
    var workProfileTable;
    var SORTING = [[3, 'desc'], [2, 'desc'], [0, 'asc']];
    var queuePopovers = [];
    var notePopovers = [];
    var multiServicePopovers = [];
    var customersPopovers = [];
    var isNoteEnabled = false;
    var prResourceEnabled = false;
    var secResourceEnabled = false;
    var showPrResource = false;
    var showSecResource = false;
    var oneClickTransfer = false;
    var buttonTransferEnabled = false;
    var transferToQueueEnabled = false;

    //Divakar for playing sound
	 var has_focus=true;
	 window.onfocus = function() {
		has_focus = true;
		idleTime=0;
		notify.removeIENotification();
	}
	window.onblur = function() {
		has_focus = false;
		
	}

    /*
     * keepCalling should be set to true to have this function call itself every 30 secs.
     * sessvars.queueTimer can be used to stop the call
     */
    this.updateQueues = function (keepCalling) {
        queueRefeshTime = 5;
        var totalWaiting =0;
		//console.log(new Date());
		var noOfWaitingCustomer = $("#txtNoofWaiting").val();
		var maxWaitingTime = $("#maxWaitingTime").val();
		var alertEnable = $("input[name='alertEnable']:checked").val();
		var playSound = $("input[name=sound]:checked").val();
		var alertMessage = $("input[name=message]:checked").val();
        if (!servicePoint.getWorkstationOffline() && servicePoint.hasValidSettings()) {
            oneClickTransfer = sessvars.oneClickTransfer;
            buttonTransferEnabled = sessvars.buttonTransferEnabled;
            transferToQueueEnabled = sessvars.transferToQueueEnabled;
            if (typeof queuesTable !== 'undefined' && typeof myQueuesTable !== 'undefined') {
                // All Queues
                var existingData = queuesTable.fnGetData();
                queuesTable.fnClearTable();
                if (keepCalling !== 'lazyUpdate') {
                    var queuesData = spService.get("branches/" + sessvars.branchId + "/queues")
                } else {
                    var queuesData = existingData;
                    keepCalling = false;
                }
                if (queuesData && queuesData.length > 0) {
                    queuesTable.fnAddData(queuesData);

                    //Divakar for playing sound alert
                    if(alertEnable=='true')
                        {
                            
                        for(i= 0 ;i<queuesData.length;i++)
                        {
                            if(!has_focus)
                            {
                                if(queuesData[i].customersWaiting >0){
                                    totalWaiting+=queuesData[i].customersWaiting;
                                }
                                //if(noOfWaitingCustomer.indexOf(queuesData[i].customersWaiting) >= 0 || queuesData[i].waitingTime >= maxWaitingTime)
                                if(queuesData[i].waitingTime >= maxWaitingTime)
                                {
                                    
                                    if(playSound == 'true')
                                    {
                                        try{
                                            var bellAudioElement=document.getElementById('bellAudioElement');
                                            bellAudioElement.play();
                                        }catch(ex)
                                        {}
                                    }
                                    if(alertMessage=='true')
                                        notify.createNotification("Customers waiting in the queue", {body:""+queuesData[i].name+"", icon: "images/alertnew.ico"})
                                    
                                    //confirm("Customer waiting in the queue '"+queuesData[i].name+"'");
                                }
                            }
                        }
    
                        if(!has_focus)
                        {
                            if( totalWaiting >= Number(noOfWaitingCustomer)){
                                if(playSound == 'true')
                                {
                                    try{                                    
                                        var bellAudioElement=document.getElementById('bellAudioElement');
                                        bellAudioElement.play();
                                    }catch(ex)
                                    {}
                                }
                                if(alertMessage=='true')
                                    notify.createNotification("Customers waiting ", {body:""+totalWaiting+" Customers Waiting in the queue", icon: "images/alertnew.ico"})
                            }
                        }
                        
                        }
                }
                allQueuesInitFn(queuesData);

                // My Queues
                myQueuesTable.fnClearTable();
                var myQueuesData = myQueuesFilterFn(queuesData);
                if (myQueuesData && myQueuesData.length > 0) {
                    myQueuesTable.fnAddData(myQueuesData);
                }
                myQueuesInitFn(myQueuesData);

                // WCAG update queue changes
                var queueUpdatesLabelText = '';
                for (var index = 0; index < existingData.length; index++) {
                    var oldRow = existingData[index];
                    var newRow = null;

                    for (var x = 0; x < myQueuesData.length; x++) {
                        if (myQueuesData[x].name === oldRow.name) {
                            newRow = myQueuesData[x];
                            break;
                        }
                    }

                    if (newRow && oldRow.customersWaiting !== newRow.customersWaiting) {
                        queueUpdatesLabelText += newRow.name + ' have ' + newRow.customersWaiting + ' customers waiting. '
                    }
                }

                $('#qm-queue-updates').text(queueUpdatesLabelText);

            } else {
                var columns = [
                    /* Queue action */        {
                        "sClass": "qm-table__action-column qm-action-btn qm-table--hide-column",
                        "mRender": function (data, type, full) {
                            return "<a><i class= 'qm-action-btn__icon icon-transfer qm-action-btn__text' id='actionBtnTransfer'  title='' tabindex='0' aria-hidden='true'></i></a>"
                        },
                        "orderable": false,
                        "bSearchable": false,
                        "autoWidth": false
                    },
                    /* Queue name */        {
                        "sClass": "qm-table__queue-column",
                        "mDataProp": "name",
                        "sType": "qm-sort",
                        "sDefaultContent": null
                    },
                    /* Queue id */          {
                        "bSearchable": false,
                        "bVisible": false,
                        "mDataProp": "id",
                        "sDefaultContent": null
                    },
                    /* Queue serviceLevel */          {
                        "bSearchable": false,
                        "bVisible": false,
                        "mDataProp": "waitingTime",//was serviceLevel //service level is not available in old api
                        "sDefaultContent": null
                    },
                    /* Queue waiting num */ {
                        "sClass": "qm-table__middle-column qm-table__middle-column--right-align",
                        "mDataProp": "customersWaiting",
                        "sType": "qm-sort",
                        "sDefaultContent": null
                    },
                    /* Queue waiting time */{
                        "sClass": "qm-table__last-column",
                        "mDataProp": "waitingTime",
                        "sType": "qm-sort",
                        "sDefaultContent": null
                    }
                ];
                var headerCallback = function (nHead, aasData, iStart, iEnd, aiDisplay) {
                    nHead.getElementsByTagName('th')[0].innerHTML = jQuery.i18n.prop('info.queue.action');
                    nHead.getElementsByTagName('th')[1].innerHTML = jQuery.i18n.prop('info.queue.name');
                    nHead.getElementsByTagName('th')[2].innerHTML = jQuery.i18n.prop('info.queue.waiting');
                    nHead.getElementsByTagName('th')[3].innerHTML = jQuery.i18n.prop('info.queue.waiting.time');
                    $(nHead).find('th').attr('scope', 'col');
                    if (sessvars.state.userState == servicePoint.userState.SERVING && oneClickTransfer
                        && transferToQueueEnabled && buttonTransferEnabled) {
                        $('th:eq(0)', nHead).removeClass('qm-table--hide-column');
                    } else {
                        $('th:eq(0)', nHead).addClass('qm-table--hide-column');
                    }

                };
                var url = "/rest/servicepoint/branches/" + sessvars.branchId + "/queues";
                var rowCallbackAllQueues = function (nRow, aData, iDisplayIndex) {
                    $('td:eq(0)', nRow).click(function (e) {
                        e.preventDefault();
                        transfer._transferCurrentVisitToQueueClicked("SORTED", aData);
                    });
                    var queueName = $('td:eq(1)', nRow).text();
                    var toolTip = translate.msg('info.queue.action.tooltip', [queueName]);
                    $('td:eq(0)', nRow).find('#actionBtnTransfer').attr('title', toolTip);
                    if (sessvars.state.servicePointState == servicePoint.servicePointState.OPEN &&
                        !(servicePoint.isOutcomeOrDeliveredServiceNeeded() /*&& sessvars.forceMark && !hasMark()*/)) {

                        $('td:eq(1)', nRow).empty().append("<a href='' class=\"qm-table__queue-name\" " +
                            ">" + queueName + "</a>");

                        $('td:eq(1) > a.qm-table__queue-name', nRow).click(function (e) {
                            e.preventDefault();
                            queueClicked(queuesTable, nRow, aData);
                        });
                    } else {
                        $('td:eq(1)', nRow).addClass("qm-table__queue-name--disabled");
                    }


                    if (aData.customersWaiting === 0) {
                        $('td:eq(3)', nRow).html("--");
                    } else {
                        $('td:eq(3)', nRow).html(util.formatIntoMM(parseInt(aData.waitingTime)));
						//kisho service level is not available in old api
						//setSLAIcon(aData.serviceLevel, aData.waitingTime, nRow);
                    }
                    if (oneClickTransfer && transferToQueueEnabled && buttonTransferEnabled) {
                        if (sessvars.state.userState == servicePoint.userState.SERVING) {
                            $('td:eq(0)', nRow).removeClass('qm-table--hide-column');
                        } else {
                            $('td:eq(0)', nRow).addClass('qm-table--hide-column');
                        }
                        if (aData.queueType == 'APPOINTMENT_QUEUE') {
                            $('td:eq(0)', nRow).addClass('qm-table--hide-cell');
                        }
                    }
                    return nRow;
                };

                var rowCallbackMyQueues = function (nRow, aData, iDisplayIndex) {
                    $('td:eq(0)', nRow).click(function (e) {
                        e.preventDefault();
                        transfer._transferCurrentVisitToQueueClicked("SORTED", aData);
                    });
                    var queueName = $('td:eq(1)', nRow).text();
                    var toolTip = translate.msg('info.queue.action.tooltip', [queueName]);
                    $('td:eq(0)', nRow).find('#actionBtnTransfer').attr('title', toolTip);
                    if (sessvars.state.servicePointState == servicePoint.servicePointState.OPEN &&
                        !(servicePoint.isOutcomeOrDeliveredServiceNeeded() /*&& sessvars.forceMark && !hasMark()*/)) {

                        $('td:eq(1)', nRow).empty().append("<a href='' class=\"qm-table__queue-name\" " +
                            ">" + queueName + "</a>");

                        $('td:eq(1) > a.qm-table__queue-name', nRow).click(function (e) {
                            e.preventDefault();
                            queueClicked(myQueuesTable, nRow, aData);
                        });
                    } else {
                        $('td:eq(1)', nRow).addClass("qm-table__queue-name--disabled");
                    }

                    if (aData.customersWaiting === 0) {
                        $('td:eq(3)', nRow).html("--");
                    } else {
                        $('td:eq(3)', nRow).html(util.formatIntoMM(parseInt(aData.waitingTime)));
                        //kisho service level is not available in old api
						//setSLAIcon(aData.serviceLevel, aData.waitingTime, nRow);
                    }
                    if (oneClickTransfer && transferToQueueEnabled && buttonTransferEnabled) {
                        if (sessvars.state.userState == servicePoint.userState.SERVING) {
                            $('td:eq(0)', nRow).removeClass('qm-table--hide-column');
                        } else {
                            $('td:eq(0)', nRow).addClass('qm-table--hide-column');
                        }
                        if (aData.queueType == 'APPOINTMENT_QUEUE') {
                            $('td:eq(0)', nRow).addClass('qm-table--hide-cell');
                        }
                    }


                    return nRow;
                };

                queuesTable = util.buildTableJson({
                    "tableId": "queues", "url": url, "rowCallback": rowCallbackAllQueues,
                    "columns": columns, "filter": false, "headerCallback": headerCallback, "emptyTableLabel": "info.queues.none", "scrollYHeight": "100%", "initFn": allQueuesInitFn
                });
                queuesTable.fnSort(SORTING);
                queuesTable.fnAdjustColumnSizing();
                $('#queues').prepend("<caption class='sr-only'>Other Queues</caption>");

                myQueuesTable = util.buildTableJson({
                    "tableId": "myQueuesTable", "url": url, "rowCallback": rowCallbackMyQueues,
                    "columns": columns, "filter": false, "headerCallback": headerCallback, "emptyTableLabel": "info.queues.none", "scrollYHeight": "100%", "filterData": myQueuesFilterFn, "initFn": myQueuesInitFn
                });
                myQueuesTable.fnSort(SORTING);
                myQueuesTable.fnAdjustColumnSizing();
                $('#myQueuesTable').prepend("<caption class='sr-only'>My Queues</caption>");
            }

            tableScrollController.initTableScroll("queues");
            tableScrollController.initTableScroll("myQueuesTable");

            // Sadly clearing and adding data to the queue "data table" resets the position of our search result
            customer.positionCustomerResult();
        }

        if (keepCalling) {
            if (sessvars.queueTimer !== undefined) {
                clearTimeout(sessvars.queueTimer);
                sessvars.queueTimer = undefined;
            }
            sessvars.queueTimer = setTimeout(function () {
                queues.updateQueues(true);
            }, queueRefreshTime * 1000);
        }
    };

    var setSLAIcon = function (serviceLevel, waitingTime, nRow) {
        if (serviceLevel && serviceLevel !== 0) {
            var waitingTimeInMinutes = 0
            if (waitingTime && waitingTime !== 0) {
                waitingTimeInMinutes = waitingTime / 60;

                if (waitingTimeInMinutes < serviceLevel * 0.75) {
                    $(nRow).addClass('qm-sla qm-sla--normal');
                } else if (waitingTimeInMinutes >= serviceLevel * 0.75
                    && waitingTimeInMinutes <= serviceLevel * 0.99) {
                    $(nRow).addClass('qm-sla qm-sla--warning');
                } else {
                    $(nRow).addClass('qm-sla qm-sla--danger');
                }
            }
        }
    }

    var allQueuesInitFn = function (queues) {
        var waitingCustomers = getNumberOfWaitingCustomers(queues);
        setNumberOfWaitingCustomers('#allQueuesTab .qm-tab-information__text', waitingCustomers);
    };

    var myQueuesInitFn = function (queues) {
        var waitingCustomers = getNumberOfWaitingCustomers(queues);
        setNumberOfWaitingCustomers('#myQueuesTab .qm-tab-information__text', waitingCustomers);
        //update the workprofile tab as well
        setNumberOfWaitingCustomers('#workProfileVisitsTab .qm-tab-information__text', waitingCustomers);
    };

    var workProfileQueueInitFn = function (visits) {
        var waitingCustomers = visits ? visits.length : 0;
        setNumberOfWaitingCustomers('#workProfileVisitsTab .qm-tab-information__text', waitingCustomers);
        //update the myqueues tab as well
        setNumberOfWaitingCustomers('#myQueuesTab .qm-tab-information__text', waitingCustomers);
        var table = $('#workProfileVisitsTable').DataTable();
        table.on('preDraw', function () {
            queues.runClearQueuePopovers();
        });
    }

    var queueDetailInitFn = function (queuesObj) {
        if (queuesObj !== null && queuesObj !== undefined) {
            var waitingCustomers = queuesObj.length;
            setNumberOfWaitingCustomers('#queueDetailView .qm-tab-information__text', waitingCustomers);
        }
        var table = $('#tickets').DataTable();
        table.on('preDraw', function () {
            queues.runClearQueuePopovers();
        });
    };

    var getNumberOfWaitingCustomers = function (queues) {
        return _.reduce(queues, function (sum, queue) {
            return sum + queue.customersWaiting;
        }, 0);
    };

    var setNumberOfWaitingCustomers = function (selector, numberOfWaitingCustomers) {
        $(selector).text(numberOfWaitingCustomers);
    };

    var myQueuesFilterFn = function (queues) {
        var myQueueIds = window.myQueueIds || [];
        return _.filter(queues, function (queue) {
            return _.includes(window.myQueueIds, queue.id);
        });
    };

    var queueClicked = function (queueTableContainingRow, rowClicked, rowAData) {
        if (servicePoint.hasValidSettings() && sessvars.state.servicePointState == servicePoint.servicePointState.OPEN &&
            !(servicePoint.isOutcomeOrDeliveredServiceNeeded() /*&& sessvars.forceMark && !hasMark()*/)) {
            sessvars.clickedQueueId = queueTableContainingRow.fnGetData(rowClicked).id; //ql queue id

            queueViewController.navigateToDetail();
            isNoteEnabled = sessvars && sessvars.isNotesEnabled;
            prResourceEnabled = sessvars && sessvars.prResourceEnabled;
            secResourceEnabled = sessvars && sessvars.secResourceEnabled;
            oneClickTransfer = sessvars && sessvars.oneClickTransfer;
            buttonTransferEnabled = sessvars && sessvars.buttonTransferEnabled;
            transferToQueueEnabled = sessvars && sessvars.transferToQueueEnabled;
            if (typeof ticketsTable !== 'undefined') {
                //empty the tickets table and populate with new data from server if table is not created
                ticketsTable.fnClearTable();
                ticketsTable.fnSort([]);
                var params = {};
                params.branchId = sessvars.branchId;
                params.queueId = sessvars.clickedQueueId;
                var tickets = spService.get("branches/" + params.branchId + "/queues/" + params.queueId + "/visits/full");

                // util.sortArrayCaseInsensitive(tickets, "ticketId");
                if (tickets && tickets.length > 0) {
                    ticketsTable.fnAddData(tickets);
                }
                queueDetailInitFn(tickets);
            } else {
                var columns = [
                    /* Id */                {
                        "bSearchable": false,
                        "bVisible": false,
                        "sType": "qm-sort",
                        "mDataProp": "id"
                    },

                    /* Ticket id */         {
                        "sClass": "qm-table__first-column",
                        "sType": "qm-sort",
                        "sWidth": "",
                        "mDataProp": "ticketId"
                    },
                    /* notes */
                    {
                        "sClass": "qm-table__notes-column qm-table--hide-column",
                        "sType": "string",
                        "aDataSort": [1, 2],
                        "sWidth": "",
                        "sDefaultContent": "",
                        "mData": "parameterMap.custom1",
                        "mRender": function (data, type, full) {
                            if (type == 'sort') {
                                queues.runClearQueuePopovers();
                            }
                            if (data) {
                                if ((data).trim().length) {
                                    return "<i tabindex='0' class='icon-message'></i>"
                                } else {
                                    return null;
                                }
                            } else {
                                return null;
                            }
                        }
                    },
                    /* Customer name */
                    {
                        "sClass": "qm-table__middle-column",
                        "sType": "qm-sort",
                        "mData": null,
                        "sWidth": "",
                        "mDataProp": "parameterMap.customers",
                        "sDefaultContent": ""
                    },
                    /* HC Number */
                    {
                        "sClass": "qm-table__middle-column",
                        "sType": "qm-sort",
                        "mData": null,
                        "sWidth": "",
                        "mDataProp": "parameterMap.customers",
                        "sDefaultContent": ""
                    },
                    /* Clinic */
                    {
                        "sClass": "qm-table__middle-column",
                        "sType": "qm-sort",
                        "mData": null,
                        "sWidth": "",
                        "mDataProp": "parameterMap.customers",
                        "sDefaultContent": ""
                    },
                    /* Appointment Time */
                    {
                        "sClass": "qm-table__middle-column",
                        "sType": "qm-sort",
                        "mData": null,
                        "sWidth": "",
                        "mDataProp": "parameterMap.customers",
                        "sDefaultContent": ""
                    },
                    /* Actions */      {
                        "sClass": "qm-table__middle-column",
                        "mDataProp": "currentVisitService.serviceExternalName",
                        "sWidth": ""
                    },
                    /* Primary resource */
                    {
                        "sClass": "qm-table__middle-column qm-table--hide-column",
                        "sType": "qm-sort",
                        "mData": null,
                        "sWidth": "",
                        "mDataProp": "currentVisitService.primaryResource.displayName",
                        "sDefaultContent": ""
                    },
                    /* Secondary resource */
                    {
                        "sClass": "qm-table__middle-column qm-table--hide-column",
                        "sType": "qm-sort",
                        "mData": null,
                        "sWidth": "",
                        "mDataProp": "currentVisitService.secondaryResources[0].displayName",
                        "sDefaultContent": ""
                    },
                        /* Appointment time */      {
                        "sClass": "qm-table__app-column",
                        // "bVisible": false,
                        "sType": "qm-sort",
                        "sWidth": "",
                        "mDataProp": "appointmentTime"
                    },
                    /* Waiting time */      {
                        "sClass": "qm-table__last-column",
                        "sType": "qm-sort",
                        "sWidth": "",
                        "mDataProp": "waitingTime"
                    }

                ];
                var headerCallback = function (nHead, aasData, iStart, iEnd, aiDisplay) {
                    nHead.getElementsByTagName('th')[0].innerHTML = jQuery.i18n.prop('info.queue.ticket');
                    nHead.getElementsByTagName('th')[1].innerHTML = jQuery.i18n.prop('info.queue.notes');
                    nHead.getElementsByTagName('th')[2].innerHTML = jQuery.i18n.prop('info.queue.customer.name');
                    nHead.getElementsByTagName('th')[3].innerHTML = jQuery.i18n.prop('info.queue.customer.hcNumber');
                    nHead.getElementsByTagName('th')[4].innerHTML = jQuery.i18n.prop('info.queue.customer.clinic');
                    nHead.getElementsByTagName('th')[5].innerHTML = jQuery.i18n.prop('info.queue.customer.nationality');
                    nHead.getElementsByTagName('th')[6].innerHTML = jQuery.i18n.prop('info.service.name');
                    nHead.getElementsByTagName('th')[7].innerHTML = '';
                    nHead.getElementsByTagName('th')[8].innerHTML = '';
                    nHead.getElementsByTagName('th')[9].innerHTML = jQuery.i18n.prop('info.queue.appointment.time');
                    nHead.getElementsByTagName('th')[10].innerHTML = jQuery.i18n.prop('info.queue.waiting.time');
                    $(nHead).find('th').attr('scope', 'col');

                    if (isNoteEnabled) {
                        $('th:eq(1)', nHead).removeClass('qm-table--hide-column');
                    } else {
                        $('th:eq(1)', nHead).addClass('qm-table--hide-column');
                    }
                    if (prResourceEnabled && aasData.length && aasData[0].currentVisitService && aasData[0].currentVisitService.primaryResource) {
                        var data = aasData[0].currentVisitService.primaryResource;
                        $('th:eq(7)', nHead).removeClass('qm-table--hide-column');
                        nHead.getElementsByTagName('th')[7].innerHTML = data.category || '';

                    } else {
                        $('th:eq(7)', nHead).addClass('qm-table--hide-column');
                    }

                    if (secResourceEnabled && aasData.length && aasData[0].currentVisitService && aasData[0].currentVisitService.secondaryResources && aasData[0].currentVisitService.secondaryResources[0]) {
                        var data = aasData[0].currentVisitService.secondaryResources[0];
                        $('th:eq(8)', nHead).removeClass('qm-table--hide-column');
                        nHead.getElementsByTagName('th')[8].innerHTML = data.category || '';

                    } else {
                        $('th:eq(8)', nHead).addClass('qm-table--hide-column');
                    }
                };
                var url = "/rest/servicepoint/branches/" + sessvars.branchId + "/queues/" + sessvars.clickedQueueId + "/visits/full";
                var isRTL = sessvars.currentUser.direction == "rtl";
                var rowCallback = function (nRow, aData, iDisplayIndex) {
                    var noteTxt = '';
                    // var peopleServices;
                    if (aData.parameterMap['custom1']) {
                        noteTxt = (aData.parameterMap['custom1']).trim();
                    }
                    // if (aData.parameterMap['peopleServices']) {
                    //     peopleServices = JSON.parse(aData.parameterMap['peopleServices']);
                    // }

                    if ($('td:eq(0)', nRow).find('a').length == 0) {
                        if (iDisplayIndex === 0) {
                            clearQueuePopovers();
                        }
                    }
                    //format ticket number
                    var ticketNumSpan = $("<a href='#' class='qm-table__ticket-code'>" + aData.ticketId + "</a>")
                    $('td:eq(0)', nRow).html(ticketNumSpan);
debugger;
					if(aData.parameterMap['custom1']){				
                    $('td:eq(2)', nRow).html(aData.parameterMap.custom1);	
					}
					else{
					$('td:eq(2)', nRow).html("");
					}
					if(aData.parameterMap['custom2']){		
                    $('td:eq(3)', nRow).html(aData.parameterMap.custom2);
					}
					else{
					$('td:eq(3)', nRow).html("");
					}
					if(aData.parameterMap['custom4']){
                    $('td:eq(4)', nRow).html(aData.parameterMap.custom4);
					}
					else{
					$('td:eq(4)', nRow).html("");
					}
					if(aData.parameterMap['nationality']){
                    $('td:eq(5)', nRow).html(aData.parameterMap.nationality);
					}
					else{
					$('td:eq(5)', nRow).html("");
					}
					if(aData.parameterMap['custom5']){
                    $('td:eq(9)', nRow).html(util.formatHHMMSSIntoHHMMA(aData.parameterMap.custom5));
					}
					else{
					$('td:eq(9)', nRow).html("");
					}
//kisho service level is not available in old api
						//setSLAIcon(rowAData.serviceLevel, aData.waitingTime, nRow);

                    if (aData.unservedVisitServices && aData.unservedVisitServices.length > 0) {
                        var servicesElm = $("<div class='qm-table__multi_service' tabindex='0'> <span>"
                            + aData.currentVisitService.serviceExternalName + " </span> <i class ='qm-table__multi_service_icon'></i></div>");
                        $('i', servicesElm).addClass(isRTL ? 'icon-multiservice-rtl' : 'icon-multiservice');
                        $('td:eq(6)', nRow).html(servicesElm);
                        var popoverTemplate = document.querySelector('.qm-popover--multiservices').outerHTML.trim();

                        var popover = new Tooltip($('td:eq(6) > div', nRow), {
                            container: document.getElementById('renderedPopovers'),
                            boundariesElement: document.querySelector('.qm-main'),
                            trigger: 'hover focus',
                            delay: 400,
                            title: ' ',
                            placement: this.isRTL ? 'bottom-end' : 'bottom-start',
                            template: popoverTemplate,
                            offset: '0, 10',
                            popperOptions: {
                                onCreate: function (data) {
                                    var popover = data.instance.popper;
                                    var text = popover.querySelector('.qm-popover-multi-services-text');
                                    var textVal = aData.unservedVisitServices.map(function (service) {
                                        return service.serviceExternalName;
                                    }).join(', ');
                                    $(text).text(aData.currentVisitService.serviceExternalName.trim()+", "+ textVal);

                                }
                            }
                        });
                        multiServicePopovers.push(popover);

                    }

                    if (!buttonCallFromQueueEnabled && !buttonTransferFromQueueEnabled && !buttonRemoveFromQueueEnabled) {
                        ticketNumSpan.addClass('qm-table__ticket-code--disabled');
                    } else {
                        // Templates
                        var popoverTemplate = document.querySelector('.qm-popover--queue').outerHTML.trim();

                        // Popover options
                        var options = {
                            template: popoverTemplate,
                            popTarget: ticketNumSpan.get(0),
                            ticketId: aData.ticketId,
                            visitId: aData.id,
                            phoneNumber: aData.parameterMap['primaryCustomerPhoneNumber'] ? aData.parameterMap['primaryCustomerPhoneNumber'] : (aData.parameterMap['phoneNumber'] ? aData.parameterMap['phoneNumber'] : ''),
                        };

                        // Popover options and initialization
                        if (buttonTransferFromQueueEnabled == true) {
                            options.showTransferBtn = true;
                        } else {
                            options.showTransferBtn = false;
                        }
                        if (buttonSmsTicketEnabled == true) {
                            options.showSmsBtn = true;
                        } else {
                            options.showSmsBtn = false;
                        }
                        if (buttonRemoveFromQueueEnabled == true) {
                            options.showDeleteBtn = true;
                        } else {
                            options.showDeleteBtn = false;
                        }
                        if (buttonCallFromQueueEnabled == true) {
                            options.showCallBtn = true;
                        } else {
                            options.showCallBtn = false;
                        }

                        if (servicePoint.isOutcomeOrDeliveredServiceNeeded()) {
                            options.disableCall = true;
                            options.disableTransfer = true;
                            options.disableDelete = true;
                        }

                        var popover = new window.$Qmatic.components.popover.QueuePopoverComponent(options);
                        popover.init();

                        queuePopovers.push(popover);
                    }

                    var formattedTime = util.formatIntoMM(parseInt(aData.waitingTime));


                    if (isNoteEnabled) {
                        $('td:eq(1)', nRow).removeClass('qm-table--hide-column');
                    } else {
                        $('td:eq(1)', nRow).addClass('qm-table--hide-column');
                    }
                    if (iDisplayIndex == 0 && aData && aData.currentVisitService) {
                        aData.currentVisitService.primaryResource ? showPrResource = true : showPrResource = false;
                        aData.currentVisitService.secondaryResources && aData.currentVisitService.secondaryResources[0] ? showSecResource = true : showSecResource = false;
                    }
                    if (prResourceEnabled && showPrResource) {
                        $('td:eq(7)', nRow).removeClass('qm-table--hide-column');
                    } else {
                        $('td:eq(7)', nRow).addClass('qm-table--hide-column');
                    }
                    if (secResourceEnabled && showSecResource) {
                        $('td:eq(8)', nRow).removeClass('qm-table--hide-column');
                    } else {
                        $('td:eq(8)', nRow).addClass('qm-table--hide-column');
                    }
                    if (isNoteEnabled && noteTxt) {
                        $('td:eq(1)', nRow).addClass('qm-table__notes-column');
                        var popoverTemplate = document.querySelector('.qm-popover--notes').outerHTML.trim();

                        var popover = new Tooltip($('td:eq(1) > i', nRow), {
                            container: document.getElementById('renderedPopovers'),
                            boundariesElement: document.querySelector('.qm-main'),
                            trigger: 'hover focus',
                            delay: 400,
                            title: ' ',
                            placement: this.isRTL ? 'bottom-end' : 'bottom-start',
                            template: popoverTemplate,
                            offset: '0, 10',
                            popperOptions: {
                                onCreate: function (data) {
                                    var popover = data.instance.popper;
                                    var note = popover.querySelector('.qm-popover-notes-text');
                                    $(note).text(((aData.parameterMap['custom1'])));

                                }
                            }
                        });
                        notePopovers.push(popover);
                    }
                    if (aData.parameterMap && aData.parameterMap['customers'] !== undefined) {
                        if (aData.parameterMap['numberOfCustomers'] && aData.parameterMap['numberOfCustomers'] > 1) {
                            var customersElm = $("<div class='qm-table__customers' tabindex='0'> <span>" + aData.parameterMap.customers +
                                " </span> <i class ='qm-table__customers_icon'></i></div>");
                            $('i', customersElm).addClass(isRTL ? 'icon-multicustomer-rtl' : 'icon-multicustomer');
                            $('td:eq(2)', nRow).html(customersElm);
                            var popoverTemplate = document.querySelector('.qm-popover--customers').outerHTML.trim();

                            var popover = new Tooltip($('td:eq(2) > div', nRow), {
                                container: document.getElementById('renderedPopovers'),
                                boundariesElement: document.querySelector('.qm-main'),
                                trigger: 'hover focus',
                                delay: 400,
                                title: ' ',
                                placement: this.isRTL ? 'bottom-end' : 'bottom-start',
                                template: popoverTemplate,
                                offset: '0, 10',
                                popperOptions: {
                                    onCreate: function (data) {
                                        var popover = data.instance.popper;
                                        var text = popover.querySelector('.qm-popover-customers-text');
                                        $(text).text(translate.msg("info.queue.total.customers", [aData.parameterMap['numberOfCustomers']]));

                                    }
                                }
                            });
                            multiServicePopovers.push(popover);
                        } else {
                            $('td:eq(2)', nRow).html(aData.parameterMap['customers']);
                        }

                    }
                    // if (aData.appointmentTime) {
                    //     $('td:eq(9)', nRow).html(util.formatHHMMSSIntoHHMMA(aData.appointmentTime.split("T")[1]));
                    // }

                    $('td:eq(10)', nRow).html(formattedTime);
                    return nRow;
                };

                //create new table since not defined
                ticketsTable = util.buildTableJson({
                    "tableId": "tickets", "url": url, "rowCallback": rowCallback,
                    "columns": columns, "filter": false, "headerCallback": headerCallback, "scrollYHeight": "100%",
                    "emptyTableLabel": "info.queue.tickets.empty", "initFn": queueDetailInitFn
                });
                // ticketsTable.fnSort([[1, 'asc']]);
                $('#tickets').prepend("<caption class='sr-only'>Queue details</caption>");


                tableScrollController.initTableScroll("tickets");
            }

            var $ticketListHeader = $("#ticketListHeader");
            $ticketListHeader.empty();
            $ticketListHeader.html(queueTableContainingRow.fnGetData(rowClicked).name);
            $ticketListHeader.attr('title', queueTableContainingRow.fnGetData(rowClicked).name);

            adjustHeightOfTableScrollWrapper('#queueDetailView');
        }
    };

    this.loadWorkProfileVisits = function (keepCalling) {
        var _self = this;
        if (servicePoint.hasValidSettings() && sessvars.state.servicePointState == servicePoint.servicePointState.OPEN
        /*!(servicePoint.isOutcomeOrDeliveredServiceNeeded() && sessvars.forceMark && !hasMark()*/) {
            isNoteEnabled = sessvars && sessvars.isNotesEnabled;

            // queueViewController.navigateToWorkProfileVisits();

            if (typeof workProfileTable !== 'undefined') {
                //empty the tickets table and populate with new data from server if table is not created
                workProfileTable.fnClearTable();
                workProfileTable.fnSort([]);
                var params = {};
                params.branchId = sessvars.branchId;
                //var visits = spService.get("branches/" + params.branchId + "/workProfiles/" + sessvars.workProfileId + "/visits/full");
                var visits = spService.get("branches/" + params.branchId + "/workProfiles/" + sessvars.workProfileId + "/visits");

                if (visits && visits.length > 0) {
                    workProfileTable.fnAddData(visits);
                }
                workProfileQueueInitFn(visits);
            } else {
                var columns = [
              /* Id */                {
                        "bSearchable": false,
                        "bVisible": false,
                        "sType": "qm-sort",
                        "mDataProp": "id"
                    },

              /* Ticket id */         {
                        "sClass": "qm-table__first-column",
                        "sType": "qm-sort",
                        "sWidth": "",
                        "mDataProp": "ticketId"
                    },
                    /* notes */
                    {
                        "sClass": "qm-table__middle-column qm-table--hide-note-column",
                        "sType": "string",
                        "aDataSort": [1, 2],
                        "sWidth": "",
                        "sDefaultContent": "",
                        "mData": "parameterMap.custom1",
                        "mRender": function (data, type, full) {
                            if (type == 'sort') {
                                queues.runClearQueuePopovers();
                            }
                            if (data) {
                                if ((data).trim().length) {
                                    return "<i tabindex='0' class='icon-message'></i>"
                                } else {
                                    return null;
                                }
                            } else {
                                return null;
                            }
                        }
                    },
                    /* Customer name */
                    {
                        "sClass": "qm-table__middle-column",
                        "sType": "qm-sort",
                        "mData": null,
                        "sWidth": "",
                        "mDataProp": "parameterMap.customers",
                        "sDefaultContent": ""
                    },
                    /* Service name */
                    {
                        "sClass": "qm-table__middle-column",
                        "mDataProp": "currentVisitService.serviceExternalName",
                        "sWidth": ""
                    },
                  /* Appointment time */      {
                        "sClass": "qm-table__app-column",
                        "sType": "qm-sort",
                        "sWidth": "",
                        "mDataProp": "appointmentTime"
                    },
              /* Waiting time */      {
                        "sClass": "qm-table__last-column",
                        "sType": "qm-sort",
                        "sWidth": "",
                        "mDataProp": "waitingTime"
                    }

                ];
                var headerCallback = function (nHead, aasData, iStart, iEnd, aiDisplay) {
                    nHead.getElementsByTagName('th')[0].innerHTML = jQuery.i18n.prop('info.queue.ticket');
                    nHead.getElementsByTagName('th')[1].innerHTML = jQuery.i18n.prop('info.queue.notes');
                    nHead.getElementsByTagName('th')[2].innerHTML = jQuery.i18n.prop('info.queue.customer.name');
                    nHead.getElementsByTagName('th')[3].innerHTML = jQuery.i18n.prop('info.service.name');
                    nHead.getElementsByTagName('th')[4].innerHTML = jQuery.i18n.prop('info.queue.appointment.time');
                    nHead.getElementsByTagName('th')[5].innerHTML = jQuery.i18n.prop('info.queue.waiting.time');
                    $(nHead).find('th').attr('scope', 'col');
                    if (isNoteEnabled) {
                        $('th:eq(1)', nHead).removeClass('qm-table--hide-note-column');
                    } else {
                        $('th:eq(1)', nHead).addClass('qm-table--hide-note-column');
                    }
                };

                // var url = "/rest/servicepoint/branches/" + sessvars.branchId + "/workProfiles/" + sessvars.workProfileId + "/visits/full";
                var url = "/rest/servicepoint/branches/" + sessvars.branchId + "/workProfiles/" + sessvars.workProfileId + "/visits";
                var rowCallback = function (nRow, aData, iDisplayIndex) {
					var url2="branches/" + sessvars.branchId + "/visits/"+aData.visitId;
					var aData2=spService.get(url2);
                    var noteTxt = '';
                    if (aData2.parameterMap['custom1']) {
                        var noteTxt = (aData2.parameterMap['custom1']).trim();
                    }

                    if ($('td:eq(0)', nRow).find('a').length == 0) {
                        if (iDisplayIndex === 0) {
                            clearQueuePopovers();
                        }
                        //format ticket number
                        var ticketNumSpan = $("<a href='#' class='qm-table__ticket-code'>" + aData.ticketId + "</a>")
                        $('td:eq(0)', nRow).html(ticketNumSpan);
//kisho service level is not available in old api
						//setSLAIcon(5, aData.waitingTime, nRow);

                        if (!buttonCallFromQueueEnabled && !buttonTransferFromQueueEnabled && !buttonRemoveFromQueueEnabled) {
                            ticketNumSpan.addClass('qm-table__ticket-code--disabled');
                        } else {
                            // Templates
                            var popoverTemplate = document.querySelector('.qm-popover--queue').outerHTML.trim();
                            // Popover options
                            var options = {
                                template: popoverTemplate,
                                popTarget: ticketNumSpan.get(0),
                                ticketId: aData.ticketId,
                                visitId: aData2.id,
                                phoneNumber: aData2.parameterMap['primaryCustomerPhoneNumber'] ? aData2.parameterMap['primaryCustomerPhoneNumber'] : (aData2.parameterMap['phoneNumber'] ? aData2.parameterMap['phoneNumber'] : ''),
                                isWorkProfileQueue: true
                            };

                            // Popover options and initialization
                            if (buttonTransferFromQueueEnabled == true) {
                                options.showTransferBtn = true;
                            } else {
                                options.showTransferBtn = false;
                            }
                            if (buttonSmsTicketEnabled == true) {
                                options.showSmsBtn = true;
                            } else {
                                options.showSmsBtn = false;
                            }
                            if (buttonRemoveFromQueueEnabled == true) {
                                options.showDeleteBtn = true;
                            } else {
                                options.showDeleteBtn = false;
                            }
                            if (buttonCallFromQueueEnabled == true) {
                                options.showCallBtn = true;
                            } else {
                                options.showCallBtn = false;
                            }

                            if (servicePoint.isOutcomeOrDeliveredServiceNeeded()) {
                                options.disableCall = true;
                                options.disableTransfer = true;
                                options.disableDelete = true;
                            }

                            var popover = new window.$Qmatic.components.popover.QueuePopoverComponent(options);
                            popover.init();

                            queuePopovers.push(popover);
                        }

                        var formattedTime = util.formatIntoMM(parseInt(aData.waitingTime));
                    }

                    if (isNoteEnabled) {
                        $('td:eq(1)', nRow).removeClass('qm-table--hide-note-column');
                    } else {
                        $('td:eq(1)', nRow).addClass('qm-table--hide-note-column');
                    }
                    if (isNoteEnabled && noteTxt) {
                        $('td:eq(1)', nRow).addClass('qm-table__notes-column');
                        var popoverTemplate = document.querySelector('.qm-popover--notes').outerHTML.trim();

                        var popover = new Tooltip($('td:eq(1) > i', nRow), {
                            container: document.getElementById('renderedPopovers'),
                            boundariesElement: document.querySelector('.qm-main'),
                            trigger: 'hover focus',
                            delay: 400,
                            title: ' ',
                            placement: this.isRTL ? 'bottom-end' : 'bottom-start',
                            template: popoverTemplate,
                            offset: '0, 10',
                            popperOptions: {
                                onCreate: function (data) {
                                    var popover = data.instance.popper;
                                    var note = popover.querySelector('.qm-popover-notes-text');
                                    $(note).text(((aData2.parameterMap['custom1'])));

                                }
                            }
                        });
                        notePopovers.push(popover);
                    }

                    if (aData2.parameterMap && aData2.parameterMap['customers'] !== undefined) {
                        $('td:eq(2)', nRow).html(aData2.parameterMap['customers']);
                    }
                    if (aData.appointmentTime) {
                        $('td:eq(4)', nRow).html(util.formatHHMMSSIntoHHMMA(aData.appointmentTime.split("T")[1]));
                    }

                    $('td:eq(5)', nRow).html(formattedTime);
                    return nRow;
                };

                //create new table since not defined
                workProfileTable = util.buildTableJson({
                    "tableId": "workProfileVisitsTable", "url": url, "rowCallback": rowCallback,
                    "columns": columns, "filter": false, "headerCallback": headerCallback, "scrollYHeight": "100%",
                    "emptyTableLabel": "info.queue.tickets.empty", "initFn": workProfileQueueInitFn
                });

                tableScrollController.initTableScroll("workProfileVisitsTable");
            }

            adjustHeightOfTableScrollWrapper('#workProfileVisitsTable_wrapper');
        }

        if (keepCalling) {
            if (sessvars.workProfileTimer !== undefined) {
                clearTimeout(sessvars.workProfileTimer);
                sessvars.workProfileTimer = undefined;
            }
            sessvars.workProfileTimer = setTimeout(function () {
                queues.loadWorkProfileVisits(true);
            }, queueRefreshTime * 1000);
        }
    };

    var adjustHeightOfTableScrollWrapper = function (id) {
        var $wrapper = $(id),
            $scrollBody = $wrapper.find('.dataTables_scrollBody');
        scrollHeaderHeight = $wrapper.find('.dataTables_scrollHead').height();
        $scrollBody.css('height', 'calc(100% - ' + scrollHeaderHeight + 'px');
    }

    var clearQueuePopovers = function () {
        if (queuePopovers && queuePopovers.length > 0) {
            for (var i = 0; i < queuePopovers.length; i++) {
                queuePopovers[i].disposeInstance();
            }
        }
        queuePopovers = [];
    };

    var clearNotePopovers = function () {
        if (notePopovers && notePopovers.length > 0) {
            for (var i = 0; i < notePopovers.length; i++) {
                notePopovers[i].dispose();
            }
        }
        notePopovers = [];
    };

    var clearMultiServicePopovers = function () {
        if (multiServicePopovers && multiServicePopovers.length > 0) {
            for (var i = 0; i < multiServicePopovers.length; i++) {
                multiServicePopovers[i].dispose();
            }
        }
        multiServicePopovers = [];
    };

    var clearCustomersPopovers = function () {
        if (customersPopovers && customersPopovers.length > 0) {
            for (var i = 0; i < customersPopovers.length; i++) {
                customersPopovers[i].dispose();
            }
        }
        customersPopovers = [];
    };

    this.runClearQueuePopovers = function () {
        clearQueuePopovers();
        clearNotePopovers();
        clearMultiServicePopovers();
        clearCustomersPopovers();
    };

    this.emptyQueues = function () {
        queuesTable.fnClearTable();
        myQueuesTable.fnClearTable();
    };

    this.removeTicket = function (visitId, ticketId) {
        if (servicePoint.hasValidSettings()) {
            var params = servicePoint.createParams();
            params.queueId = sessvars.clickedQueueId;
            params.visitId = visitId;
            var deletePromise = spService.delPromised("branches/" + params.branchId + "/servicePoints/" + params.servicePointId + "/visits/" + params.visitId);
            queues.updateQueues(false);
            deletePromise.done(function () {
                util.showMessage(translate.msg("info.successful.delete", [ticketId]), false);
            });
        }
    };

    this.callFromQueue = function (visitId) {
        if (servicePoint.hasValidSettings()) {
            var params = servicePoint.createParams();
            params.queueId = sessvars.clickedQueueId;
            params.visitId = visitId;
            userPoolUpdateNeeded = false;
            spPoolUpdateNeeded = false;
            sessvars.state = servicePoint.getState(spService.post("branches/" + params.branchId + "/servicePoints/" + params.servicePointId + "/visits/" + params.visitId));
            //queues.updateQueues(false);
            if (sessvars.state.visitState == "CALL_NEXT_TO_QUICK") {
                util.showError(jQuery.i18n.prop("info.call.next.to.quick"));
            } else {
                sessvars.statusUpdated = new Date();
                servicePoint.updateWorkstationStatus();
                sessvars.currentCustomer = null;
            }
        }
    };
};