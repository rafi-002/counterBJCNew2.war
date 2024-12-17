var opdroomsmapping = [
	{
		"OPD":1,
		"UnitId":["WOD:IntroOPD2"],
		"Rooms":[["Anasthesia Room",322,1]],//Rooms ServiceId
		"AssessmentServiceId":322,
		"AssessmentQueueId":748,
	},
	{
		"OPD":2,
		"UnitId":["WOD:IntroOPD2R","WOD:IntroOPD2L","WOD:IntroOPD2RN","WOD:IntroOPD2LN"],
		"Rooms":[["Diabetes Edu(2-1)",355,1],["Gyn Clinic(2-2)",357,2],["Diabetes Edu(2-3)",354,3],["Dietician(2-4)",356,4],["Dietician(2-5)",351,5],["GDM Exam(2-6)",353,6],["GDM Exam(2-7)",352,7],["Gyn Clinic(2-8)",350,8],["Retina Clinic(2-9)",349,9]],//Rooms ServiceId
		"AssessmentServiceId":358,//Assessment Room ServiciD
		"AssessmentQueueId":843
	},
	{
		"OPD":3,
		"UnitId":["WOD:IntroOPD3"],
		"Rooms":[["Exam Room 3-1",340,1],["Exam Room 3-2",341,2],["Exam Room 3-3",342,3],["Exam Room 3-4",343,4]],//Rooms ServiceId
		"AssessmentServiceId":340,
		"AssessmentQueueId":843,
	},
	{
		"OPD":4,
		"UnitId":["WOD:IntroOPD4R","WOD:IntroOPD4L","WOD:IntroOPD4RN","WOD:IntroOPD4LN","WOD:Intro17Test"],
		"Rooms":[["Exam Room 4-1",338,1],["Exam Room 4-2",337,2],["Exam Room 4-3",336,3],["Exam Room 4-4",339,4],["Exam Room 4-5",335,5],["Exam Room 4-6",334,6],["Exam Room 4-7",333,7]],//Rooms ServiceId
		"AssessmentServiceId":323,
		"AssessmentQueueId":794,
		"AssessmentServiceIdA":347,
		"AssessmentQueueIdA":845,
	},
	{
		"OPD":5,
		"UnitId":["WOD:IntroOPD5R","WOD:IntroOPD5L","WOD:OPD5R","WOD:OPD5L","WOD:OPD5RA","WOD:OPD5LA"],
		"Rooms":[["Exam Room 5-1",331,1],["Exam Room 5-2",330,2],["Exam Room 5-3",329,3],["Exam Room 5-5",328,5],["Exam Room 5-6",327,6],["Exam Room 5-7",326,7],["Exam Room 5-8",325,8],["Midwifery OPD5",332,0]],//Rooms ServiceId
		"AssessmentServiceId":324,
		"AssessmentQueueId":796,
		"AssessmentServiceIdA":348,
		"AssessmentQueueIdA":841,
	}
];

setTimeout(function(){
debugger;
	if(sessvars.state.workProfileName.toLowerCase().includes("reception")){
		document.getElementById("patientCheckInTab").style.display="block";
		document.getElementById("patientCheckInPanel").style.display="block";
	}
	else{
		document.getElementById("patientCheckInTab").style.display="none";
		document.getElementById("patientCheckInPanel").style.display="none";
	}
},600);

