
    function validHC(inputTb){
    debugger;
    const pattern=/[0-9]/;
    const isValid=pattern.test(inputTb.value);
    if(!isValid) {
        inputTb.value=inputTb.value.replace(/[a-z]/g,'');
    }
};
// if(window.location.protocol=="http:"){
	 // var baseQmaticWebService = 'http://'+window.location.hostname+':8001/QmaticAppointService';
	 // var baseQmaticUrl='http://'+window.location.hostname+':8080/rest/';
// }
// else{
	// var baseQmaticWebService = 'https://'+window.location.hostname+':8000/QmaticAppointService';
	 // var baseQmaticUrl='https://'+window.location.hostname+':8443/rest/';
// }

	 var baseQmaticWebService = 'http://'+window.location.hostname+':8000/QmaticAppointService';
	 var baseQmaticUrl='http://'+window.location.hostname+':8080/rest/';





angular.module('mainapp', [])
     .controller('mainctrl', function ($scope, $q, $http,$timeout) {
        $scope.initializeValues=function(){
		debugger;
            var facility = 'HG Hamad';  
			$scope.branchId="1";
			$timeout(function(){
				$scope.branchId = sessvars.branchId;
			},600);
            $scope.GCC = ['qatari', 'kuwait', 'bahrain', 'saudi','Omani','omani' ,'oman','bahraini','Saudi','Bahraini','saudi arabia','Saudi Arabia','united arab emirates','United Arab Emirates']
            $scope.txthcnumber ='';
            $scope.curPageToShow = "Page1";
            $scope.tokenNumByOrder="0";
            $scope.Lateapt=false;
            $scope.RoomNumber='';
            $scope.MaxLateHrs = 15;//Minutes
            $scope.MaxEarlyHrs = 30;
            $scope.entryPointId = 28;
            $scope.docName = null;
            $scope.assessneedeed=true;
            $scope.unitId=sessvars.servicePointUnitId;
            $scope.patientName = "";
            $scope.patientHcNo = "";
            //$scope.patientHcNo = "HC00104947";
            $scope.patientNationality = "";
            $scope.patientApptTime = "-";
            $scope.patientClinic = "-";
            $scope.speciality = '-';
            $scope.patientApptDoc = "-";
            $scope.corpid = '-';
            $scope.gender = "";
            $scope.ApperrorMsg = "";
            $scope.dob = "-";
            $scope.noAppt = false;
            $scope.receptionList=receptionPrinters;
            $scope.walkInServices_=[];
            $scope.optionsReception=[];
            $scope.validAppointment=false;
            $scope.validAppointmentLate=false;
            $scope.validAppointmentEarly=false;

            receptionPrinters.forEach(reception=>{
                $scope.optionsReception.push(
                    {id:reception.logicId,name:reception.reception}
                );
            });

            $scope.resetError();
			
			$scope.setWalkinServices=function(){ 
            debugger;           
            // bnjServiceListNew.forEach(object=>{
                // if(object.subItems){
                    // $scope.walkInServices_.push(
                        // {
                            // id:object.id,
                            // appointmentInfo:object.subItems[0],
                            // walkinInfo:object.subItems[1]
                        // }
                        // );
                // }
            // });
			
			bnjServiceList.forEach(object=>{
                if(object.appLetter!="" && object.externalName.toLowerCase().includes('clinic')){
                    $scope.walkInServices_.push(object);
                }
            });
			
            $scope.walkInServices=$scope.transformArray($scope.walkInServices_,3);
        }
			
            $scope.setWalkinServices();

            debugger;

        }
        $scope.resetError=function(){
            $scope.commonError=' ';
            $scope.commonErrorState=false;
        }
        $scope.transformArray=function(inputArr,devSize){
            const outputArr=[]
            for(let i=0;i<inputArr.length;i+=devSize){
                outputArr.push(inputArr.slice(i,i+devSize));
            }
            return outputArr;
        }
        


		

        $scope.receptionLock=function(){
			//debugger;
		if($scope.optionsReception){
			//debugger;
			if(sessvars.servicePointName){
			$scope.optionsReception.forEach(option=>{
				if(sessvars.servicePointName.toLowerCase().includes(option.name.toLowerCase())){
					$scope.selectedReception=option;
					receptionSel=JSON.stringify($scope.selectedReception);					
					localStorage.setItem('receptionId',receptionSel);
					$scope.resetError();
					clearInterval(receptionInterval);
				}
			});
			}
		}
            // console.log('came to set receptoin');
            // if($scope.selectedReception.id<=0){
                // $scope.commonErrorState=true;
                // $scope.commonError="Please Select the Correct Reception from the Dropdown List";
            // }
            // else{

                // receptionSel=JSON.stringify($scope.selectedReception);

                // localStorage.setItem('receptionId',receptionSel);
                // $scope.resetError();
            // }            
        }
		
		setInterval(function(){
			if(globPrfileChange){
				var receptionInterval=setInterval(function(){
			//debugger;
			if($scope.optionsReception){
				//debugger;
				if(sessvars.servicePointName){
				$scope.optionsReception.forEach(option=>{
					if(sessvars.servicePointName.toLowerCase().includes(option.name.toLowerCase())){
						$scope.selectedReception=option;
						receptionSel=JSON.stringify($scope.selectedReception);					
						localStorage.setItem('receptionId',receptionSel);
						$scope.resetError();
						clearInterval(receptionInterval);
						globPrfileChange=false;
					}
                    
				});
				}
			}
				// console.log('came to set receptoin');
				// if($scope.selectedReception.id<=0){
					// $scope.commonErrorState=true;
					// $scope.commonError="Please Select the Correct Reception from the Dropdown List";
				// }
				// else{

					// receptionSel=JSON.stringify($scope.selectedReception);

					// localStorage.setItem('receptionId',receptionSel);
					// $scope.resetError();
				// }            
			},1000);	
			}
			
			
		},1000);
		
		

        $scope.verifyReception=function(){
            debugger;
            if(localStorage.getItem('receptionId')!=undefined){
                console.log('came to verify reception ')
                var receptionId=JSON.parse(localStorage.getItem('receptionId'));
                $scope.selectedReception = receptionId;
                if(+receptionId.id<0){
                    $scope.commonError="Please Select Your Reception from the Dropdown List";
                    $scope.commonErrorState=true;
                    
                }
                else{

                    $scope.resetError();
                }
            }
            else{
                console.log('came to verify reception ')
                var defaulreception={id:-1,name:'Please Select The Reception'};
                    $scope.selectedReception=defaulreception;
                    localStorage.setItem('receptionId',JSON.stringify(defaulreception));
                    $scope.commonError="Please Select Your Reception from the Dropdown List";
                    $scope.commonErrorState=true;
                    
                
            }
        }

        


        $scope.initializeValues();
        
       //Dont forget to remove
       $scope.unitId='WOD:IntroOPD4R';
       $scope.OPDUnitsMapping=opdroomsmapping;
       debugger;
       $scope.OPD = _.find($scope.OPDUnitsMapping,function(c){
                           return c["UnitId"].indexOf($scope.unitId) >= 0;
                       });

        

        $scope.OPD_Rooms=$scope.transformArray($scope.OPD.Rooms,3);
        var dummyAppt=[
            {
                "PATIENT_NAME":"test name",
                "PATIENT_ID":'12345678912',
                "NATIONALITY":"Sri Lankan",
                "APPT_TIME":"2023-08-11",
                "CLINIC_SHORT_DESC":'WDO',
                "SPECIALITY_DESC":"Urologist",
                "PRACTITIONER_FULL_NAME":"Test Doc Name",
                "PRACTITIONER_ID":"doc name/Id",
                "GENDER":"Male",
                "DATE_OF_BIRTH":"12/12/2020"
            },
            {
                "PATIENT_NAME":"test name",
                "PATIENT_ID":'12345678912',
                "NATIONALITY":"Sri Lankan",
                "APPT_TIME":"2023-08-11 08:12:10",
                "CLINIC_SHORT_DESC":'WDO',
                "SPECIALITY_DESC":"Urologist",
                "PRACTITIONER_FULL_NAME":"Test Doc Name",
                "PRACTITIONER_ID":"doc name/Id",
                "GENDER":"Male",
                "DATE_OF_BIRTH":"12/12/2020"
            },
            {
                "PATIENT_NAME":"test name",
                "PATIENT_ID":'12345678912',
                "NATIONALITY":"Sri Lankan",
                "APPT_TIME":"2023-08-11 08:12:10",
                "CLINIC_SHORT_DESC":'WDO',
                "SPECIALITY_DESC":"Urologist",
                "PRACTITIONER_FULL_NAME":"Test Doc Name",
                "PRACTITIONER_ID":"doc name/Id",
                "GENDER":"Male",
                "DATE_OF_BIRTH":"12/12/2020"
            },
            {
                "PATIENT_NAME":"test name",
                "PATIENT_ID":'12345678912',
                "NATIONALITY":"Sri Lankan",
                "APPT_TIME":"2023-08-11 08:12:10",
                "CLINIC_SHORT_DESC":'WDO',
                "SPECIALITY_DESC":"Urologist",
                "PRACTITIONER_FULL_NAME":"Test Doc Name",
                "PRACTITIONER_ID":"doc name/Id",
                "GENDER":"Male",
                "DATE_OF_BIRTH":"12/12/2020"
            }
        ];

        $scope.allAppt_=$scope.transformArray(dummyAppt,3);

       $scope.init = function () {
           $scope.entryPointId = getEntryPointId();
       };
       
   
   
   $scope.Cancel=function(){			
       window.location.reload();			
   }	
   //End to Add Characters
   //To create Ticket
   //To check the ticket number in appointment tickets
   function getHCNumber(hcNo){ //alert('getHCNumb - '+hcNo);
       var hNo = hcNo;
       var branchId = qmatic.webwidget.client.getBranchId();
       if (hNo.length > 6) {
           var visitId = "";
           var found = false;
           return MIService.getVisitInfo(branchId,hcNo);
           
       }
   }
   $scope.transferToMultiService=function(visitId,func){
       var multiService = [];
       var unitId=qmatic.webwidget.client.getUnitId();
       var assServiceId = $scope.OPD["AssessmentServiceId"];
       var assQueueId = $scope.OPD["AssessmentQueueId"];
       // if($.inArray(($scope.patientNationality).toLowerCase(),$scope.GCC) >=0) {
           // //Removed because as per new flow number will get transfered to assessment
           // pushToMultiService(assServiceId,visitId);
       // }else{
           
           
               // pushToMultiService(assServiceId,visitId);//Assesment Service Id
           
       // }
       debugger;
       if(func != "Pharmacy"){
           var corpId = $scope.corpid;
           var doctorRoomNo = $scope.doctorRoomNo;
           if(doctorRoomNo != "")
                   pushToMultiService(doctorRoomNo,visitId);
       }
   }
   
   $scope.createWalkinVisit=function(serviceId,serviceName){

        $scope.createVisit([serviceId],"walkin");

   }
   $scope.createAppointVisit=function(serviceId,appLetter,starting){

    

   }
   
   function pushToMultiService(serviceId,visitId)
   {
       $.ajax({
           type: 'POST',
           url: baseQmaticURL+'entrypoint/branches/'+$scope.branchId+'/visits/'+visitId+'/services/'+serviceId,
           contentType: 'application/json',
           data: '{"fromId" :"'+$scope.entryPointId+'"}',
           dataType: 'json',
           async: false,
           username: "restuser",
           password: "restpassword",
           success: function () {
               //alert('transfered');
               $scope.doctorRoomNo = "";
           },
           error: function (xhr, type) {
               //console.log(xhr);
               $scope.doctorRoomNo="";
           }
       });
   }
   
   
   $scope.validateRoom =function(roomNo){
       for(var i=0;i<=$scope.OPD.Rooms.length-1;i++){
           console.log($scope.OPD.Rooms[i][1]);
           if($scope.OPD.Rooms[i][1] == roomNo)
               return true;
       }
       return false;
   }
   
        $scope.createVisit=function(serviceId,roomName,apptStatus){
            if(apptStatus){
                if(apptStatus=="onTime"){
                    $scope.vipLevel="VIP Level 1";
                }
                else if(apptStatus=="early"){
                    $scope.vipLevel="VIP Level 3";
                }
                else if(apptStatus=="late"){
                    $scope.vipLevel="VIP Level 2";
                }
            }
            else{
                $scope.vipLevel="";
            }
            //born and join creatapointment visit function wil go here
			var params = {
            services: serviceId,
            parameters: {
                custom1: $scope.patientName,
                custom2: $scope.patientHcNo,
                custom3: roomName, //$scope.corpid === null ? '-' : $scope.corpid + '-'+ $scope.patientApptDoc === null ? '-' : $scope.patientApptDoc,
                custom4: $scope.patientClinic,
                custom5: $scope.appointExist ? $scope.patientApptTime : 'Walk-In',
                nationality: $scope.patientNationality,
                docInfo: $scope.corpid === null ? '-' : $scope.corpid + '-' + $scope.patientApptDoc,
				servId:$scope.roomRecId
            }
        };

		if($scope.appointExist && $scope.tokenNumByOrder!='0' && roomName!= 'walkin'){
				params = {
					services: serviceId,
					parameters: {
						custom1: $scope.patientName,
						custom2: $scope.patientHcNo,
						custom3: roomName, //$scope.corpid === null ? '-' : $scope.corpid + '-'+ $scope.patientApptDoc === null ? '-' : $scope.patientApptDoc,
						custom4: $scope.patientClinic,
						custom5: $scope.appointExist ? $scope.patientApptTime : 'Walk-In',
						nationality: $scope.patientNationality,
						docInfo: $scope.corpid === null ? '-' : $scope.corpid + '-' + $scope.patientApptDoc,
						level:$scope.vipLevel,
						ticket: $scope.tokenNumByOrder,
						servId:$scope.roomRecId
					}
				};
			}
			else if(roomName == 'walkin'){
				params = {
				services: serviceId,
				parameters: {
                    custom1: $scope.patientName,
                    custom2: $scope.patientHcNo,
                    custom3: roomName, //$scope.corpid === null ? '-' : $scope.corpid + '-'+ $scope.patientApptDoc === null ? '-' : $scope.patientApptDoc,
                    custom4: '-',
                    custom5: 'Walk-In',
                    nationality: $scope.patientNationality,
                    docInfo: '-',
                    servId:'-'
                    }
                };
			}


            //need to change the entrypoint Id based on selected entry point
			
			var receptionInf=sessvars.state.workProfileName;//$scope.selectedReception;
			//kisho need to get reception printer logicid when going live or when testing with printer
			var receptionPrinter=receptionPrinters.find(rec=>rec.reception==receptionInf);
			
            var entryPointId = receptionPrinter.logicId;//getEntryPointId();
            //kisho need to remove below line and uncomment above one
            //var entryPointId = 24;//getEntryPointId();
            //console.log(entryPointId);
            var branchId = sessvars.branchId;
            var params1=JSON.stringify(params)

            var visit = spService.postEntryParams("branches/"+branchId+"/entryPoints/"+entryPointId+"/visits",params1);//qmatic.connector.client.createVisit(branchId, entryPointId, params);
            if(visit){

                document.getElementById('ticketNo1').innerHTML=visit.ticketId;
                $('#ticketDisplay').fadeIn();                
                setTimeout(() => {
                    $('#ticketDisplay').fadeOut();
                }, 2000);

                // if($scope.appointExist && $scope.tokenNumByOrder!='0' && $scope.transServiceInf !=null && roomName!= 'walkin'){
                
                    // var transferQ=$scope.vipLevel=='VIP Level 1'?$scope.transServiceInf.apptQueueId:$scope.vipLevel=='VIP Level 2'?$scope.transServiceInf.apptLateQueueId:$scope.transServiceInf.apptEarlyQueueId;
                    // $scope.transServiceInf=0;
                    // var params_01 = {
                                // fromId:60,//kisho need to check the from id
                                // fromBranchId:branchId,
                                // visitId:visit.id,
                                // sortPolicy:"SORTED"};
                        // //	pushToMultiService(assServiceId,visit.id);
                        // //	transferImmediate(assQueueId,visit.id);
                        // var visit1 = qmatic.connector.client.customTransfer(branchId,transferQ,params_01);
                    
                // }
				setTimeout(function(){
					$scope.jumpTo("Page1");
				},1000);
            }
			else{
            setTimeout(function(){
                $scope.jumpTo("Page1");
            },1000);
			}
            
            //window.location.reload();

        }

       $scope.showOtherService=function(){
              // Other services goes here
            
       }
       
       $scope.showWalkInPage = function(pageName,type)
       {
           $scope.curPageToShow = pageName;
           $scope.type = type;
       }

       $scope.showWalkInService = function(pageName)
       {
           $scope.curPageToShow = pageName;
       }

       //To show and hide different pages.
   $scope.showPage = function (pageName) {
       if (pageName == $scope.curPageToShow)
           return true;
       else
           return false;
   }
    function getEntryPointId() {
        //debugger;
        //return 2;
        // This is really bad - got to find a better way!!!
        var i = 1;
        //return 4;
        var entryPoint = qmatic.connector.client.getEntryPoint(qmatic.webwidget.client.getBranchId(), i);
        //var entryPoint = qmatic.connector.client.getEntryPoint(1, i);

        while (entryPoint != null) {
            if (entryPoint.unitId == qmatic.webwidget.client.getUnitId())
                return entryPoint.id;
            i++;
            entryPoint = qmatic.connector.client.getEntryPoint(qmatic.webwidget.client.getBranchId(), i);
            //entryPoint = qmatic.connector.client.getEntryPoint(1, i);
        }

        // Hopefully we do not find ourselves here...
        return -1;
    }

   $scope.validateAppt = function(patientApptDetails){
       debugger;
       $scope.tokenNumByOrder="";
       console.log(patientApptDetails);
               $scope.ApperrorMsg = "";
               $scope.appointExist = true;
               $scope.validAppointment = true;
               $scope.patientName = patientApptDetails[0]["PATIENT_NAME"];
               $scope.patientHcNo = patientApptDetails[0]["PATIENT_ID"];
               $scope.patientNationality = patientApptDetails[0]["NATIONALITY"];
               $scope.patientApptTime = patientApptDetails[0]["APPT_TIME"];
               $scope.patientClinic = patientApptDetails[0]["CLINIC_SHORT_DESC"] === null ? '-':patientApptDetails[0]["CLINIC_SHORT_DESC"];
               $scope.speciality = patientApptDetails[0]["SPECIALITY_DESC"];
               $scope.patientApptDoc = patientApptDetails[0]["PRACTITIONER_FULL_NAME"];
               $scope.corpid = patientApptDetails[0]["PRACTITIONER_ID"] === null ?patientApptDetails[0]["PRACTITIONER_FULL_NAME"]:patientApptDetails[0]["PRACTITIONER_ID"];
               $scope.gender = patientApptDetails[0]["GENDER"];
               $scope.dob = patientApptDetails[0]["DATE_OF_BIRTH"];
               $scope.txthcnumber = patientApptDetails[0]["PATIENT_ID"];
               //Check Late and Early
               $scope.corpid=$scope.corpid.replace("/","transfer");
               $http.get(baseQmaticWebService+'/GetNewTokenMethod/' + $scope.corpid  + ',' + $scope.patientHcNo + '', {})
       .success(function (data, status, headers, config) {
           var tokenDetail ;
           
           if (data && data.GetNewTokenMethodResult)
                       tokenDetail = JSON.parse(data.GetNewTokenMethodResult);
           //1-99 token number;
       if(tokenDetail['Table'][0].token!=null){
                       $scope.tokenNumByOrder=tokenDetail['Table'][0].token;
                       }

           if($scope.tokenNumByOrder!=0){
            $scope.appointExist = true;
            var timeStartHH = (new Date("06/22/2014 " + $scope.patientApptTime).getHours()) * 60;
               var timeEndHH = (new Date().getHours()) * 60;
               var timeStartMM = new Date("06/22/2014 " + $scope.patientApptTime).getMinutes();
               var timeEndMM = new Date().getMinutes();

               timeStart = timeStartHH + timeStartMM;
               timeEnd = timeEndHH + timeEndMM;

               var hourDiff = timeStart - timeEnd;
                $scope.validAppointment = true;
                $scope.appointExist = true;

               var hrdiff = hourDiff;
               if (hourDiff < 0) {
                   hourDiff = hourDiff * (-1);
                   if (hourDiff > $scope.MaxLateHrs) {
                       $scope.appointExist = true;
                       
                       $scope.ApperrorMsg =  "Late for the appointment";
                       $scope.validAppointment = true;
                       levelofPatient = "VIP Level 2";
                       $scope.Lateapt=true;
                       debugger;
                   }else{
                       
                       $scope.validAppointment = true;
                       $scope.appointExist = true;
                       $scope.tokenNumByOrder= +($scope.OPD["OPD"]*1000)+ +$scope.tokenNumByOrder;
                   }
               } else {     
                       $scope.validAppointment = true;
                       $scope.appointExist = true;
                       $scope.tokenNumByOrder= +($scope.OPD["OPD"]*1000)+ +$scope.tokenNumByOrder;
               }
               $scope.curPageToShow = "Page2";
           }
           
           
       })
       .error(function (data, status, headers, config) {
           $scope.ApperrorMsg =  "Issue while taking valid appointment. Please proceed with Walk In";
       });
               
   }

   //Getting Control No & Room No
   $scope.printAppointmentTicket = function (apptStatus) {   
    debugger;	
            var hcNumber = $scope.txthcnumber;
            var speciality = $scope.speciality.replace('/', 'BACKSLASH');;
            var gender = $scope.gender == "M" ? "Male" : "Female";
            var facility = 'HG Hamad';
            var corpid = $scope.corpid;
            var clinic = null;
            if ($scope.patientClinic)
                clinic = $scope.patientClinic.replace('/', 'BACKSLASH');
    
            var curDate = new Date();
            var patientDob = $scope.dob != '-' ? new Date($scope.dob) : new Date();
            var patientNationality = $scope.patientNationality == 'Qatari' ? $scope.patientNationality : 'NQatari';
            var ageDiff = curDate.getYear() - patientDob.getYear();
            $http.get(baseQmaticWebService+'/GetControlForRoom/' + hcNumber + ',' + speciality + ',' + gender + ',' + facility + ',' + corpid + ',' + clinic + ',' + ageDiff + ',' + patientNationality + '', {})
            .success(function (data, status, headers, config) {
            debugger;
                    
                //if the room id is the service id of the doctor room need to generate Ticket Number
                var doctorRoomId='';
                
                var serviceId = JSON.parse(data.GetControlForRoomResult)["Table"];
                var controlToTransfer=0;
                var finalServiceList=[];
                try{
                    var roomRecId = serviceId[0]["roomNotoPrint"];
                    $scope.roomRecId = roomRecId;
                    var roomName = serviceId[0]["roomNotoPrint"];
                    try {
                        roomName = searchRoomName(roomName);
                    } catch (e) { }
                    debugger;
                    finalServiceList[0] = +roomRecId;
                    // finalServiceList[1] = +roomRecId;
                    controlToTransfer = serviceId[0]["QmaticServiceId"];
                    
                }
                catch(ex){}
    
                // try{
                //     $http.get(baseQmaticWebService+'/GetRoomForHC/Bone and Joint,' + $scope.corpid  + ',' + clinic + ',' + hcNumber + '' , {})
                //         .success(function (data, status, headers, config) {
                //             var roomDetail ;
                //             if (data && data.GetRoomForHCResult)
                //                     tokenDetail = JSON.parse(data.GetRoomForHCResult);
                //             //1-99 token number;
                //         if(roomDetail['Table'][0].row!=null){
                //             doctorRoomId=roomDetail['Table'][0].roomId;
                //         }
                //     })
                //     .error(function(data){
                //         console.log("error getting token No: "+data);
                //     });
                // }
                // catch(excep){
                //     //need to make 0
                    
                // }
    
                var serviceInf=null;
                //var finalServiceId=serviceId;
                //need to uncomment if want to generate ticket based on doctor room
                if(roomRecId != null){
                    finalServiceId=roomRecId;
                }
                else if (doctorRoomId !=''){
                    finalServiceId=doctorRoomId;
                }
                else{
                    finalServiceId=serviceId
                }
    
                // bnjServiceList.forEach(element => {
                //     if(element.id==finalServiceId){
                //         serviceInf=element
                //     }
                // });

                // //for bnj new services only
                // walkInServices_.forEach(element => {
                //     if(element.id==finalServiceId){
                //         serviceInf=element
                //     }
                // });

                bnjServiceList.forEach(element => {
                    if(element.id== +finalServiceId){
                        serviceInf=element
                    }
                    if(element.id== +controlToTransfer){
                        $scope.transServiceInf=element
                    }
                });
    
                var roomRecIdToSP=0
                //need to uncomment if want to generate ticket based on doctor room
                // if(roomRecId !=null){
                //     roomRecIdToSP=roomRecId
                // }
                // else{
                //     roomRecIdToSP=0
                // }
                
                
                
                //need to create the visit with finalServiceId if want to create directly to specific doctor room
                
                try{
                    //$http.get(baseQmaticWebService+'/GetTokenBasedOnAppt_BnJ/' + $scope.patientHcNo  + ',' + roomRecIdToSP + ',' + serviceId + ',' + $scope.patientApptTime +'', {})
                    var corpId1=$scope.corpid==null?$scope.patientApptDoc:$scope.corpid;
                    corpId1=corpId1.toLowerCase().replace('special','spcltxt');
                    corpId1=corpId1.toLowerCase().replace('/','transfer');
                    corpId1=corpId1.toLowerCase().replace('&','special');
                    $http.get(baseQmaticWebService+'/GetNewTokenMethod/' + corpId1  + ',' + $scope.patientHcNo + '', {})
                            .success(function (data, status, headers, config) {
                                debugger;
                                var tokenDetail ;
                                if (data && data.GetNewTokenMethodResult){
                                    tokenDetail = JSON.parse(data.GetNewTokenMethodResult);
                                }
                                            
                                //1-99 token number;
                            if(tokenDetail['Table'].length>0){
                                if(tokenDetail['Table'][0].token!=null){
                                    $scope.tokenNumByOrder=""+tokenDetail['Table'][0].token;
                                }
                            }
                        
                            // need to get only appLetter if want to create ticket directly to  specific doctor room
                            var finalTicketNumber='';
                            if($scope.tokenNumByOrder!='0'){
                                var startLetter='';
                                var startNumber=0;
                                if(serviceInf.appLetter!=''){
                                    startLetter=serviceInf.appLetter;
                                    startNumber= serviceInf.starting - 1;
                                }
                                else{
                                    startLetter=serviceInf.Letter;
                                    startNumber= serviceInf.startingNormal 
                                }
                                finalTicketNumber=startNumber + +($scope.tokenNumByOrder);
                                if(String(finalTicketNumber).length==1)
                                    finalTicketNumber='00'+finalTicketNumber;
                                else if(String(finalTicketNumber).length==2)
                                    finalTicketNumber='0'+finalTicketNumber;
                                else
                                    finalTicketNumber=finalTicketNumber;
                                
                                $scope.tokenNumByOrder=startLetter + '' + finalTicketNumber;
                            }
        
                            setTimeout(function () {
                                $scope.createVisit(finalServiceList, roomName,apptStatus);
                            }, 900);
                    })
                    .error(function(data){
                        debugger;
                        setTimeout(function () {
                            $scope.createVisit(finalServiceList, roomName,apptStatus);
                        }, 5000);
                        console.log("error getting token No: "+data);
                    });
                }
                catch(excep){
                    //need to make 0
                    $scope.tokenNumByOrder='0';
                    setTimeout(function () {
                        $scope.createVisit(finalServiceList, roomName,apptStatus);
                    }, 5000);
                }
                
    
            })
            .error(function (data, status, headers, config) {
                debugger;
                setTimeout(function () {
                    //$window.location.reload();
                    window.location.reload();
                }, 10000);
            });
    
            
    
        }
		
		$scope.jumpTo=function(pageToJump){
			debugger;
			$scope.curPageToShow=pageToJump;
			if(pageToJump=='Page1'){
				$scope.txthcnumber ='';
				$scope.clearAll();
				$scope.$applyAsync();
			}
		}
		
		$scope.clearAll=function(){
            $scope.tokenNumByOrder="0";
            $scope.Lateapt=false;
            $scope.RoomNumber='';
            $scope.docName = null;
            $scope.assessneedeed=true;
            $scope.unitId=sessvars.servicePointUnitId;
            $scope.patientName = "";
            $scope.patientHcNo = "";
            //$scope.patientHcNo = "HC00104947";
            $scope.patientNationality = "";
            $scope.patientApptTime = "-";
            $scope.patientClinic = "-";
            $scope.speciality = '-';
            $scope.patientApptDoc = "-";
            $scope.corpid = '-';
            $scope.gender = "";
            $scope.ApperrorMsg = "";
            $scope.dob = "-";
            $scope.noAppt = false;
            $scope.receptionList=receptionPrinters;
            $scope.walkInServices_=[];
            $scope.optionsReception=[];
            $scope.validAppointment=false;
            $scope.validAppointmentLate=false;
            $scope.validAppointmentEarly=false;
            $scope.vipLevel="";
                $scope.appointExist = false;
		};

       //To take appointment details
    $scope.checkAppointment = function () {
		$scope.clearAll();
        debugger;
        var hcNumber = $scope.txthcnumber;
        if (hcNumber.substr(0, 2) == "HC") {
            hcNumber = hcNumber.substr(0, 10);
        }
        else {
            hcNumber = "HC" + pad(hcNumber, 8);
        }

       
        
        $scope.txthcnumber = hcNumber;
        var facility = 'HG Hamad'
        $http.get(baseQmaticWebService+'/GetApptDetails/' + facility + ',' + hcNumber + '', {})
        .success(function (data, status, headers, config) {
            var patientApptDetails = JSON.parse(data.GetApptDetailsResult);
            $scope.curPageToShow = "Page2";
            patientApptDetails = patientApptDetails["Table"];
            if (patientApptDetails.length > 0) {
                $scope.appointExist = false;
                $scope.patientName = patientApptDetails[0]["PATIENT_NAME"];
                $scope.patientHcNo = patientApptDetails[0]["PATIENT_ID"];
                $scope.patientNationality = patientApptDetails[0]["NATIONALITY"];
                $scope.patientApptTime = patientApptDetails[0]["APPT_TIME"];
                $scope.patientClinic = patientApptDetails[0]["CLINIC_SHORT_DESC"];
                $scope.speciality = patientApptDetails[0]["SPECIALITY_DESC"];
                $scope.patientApptDoc = patientApptDetails[0]["PRACTITIONER_FULL_NAME"];
                $scope.corpid = patientApptDetails[0]["PRACTITIONER_ID"];
                $scope.gender = patientApptDetails[0]["GENDER"];
                $scope.dob = patientApptDetails[0]["DATE_OF_BIRTH"];
                //Check Late and Early
                var timeStartHH = (new Date("07/22/2024 " + $scope.patientApptTime).getHours()) * 60;
                var timeEndHH = (new Date().getHours()) * 60;
                var timeStartMM = new Date("07/22/2024 " + $scope.patientApptTime).getMinutes();
                var timeEndMM = new Date().getMinutes();

                timeStart = timeStartHH + timeStartMM;
                timeEnd = timeEndHH + timeEndMM;
				$scope.isAppt=true;

                var hourDiff = timeStart - timeEnd;
                var hrdiff = hourDiff;

                $scope.validAppointment=true;
                $scope.appointExist = true;
				$scope.isAppt=true;

                if (hourDiff < 0) {
                    hourDiff = hourDiff * (-1);
                    if (hourDiff > $scope.MaxLateHrs) {
                        debugger;
                        $scope.appointExist = true;
						$scope.isAppt=true;
                        $scope.validAppointment=true;
                        $scope.validAppointmentLate=true;
                        $scope.errorMsg = "The Patient is late for the Appointment so, he/she will not be seen in his/her time";
                        $scope.commonError=$scope.errorMsg;
                        commonErrorState=true;

                        // debugger;
                        // setTimeout(function () {
                        //     $window.location.reload();
                        //     window.location.reload();
                        // }, 10000);
                    }
                } else {
                    debugger;
                    if (hourDiff > $scope.MaxEarlyHrs) {
                        $scope.appointExist = true;
						$scope.isAppt=false;
                        $scope.validAppointment=true;
                        $scope.validAppointmentEarly=true;
                        $scope.validAppointmentLate=false;
                        $scope.errorMsg = "The patient arrived too early, Check in is allowed upto 30 minutes prior to the appointment time.";
                        $scope.commonError=$scope.errorMsg;
                        commonErrorState=true;

                        debugger;
                        // setTimeout(function () {
                        //     $window.location.reload();
                        //     window.location.reload();
                        // }, 10000);
                    }
                }
            } else {
                //Check if there is no appointment.
                $http.get(baseQmaticWebService + '/CheckPatientInfo/' + hcNumber + '', {})
				.success(function (data, status, headers, config) {
				    var patDetails = trim(data.CheckPatientInfoResult);
					debugger;
				    if (patDetails.length == 0) {
				        $scope.curPageToShow = "Page1";
				        $scope.errorMsg = " رقم البطاقة الصحية غير صحيح - Health card number is not valid.";
                        $scope.commonError=$scope.errorMsg;
                        commonErrorState=true;
				        debugger;
							$scope.appointExist = false;
							$scope.patientName = '';
							$scope.patientHcNo = '';
							$scope.patientNationality = '';
							$scope.patientApptTime = "-";
							$scope.patientClinic = "-";
							$scope.speciality = '-';
							$scope.patientApptDoc = "-";
							$scope.corpid = '-';
							$scope.gender = '';
							$scope.errorMsg = "Patient Info Not found";
							$scope.dob = "-";
                            $scope.commonError=$scope.errorMsg;
                            commonErrorState=true;

				    } else {
						if(patDetails.includes('|')){
							var charPatDetails = patDetails.split('|');
							$scope.appointExist = false;
							$scope.patientName = trim(charPatDetails[1]?charPatDetails[1]:'');
							$scope.patientHcNo = trim(charPatDetails[0]?charPatDetails[0]:'');
							$scope.patientNationality = trim(charPatDetails[3]?charPatDetails[3]:'');
							$scope.patientApptTime = "-";
							$scope.patientClinic = "-";
							$scope.speciality = '-';
							$scope.patientApptDoc = "-";
							$scope.corpid = '-';
							$scope.gender = trim(charPatDetails[2]?charPatDetails[2]:'') == 'F' ? 'Female' : 'Male';
							$scope.errorMsg = "عذرا ليس لديك مواعيد هذا اليوم - Pstient doesn't have any appointment today";
							$scope.dob = "-";
                            $scope.commonError=$scope.errorMsg;
                            commonErrorState=true;
						}
				       
				        // setTimeout(function () {
				            // //$window.location.reload();
				            // window.location.reload();
				        // }, 10000);
				    }
				}).error(function (data, status, headers, config) {
				    $scope.errorMsg = status;
				});
            }
        })
        .error(function (data, status, headers, config) {
            $scope.patientApptDetails = status;            
        });

        
        $scope.verifyReception();
    }
       
       function pad(number, length) {
               var str = '' + number;
               while (str.length < length) {
                   str = '0' + str;
               }
               return str;
           }
   
   function sendUnitEvent (service, serviceExtName, ticket, queueId) { 
   
       var eventName = "REPRINT_TICKET"; /* Should match the Event name specified for the UnitEventHandler in unit.xml */
       var deviceType = "SW_INTRO17_TOUCH"; /* See Unit Type Documentation for info about DeviceType */
       var unitId=qmatic.webwidget.client.getUnitId();
       var branchId = qmatic.webwidget.client.getBranchId();
       var doctorRoomNo = $scope.doctorRoomNo;//MIService.getDoctorRoom(facility,$scope.corpid,$scope.patientClinic.replace('/','//'),$scope.patientHcNo);
       
       var DoctorRoomName="-";
       var dec ='-';
       if(doctorRoomNo != "")
       {   
           var serviceList =MIService.getServiceList(branchId,doctorRoomNo);           
           if(serviceList!="")
               DoctorRoomName = serviceList.internalName;
           dec = ($.inArray(($scope.patientNationality).toLowerCase(),$scope.GCC) >=0) ? "Vital->Doctor" :"Cashier->Vital->Doctor";
       }
       //edwin 18-11-2018
       if(service==86 || service==87) service=20;
       var params = {"uid" : unitId + ":" + deviceType,
           "branchId":branchId, 
           "queueId":parseInt(queueId,10), 
           "queueType":"QUEUE", 
           "service":service, 
           "serviceExtName" : serviceExtName,
           "ticket":ticket,
           "custom1": $scope.patientHcNo,
           "custom2": DoctorRoomName,
           "custom3": dec,
           "custom4": $scope.docName === null ? '-':$scope.docName,
           "custom5": 'Appt Time: ' + $scope.patientApptTime,
           "nationality": $scope.patientNationality,
           "patientname": $scope.patientName				
   };
         
   var event =  {"M":"E","E":{"evnt":"","type":"APPLICATION", "prm":""}};
   event.E.evnt = eventName;    
   event.E.prm = params;
  
  /* no need to include qevents_cometd.js, use the parent object */
   parent.qevents.publish('/events/APPLICATION', event);
   //NoApptMesage(4);
   //window.setTimeout("loadPage('enterhc');", 3000);
}
       function trim(value) { return isString(value) ? value.replace(/^\s*/, '').replace(/\s*$/, '') : value; }
       function isString(value) { return typeof value == 'string'; }

       $scope.allAppt=dummyAppt;

     });
     
