var userPool = new function () {

    this.renderUserPool = function () {

        if (moduleUserPoolEnabled) {
            var url = "branches/" + sessvars.branchId + "/users/"
                + sessvars.currentUser.id + "/pool/visits";


            // Get DOM elements
            var userPool = $('#userPoolModule'),
                userPoolList = userPool.find('.qm-pool__list'),
                userPoolToggle = userPool.find('.qm-pool__toggle-btn');

            // Empty list
            userPoolList.empty();

            // Templates
            var userPoolItemTemplate = $('<li class="qm-pool__list-item"> <div class="qm-pool-item"> <a href="#" class="qm-pool-item__content qm-pool-item__content--ticket"></a> <i class="qm-pool-item__content--app-icon icon-clock" aria-hidden="true"></i> <span class="qm-pool-item__content qm-pool-item__content--app-time"></span> <span class="qm-pool-item__content qm-pool-item__content--wait"></span> </div> </li>')
            var noResultTemplate = $('<li class="qm-pool__list-item qm-pool__list-item--auto-width"><span class="qm-pool__no-result-text">' + jQuery.i18n.prop('info.pools.no_customers_in_pool') + '</span></li>');
            var popoverTemplate = document.querySelector('.qm-popover--pool').outerHTML.trim();

            // Popover options
            var options = {
                template: popoverTemplate
            }

            // Get the data
            var userPoolData = spService.get(url);
            if (userPoolData && userPoolData.length > 0) {
				debugger;
                // Sort based on time in pool
                userPoolData.sort(util.compareTimeInPool);
                userPoolData.forEach(function (data, i) {
                    var template = userPoolItemTemplate.clone();

                    template.find('.qm-pool-item__content--ticket').text(data.ticketId);
                    template.find('.qm-pool-item__content--wait').text(util.formatIntoMM(data.waitingTime));
                    if (data.appointmentTime) {
                        template.find('.qm-pool-item__content--app-time').text(util.formatDateIntoHHMM(new Date(data.appointmentTime)));
                    } else {
                        template.find('.qm-pool-item__content--app-icon').hide();
                        template.find('.qm-pool-item__content--app-time').hide();
                    }
                    userPoolList.append(template);

                    // Popover options and initialization
                    options.popTarget = template.get(0).querySelector('.qm-pool-item__content--ticket');
                    if (servicePoint.isOutcomeOrDeliveredServiceNeeded() || sessvars.state.servicePointState === "CLOSED") {
                        options.disableCall = true;
                    }
                    options.visitId = data.visitId;
					var url2 = "branches/"+ sessvars.branchId + "/visits/"+options.visitId;
					var data2= spService.get(url2);
                    options.serviceName = data2.currentVisitService.serviceExternalName;
                    options.customerName = data2.parameterMap.customers;
                    options.totalServices = data2.servedVisitServices.length + data2.unservedVisitServices.length + 1;
                    var popover = new window.$Qmatic.components.popover.UserPoolPopoverComponent(options);
                    popover.init();
debugger;
                });
                if(pollUserPoolEnabled){
                    util.stopPollingUserPool();
                    util.startPollingUserPool();
                }
            } else {
                util.stopPollingUserPool();
                userPoolList.append(noResultTemplate);
            }

            util.determineIfToggleNeeded(userPool, userPoolList, userPoolToggle);
        }
debugger;

    };

    this.updateUserPool = function (keepCalling) {
            // Get DOM elements
            var userPoolMod = $('#userPoolModule'),
                userPoolList = userPoolMod.find('.qm-pool__list'),
                userPoolListItems = userPoolList.find('.qm-pool__list-item');
            if (userPoolListItems.length > 0) {
                var tickets = spService.get("branches/" + sessvars.branchId + "/users/" + sessvars.currentUser.id + "/pool/visits");
                if (typeof tickets !== 'undefined' && tickets != null && tickets.length === userPoolListItems.length) {
                    tickets.forEach(function (data, i) {

                        userPoolListItems.each(
                            function(index, element){
                                if($(this).find('.qm-pool-item__content--ticket').text() === data.ticketId){
                                    $(this).find('.qm-pool-item__content--wait').text(util.formatIntoMM(data.waitingTime));
                                    return false;
                                }
                        })
                    });
                }

            }
            if(keepCalling) {
                if(sessvars.userPoolTimer !== undefined) {
                    clearTimeout(sessvars.userPoolTimer);
                    sessvars.userPoolTimer = undefined;
                }
                sessvars.userPoolTimer = setTimeout(function() {
                    userPool.updateUserPool(true);
                }, userPoolRefreshTime*1000);
            }
    }

    this.callFromPool = function (visitId) {
        if (servicePoint.hasValidSettings()) {
            var params = servicePoint.createParams();
            params.userId = sessvars.currentUser.id;
            params.visitId = visitId;
            spPoolUpdateNeeded = false;
            sessvars.state = servicePoint.getState(spService.put("branches/" + params.branchId + "/servicePoints/" + params.servicePointId + "/users/" + params.userId + "/pool/" + params.visitId));
            sessvars.statusUpdated = new Date();

            servicePoint.updateWorkstationStatus();
            sessvars.currentCustomer = null;
            var $ticketNumber = $('#ticketNumber');
            var ticketNumStr = $ticketNumber.text();
            $ticketNumber.text('');
            setTimeout(function () {
                $ticketNumber.text(ticketNumStr);
            });

        }
    }

    this.parkPressed = function () {
        if (servicePoint.hasValidSettings() && sessvars.state.userState == servicePoint.userState.SERVING) {
            var params = servicePoint.createParams();
            params.userId = sessvars.currentUser.id;
            spPoolUpdateNeeded = false;
            params.json = '{"fromId":' + sessvars.servicePointId + ',"fromBranchId":' + sessvars.branchId + ',"visitId":' + sessvars.state.visit.id + '}';
            spService.putParams('branches/' + params.branchId + '/users/' + params.userId + '/visits/', params);
            sessvars.state = servicePoint.getState();
            sessvars.statusUpdated = new Date();
            servicePoint.updateWorkstationStatus();

            sessvars.currentCustomer = null;
        }
    };


    this.isEmpty = function () {
        var isEmpty = true;
        var params = servicePoint.createParams();
        params.userId = sessvars.currentUser.id;
        var tickets = spService.get("branches/" + params.branchId + "/users/" + params.userId + "/pool/visits");
        if (typeof tickets !== 'undefined' && tickets != null && tickets.length > 0) {
            isEmpty = false;
        }
        return isEmpty;
    };

    this.emptyPool = function () {
        var userPool = $('#userPoolModule'),
            userPoolList = userPool.find('.qm-pool__list');

        // Empty list
        userPoolList.empty();
    }


};