var bnjServiceList=[
    {
        "id": 29,
        "internalName": "100-Laboratory",
        "externalName": "100-Laboratory",
        "internalDescription": "100-Laboratory",
        "externalDescription": " المختبر (100)",
        "targetTransactionTime": 1200,
		"queueId":1,
		"appLetter":"",
        "starting":1,
        "Letter":"L",
        "startingNormal":200
    },
    {
        "id": 34,
        "internalName": "101-Male Treatment",
        "externalName": "101-Male Treatment",
        "internalDescription": "101-Male Treatment",
        "externalDescription": "غرفة العلاج - رجال (101)",
        "targetTransactionTime": 1200,
		"queueId":2,
		"appLetter":"",
        "starting":1,
        "Letter":"A",
        "startingNormal":2000
    },
    {
        "id": 30,
        "internalName": "102-Clinic Room",
        "externalName": "102-Clinic Room",
        "internalDescription": "102-Clinic Room",
        "externalDescription": "عيادة رقم (102)",
        "targetTransactionTime": 1200,
		"queueId":3,
		"apptQueueId":116,
		//"apptLateQueueId":120,
		"appLetter":"A",
		"starting":1,
        "Letter":"O",
        "startingNormal":100
    },
    {
        "id": 31,
        "internalName": "103-Clinic Room",
        "externalName": "103-Clinic Room",
        "internalDescription": "103-Clinic Room",
        "externalDescription": "عيادة رقم (103)",
        "targetTransactionTime": 1200,
		"queueId":4,
		"apptQueueId":117,
		"appLetter":"R",
		"starting":200,
        "Letter":"B",
        "startingNormal":0
    },
    {
        "id": 32,
        "internalName": "104-Clinic Room",
        "externalName": "104-Clinic Room",
        "internalDescription": "104-Clinic Room",
        "externalDescription": "عيادة رقم (104)",
        "targetTransactionTime": 1200,
		"queueId":5,
		"apptQueueId":118,
		"appLetter":"C",
		"starting":1,
        "Letter":"V",
        "startingNormal":100
    },
    {
        "id": 33,
        "internalName": "105-ECG",
        "externalName": "105-ECG",
        "internalDescription": "105-ECG",
        "externalDescription": "تخطيط القلب (105)",
        "targetTransactionTime": 1200,
		"queueId":6,
		"appLetter":"",
		"starting":1,
        "Letter":"A",
        "startingNormal":600
    },
    {
        "id": 35,
        "internalName": "106-Clinic Room",
        "externalName": "106-Clinic Room",
        "internalDescription": "106-Clinic Room",
        "externalDescription": "عيادة رقم (106)",
        "targetTransactionTime": 1200,
		"queueId":7,
		"apptQueueId":119,
		"appLetter":"D",
		"starting":1,
        "Letter":"W",
        "startingNormal":100
    },
    {
        "id": 36,
        "internalName": "107-Clinic XRay",
        "externalName": "107-Clinic XRay",
        "internalDescription": "107-Clinic XRay",
        "externalDescription": "عيادة الأشعة (107)",
        "targetTransactionTime": 1200,
		"queueId":8,
		"appLetter":"",
		"starting":1,
        "Letter":"X",
        "startingNormal":100
    },
    {
        "id": 37,
        "internalName": "108-Clinic Room",
        "externalName": "108-Clinic Room",
        "internalDescription": "108-Clinic Room",
        "externalDescription": "عيادة رقم (108)",
        "targetTransactionTime": 1200,
		"queueId":9,
		"apptQueueId":120,
		"appLetter":"E",
		"starting":1,
        "Letter":"N",
        "startingNormal":200
    },
    {
        "id": 38,
        "internalName": "109-Clinic Room",
        "externalName": "109-Clinic Room",
        "internalDescription": "109-Clinic Room",
        "externalDescription": "عيادة رقم (109)",
        "targetTransactionTime": 1200,
		"queueId":10,
		"apptQueueId":121,
		"appLetter":"F",
		"starting":1,
        "Letter":"Q",
        "startingNormal":200
    },
    {
        "id": 39,
        "internalName": "110-Clinic Room",
        "externalName": "110-Clinic Room",
        "internalDescription": "110-Clinic Room",
        "externalDescription": "عيادة رقم (110)",
        "targetTransactionTime": 1200,
		"queueId":11,
		"apptQueueId":122,
		"appLetter":"G",
		"starting":1,
        "Letter":"Y",
        "startingNormal":400
    },
    {
        "id": 40,
        "internalName": "111-Treatment room - Female",
        "externalName": "111-Treatment room - Female",
        "internalDescription": "111-Treatment room - Female",
        "externalDescription": "غرفة العلاج - نساء (111)",
        "targetTransactionTime": 1200,
		"queueId":12,
		"appLetter":"",
		"starting":1,
        "Letter":"B",
        "startingNormal":9998
    },
    {
        "id": 41,
        "internalName": "112-Clinic Room",
        "externalName": "112-Clinic Room",
        "internalDescription": "112-Clinic Room",
        "externalDescription": "عيادة رقم (112)",
        "targetTransactionTime": 1200,
		"queueId":13,
		"apptQueueId":123,
		"appLetter":"H",
		"starting":1,
        "Letter":"Z",
        "startingNormal":400
    },
    {
        "id": 42,
        "internalName": "113-Clinic Room",
        "externalName": "113-Clinic Room",
        "internalDescription": "113-Clinic Room",
        "externalDescription": "عيادة رقم (113)",
        "targetTransactionTime": 1200,
		"queueId":14,
		"apptQueueId":124,
		"appLetter":"I",
		"starting":1,
        "Letter":"L",
        "startingNormal":400
    },
    {
        "id": 43,
        "internalName": "114-Clinic Room",
        "externalName": "114-Clinic Room",
        "internalDescription": "114-Clinic Room",
        "externalDescription": "عيادة رقم (114)",
        "targetTransactionTime": 1200,
		"queueId":15,
		"apptQueueId":125,
		"appLetter":"J",
		"starting":1,
        "Letter":"O",
        "startingNormal":500
    },
    {
        "id": 44,
        "internalName": "115-ECG Room",
        "externalName": "115-ECG Room",
        "internalDescription": "115-ECG Room",
        "externalDescription": "تخطيط القلب (115)",
        "targetTransactionTime": 1200,
		"queueId":16,
		"appLetter":"",
		"starting":1,
        "Letter":"B",
        "startingNormal":600
    },
    {
        "id": 45,
        "internalName": "116-Clinic Room",
        "externalName": "116-Clinic Room",
        "internalDescription": "116-Clinic Room",
        "externalDescription": "عيادة رقم (116)",
        "targetTransactionTime": 1200,
		"queueId":17,
		"apptQueueId":126,
		"appLetter":"K",
		"starting":1,
        "Letter":"R",
        "startingNormal":400
    },
    {
        "id": 46,
        "internalName": "117-Clinic Room",
        "externalName": "117-Clinic Room",
        "internalDescription": "117-Clinic Room",
        "externalDescription": "عيادة رقم (117)",
        "targetTransactionTime": 1200,
		"queueId":171,
		"apptQueueId":18,
		"appLetter":"M",
		"starting":1,
        "Letter":"M",
        "startingNormal":0
    },
    {
        "id": 47,
        "internalName": "118-Clinic Room",
        "externalName": "118-Clinic Room",
        "internalDescription": "118-Clinic Room",
        "externalDescription": "عيادة رقم (118)",
        "targetTransactionTime": 1200,
		"queueId":19,
		"apptQueueId":127,
		"appLetter":"P",
		"starting":1,
        "Letter":"W",
        "startingNormal":400
    },
    {
        "id": 48,
        "internalName": "119-Clinic Room",
        "externalName": "119-Clinic Room",
        "internalDescription": "119-Clinic Room",
        "externalDescription": "عيادة رقم (119)",
        "targetTransactionTime": 1200,
		"queueId":20,
		"apptQueueId":128,
		"appLetter":"T",
		"starting":300,
        "Letter":"N",
        "startingNormal":600
    },
    {
        "id": 49,
        "internalName": "120-Clinic Room",
        "externalName": "120-Clinic Room",
        "internalDescription": "120-Clinic Room",
        "externalDescription": "عيادة رقم (120)",
        "targetTransactionTime": 1200,
		"queueId":22,
		"apptQueueId":129,
		"appLetter":"T",
		"starting":1,
        "Letter":"Q",
        "startingNormal":500
    },
    {
        "id": 50,
        "internalName": "121-Clinic Room",
        "externalName": "121-Clinic Room",
        "internalDescription": "121-Clinic Room",
        "externalDescription": "عيادة رقم (121)",
        "targetTransactionTime": 1200,
		"queueId":22,
		"apptQueueId":130,
		"appLetter":"I",
		"starting":100,
        "Letter":"O",
        "startingNormal":600
    },
    {
        "id": 51,
        "internalName": "122-Clinic Room",
        "externalName": "122-Clinic Room",
        "internalDescription": "122-Clinic Room",
        "externalDescription": "عيادة رقم (122)",
        "targetTransactionTime": 1200,
		"queueId":23,
		"apptQueueId":131,
		"appLetter":"H",
		"starting":100,
        "Letter":"L",
        "startingNormal":300
    },
    {
        "id": 52,
        "internalName": "123-Clinic Room",
        "externalName": "123-Clinic Room",
        "internalDescription": "123-Clinic Room",
        "externalDescription": "عيادة رقم (123)",
        "targetTransactionTime": 1200,
		"queueId":24,
		"apptQueueId":132,
		"appLetter":"G",
		"starting":100,
        "Letter":"Z",
        "startingNormal":300
    },
    {
        "id": 53,
        "internalName": "124-Clinic Room",
        "externalName": "124-Clinic Room",
        "internalDescription": "124-Clinic Room",
        "externalDescription": "عيادة رقم (124)",
        "targetTransactionTime": 1200,
		"queueId":25,
		"apptQueueId":133,
		"appLetter":"F",
		"starting":100,
        "Letter":"Y",
        "startingNormal":300
    },
    {
        "id": 54,
        "internalName": "125-Clinic Room",
        "externalName": "125-Clinic Room",
        "internalDescription": "125-Clinic Room",
        "externalDescription": "عيادة رقم (125)",
        "targetTransactionTime": 1200,
		"queueId":26,
		"apptQueueId":134,
		"appLetter":"E",
		"starting":100,
        "Letter":"M",
        "startingNormal":100
    },
    {
        "id": 55,
        "internalName": "126-Clinic Room",
        "externalName": "126-Clinic Room",
        "internalDescription": "126-Clinic Room",
        "externalDescription": "عيادة رقم (126)",
        "targetTransactionTime": 1200,
		"queueId":27,
		"apptQueueId":135,
		"appLetter":"D",
		"starting":100,
        "Letter":"W",
        "startingNormal":300
    },
    {
        "id": 56,
        "internalName": "127-Clinic Room",
        "externalName": "127-Clinic Room",
        "internalDescription": "127-Clinic Room",
        "externalDescription": " عيادة رقم (127)",
        "targetTransactionTime": 1200,
		"queueId":28,
		"appLetter":"",
		"starting":1,
        "Letter":"C",
        "startingNormal":800
    },
    {
        "id": 57,
        "internalName": "128-Shockwave Therapy",
        "externalName": "128-Shockwave Therapy",
        "internalDescription": "128-Shockwave Therapy",
        "externalDescription": " العلاج بالموجات فوق الصوتية (128)",
        "targetTransactionTime": 1200,
		"queueId":29,
		"appLetter":"",
		"starting":1,
        "Letter":"C",
        "startingNormal":900
    },
    {
        "id": 58,
        "internalName": "129-Plaster room - Male",
        "externalName": "129-Plaster room - Male",
        "internalDescription": "129-Plaster room - Male",
        "externalDescription": "غرفة الجبس - رجال (129)",
        "targetTransactionTime": 1200,
		"queueId":30,
		"appLetter":"",
		"starting":1,
        "Letter":"D",
        "startingNormal":0
    },
    {
        "id": 59,
        "internalName": "130-Clinical Pharmacy",
        "externalName": "130-Clinical Pharmacy",
        "internalDescription": "130-Clinical Pharmacy",
        "externalDescription": "الصيدلة الإكلينيكية - (130)",
        "targetTransactionTime": 1200,
		"queueId":31,
		"appLetter":"",
		"starting":1,
        "Letter":"D",
        "startingNormal":8900
    },
    {
        "id": 60,
        "internalName": "131-Clinic Room",
        "externalName": "131-Clinic Room",
        "internalDescription": "131-Clinic Room",
        "externalDescription": "عيادة رقم (131)",
        "targetTransactionTime": 1200,
		"queueId":32,
		"apptQueueId":136,
		"appLetter":"C",
		"starting":100,
        "Letter":"V",
        "startingNormal":300
    },
    {
        "id": 61,
        "internalName": "132-Clinic Room",
        "externalName": "132-Clinic Room",
        "internalDescription": "132-Clinic Room",
        "externalDescription": "عيادة رقم (132)",
        "targetTransactionTime": 1200,
		"queueId":33,
		"apptQueueId":137,
		"appLetter":"B",
		"starting":100,
        "Letter":"R",
        "startingNormal":300
    },
    {
        "id": 62,
        "internalName": "133-Clinic Room",
        "externalName": "133-Clinic Room",
        "internalDescription": "133-Clinic Room",
        "externalDescription": "عيادة رقم (133)",
        "targetTransactionTime": 1200,
		"queueId":34,
		"apptQueueId":138,
		"appLetter":"A",
		"starting":100,
        "Letter":"J",
        "startingNormal":300
    },
    {
        "id": 63,
        "internalName": "134-Plaster room - Female",
        "externalName": "134-Plaster room - Female",
        "internalDescription": "134-Plaster room - Female",
        "externalDescription": "غرفة الجبس - نساء (134)",
        "targetTransactionTime": 1200,
		"queueId":35,
		"appLetter":"",
		"starting":1,
        "Letter":"D",
        "startingNormal":500
    },
    {
        "id": 64,
        "internalName": "135-Multipurpose room - Female",
        "externalName": "135-Multipurpose room - Female",
        "internalDescription": "135-Multipurpose room - Female",
        "externalDescription": "غرفة متعددة الأغراض - نساء (135)",
        "targetTransactionTime": 1200,
		"queueId":36,
		"appLetter":"",
		"starting":1,
        "Letter":"D",
        "startingNormal":600
    },
    {
        "id": 78,
        "internalName": "201-Clinic Room",
        "externalName": "201-Clinic Room",
        "internalDescription": "201-Clinic Room",
        "externalDescription": "عيادة رقم (201)",
        "targetTransactionTime": 1200,
		"queueId":37,
		"apptQueueId":139,
		"appLetter":"E",
		"starting":200,
        "Letter":"K",
        "startingNormal":100
    },
    {
        "id": 79,
        "internalName": "202-Clinic Room",
        "externalName": "202-Clinic Room",
        "internalDescription": "202-Clinic Room",
        "externalDescription": "عيادة رقم (202)",
        "targetTransactionTime": 1200,
		"queueId":38,
		"apptQueueId":140,
		"appLetter":"F",
		"starting":200,
        "Letter":"N",
        "startingNormal":0
    },
    {
        "id": 80,
        "internalName": "203-Clinic Room",
        "externalName": "203-Clinic Room",
        "internalDescription": "203-Clinic Room",
        "externalDescription": "عيادة رقم (203)",
        "targetTransactionTime": 1200,
		"queueId":39,
		"apptQueueId":141,
		"appLetter":"G",
		"starting":200,
        "Letter":"V",
        "startingNormal":0
    },
    {
        "id": 81,
        "internalName": "204-Clinic Room",
        "externalName": "204-Clinic Room",
        "internalDescription": "204-Clinic Room",
        "externalDescription": "عيادة رقم (204)",
        "targetTransactionTime": 1200,
		"queueId":40,
		"apptQueueId":142,
		"appLetter":"H",
		"starting":200,
        "Letter":"W",
        "startingNormal":2015
    },
    {
        "id": 82,
        "internalName": "205-Clinic Room",
        "externalName": "205-Clinic Room",
        "internalDescription": "205-Clinic Room",
        "externalDescription": "عيادة رقم (205)",
        "targetTransactionTime": 1200,
		"queueId":41,
		"apptQueueId":143,
		"appLetter":"E",
		"starting":4566,
        "Letter":"E",
        "startingNormal":7895
    },
    {
        "id": 83,
        "internalName": "206-Clinic Room",
        "externalName": "206-Clinic Room",
        "internalDescription": "206-Clinic Room",
        "externalDescription": "عيادة رقم (206)",
        "targetTransactionTime": 1200,
		"queueId":42,
		"apptQueueId":144,
		"appLetter":"E",
		"starting":6011,
        "Letter":"E",
        "startingNormal":500
    },
    {
        "id": 84,
        "internalName": "207-Clinic Room",
        "externalName": "207-Clinic Room",
        "internalDescription": "207-Clinic Room",
        "externalDescription": "عيادة رقم (207)",
        "targetTransactionTime": 1200,
		"queueId":43,
		"apptQueueId":145,
		"appLetter":"E",
		"starting":300,
        "Letter":"E",
        "startingNormal":350
    },
    {
        "id": 88,
        "internalName": "208-Clinic Room",
        "externalName": "208-Clinic Room",
        "internalDescription": "208-Clinic Room",
        "externalDescription": "عيادة رقم (208)",
        "targetTransactionTime": 1200,
		"queueId":44,
		"appLetter":"",
		"starting":1,
        "Letter":"E",
        "startingNormal":400
    },
    {
        "id": 89,
        "internalName": "209- Laboratory",
        "externalName": "209 - Laboratory",
        "internalDescription": "209 - Laboratory",
        "externalDescription": "209 - Laboratory",
        "targetTransactionTime": 1200,
		"queueId":45,
		"appLetter":"",
		"starting":1,
        "Letter":"L",
        "startingNormal":0
    },
    {
        "id": 90,
        "internalName": "210- Injection Room",
        "externalName": "210- Injection Room",
        "internalDescription": "210- Injection Room",
        "externalDescription": "210- Injection Room",
        "targetTransactionTime": 1200,
		"queueId":46,
		"appLetter":"",
		"starting":1,
        "Letter":"E",
        "startingNormal":600
    },
    {
        "id": 91,
        "internalName": "211-Clinic Room",
        "externalName": "211-Clinic Room",
        "internalDescription": "211-Clinic Room",
        "externalDescription": "عيادة رقم (211)",
        "targetTransactionTime": 1200,
		"queueId":47,
		"apptQueueId":148,
		"appLetter":"I",
		"starting":200,
        "Letter":"N",
        "startingNormal":300
    },
    {
        "id": 92,
        "internalName": "212-Clinic Room",
        "externalName": "212-Clinic Room",
        "internalDescription": "212-Clinic Room",
        "externalDescription": "عيادة رقم (212)",
        "targetTransactionTime": 1200,
		"queueId":48,
		"apptQueueId":149,
		"appLetter":"J",
		"starting":200,
        "Letter":"Q",
        "startingNormal":300
    },
    {
        "id": 93,
        "internalName": "213-Clinic Room",
        "externalName": "213-Clinic Room",
        "internalDescription": "213-Clinic Room",
        "externalDescription": "عيادة رقم (213)",
        "targetTransactionTime": 1200,
		"queueId":49,
		"apptQueueId":150,
		"appLetter":"E",
		"starting":900,
        "Letter":"E",
        "startingNormal":950
    },
    {
        "id": 94,
        "internalName": "214-Clinic Room",
        "externalName": "214-Clinic Room",
        "internalDescription": "214-Clinic Room",
        "externalDescription": "عيادة رقم (214)",
        "targetTransactionTime": 1200,
		"queueId":50,
		"apptQueueId":151,
		"appLetter":"F",
		"starting":1789,
        "Letter":"F",
        "startingNormal":2589
    },
    {
        "id": 95,
        "internalName": "215-Clinic Room",
        "externalName": "215-Clinic Room",
        "internalDescription": "215-Clinic Room",
        "externalDescription": "عيادة رقم (215)",
        "targetTransactionTime": 1200,
		"queueId":51,
		"apptQueueId":152,
		"appLetter":"A",
		"starting":200,
        "Letter":"O",
        "startingNormal":400
    },
    {
        "id": 96,
        "internalName": "216-Clinic Room",
        "externalName": "216-Clinic Room",
        "internalDescription": "216-Clinic Room",
        "externalDescription": "عيادة رقم (216)",
        "targetTransactionTime": 1200,
		"queueId":52,
		"apptQueueId":153,
		"appLetter":"B",
		"starting":200,
        "Letter":"P",
        "startingNormal":100
    },
    {
        "id": 97,
        "internalName": "217-Clinic Room",
        "externalName": "217-Clinic Room",
        "internalDescription": "217-Clinic Room",
        "externalDescription": "عيادة رقم (217)",
        "targetTransactionTime": 1200,
		"queueId":53,
		"apptQueueId":166,
		"appLetter":"C",
		"starting":200,
        "Letter":"M",
        "startingNormal":200
    },
    {
        "id": 98,
        "internalName": "218-Clinic Room",
        "externalName": "218-Clinic Room",
        "internalDescription": "218-Clinic Room",
        "externalDescription": "عيادة رقم (218)",
        "targetTransactionTime": 1200,
		"queueId":54,
		"apptQueueId":167,
		"appLetter":"D",
		"starting":200,
        "Letter":"W",
        "startingNormal":500
    },
    {
        "id": 99,
        "internalName": "219-Clinic Room",
        "externalName": "219-Clinic Room",
        "internalDescription": "219-Clinic Room",
        "externalDescription": "عيادة رقم (219)",
        "targetTransactionTime": 1200,
		"queueId":55,
		"apptQueueId":168,
		"appLetter":"F",
		"starting":550,
        "Letter":"F",
        "startingNormal":500
    },
    {
        "id": 100,
        "internalName": "220-Clinic Room",
        "externalName": "220-Clinic Room",
        "internalDescription": "220-Clinic Room",
        "externalDescription": "عيادة رقم (220)",
        "targetTransactionTime": 1200,
		"queueId":56,
		"apptQueueId":154,
		"appLetter":"F",
		"starting":600,
        "Letter":"F",
        "startingNormal":650
    },
    {
        "id": 101,
        "internalName": "221-Clinic Room",
        "externalName": "221-Clinic Room",
        "internalDescription": "221-Clinic Room",
        "externalDescription": "عيادة رقم (221)",
        "targetTransactionTime": 1200,
		"queueId":57,
		"apptQueueId":155,
		"appLetter":"F",
		"starting":700,
        "Letter":"F",
        "startingNormal":750
    },
    {
        "id": 70,
        "internalName": "CT Preperation",
        "externalName": "CT Preperation",
        "internalDescription": "CT Preperation",
        "externalDescription": "إعدادات الأشعة المقطعية",
        "targetTransactionTime": 1200,
		"queueId":58,
		"appLetter":"",
		"starting":1,
        "Letter":"F",
        "startingNormal":800
    },
    {
        "id": 71,
        "internalName": "CT Room",
        "externalName": "CT Room",
        "internalDescription": "CT Room",
        "externalDescription": "غرفة الأشعة المقطعية",
        "targetTransactionTime": 1200,
		"queueId":59,
		"appLetter":"",
		"starting":1,
        "Letter":"F",
        "startingNormal":900
    },
    {
        "id": 72,
        "internalName": "MRI",
        "externalName": "MRI",
        "internalDescription": "MRI",
        "externalDescription": "اشعة الرنين",
        "targetTransactionTime": 1200,
		"queueId":60,
		"appLetter":"",
		"starting":1,
        "Letter":"G",
        "startingNormal":19999
    },
    {
        "id": 65,
        "internalName": "X-Ray 1",
        "externalName": "X-Ray 1",
        "internalDescription": "X-Ray 1",
        "externalDescription": "غرفة الأشعة (1)",
        "targetTransactionTime": 1200,
		"queueId":61,
		"appLetter":"",
		"starting":1,
        "Letter":"X",
        "startingNormal":0
    },
    {
        "id": 66,
        "internalName": "X-Ray 2",
        "externalName": "X-Ray 2",
        "internalDescription": "X-Ray 2",
        "externalDescription": "غرفة الأشعة (2)",
        "targetTransactionTime": 1200,
		"queueId":62,
		"appLetter":"",
		"starting":1,
        "Letter":"P",
        "startingNormal":200
    },
    {
        "id": 67,
        "internalName": "X-Ray 3",
        "externalName": "X-Ray 3",
        "internalDescription": "X-Ray 3",
        "externalDescription": "غرفة الأشعة (3)",
        "targetTransactionTime": 1200,
		"queueId":63,
		"appLetter":"",
		"starting":1,
        "Letter":"T",
        "startingNormal":100
    },
    {
        "id": 68,
        "internalName": "X-Ray 4",
        "externalName": "X-Ray 4",
        "internalDescription": "X-Ray 4",
        "externalDescription": "غرفة الأشعة (4)",
        "targetTransactionTime": 1200,
		"queueId":64,
		"appLetter":"",
		"starting":1,
        "Letter":"Z",
        "startingNormal":200
    },
    {
        "id": 69,
        "internalName": "X-Ray EOS 5",
        "externalName": "X-Ray EOS 5",
        "internalDescription": "X-Ray EOS 5",
        "externalDescription": "غرفة الأشعة (5)",
        "targetTransactionTime": 1200,
		"queueId":65,
		"appLetter":"",
		"starting":1,
        "Letter":"Y",
        "startingNormal":200
    },
    {
        "id": 5,
        "internalName": "Reception2-Female",
        "externalName": "Reception2-Female - استقبال 2  - نساء",
        "internalDescription": "Reception2-Female",
        "externalDescription": " استقبال 2  - نساء",
        "targetTransactionTime": 1200,
		"queueId":66,
		"appLetter":"",
		"starting":1,
        "Letter":"H",
        "startingNormal":7898
    },
    {
        "id": 4,
        "internalName": "Reception2-Male",
        "externalName": "Reception2-Male - استقبال 2 - رجال",
        "internalDescription": "Reception2-Male",
        "externalDescription": " استقبال 2 - رجال",
        "targetTransactionTime": 1200,
		"queueId":67,
		"appLetter":"",
		"starting":1,
        "Letter":"J",
        "startingNormal":7215
    },
    {
        "id": 6,
        "internalName": "Reception2-Qatari-Female",
        "externalName": "Reception2-Qatari-Female - استقبال 2 - قطريين - نساء",
        "internalDescription": "Reception2-Qatari-Female",
        "externalDescription": " استقبال 2 - قطريين - نساء",
        "targetTransactionTime": 1200,
		"queueId":68,
		"appLetter":"",
		"starting":1,
        "Letter":"K",
        "startingNormal":4789
    },
    {
        "id": 8,
        "internalName": "Reception2-Qatari-Male",
        "externalName": "Reception2-Qatari-Male - استقبال 2 - قطريين - رجال",
        "internalDescription": "Reception2-Qatari-Male",
        "externalDescription": " استقبال 2 - قطريين - رجال",
        "targetTransactionTime": 1200,
		"queueId":69,
		"appLetter":"",
		"starting":1,
        "Letter":"L",
        "startingNormal":14999
    },
    {
        "id": 2,
        "internalName": "Reception2-Special Care",
        "externalName": "Reception2-Male - استقبال 2 - حالات خاصة",
        "internalDescription": "Reception2-Special Care",
        "externalDescription": " استقبال 2 - حالات خاصة",
        "targetTransactionTime": 1200,
		"queueId":70,
		"appLetter":"",
		"starting":1,
        "Letter":"M",
        "startingNormal":9997
    },
    {
        "id": 9,
        "internalName": "Reception3",
        "externalName": "Reception3- استقبال 3",
        "internalDescription": "Reception3",
        "externalDescription": "استقبال 3",
        "targetTransactionTime": 1200,
		"queueId":71,
		"appLetter":"",
		"starting":1,
        "Letter":"S",
        "startingNormal":100
    },
    {
        "id": 10,
        "internalName": "Reception3-Qatari",
        "externalName": "Reception3-Qatari - استقبال 3 - قطريين",
        "internalDescription": "Reception3-Qatari",
        "externalDescription": "استقبال 3 - قطريين",
        "targetTransactionTime": 1200,
		"queueId":72,
		"appLetter":"",
		"starting":1,
        "Letter":"O",
        "startingNormal":1999
    },
    {
        "id": 11,
        "internalName": "Reception3-Special Care",
        "externalName": "Reception3-Special Care - استقبال 3 - حالات خاصة",
        "internalDescription": "Reception3-Special Care",
        "externalDescription": " استقبال 3 - حالات خاصة",
        "targetTransactionTime": 1200,
		"queueId":73,
		"appLetter":"",
		"starting":1,
        "Letter":"P",
        "startingNormal":1999
    },
    {
        "id": 14,
        "internalName": "Reception4",
        "externalName": "Reception4- استقبال 4",
        "internalDescription": "Reception4",
        "externalDescription": "استقبال 4",
        "targetTransactionTime": 1200,
		"queueId":74,
		"appLetter":"",
		"starting":1,
        "Letter":"Q",
        "startingNormal":19999
    },
    {
        "id": 13,
        "internalName": "Reception4-Qatari",
        "externalName": "Reception4-Qatari - استقبال 4 - قطريين",
        "internalDescription": "Reception4-Qatari",
        "externalDescription": " استقبال 4 - قطريين",
        "targetTransactionTime": 1200,
		"queueId":75,
		"appLetter":"",
		"starting":1,
        "Letter":"R",
        "startingNormal":9999
    },
    {
        "id": 12,
        "internalName": "Reception4-Special Care",
        "externalName": "Reception4-Special Care - استقبال 4 - حالات خاصة",
        "internalDescription": "Reception4-Special Care",
        "externalDescription": " استقبال 4 - حالات خاصة",
        "targetTransactionTime": 1200,
		"queueId":76,
		"appLetter":"",
		"starting":1,
        "Letter":"S",
        "startingNormal":99998
    },
    {
        "id": 26,
        "internalName": "Reception5",
        "externalName": "Reception5- استقبال 5",
        "internalDescription": "Reception5",
        "externalDescription": " استقبال 5",
        "targetTransactionTime": 1200,
		"queueId":77,
		"appLetter":"",
		"starting":1,
        "Letter":"T",
        "startingNormal":1999
    },
    {
        "id": 27,
        "internalName": "Reception5-Qatari",
        "externalName": "Reception5-Qatari - استقبال 5 - قطريين",
        "internalDescription": "Reception5-Qatari",
        "externalDescription": " استقبال 5 - قطريين",
        "targetTransactionTime": 1200,
		"queueId":78,
		"appLetter":"",
		"starting":1,
        "Letter":"U",
        "startingNormal":0
    },
    {
        "id": 28,
        "internalName": "Reception5-Special Care",
        "externalName": "Reception5-Special Care - استقبال 5 - حالات خاصة",
        "internalDescription": "Reception5-Special Care",
        "externalDescription": "استقبال 5 - حالات خاصة",
        "targetTransactionTime": 1200,
		"queueId":79,
		"appLetter":"",
		"starting":1,
        "Letter":"V",
        "startingNormal":498
    },
    {
        "id": 16,
        "internalName": "Reception6-XRay-Female",
        "externalName": "Reception6-XRay-Male - استقبال 6 - اشعة - نساء",
        "internalDescription": "Reception6-XRay-Female",
        "externalDescription": "استقبال 6 - اشعة - نساء",
        "targetTransactionTime": 1200,
		"queueId":80,
		"appLetter":"",
		"starting":1,
        "Letter":"W",
        "startingNormal":0
    },
    {
        "id": 15,
        "internalName": "Reception6-XRay-Male",
        "externalName": "Reception6-XRay-Male - استقبال 6 - اشعة - رجال",
        "internalDescription": "Reception6-XRay-Male",
        "externalDescription": "استقبال 6 - اشعة - رجال",
        "targetTransactionTime": 1200,
		"queueId":81,
		"appLetter":"",
		"starting":1,
        "Letter":"X",
        "startingNormal":19999
    },
    {
        "id": 17,
        "internalName": "Reception7-MRI-Female",
        "externalName": "Reception7-MRI-Female - استقبال 7 - اشعة رنين - نساء",
        "internalDescription": "Reception7-MRI-Female",
        "externalDescription": " استقبال 7 - اشعة رنين - نساء",
        "targetTransactionTime": 1200,
		"queueId":82,
		"appLetter":"",
		"starting":1,
        "Letter":"Y",
        "startingNormal":1999
    },
    {
        "id": 18,
        "internalName": "Reception7-MRI-Male",
        "externalName": "Reception7-MRI-Female - استقبال 7 - اشعة رنين - رجال",
        "internalDescription": "Reception7-MRI-Male",
        "externalDescription": "استقبال 7 - اشعة رنين - رجال",
        "targetTransactionTime": 1200,
		"queueId":83,
		"appLetter":"",
		"starting":1,
        "Letter":"Z",
        "startingNormal":19999
    },
    {
        "id": 20,
        "internalName": "Reception8-Female",
        "externalName": "Reception8-Male - استقبال 8  - نساء",
        "internalDescription": "Reception8-Female",
        "externalDescription": " استقبال 8  - نساء",
        "targetTransactionTime": 1200,
		"queueId":84,
		"appLetter":"",
		"starting":1,
        "Letter":"H",
        "startingNormal":500
    },
    {
        "id": 24,
        "internalName": "Reception8-Qatari-Female",
        "externalName": "Reception8-Qatari-Female - استقبال 8 - قطريين - نساء",
        "internalDescription": "Reception8-Qatari-Female",
        "externalDescription": " استقبال 8 - قطريين - نساء",
        "targetTransactionTime": 1200,
		"queueId":85,
		"appLetter":"",
		"starting":1,
        "Letter":"I",
        "startingNormal":500
    },
    {
        "id": 22,
        "internalName": "Reception8-Male",
        "externalName": "Reception8-Male - استقبال 8  - رجال",
        "internalDescription": "Reception8-Male",
        "externalDescription": " استقبال 8  - رجال",
        "targetTransactionTime": 1200,
		"queueId":86,
		"appLetter":"",
		"starting":1,
        "Letter":"J",
        "startingNormal":500
    },
    {
        "id": 23,
        "internalName": "Reception8-Qatari-Male",
        "externalName": "Reception8-Qatari-Female - استقبال 8 - قطريين - رجال",
        "internalDescription": "Reception8-Qatari-Male",
        "externalDescription": " استقبال 8 - قطريين - رجال",
        "targetTransactionTime": 1200,
		"queueId":87,
		"appLetter":"",
		"starting":1,
        "Letter":"K",
        "startingNormal":500
    },
    {
        "id": 25,
        "internalName": "Reception8-Special Care",
        "externalName": "Reception8-Male - استقبال 8 - حالات خاصة",
        "internalDescription": "Reception8-Special Care",
        "externalDescription": " استقبال 8 - حالات خاصة",
        "targetTransactionTime": 1200,
		"queueId":88,
		"appLetter":"",
		"starting":1,
        "Letter":"L",
        "startingNormal":500
    },
    {
        "id": 77,
        "internalName": "Reception9-Female",
        "externalName": "Reception9-female - استقبال 9 - نساء",
        "internalDescription": "Reception9-Female",
        "externalDescription": "استقبال 9 - نساء",
        "targetTransactionTime": 1200,
		"queueId":89,
		"appLetter":"",
		"starting":1,
        "Letter":"M",
        "startingNormal":500
    },
    {
        "id": 76,
        "internalName": "Reception9-Male",
        "externalName": "Reception9-Male - استقبال 9 - رجال",
        "internalDescription": "Reception9-Male",
        "externalDescription": "استقبال 9 - رجال",
        "targetTransactionTime": 1200,
		"queueId":90,
		"appLetter":"",
		"starting":1,
        "Letter":"N",
        "startingNormal":500
    },
    {
        "id": 75,
        "internalName": "Reception9-Qatari-Female",
        "externalName": "Reception9-Qatari-Female -  استقبال 9 - قطريين - نساء",
        "internalDescription": "Reception9-Qatari-Female",
        "externalDescription": " استقبال 9 - قطريين - نساء",
        "targetTransactionTime": 1200,
		"queueId":91,
		"appLetter":"",
		"starting":1,
        "Letter":"O",
        "startingNormal":9000
    },
    {
        "id": 74,
        "internalName": "Reception9-Qatari-Male",
        "externalName": "Reception9-Qatari-Male - استقبال 9 - قطريين - رجال",
        "internalDescription": "Reception9-Qatari-Male",
        "externalDescription": "استقبال 9 - قطريين - رجال",
        "targetTransactionTime": 1200,
		"queueId":92,
		"appLetter":"",
		"starting":1,
        "Letter":"P",
        "startingNormal":500
    },
    {
        "id": 73,
        "internalName": "Reception9-Special Care",
        "externalName": "Reception9-Special Care - استقبال 9 - حالات خاصة",
        "internalDescription": "Reception9-Special Care",
        "externalDescription": "استقبال 9 - حالات خاصة",
        "targetTransactionTime": 1200,
		"queueId":93,
		"appLetter":"",
		"starting":1,
        "Letter":"Q",
        "startingNormal":500
    },
    {
        "id": 103,
        "internalName": "Pharmacy - Non Qatari",
        "externalName": "Pharmacy - Non Qatari",
        "internalDescription": "NQatari",
        "externalDescription": "الصيدلية غير قطريين",
        "targetTransactionTime": 1200,
		"queueId":94,
		"appLetter":"",
		"starting":1,
        "Letter":"R",
        "startingNormal":0
    },
    {
        "id": 105,
        "internalName": "Pharmacy",
        "externalName": "Pharmacy ",
        "internalDescription": null,
        "externalDescription": null,
        "targetTransactionTime": 1200,
		"queueId":95,
		"appLetter":"",
		"starting":1,
        "Letter":"Y",
        "startingNormal":998
    },
    {
        "id": 104,
        "internalName": "Pharmacy Female - Non Qatari",
        "externalName": "Pharmacy Female - Non Qatari",
        "internalDescription": "OthersFemaleNonQatari",
        "externalDescription": "الصيدلية غير قطريات - نساء",
        "targetTransactionTime": 1200,
		"queueId":96,
		"appLetter":"",
		"starting":1,
        "Letter":"Y",
        "startingNormal":751
    },
    {
        "id": 102,
        "internalName": "Pharmacy - Qatari",
        "externalName": "Pharmacy - Qatari ",
        "internalDescription": "Qatari",
        "externalDescription": "الصيدلية قطريين ",
        "targetTransactionTime": 1200,
		"queueId":97,
		"appLetter":"",
		"starting":1,
        "Letter":"Q",
        "startingNormal":0
    },
    {
        "id": 106,
        "internalName": "Cashier Non-Qatari",
        "externalName": "Cashier Non-Qatari",
        "internalDescription": "OthersMale",
        "externalDescription": "Cashier - الصندوق",
        "targetTransactionTime": 1200,
		"queueId":98,
		"appLetter":"",
		"starting":1,
        "Letter":"Y",
        "startingNormal":0
    },
    {
        "id": 107,
        "internalName": "Cashier Qatari",
        "externalName": "Cashier Qatari",
        "internalDescription": "Othersmale",
        "externalDescription": "Cashier - الصندوق",
        "targetTransactionTime": 1200,
		"queueId":99,
		"appLetter":"",
		"starting":1,
        "Letter":"Z",
        "startingNormal":0
    },
    {
        "id": 108,
        "internalName": "222-Clinic Room",
        "externalName": "222-Clinic Room",
        "internalDescription": "222-Clinic Room",
        "externalDescription": "عيادة رقم (222)",
        "targetTransactionTime": 1200,
		"queueId":100,
		"apptQueueId":156,
		"appLetter":"W",
		"starting":550,
        "Letter":"W",
        "startingNormal":600
    },
    {
        "id": 109,
        "internalName": "223-Male Plaster Room",
        "externalName": "223-Male Plaster Room",
        "internalDescription": "223-Male Plaster Room",
        "externalDescription": "عيادة رقم (223)",
        "targetTransactionTime": 1200,
		"queueId":101,
		"appLetter":"",
		"starting":1,
        "Letter":"W",
        "startingNormal":700
    },
    {
        "id": 110,
        "internalName": "205 new -Clinic Room",
        "externalName": "205 new -Clinic Room",
        "internalDescription": "205-Clinic Room",
        "externalDescription": "عيادة رقم (205)",
        "targetTransactionTime": 1200,
		"queueId":0,
		"appLetter":"W",
		"starting":900,
        "Letter":"W",
        "startingNormal":950
    },
    {
        "id": 111,
        "internalName": "Recption 2 Walk-in",
        "externalName": "Recption 2 Walk-in",
        "internalDescription": "Recption 2 Walk-in",
        "externalDescription": "Recption 2 Walk-in",
        "targetTransactionTime": 1200,
		"queueId":103,
		"appLetter":"",
		"starting":1,
        "Letter":"",
        "startingNormal":2901
    },
    {
        "id": 112,
        "internalName": "Recption 3 Walk-in",
        "externalName": "Recption 3 Walk-in",
        "internalDescription": "Recption 3 Walk-in",
        "externalDescription": "Recption 3 Walk-in",
        "targetTransactionTime": 1200,
		"queueId":104,
		"appLetter":"",
		"starting":1,
        "Letter":"",
        "startingNormal":3901
    },
    {
        "id": 113,
        "internalName": "Recption 4 Walk-in",
        "externalName": "Recption 4 Walk-in",
        "internalDescription": "Recption 4 Walk-in",
        "externalDescription": "Recption 4 Walk-in",
        "targetTransactionTime": 1200,
		"queueId":105,
		"appLetter":"",
		"starting":1,
        "Letter":"",
        "startingNormal":4901
    },
    {
        "id": 114,
        "internalName": "Recption 5 Walk-in",
        "externalName": "Recption 5 Walk-in",
        "internalDescription": "Recption 5 Walk-in",
        "externalDescription": "Recption 5 Walk-in",
        "targetTransactionTime": 1200,
		"queueId":106,
		"appLetter":"",
		"starting":1,
        "Letter":"",
        "startingNormal":5901
    },
    {
        "id": 115,
        "internalName": "Recption 8 Walk-in",
        "externalName": "Recption 8 Walk-in",
        "internalDescription": "Recption 8 Walk-in",
        "externalDescription": "Recption 8 Walk-in",
        "targetTransactionTime": 1200,
		"queueId":107,
		"appLetter":"",
		"starting":1,
        "Letter":"",
        "startingNormal":8901
    },
    {
        "id": 116,
        "internalName": "Recption 9 Walk-in",
        "externalName": "Recption 9 Walk-in",
        "internalDescription": "Recption 9 Walk-in",
        "externalDescription": "Recption 9 Walk-in",
        "targetTransactionTime": 1200,
		"queueId":108,
		"appLetter":"",
		"starting":1,
        "Letter":"",
        "startingNormal":9901
    },
    {
        "id": 117,
        "internalName": "Pharmacy Consultation",
        "externalName": "Pharmacy Consultation",
        "internalDescription": "Pharmacy Consultation",
        "externalDescription": "الاستشارات الصيدلية",
        "targetTransactionTime": 1200,
		"queueId":109,
		"appLetter":"",
		"starting":1,
        "Letter":"",
        "startingNormal":1000
    },
    {
        "id": 118,
        "internalName": "Satellite Pharmacy",
        "externalName": "Satellite Pharmacy",
        "internalDescription": "Satellite Pharmacy",
        "externalDescription": "الصيدلية",
        "targetTransactionTime": 1200,
		"queueId":110,
		"appLetter":"",
		"starting":1,
        "Letter":"",
        "startingNormal":0
    },
    {
        "id": 119,
        "internalName": "Ultra Sound",
        "externalName": "Ultra Sound",
        "internalDescription": "Ultra Sound\n",
        "externalDescription": "الموجات فوق الصوتية",
        "targetTransactionTime": 1200,
		"queueId":111,
		"appLetter":"",
		"starting":1,
        "Letter":"",
        "startingNormal":100
    },
    {
        "id": 120,
        "internalName": "Prostatic",
        "externalName": "Prostatic",
        "internalDescription": "Prostatic",
        "externalDescription": "Prostatic",
        "targetTransactionTime": 1200,
		"queueId":112,
		"appLetter":"",
		"starting":1,
        "Letter":"",
        "startingNormal":200
    },
    {
        "id": 121,
        "internalName": "138-Physiotherapy",
        "externalName": "138-Physiotherapy",
        "internalDescription": "138-Physiotherapy",
        "externalDescription": "العلاج الطبيعي (138)",
        "targetTransactionTime": 1200,
		"queueId":113,
		"appLetter":"",
		"starting":1,
        "Letter":"",
        "startingNormal":300
    },
    {
        "id": 122,
        "internalName": "139-Physiotherapy",
        "externalName": "139-Physiotherapy",
        "internalDescription": "139-Physiotherapy",
        "externalDescription": "العلاج الطبيعي (139)",
        "targetTransactionTime": 1200,
		"queueId":114,
		"appLetter":"",
		"starting":1,
        "Letter":"",
        "startingNormal":400
    },
    {
        "id": 123,
        "internalName": "MRI Preperation",
        "externalName": "MRI Preperation",
        "internalDescription": "MRI Preperation",
        "externalDescription": "إعدادات أشعة الرنين",
        "targetTransactionTime": 1200,
		"queueId":115,
		"appLetter":"",
		"starting":1,
        "Letter":"",
        "startingNormal":500
    },
    {
        "id": 124,
        "internalName": "Post Surgery Appointment",
        "externalName": "Help Desk",
        "internalDescription": "Post Surgery Appointment",
        "externalDescription": "بعد الجراحة ",
        "targetTransactionTime": 1200,
		"queueId":0,
		"appLetter":"",
		"starting":1,
        "Letter":"",
        "startingNormal":600
    },
    {
        "id": 125,
        "internalName": "Post Surgery Rec 2",
        "externalName": "Post Surgery Rec 2",
        "internalDescription": "Post Surgery Rec 2",
        "externalDescription": "بعد الجراحة ",
        "targetTransactionTime": 1200,
		"queueId":160,
		"appLetter":"",
		"starting":1,
        "Letter":"",
        "startingNormal":700
    },
    {
        "id": 126,
        "internalName": "Post Surgery Rec 3",
        "externalName": "Post Surgery Rec 3",
        "internalDescription": "Post Surgery Rec 3",
        "externalDescription": "بعد الجراحة ",
        "targetTransactionTime": 1200,
		"queueId":161,
		"appLetter":"",
		"starting":1,
        "Letter":"",
        "startingNormal":751
    },
    {
        "id": 127,
        "internalName": "Post Surgery Rec 4",
        "externalName": "Post Surgery Rec 4",
        "internalDescription": "Post Surgery Rec 4",
        "externalDescription": "بعد الجراحة ",
        "targetTransactionTime": 1200,
		"queueId":162,
		"appLetter":"",
		"starting":1,
        "Letter":"",
        "startingNormal":800
    },
    {
        "id": 128,
        "internalName": "Post Surgery Rec 5",
        "externalName": "Post Surgery Rec 5",
        "internalDescription": "Post Surgery Rec 5",
        "externalDescription": "بعد الجراحة ",
        "targetTransactionTime": 1200,
		"queueId":163,
		"appLetter":"",
		"starting":1,
        "Letter":"",
        "startingNormal":851
    },
    {
        "id": 129,
        "internalName": "Post Surgery Rec 8",
        "externalName": "Post Surgery Rec 8",
        "internalDescription": "Post Surgery Rec 8",
        "externalDescription": "بعد الجراحة ",
        "targetTransactionTime": 1200,
		"queueId":164,
		"appLetter":"",
		"starting":1,
        "Letter":"",
        "startingNormal":900
    },
    {
        "id": 130,
        "internalName": "Post Surgery Rec 9",
        "externalName": "Post Surgery Rec 9",
        "internalDescription": "Post Surgery Rec 9",
        "externalDescription": "بعد الجراحة ",
        "targetTransactionTime": 1200,
		"queueId":165,
		"appLetter":"",
		"starting":1,
        "Letter":"",
        "startingNormal":951
    },
    {
        "id": 85,
        "internalName": "200 Female Plaster Room",
        "externalName": "200 Female Plaster Room",
        "internalDescription": "200 Female Plaster Room",
        "externalDescription": "200 Female Plaster Room",
        "targetTransactionTime": 0,
		"queueId":169,
		"appLetter":"",
		"starting":1,
        "Letter":"G",
        "startingNormal":600
    }
];