var MIService = (function($) {
   var _visit;
   var _doctorRoom;
   var _serviceList;
   var _transfer;
   function _getVisitInfo(branchId,hcNumber) {
       $.ajax({
           type: 'GET',
           url: baseQmaticWebService+'/GetVisitForHCNumber/'+branchId+','+hcNumber,
           dataType: 'json',
           async: false,
           cache: false,
           success: function(data) {
               var visitInfo = [];
               if (data && data.GetVisitForHCNumberResult){
                   visitInfo = JSON.parse(data.GetVisitForHCNumberResult);
                   visitInfo = visitInfo["Table"];
               }
               _visit = visitInfo;
           },
           error: function(xhr, type) {
               _visit = null;
           }
       });
   }
   function _getDoctorRoom(facility,corpid,patientClinic,patientHcNo){
       var objgetRoomArray = {
           facilityid:facility,
           corpid:'-',//corpid,
           hcnumber:patientHcNo,
           clinic:patientClinic
       };
       //var newUrl = encodeURIComponent(facility) + ','+encodeURIComponent(corpid)+','+encodeURIComponent(patientClinic)+',' + encodeURIComponent(patientHcNo) + '';
       $.ajax({
           type: 'POST',
           contentType: "application/json; charset=utf-8",
           dataType: "text",
           async: false,
           cache: false,
           url: baseQmaticWebService+'/NewGetRoomForHC',
           data:JSON.stringify({getRoomArray:objgetRoomArray}),
           success:function (data, status, headers, config) {
               debugger;
               var doctorRoomNo = [];
               if (data){
                   var newdata = JSON.parse(data);
                   doctorRoomNo = JSON.parse(newdata.NewGetRoomForHCResult);
                   _doctorRoom = doctorRoomNo["Table"];
               }
           },
           error:function (data, status, headers, config) {
               
           }
       });
   }
   function _getServiceList(branchId,serviceId){
       $.ajax({
           type: 'GET',
           url: baseQmaticURL+'entrypoint/branches/'+branchId+'/services/'+serviceId+'/',
           async: false,
           cache: false,
           username: "restuser",
           password: "restpassword",
           success:function (data, status, headers, config) {
               _serviceList = data;
           },
           error:function (data, status, headers, config) {
               
           }
       });
   }
   function _transferImmediate(serviceId,visitId){
   var branchId = qmatic.webwidget.client.getBranchId();
       $.ajax({
           type: 'PUT',
           url: baseQmaticURL+'servicepoint/branches/'+branchId+'/queues/'+serviceId+'/visits/',
           contentType: 'application/json',
           data: '{"fromId":2,"fromBranchId":'+branchId+',"visitId":'+visitId+'","sortPolicy","SORTED"}',
           dataType: 'json',
           async: false,
           username: "restuser",
           password: "restpassword",
           success: function () {
               //alert('transfered');
           _transfer ="";
           },
           error: function (xhr, type) {
               //console.log(xhr);
               _transfer =="";
           }
       });
   }
   return {
       getVisitInfo : function(branchId,hcNumber) {
           _getVisitInfo(branchId,hcNumber);
           return _visit;
       },
       getDoctorRoom:function(facility,corpid,patientClinic,patientHcNo)
       {
           _getDoctorRoom(facility,corpid,patientClinic,patientHcNo);
           return _doctorRoom;
       },
       getServiceList:function(branchId,serviceId)
       {
           _getServiceList(branchId,serviceId);
           return _serviceList;
       },
       getTransfer:function(serviceId,visitId){
           
           _transferImmediate(serviceId,visitId);
           return _transfer;
       }
   
   };
})(jQuery);