var receptionPrinters=[
	//couldn't find workprofile
    {
        reception:"Reception 1",
        unitId:"TPRec1",
        logicId:15,
        ip:'10.24.26.10'
    },
    {
        reception:"Reception2 - Female",
        unitId:"TPRec2A",
        logicId:1,
        ip:'10.24.26.18'
    },
	{
        reception:"Reception2 - Male",
        unitId:"TPRec2A",
        logicId:1,
        ip:'10.24.26.18'
    },
	//couldn't find workprofile
    {
        reception:"Reception 3",
        unitId:"TPRec3",
        logicId:7,
        ip:'10.24.26.14'
    },
    {
        reception:"Reception4",
        unitId:"TPRec4",
        logicId:14,
        ip:'10.24.26.17'
    },
	{
        reception:"Reception5",
        unitId:"TPRec4",
        logicId:14,
        ip:'10.24.26.17'
    },
    {
        reception:"Reception6 - XRay - Female",
        unitId:"TPRec6",
        logicId:6,
        ip:'10.24.26.9'
    },
	{
        reception:"Reception6 - XRay - Male",
        unitId:"TPRec6",
        logicId:6,
        ip:'10.24.26.9'
    },
	{
        reception:"Reception7 - MRI - Female",
        unitId:"TPRec6",
        logicId:24,
        ip:'10.24.26.9'
    },
	{
        reception:"Reception7 - MRI - Male",
        unitId:"TPRec6",
        logicId:24,
        ip:'10.24.26.9'
    },
	{
        reception:"Reception 8",
        unitId:"TPRec8",
        logicId:4,
        ip:'10.24.26.11'
    },
    {
        reception:"Reception8 - Female",
        unitId:"TPRec8",
        logicId:4,
        ip:'10.24.26.11'
    },
	{
        reception:"Reception8 - Male",
        unitId:"TPRec8",
        logicId:4,
        ip:'10.24.26.11'
    },
    {
        reception:"Reception9 - Female",
        unitId:"TPRec9",
        logicId:5,
        ip:'10.24.26.6'
    },
	{
        reception:"Reception9 - Male",
        unitId:"TPRec9",
        logicId:5,
        ip:'10.24.26.6'
    }
];

/*var bnjServiceListNew=[
    {
      "id": 1,
      "serviceName": "Pharmacy - Qatari",
      "queueLetter": "Q",
      "startNo": 1,
      "endNo": 199,
      "reception": 1,
      "level": ""
    },
    {
      "id": 2,
      "serviceName": "Pharmacy - Non Qatari",
      "queueLetter": "R",
      "startNo": 1,
      "endNo": 199,
      "reception": 1,
      "level": ""
    },
    {
      "id": 3,
      "serviceName": "Cashier -  Qatari",
      "queueLetter": "Z",
      "startNo": 1,
      "endNo": 199,
      "reception": 1,
      "level": ""
    },
    {
      "id": 4,
      "serviceName": "Cashier - Non Qatari",
      "queueLetter": "Y",
      "startNo": 1,
      "endNo": 199,
      "reception": 1,
      "level": ""
    },
    {
      "id": 5,
      "serviceName": "Laboratory 209 -FF",
      "queueLetter": "L",
      "startNo": 1,
      "endNo": 199,
      "reception": 8,
      "level": ""
    },
    {
      "id": 6,
      "serviceName": "Laboratory 100 -GF",
      "queueLetter": "L",
      "startNo": 200,
      "endNo": 299,
      "reception": 2,
      "level": ""
    },
    {
      "id": 7,
      "serviceName": "XRay1",
      "queueLetter": "X",
      "startNo": 1,
      "endNo": 99,
      "reception": 6,
      "level": ""
    },
    {
      "id": 8,
      "serviceName": "XRay2",
      "queueLetter": "P",
      "startNo": 200,
      "endNo": 299,
      "reception": 6,
      "level": ""
    },
    {
      "id": 9,
      "serviceName": "XRay3",
      "queueLetter": "T",
      "startNo": 100,
      "endNo": 199,
      "reception": 6,
      "level": ""
    },
    {
      "id": 10,
      "serviceName": "XRay4",
      "queueLetter": "Z",
      "startNo": 200,
      "endNo": 299,
      "reception": 6,
      "level": ""
    },
    {
      "id": 11,
      "serviceName": "XRay5 - EOS",
      "queueLetter": "Y",
      "startNo": 200,
      "endNo": 299,
      "reception": 6,
      "level": ""
    },
    {
      "id": 12,
      "serviceName": "Xray 107- Recp 2",
      "queueLetter": "X",
      "startNo": 100,
      "endNo": 199,
      "reception": 2,
      "level": ""
    },
    {
      "id": 13,
      "serviceName": "Reception 2 -Services",
      "queueLetter": "S",
      "startNo": 300,
      "endNo": 399,
      "reception": 2,
      "level": ""
    },
    {
      "id": 14,
      "serviceName": "Reception 3 -Services",
      "queueLetter": "S",
      "startNo": 100,
      "endNo": 199,
      "reception": 3,
      "level": ""
    },
    {
      "id": 15,
      "serviceName": "Reception 4 -Services",
      "queueLetter": "S",
      "startNo": 400,
      "endNo": 499,
      "reception": 4,
      "level": ""
    },
    {
      "id": 16,
      "serviceName": "Reception 8 -Services",
      "queueLetter": "S",
      "startNo": 200,
      "endNo": 299,
      "reception": 8,
      "level": ""
    },
    {
      "id": 17,
      "serviceName": "Reception 9 -Services",
      "queueLetter": "S",
      "startNo": 500,
      "endNo": 599,
      "reception": 9,
      "level": ""
    },
    {
      "id": 18,
      "subItems": [
        {
          "serviceName": "102 - Clinic Room - Apppointment",
          "queueLetter": "A",
          "startNo": 1,
          "endNo": 99,
          "reception": 2,
          "level": "VIP Level 1"
        },
        {
          "serviceName": "102 - Clinic Room - Walk In",
          "queueLetter": "O",
          "startNo": 100,
          "endNo": 199,
          "reception": 2,
          "level": ""
        }
      ]
    },
    {
      "id": 19,
      "subItems": [
        {
          "serviceName": "103 - Clinic Room - Appointment",
          "queueLetter": "B",
          "startNo": 1,
          "endNo": 99,
          "reception": 2,
          "level": "VIP Level 1"
        },
        {
          "serviceName": "103 - Clinic Room - Walk In",
          "queueLetter": "R",
          "startNo": 100,
          "endNo": 199,
          "reception": 2,
          "level": ""
        }
      ]
    },
    {
      "id": 20,
      "subItems": [
        {
          "serviceName": "104 - Clinic Room - Appointment",
          "queueLetter": "C",
          "startNo": 1,
          "endNo": 99,
          "reception": 2,
          "level": "VIP Level 1"
        },
        {
          "serviceName": "104 - Clinic Room - Walk In",
          "queueLetter": "V",
          "startNo": 100,
          "endNo": 199,
          "reception": 2,
          "level": ""
        }
      ]
    },
    {
      "id": 21,
      "subItems": [
        {
          "serviceName": "106 - Clinic Room Appointment",
          "queueLetter": "D",
          "startNo": 1,
          "endNo": 99,
          "reception": 2,
          "level": "VIP Level 1"
        },
        {
          "serviceName": "106 - Clinic Room - Walk In",
          "queueLetter": "W",
          "startNo": 100,
          "endNo": 199,
          "reception": 2,
          "level": ""
        }
      ]
    },
    {
      "id": 22,
      "subItems": [
        {
          "serviceName": "108 - Clinic Room Appointment",
          "queueLetter": "E",
          "startNo": 1,
          "endNo": 99,
          "reception": 2,
          "level": "VIP Level 1"
        },
        {
          "serviceName": "108 - Clinic Room - Walk In",
          "queueLetter": "N",
          "startNo": 200,
          "endNo": 299,
          "reception": 2,
          "level": ""
        }
      ]
    },
    {
      "id": 23,
      "subItems": [
        {
          "serviceName": "109 - Clinic Room Appointment",
          "queueLetter": "F",
          "startNo": 1,
          "endNo": 99,
          "reception": 2,
          "level": "VIP Level 1"
        },
        {
          "serviceName": "109 - Clinic Room - Walk In",
          "queueLetter": "Q",
          "startNo": 200,
          "endNo": 299,
          "reception": 2,
          "level": ""
        }
      ]
    },
    {
      "id": 24,
      "subItems": [
        {
          "serviceName": "110 - Clinic Room Appointment",
          "queueLetter": "G",
          "startNo": 1,
          "endNo": 99,
          "reception": 2,
          "level": "VIP Level 1"
        },
        {
          "serviceName": "110 - Clinic Room - Walk In",
          "queueLetter": "Y",
          "startNo": 400,
          "endNo": 499,
          "reception": 2,
          "level": ""
        }
      ]
    },
    {
      "id": 25,
      "subItems": [
        {
          "serviceName": "112 - Clinic Room Appointment",
          "queueLetter": "H",
          "startNo": 1,
          "endNo": 99,
          "reception": 2,
          "level": "VIP Level 1"
        },
        {
          "serviceName": "112 - Clinic Room - Walk In",
          "queueLetter": "Z",
          "startNo": 400,
          "endNo": 499,
          "reception": 2,
          "level": ""
        }
      ]
    },
    {
      "id": 26,
      "subItems": [
        {
          "serviceName": "113 - Clinic Room Appointment",
          "queueLetter": "I",
          "startNo": 1,
          "endNo": 99,
          "reception": 2,
          "level": "VIP Level 1"
        },
        {
          "serviceName": "113 - Clinic Room - Walk In",
          "queueLetter": "L",
          "startNo": 400,
          "endNo": 499,
          "reception": 2,
          "level": ""
        }
      ]
    },
    {
      "id": 27,
      "subItems": [
        {
          "serviceName": "114 - Clinic Room Appointment",
          "queueLetter": "J",
          "startNo": 1,
          "endNo": 99,
          "reception": 2,
          "level": "VIP Level 1"
        },
        {
          "serviceName": "114 - Clinic Room Walk In",
          "queueLetter": "O",
          "startNo": 500,
          "endNo": 599,
          "reception": 2,
          "level": ""
        }
      ]
    },
    {
      "id": 28,
      "subItems": [
        {
          "serviceName": "116 - Clinic Room Appointment",
          "queueLetter": "K",
          "startNo": 1,
          "endNo": 99,
          "reception": 2,
          "level": "VIP Level 1"
        },
        {
          "serviceName": "116 - Clinic Room Walk In",
          "queueLetter": "R",
          "startNo": 400,
          "endNo": 499,
          "reception": 2,
          "level": ""
        }
      ]
    },
    {
      "id": 29,
      "subItems": [
        {
          "serviceName": "117 - Clinic Room -Appointment",
          "queueLetter": "M",
          "startNo": 1,
          "endNo": 99,
          "reception": 2,
          "level": "VIP Level 1"
        },
        {
          "serviceName": "117 - Clinic Room - Walk In",
          "queueLetter": "V",
          "startNo": 400,
          "endNo": 499,
          "reception": 2,
          "level": ""
        }
      ]
    },
    {
      "id": 30,
      "subItems": [
        {
          "serviceName": "118 - Clinic Room - Appointment",
          "queueLetter": "P",
          "startNo": 1,
          "endNo": 99,
          "reception": 2,
          "level": "VIP Level 1"
        },
        {
          "serviceName": "118 - Clinic Room - Walk In",
          "queueLetter": "W",
          "startNo": 400,
          "endNo": 499,
          "reception": 2,
          "level": ""
        }
      ]
    },
    {
      "id": 31,
      "subItems": [
        {
          "serviceName": "119 - Clinic Room - Appointment",
          "queueLetter": "T",
          "startNo": 300,
          "endNo": 399,
          "reception": 2,
          "level": "VIP Level 1"
        },
        {
          "serviceName": "119 - Clinic Room - Walk In",
          "queueLetter": "N",
          "startNo": 600,
          "endNo": 699,
          "reception": 2,
          "level": ""
        }
      ]
    },
    {
      "id": 32,
      "subItems": [
        {
          "serviceName": "120 - Clinic Room - Appointment",
          "queueLetter": "T",
          "startNo": 1,
          "endNo": 99,
          "reception": 2,
          "level": "VIP Level 1"
        },
        {
          "serviceName": "120 - Clinic Room - Walk In",
          "queueLetter": "Q",
          "startNo": 500,
          "endNo": 599,
          "reception": 2,
          "level": ""
        }
      ]
    },
    {
      "id": 33,
      "subItems": [
        {
          "serviceName": "121 - Clinic Room - Appointment",
          "queueLetter": "I",
          "startNo": 100,
          "endNo": 199,
          "reception": 3,
          "level": "VIP Level 1"
        },
        {
          "serviceName": "121 - Clinic Room - Walk In",
          "queueLetter": "O",
          "startNo": 600,
          "endNo": 699,
          "reception": 3,
          "level": ""
        }
      ]
    },
    {
      "id": 34,
      "subItems": [
        {
          "serviceName": "122 - Clinic Room - Appointment",
          "queueLetter": "H",
          "startNo": 100,
          "endNo": 199,
          "reception": 3,
          "level": "VIP Level 1"
        },
        {
          "serviceName": "122 - Clinic Room - Walk In",
          "queueLetter": "L",
          "startNo": 300,
          "endNo": 399,
          "reception": 3,
          "level": ""
        }
      ]
    },
    {
      "id": 35,
      "subItems": [
        {
          "serviceName": "123 - Clinic Room - Appointment",
          "queueLetter": "G",
          "startNo": 100,
          "endNo": 199,
          "reception": 3,
          "level": "VIP Level 1"
        },
        {
          "serviceName": "123 - Clinic Room - Walk In",
          "queueLetter": "Z",
          "startNo": 300,
          "endNo": 399,
          "reception": 3,
          "level": ""
        }
      ]
    },
    {
      "id": 36,
      "subItems": [
        {
          "serviceName": "124 - Clinic Room - Appointment",
          "queueLetter": "F",
          "startNo": 100,
          "endNo": 199,
          "reception": 3,
          "level": "VIP Level 1"
        },
        {
          "serviceName": "124 - Clinic Room - Walk In",
          "queueLetter": "Y",
          "startNo": 300,
          "endNo": 399,
          "reception": 3,
          "level": ""
        }
      ]
    },
    {
      "id": 37,
      "subItems": [
        {
          "serviceName": "125 - Clinic Room - Appointment",
          "queueLetter": "E",
          "startNo": 100,
          "endNo": 199,
          "reception": 3,
          "level": "VIP Level 1"
        },
        {
          "serviceName": "125 - Clinic Room - Walk In",
          "queueLetter": "M",
          "startNo": 100,
          "endNo": 199,
          "reception": 3,
          "level": ""
        }
      ]
    },
    {
      "id": 38,
      "subItems": [
        {
          "serviceName": "126 - Clinic Room - Appointment",
          "queueLetter": "D",
          "startNo": 100,
          "endNo": 199,
          "reception": 3,
          "level": "VIP Level 1"
        },
        {
          "serviceName": "126 - Clinic Room - Walk In",
          "queueLetter": "W",
          "startNo": 300,
          "endNo": 399,
          "reception": 3,
          "level": ""
        }
      ]
    },
    {
      "id": 39,
      "subItems": [
        {
          "serviceName": "131 - Clinic Room - Appointment",
          "queueLetter": "C",
          "startNo": 100,
          "endNo": 199,
          "reception": 3,
          "level": "VIP Level 1"
        },
        {
          "serviceName": "131 - Clinic Room Walk In",
          "queueLetter": "V",
          "startNo": 300,
          "endNo": 399,
          "reception": 3,
          "level": ""
        }
      ]
    },
    {
      "id": 40,
      "subItems": [
        {
          "serviceName": "132 - Clinic Room - Appointment",
          "queueLetter": "B",
          "startNo": 100,
          "endNo": 199,
          "reception": 3,
          "level": "VIP Level 1"
        },
        {
          "serviceName": "132 - Clinic Room - Walk In",
          "queueLetter": "R",
          "startNo": 300,
          "endNo": 399,
          "reception": 3,
          "level": ""
        }
      ]
    },
    {
      "id": 41,
      "subItems": [
        {
          "serviceName": "133 - Clinic Room - Appointment",
          "queueLetter": "A",
          "startNo": 100,
          "endNo": 199,
          "reception": 3,
          "level": "VIP Level 1"
        },
        {
          "serviceName": "133 - Clinic Room - Walk In",
          "queueLetter": "J",
          "startNo": 300,
          "endNo": 399,
          "reception": 3,
          "level": ""
        }
      ]
    },
    {
      "id": 42,
      "subItems": [
        {
          "serviceName": "201 - Clinic Room - Appointment",
          "queueLetter": "E",
          "startNo": 200,
          "endNo": 299,
          "reception": 8,
          "level": "VIP Level 1"
        },
        {
          "serviceName": "201 - Clinic Room - Walk In",
          "queueLetter": "K",
          "startNo": 100,
          "endNo": 199,
          "reception": 8,
          "level": ""
        }
      ]
    },
    {
      "id": 43,
      "subItems": [
        {
          "serviceName": "202 - Clinic Room - Appointment",
          "queueLetter": "F",
          "startNo": 200,
          "endNo": 299,
          "reception": 8,
          "level": "VIP Level 1"
        },
        {
          "serviceName": "202 - Clinic Room - Walk In",
          "queueLetter": "N",
          "startNo": 1,
          "endNo": 99,
          "reception": 8,
          "level": ""
        }
      ]
    },
    {
      "id": 44,
      "subItems": [
        {
          "serviceName": "203 - Clinic Room - Appointment",
          "queueLetter": "G",
          "startNo": 200,
          "endNo": 299,
          "reception": 8,
          "level": "VIP Level 1"
        },
        {
          "serviceName": "203 - Clinic Room - Walk In",
          "queueLetter": "V",
          "startNo": 1,
          "endNo": 99,
          "reception": 8,
          "level": ""
        }
      ]
    },
    {
      "id": 45,
      "subItems": [
        {
          "serviceName": "204 - Clinic Room - Appointment",
          "queueLetter": "H",
          "startNo": 200,
          "endNo": 299,
          "reception": 8,
          "level": "VIP Level 1"
        },
        {
          "serviceName": "204 - Clinic Room Walk In",
          "queueLetter": "W",
          "startNo": 1,
          "endNo": 99,
          "reception": 8,
          "level": ""
        }
      ]
    },
    {
      "id": 46,
      "subItems": [
        {
          "serviceName": "211 - Clinic Room - Appointment",
          "queueLetter": "I",
          "startNo": 200,
          "endNo": 299,
          "reception": 8,
          "level": "VIP Level 1"
        },
        {
          "serviceName": "211 - Clinic Room - Walk In",
          "queueLetter": "N",
          "startNo": 300,
          "endNo": 399,
          "reception": 8,
          "level": ""
        }
      ]
    },
    {
      "id": 47,
      "subItems": [
        {
          "serviceName": "212 - Clinic Room - Appointment",
          "queueLetter": "J",
          "startNo": 200,
          "endNo": 299,
          "reception": 8,
          "level": "VIP Level 1"
        },
        {
          "serviceName": "212 - Clinic Room - Walk In",
          "queueLetter": "Q",
          "startNo": 300,
          "endNo": 399,
          "reception": 8,
          "level": ""
        }
      ]
    },
    {
      "id": 48,
      "subItems": [
        {
          "serviceName": "215 - Clinic Room - Appointment",
          "queueLetter": "A",
          "startNo": 200,
          "endNo": 299,
          "reception": 8,
          "level": "VIP Level 1"
        },
        {
          "serviceName": "215 - Clinic Room Walk In",
          "queueLetter": "O",
          "startNo": 400,
          "endNo": 499,
          "reception": 8,
          "level": ""
        }
      ]
    },
    {
      "id": 49,
      "subItems": [
        {
          "serviceName": "216 - Clinic Room - Appointment",
          "queueLetter": "B",
          "startNo": 200,
          "endNo": 299,
          "reception": 8,
          "level": "VIP Level 1"
        },
        {
          "serviceName": "216 - Clinic Room Walk In",
          "queueLetter": "P",
          "startNo": 100,
          "endNo": 199,
          "reception": 8,
          "level": ""
        }
      ]
    },
    {
      "id": 50,
      "subItems": [
        {
          "serviceName": "217 - Clinic Room - Appointment",
          "queueLetter": "C",
          "startNo": 200,
          "endNo": 299,
          "reception": 8,
          "level": "VIP Level 1"
        },
        {
          "serviceName": "217 - Clinic Room Walk In",
          "queueLetter": "M",
          "startNo": 200,
          "endNo": 299,
          "reception": 8,
          "level": ""
        }
      ]
    },
    {
      "id": 51,
      "subItems": [
        {
          "serviceName": "218 - Clinic Room - Appointment",
          "queueLetter": "D",
          "startNo": 200,
          "endNo": 299,
          "reception": 8,
          "level": "VIP Level 1"
        },
        {
          "serviceName": "218 - Clinic Room Walk In",
          "queueLetter": "W",
          "startNo": 500,
          "endNo": 599,
          "reception": 8,
          "level": ""
        }
      ]
    }
  ];*/
  

var splRoomsOPD5=[331,330,329,332]
var splRoomsOPD4=[338,337,336]