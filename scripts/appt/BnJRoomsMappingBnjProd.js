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

var bnjServiceList=[
    {
        "id": 1402,
        "internalName": "100-Laboratory",
        "externalName": "100-Laboratory",
        "internalDescription": "100-Laboratory",
        "externalDescription": " المختبر (100)",
		"queueId":1,
		"appLetter":"",
        "starting":0,
        "Letter":"L",
        "startingNormal":200
    },
    {
        "id": 810,
        "internalName": "101-Male Treatment",
        "externalName": "101-Male Treatment",
        "internalDescription": "101-Male Treatment",
        "externalDescription": "غرفة العلاج - رجال (101)",
		"queueId":2,
		"appLetter":"",
        "starting":0,
        "Letter":"A",
        "startingNormal":2000
    },
    {
        "id": 255,
        "internalName": "102-Clinic Room",
        "externalName": "102-Clinic Room",
        "internalDescription": "102-Clinic Room",
        "externalDescription": "عيادة رقم (102)",
		"queueId":3,
		"apptQueueId":116,
		"apptLateQueueId":120,
		"appLetter":"A",
		"starting":0,
        "Letter":"O",
        "startingNormal":100
    },
    {
        "id": 1429,
        "internalName": "103-Clinic Room",
        "externalName": "103-Clinic Room",
        "internalDescription": "103-Clinic Room",
        "externalDescription": "عيادة رقم (103)",
		"queueId":4,
		"apptQueueId":117,
		"apptLateQueueId":120,
		"appLetter":"R",
		"starting":200,
        "Letter":"B",
        "startingNormal":0
    },
    {
        "id": 1237,
        "internalName": "104-Clinic Room",
        "externalName": "104-Clinic Room",
        "internalDescription": "104-Clinic Room",
        "externalDescription": "عيادة رقم (104)",
		"queueId":5,
		"apptQueueId":118,
		"apptLateQueueId":120,
		"appLetter":"C",
		"starting":0,
        "Letter":"V",
        "startingNormal":100
    },
    {
        "id": 778,
        "internalName": "105-ECG",
        "externalName": "105-ECG",
        "internalDescription": "105-ECG",
        "externalDescription": "تخطيط القلب (105)",
		"queueId":6,
		"appLetter":"",
		"starting":0,
        "Letter":"A",
        "startingNormal":600
    },
    {
        "id": 1428,
        "internalName": "106-Clinic Room",
        "externalName": "106-Clinic Room",
        "internalDescription": "106-Clinic Room",
        "externalDescription": "عيادة رقم (106)",
		"queueId":7,
		"apptQueueId":119,
		"apptLateQueueId":120,
		"appLetter":"D",
		"starting":0,
        "Letter":"W",
        "startingNormal":100
    },
    {
        "id": 1427,
        "internalName": "107-Clinic XRay",
        "externalName": "107-Clinic XRay",
        "internalDescription": "107-Clinic XRay",
        "externalDescription": "عيادة الأشعة (107)",
		"queueId":8,
		"appLetter":"",
		"starting":0,
        "Letter":"X",
        "startingNormal":100
    },
    {
        "id": 654,
        "internalName": "108-Clinic Room",
        "externalName": "108-Clinic Room",
        "internalDescription": "108-Clinic Room",
        "externalDescription": "عيادة رقم (108)",
		"queueId":9,
		"apptQueueId":120,
		"apptLateQueueId":120,
		"appLetter":"E",
		"starting":0,
        "Letter":"N",
        "startingNormal":200
    },
    {
        "id": 700,
        "internalName": "109-Clinic Room",
        "externalName": "109-Clinic Room",
        "internalDescription": "109-Clinic Room",
        "externalDescription": "عيادة رقم (109)",
		"queueId":10,
		"apptQueueId":121,
		"apptLateQueueId":120,
		"appLetter":"F",
		"starting":0,
        "Letter":"Q",
        "startingNormal":200
    },
    {
        "id": 1003,
        "internalName": "110-Clinic Room",
        "externalName": "110-Clinic Room",
        "internalDescription": "110-Clinic Room",
        "externalDescription": "عيادة رقم (110)",
		"queueId":11,
		"apptQueueId":122,
		"apptLateQueueId":120,
		"appLetter":"G",
		"starting":0,
        "Letter":"Y",
        "startingNormal":400
    },
    {
        "id": 1158,
        "internalName": "111-Treatment room - Female",
        "externalName": "111-Treatment room - Female",
        "internalDescription": "111-Treatment room - Female",
        "externalDescription": "غرفة العلاج - نساء (111)",
		"queueId":12,
		"appLetter":"",
		"starting":0,
        "Letter":"B",
        "startingNormal":9998
    },
    {
        "id": 788,
        "internalName": "112-Clinic Room",
        "externalName": "112-Clinic Room",
        "internalDescription": "112-Clinic Room",
        "externalDescription": "عيادة رقم (112)",
		"queueId":13,
		"apptQueueId":123,
		"apptLateQueueId":120,
		"appLetter":"H",
		"starting":0,
        "Letter":"Z",
        "startingNormal":400
    },
    {
        "id": 1166,
        "internalName": "113-Clinic Room",
        "externalName": "113-Clinic Room",
        "internalDescription": "113-Clinic Room",
        "externalDescription": "عيادة رقم (113)",
		"queueId":14,
		"apptQueueId":124,
		"apptLateQueueId":120,
		"appLetter":"I",
		"starting":0,
        "Letter":"L",
        "startingNormal":400
    },
    {
        "id": 811,
        "internalName": "114-Clinic Room",
        "externalName": "114-Clinic Room",
        "internalDescription": "114-Clinic Room",
        "externalDescription": "عيادة رقم (114)",
		"queueId":15,
		"apptQueueId":125,
		"apptLateQueueId":120,
		"appLetter":"J",
		"starting":0,
        "Letter":"O",
        "startingNormal":500
    },
    {
        "id": 792,
        "internalName": "115-ECG Room",
        "externalName": "115-ECG Room",
        "internalDescription": "115-ECG Room",
        "externalDescription": "تخطيط القلب (115)",
		"queueId":16,
		"appLetter":"",
		"apptLateQueueId":120,
		"starting":0,
        "Letter":"B",
        "startingNormal":600
    },
    {
        "id": 814,
        "internalName": "116-Clinic Room",
        "externalName": "116-Clinic Room",
        "internalDescription": "116-Clinic Room",
        "externalDescription": "عيادة رقم (116)",
		"queueId":17,
		"apptQueueId":126,
		"apptLateQueueId":120,
		"appLetter":"K",
		"starting":0,
        "Letter":"R",
        "startingNormal":400
    },
    {
        "id": 798,
        "internalName": "117-Clinic Room",
        "externalName": "117-Clinic Room",
        "internalDescription": "117-Clinic Room",
        "externalDescription": "عيادة رقم (117)",
		"queueId":171,
		"apptQueueId":18,
		"apptLateQueueId":120,
		"appLetter":"M",
		"starting":0,
        "Letter":"M",
        "startingNormal":0
    },
    {
        "id": 1167,
        "internalName": "118-Clinic Room",
        "externalName": "118-Clinic Room",
        "internalDescription": "118-Clinic Room",
        "externalDescription": "عيادة رقم (118)",
		"queueId":19,
		"apptQueueId":127,
		"apptLateQueueId":120,
		"appLetter":"P",
		"starting":0,
        "Letter":"W",
        "startingNormal":400
    },
    {
        "id": 972,
        "internalName": "119-Clinic Room",
        "externalName": "119-Clinic Room",
        "internalDescription": "119-Clinic Room",
        "externalDescription": "عيادة رقم (119)",
		"queueId":20,
		"apptQueueId":128,
		"apptLateQueueId":120,
		"appLetter":"T",
		"starting":300,
        "Letter":"N",
        "startingNormal":600
    },
    {
        "id": 973,
        "internalName": "120-Clinic Room",
        "externalName": "120-Clinic Room",
        "internalDescription": "120-Clinic Room",
        "externalDescription": "عيادة رقم (120)",
		"queueId":22,
		"apptQueueId":129,
		"apptLateQueueId":120,
		"appLetter":"T",
		"starting":0,
        "Letter":"Q",
        "startingNormal":500
    },
    {
        "id": 795,
        "internalName": "121-Clinic Room",
        "externalName": "121-Clinic Room",
        "internalDescription": "121-Clinic Room",
        "externalDescription": "عيادة رقم (121)",
		"queueId":22,
		"apptQueueId":130,
		"apptLateQueueId":120,
		"appLetter":"I",
		"starting":100,
        "Letter":"O",
        "startingNormal":600
    },
    {
        "id": 1161,
        "internalName": "122-Clinic Room",
        "externalName": "122-Clinic Room",
        "internalDescription": "122-Clinic Room",
        "externalDescription": "عيادة رقم (122)",
		"queueId":23,
		"apptQueueId":131,
		"apptLateQueueId":120,
		"appLetter":"H",
		"starting":100,
        "Letter":"L",
        "startingNormal":300
    },
    {
        "id": 1162,
        "internalName": "123-Clinic Room",
        "externalName": "123-Clinic Room",
        "internalDescription": "123-Clinic Room",
        "externalDescription": "عيادة رقم (123)",
		"queueId":24,
		"apptQueueId":132,
		"apptLateQueueId":120,
		"appLetter":"G",
		"starting":100,
        "Letter":"Z",
        "startingNormal":300
    },
    {
        "id": 785,
        "internalName": "124-Clinic Room",
        "externalName": "124-Clinic Room",
        "internalDescription": "124-Clinic Room",
        "externalDescription": "عيادة رقم (124)",
		"queueId":25,
		"apptQueueId":133,
		"apptLateQueueId":120,
		"appLetter":"F",
		"starting":100,
        "Letter":"Y",
        "startingNormal":300
    },
    {
        "id": 768,
        "internalName": "125-Clinic Room",
        "externalName": "125-Clinic Room",
        "internalDescription": "125-Clinic Room",
        "externalDescription": "عيادة رقم (125)",
		"queueId":26,
		"apptQueueId":134,
		"apptLateQueueId":120,
		"appLetter":"E",
		"starting":100,
        "Letter":"M",
        "startingNormal":100
    },
    {
        "id": 999,
        "internalName": "126-Clinic Room",
        "externalName": "126-Clinic Room",
        "internalDescription": "126-Clinic Room",
        "externalDescription": "عيادة رقم (126)",
		"queueId":27,
		"apptQueueId":135,
		"apptLateQueueId":120,
		"appLetter":"D",
		"starting":100,
        "Letter":"W",
        "startingNormal":300
    },
    {
        "id": 797,
        "internalName": "127-Clinic Room",
        "externalName": "127-Clinic Room",
        "internalDescription": "127-Clinic Room",
        "externalDescription": " عيادة رقم (127)",
		"queueId":28,
		"appLetter":"",
		"starting":0,
        "Letter":"C",
        "startingNormal":800
    },
    {
        "id": 1160,
        "internalName": "128-Shockwave Therapy",
        "externalName": "128-Shockwave Therapy",
        "internalDescription": "128-Shockwave Therapy",
        "externalDescription": " العلاج بالموجات فوق الصوتية (128)",
		"queueId":29,
		"appLetter":"",
		"starting":0,
        "Letter":"C",
        "startingNormal":900
    },
    {
        "id": 315,
        "internalName": "129-Plaster room - Male",
        "externalName": "129-Plaster room - Male",
        "internalDescription": "129-Plaster room - Male",
        "externalDescription": "غرفة الجبس - رجال (129)",
		"queueId":30,
		"appLetter":"",
		"starting":0,
        "Letter":"D",
        "startingNormal":0
    },
    {
        "id": 812,
        "internalName": "130-Clinical Pharmacy",
        "externalName": "130-Clinical Pharmacy",
        "internalDescription": "130-Clinical Pharmacy",
        "externalDescription": "الصيدلة الإكلينيكية - (130)",
		"queueId":31,
		"appLetter":"",
		"starting":0,
        "Letter":"D",
        "startingNormal":8900
    },
    {
        "id": 1001,
        "internalName": "131-Clinic Room",
        "externalName": "131-Clinic Room",
        "internalDescription": "131-Clinic Room",
        "externalDescription": "عيادة رقم (131)",
		"queueId":32,
		"apptQueueId":136,
		"apptLateQueueId":120,
		"appLetter":"C",
		"starting":100,
        "Letter":"V",
        "startingNormal":300
    },
    {
        "id": 1005,
        "internalName": "132-Clinic Room",
        "externalName": "132-Clinic Room",
        "internalDescription": "132-Clinic Room",
        "externalDescription": "عيادة رقم (132)",
		"queueId":33,
		"apptQueueId":137,
		"apptLateQueueId":120,
		"appLetter":"B",
		"starting":100,
        "Letter":"R",
        "startingNormal":300
    },
    {
        "id": 793,
        "internalName": "133-Clinic Room",
        "externalName": "133-Clinic Room",
        "internalDescription": "133-Clinic Room",
        "externalDescription": "عيادة رقم (133)",
		"queueId":34,
		"apptQueueId":138,
		"apptLateQueueId":120,
		"appLetter":"A",
		"starting":100,
        "Letter":"J",
        "startingNormal":300
    },
    {
        "id": 321,
        "internalName": "134-Plaster room - Female",
        "externalName": "134-Plaster room - Female",
        "internalDescription": "134-Plaster room - Female",
        "externalDescription": "غرفة الجبس - نساء (134)",
		"queueId":35,
		"appLetter":"",
		"starting":0,
        "Letter":"D",
        "startingNormal":500
    },
    {
        "id": 815,
        "internalName": "135-Multipurpose room - Female",
        "externalName": "135-Multipurpose room - Female",
        "internalDescription": "135-Multipurpose room - Female",
        "externalDescription": "غرفة متعددة الأغراض - نساء (135)",
		"queueId":36,
		"appLetter":"",
		"starting":0,
        "Letter":"D",
        "startingNormal":600
    },
    {
        "id": 775,
        "internalName": "201-Clinic Room",
        "externalName": "201-Clinic Room",
        "internalDescription": "201-Clinic Room",
        "externalDescription": "عيادة رقم (201)",
		"queueId":37,
		"apptQueueId":139,
		"apptLateQueueId":120,
		"appLetter":"E",
		"starting":200,
        "Letter":"K",
        "startingNormal":100
    },
    {
        "id": 786,
        "internalName": "202-Clinic Room",
        "externalName": "202-Clinic Room",
        "internalDescription": "202-Clinic Room",
        "externalDescription": "عيادة رقم (202)",
		"queueId":38,
		"apptQueueId":140,
		"apptLateQueueId":120,
		"appLetter":"F",
		"starting":200,
        "Letter":"N",
        "startingNormal":0
    },
    {
        "id": 844,
        "internalName": "203-Clinic Room",
        "externalName": "203-Clinic Room",
        "internalDescription": "203-Clinic Room",
        "externalDescription": "عيادة رقم (203)",
		"queueId":39,
		"apptQueueId":141,
		"apptLateQueueId":120,
		"appLetter":"G",
		"starting":200,
        "Letter":"V",
        "startingNormal":0
    },
    {
        "id": 847,
        "internalName": "204-Clinic Room",
        "externalName": "204-Clinic Room",
        "internalDescription": "204-Clinic Room",
        "externalDescription": "عيادة رقم (204)",
		"queueId":40,
		"apptQueueId":142,
		"apptLateQueueId":120,
		"appLetter":"H",
		"starting":200,
        "Letter":"W",
        "startingNormal":2015
    },
    {
        "id": 787,
        "internalName": "205-Clinic Room",
        "externalName": "205-Clinic Room",
        "internalDescription": "205-Clinic Room",
        "externalDescription": "عيادة رقم (205)",
		"queueId":41,
		"apptQueueId":143,
		"apptLateQueueId":120,
		"appLetter":"E",
		"starting":4566,
        "Letter":"E",
        "startingNormal":7895
    },
    {
        "id": 1000,
        "internalName": "206-Clinic Room",
        "externalName": "206-Clinic Room",
        "internalDescription": "206-Clinic Room",
        "externalDescription": "عيادة رقم (206)",
		"queueId":42,
		"apptQueueId":144,
		"apptLateQueueId":120,
		"appLetter":"E",
		"starting":6011,
        "Letter":"E",
        "startingNormal":500
    },
    {
        "id": 1102,
        "internalName": "207-Clinic Room",
        "externalName": "207-Clinic Room",
        "internalDescription": "207-Clinic Room",
        "externalDescription": "عيادة رقم (207)",
		"queueId":43,
		"apptQueueId":145,
		"apptLateQueueId":120,
		"appLetter":"E",
		"starting":300,
        "Letter":"E",
        "startingNormal":350
    },
    {
        "id": 813,
        "internalName": "208-Clinic Room",
        "externalName": "208-Clinic Room",
        "internalDescription": "208-Clinic Room",
        "externalDescription": "عيادة رقم (208)",
		"queueId":44,
		"appLetter":"",
		"starting":0,
        "Letter":"E",
        "startingNormal":400
    },
    {
        "id": 1097,
        "internalName": "209- Laboratory",
        "externalName": "209 - Laboratory",
        "internalDescription": "209 - Laboratory",
        "externalDescription": "209 - Laboratory",
		"queueId":45,
		"appLetter":"",
		"starting":0,
        "Letter":"L",
        "startingNormal":0
    },
    {
        "id": 1156,
        "internalName": "210- Injection Room",
        "externalName": "210- Injection Room",
        "internalDescription": "210- Injection Room",
        "externalDescription": "210- Injection Room",
		"queueId":46,
		"appLetter":"",
		"starting":0,
        "Letter":"E",
        "startingNormal":600
    },
    {
        "id": 791,
        "internalName": "211-Clinic Room",
        "externalName": "211-Clinic Room",
        "internalDescription": "211-Clinic Room",
        "externalDescription": "عيادة رقم (211)",
		"queueId":47,
		"apptQueueId":148,
		"apptLateQueueId":120,
		"appLetter":"I",
		"starting":200,
        "Letter":"N",
        "startingNormal":300
    },
    {
        "id": 1099,
        "internalName": "212-Clinic Room",
        "externalName": "212-Clinic Room",
        "internalDescription": "212-Clinic Room",
        "externalDescription": "عيادة رقم (212)",
		"queueId":48,
		"apptQueueId":149,
		"apptLateQueueId":120,
		"appLetter":"J",
		"starting":200,
        "Letter":"Q",
        "startingNormal":300
    },
    {
        "id": 971,
        "internalName": "213-Clinic Room",
        "externalName": "213-Clinic Room",
        "internalDescription": "213-Clinic Room",
        "externalDescription": "عيادة رقم (213)",
		"queueId":49,
		"apptQueueId":150,
		"apptLateQueueId":120,
		"appLetter":"E",
		"starting":900,
        "Letter":"E",
        "startingNormal":950
    },
    {
        "id": 1165,
        "internalName": "214-Clinic Room",
        "externalName": "214-Clinic Room",
        "internalDescription": "214-Clinic Room",
        "externalDescription": "عيادة رقم (214)",
		"queueId":50,
		"apptQueueId":151,
		"apptLateQueueId":120,
		"appLetter":"F",
		"starting":1789,
        "Letter":"F",
        "startingNormal":2589
    },
    {
        "id": 1159,
        "internalName": "215-Clinic Room",
        "externalName": "215-Clinic Room",
        "internalDescription": "215-Clinic Room",
        "externalDescription": "عيادة رقم (215)",
		"queueId":51,
		"apptQueueId":152,
		"apptLateQueueId":120,
		"appLetter":"A",
		"starting":200,
        "Letter":"O",
        "startingNormal":400
    },
    {
        "id": 1004,
        "internalName": "216-Clinic Room",
        "externalName": "216-Clinic Room",
        "internalDescription": "216-Clinic Room",
        "externalDescription": "عيادة رقم (216)",
		"queueId":52,
		"apptQueueId":153,
		"apptLateQueueId":120,
		"appLetter":"B",
		"starting":200,
        "Letter":"P",
        "startingNormal":100
    },
    {
        "id": 809,
        "internalName": "217-Clinic Room",
        "externalName": "217-Clinic Room",
        "internalDescription": "217-Clinic Room",
        "externalDescription": "عيادة رقم (217)",
		"queueId":53,
		"apptQueueId":166,
		"apptLateQueueId":120,
		"appLetter":"C",
		"starting":200,
        "Letter":"M",
        "startingNormal":200
    },
    {
        "id": 848,
        "internalName": "218-Clinic Room",
        "externalName": "218-Clinic Room",
        "internalDescription": "218-Clinic Room",
        "externalDescription": "عيادة رقم (218)",
		"queueId":54,
		"apptQueueId":167,
		"apptLateQueueId":120,
		"appLetter":"D",
		"starting":200,
        "Letter":"W",
        "startingNormal":500
    },
    {
        "id": 784,
        "internalName": "219-Clinic Room",
        "externalName": "219-Clinic Room",
        "internalDescription": "219-Clinic Room",
        "externalDescription": "عيادة رقم (219)",
		"queueId":55,
		"apptQueueId":168,
		"apptLateQueueId":120,
		"appLetter":"F",
		"starting":550,
        "Letter":"F",
        "startingNormal":500
    },
    {
        "id": 995,
        "internalName": "220-Clinic Room",
        "externalName": "220-Clinic Room",
        "internalDescription": "220-Clinic Room",
        "externalDescription": "عيادة رقم (220)",
		"queueId":56,
		"apptQueueId":154,
		"apptLateQueueId":120,
		"appLetter":"F",
		"starting":600,
        "Letter":"F",
        "startingNormal":650
    },
    {
        "id": 1100,
        "internalName": "221-Clinic Room",
        "externalName": "221-Clinic Room",
        "internalDescription": "221-Clinic Room",
        "externalDescription": "عيادة رقم (221)",
		"queueId":57,
		"apptQueueId":155,
		"apptLateQueueId":120,
		"appLetter":"F",
		"starting":700,
        "Letter":"F",
        "startingNormal":750
    },
    {
        "id": 1028,
        "internalName": "CT Preperation",
        "externalName": "CT Preperation",
        "internalDescription": "CT Preperation",
        "externalDescription": "إعدادات الأشعة المقطعية",
		"queueId":58,
		"appLetter":"",
		"starting":0,
        "Letter":"F",
        "startingNormal":800
    },
    {
        "id": 1026,
        "internalName": "CT Room",
        "externalName": "CT Room",
        "internalDescription": "CT Room",
        "externalDescription": "غرفة الأشعة المقطعية",
		"queueId":59,
		"appLetter":"",
		"starting":0,
        "Letter":"F",
        "startingNormal":900
    },
    {
        "id": 1034,
        "internalName": "MRI",
        "externalName": "MRI",
        "internalDescription": "MRI",
        "externalDescription": "اشعة الرنين",
		"queueId":60,
		"appLetter":"",
		"starting":0,
        "Letter":"G",
        "startingNormal":19999
    },
    {
        "id": 828,
        "internalName": "X-Ray 1",
        "externalName": "X-Ray 1",
        "internalDescription": "X-Ray 1",
        "externalDescription": "غرفة الأشعة (1)",
		"queueId":61,
		"appLetter":"",
		"starting":0,
        "Letter":"X",
        "startingNormal":0
    },
    {
        "id": 902,
        "internalName": "X-Ray 2",
        "externalName": "X-Ray 2",
        "internalDescription": "X-Ray 2",
        "externalDescription": "غرفة الأشعة (2)",
		"queueId":62,
		"appLetter":"",
		"starting":0,
        "Letter":"P",
        "startingNormal":200
    },
    {
        "id": 826,
        "internalName": "X-Ray 3",
        "externalName": "X-Ray 3",
        "internalDescription": "X-Ray 3",
        "externalDescription": "غرفة الأشعة (3)",
		"queueId":63,
		"appLetter":"",
		"starting":0,
        "Letter":"T",
        "startingNormal":100
    },
    {
        "id": 885,
        "internalName": "X-Ray 4",
        "externalName": "X-Ray 4",
        "internalDescription": "X-Ray 4",
        "externalDescription": "غرفة الأشعة (4)",
		"queueId":64,
		"appLetter":"",
		"starting":0,
        "Letter":"Z",
        "startingNormal":200
    },
    {
        "id": 886,
        "internalName": "X-Ray EOS 5",
        "externalName": "X-Ray EOS 5",
        "internalDescription": "X-Ray EOS 5",
        "externalDescription": "غرفة الأشعة (5)",
		"queueId":65,
		"appLetter":"",
		"starting":0,
        "Letter":"Y",
        "startingNormal":200
    },
    {
        "id": 821,
        "internalName": "Reception2-Female",
        "externalName": "Reception2-Female - استقبال 2  - نساء",
        "internalDescription": "Reception2-Female",
        "externalDescription": " استقبال 2  - نساء",
		"queueId":2673,
		"apptQueueId":3066,
		"apptLateQueueId":3067,
		"appLetter":"",
		"starting":0,
        "Letter":"H",
        "startingNormal":7898
    },
    {
        "id": 823,
        "internalName": "Reception2-Male",
        "externalName": "Reception2-Male - استقبال 2 - رجال",
        "internalDescription": "Reception2-Male",
        "externalDescription": " استقبال 2 - رجال",
		"queueId":2674,
		"apptQueueId":3068,
		"apptLateQueueId":3069,
		"appLetter":"",
		"starting":0,
        "Letter":"J",
        "startingNormal":7215
    },
    {
        "id": 951,
        "internalName": "Reception2-Qatari-Female",
        "externalName": "Reception2-Qatari-Female - استقبال 2 - قطريين - نساء",
        "internalDescription": "Reception2-Qatari-Female",
        "externalDescription": " استقبال 2 - قطريين - نساء",
		"queueId":2675,
		"apptQueueId":3070,
		"apptLateQueueId":3071,
		"appLetter":"",
		"starting":0,
        "Letter":"K",
        "startingNormal":4789
    },
    {
        "id": 948,
        "internalName": "Reception2-Qatari-Male",
        "externalName": "Reception2-Qatari-Male - استقبال 2 - قطريين - رجال",
        "internalDescription": "Reception2-Qatari-Male",
        "externalDescription": " استقبال 2 - قطريين - رجال",
		"queueId":2676,
		"apptQueueId":3072,
		"apptLateQueueId":3073,
		"appLetter":"",
		"starting":0,
        "Letter":"L",
        "startingNormal":14999
    },
    {
        "id": 1038,
        "internalName": "Reception2-Special Care",
        "externalName": "Reception2-Male - استقبال 2 - حالات خاصة",
        "internalDescription": "Reception2-Special Care",
        "externalDescription": " استقبال 2 - حالات خاصة",
		"queueId":2677,
		"apptQueueId":3074,
		"apptLateQueueId":3075,
		"appLetter":"",
		"starting":0,
        "Letter":"M",
        "startingNormal":9997
    },
    {
        "id": 1036,
        "internalName": "Reception3",
        "externalName": "Reception3- استقبال 3",
        "internalDescription": "Reception3",
        "externalDescription": "استقبال 3",
		"queueId":2678,
		"apptQueueId":3076,
		"apptLateQueueId":3077,
		"appLetter":"",
		"starting":0,
        "Letter":"S",
        "startingNormal":100
    },
    {
        "id": 1191,
        "internalName": "Reception3-Qatari",
        "externalName": "Reception3-Qatari - استقبال 3 - قطريين",
        "internalDescription": "Reception3-Qatari",
        "externalDescription": "استقبال 3 - قطريين",
		"queueId":2679,
		"apptQueueId":3078,
		"apptLateQueueId":3079,
		"appLetter":"",
		"starting":0,
        "Letter":"O",
        "startingNormal":1999
    },
    {
        "id": 1201,
        "internalName": "Reception3-Special Care",
        "externalName": "Reception3-Special Care - استقبال 3 - حالات خاصة",
        "internalDescription": "Reception3-Special Care",
        "externalDescription": " استقبال 3 - حالات خاصة",
		"queueId":2680,
		"apptQueueId":3080,
		"apptLateQueueId":3081,
		"appLetter":"",
		"starting":0,
        "Letter":"P",
        "startingNormal":1999
    },
    {
        "id": 831,
        "internalName": "Reception4",
        "externalName": "Reception4- استقبال 4",
        "internalDescription": "Reception4",
        "externalDescription": "استقبال 4",
		"queueId":2681,
		"apptQueueId":3082,
		"apptLateQueueId":3083,
		"appLetter":"",
		"starting":0,
        "Letter":"Q",
        "startingNormal":19999
    },
    {
        "id": 883,
        "internalName": "Reception4-Qatari",
        "externalName": "Reception4-Qatari - استقبال 4 - قطريين",
        "internalDescription": "Reception4-Qatari",
        "externalDescription": " استقبال 4 - قطريين",
		"queueId":2682,
		"apptQueueId":3084,
		"apptLateQueueId":3085,
		"appLetter":"",
		"starting":0,
        "Letter":"R",
        "startingNormal":9999
    },
    {
        "id": 1214,
        "internalName": "Reception4-Special Care",
        "externalName": "Reception4-Special Care - استقبال 4 - حالات خاصة",
        "internalDescription": "Reception4-Special Care",
        "externalDescription": " استقبال 4 - حالات خاصة",
		"queueId":2683,
		"apptQueueId":3086,
		"apptLateQueueId":3087,
		"appLetter":"",
		"starting":0,
        "Letter":"S",
        "startingNormal":99998
    },
    {
        "id": 1137,
        "internalName": "Reception5",
        "externalName": "Reception5- استقبال 5",
        "internalDescription": "Reception5",
        "externalDescription": " استقبال 5",
		"queueId":2684,
		"apptQueueId":3088,
		"apptLateQueueId":3089,
		"appLetter":"",
		"starting":0,
        "Letter":"T",
        "startingNormal":1999
    },
    {
        "id": 894,
        "internalName": "Reception5-Qatari",
        "externalName": "Reception5-Qatari - استقبال 5 - قطريين",
        "internalDescription": "Reception5-Qatari",
        "externalDescription": " استقبال 5 - قطريين",
		"queueId":2685,
		"apptQueueId":3090,
		"apptLateQueueId":3091,
		"appLetter":"",
		"starting":0,
        "Letter":"U",
        "startingNormal":0
    },
    {
        "id": 1209,
        "internalName": "Reception5-Special Care",
        "externalName": "Reception5-Special Care - استقبال 5 - حالات خاصة",
        "internalDescription": "Reception5-Special Care",
        "externalDescription": "استقبال 5 - حالات خاصة",
		"queueId":2686,
		"apptQueueId":3092,
		"apptLateQueueId":3093,
		"appLetter":"",
		"starting":0,
        "Letter":"V",
        "startingNormal":498
    },
    {
        "id": 953,
        "internalName": "Reception6-XRay-Female",
        "externalName": "Reception6-XRay-Male - استقبال 6 - اشعة - نساء",
        "internalDescription": "Reception6-XRay-Female",
        "externalDescription": "استقبال 6 - اشعة - نساء",
		"queueId":2687,
		"apptQueueId":3094,
		"apptLateQueueId":3095,
		"appLetter":"",
		"starting":0,
        "Letter":"W",
        "startingNormal":0
    },
    {
        "id": 930,
        "internalName": "Reception6-XRay-Male",
        "externalName": "Reception6-XRay-Male - استقبال 6 - اشعة - رجال",
        "internalDescription": "Reception6-XRay-Male",
        "externalDescription": "استقبال 6 - اشعة - رجال",
		"queueId":2688,
		"apptQueueId":3096,
		"apptLateQueueId":3097,
		"appLetter":"",
		"starting":0,
        "Letter":"X",
        "startingNormal":19999
    },
    {
        "id": 779,
        "internalName": "Reception7-MRI-Female",
        "externalName": "Reception7-MRI-Female - استقبال 7 - اشعة رنين - نساء",
        "internalDescription": "Reception7-MRI-Female",
        "externalDescription": " استقبال 7 - اشعة رنين - نساء",
		"queueId":2689,
		"apptQueueId":3098,
		"apptLateQueueId":3099,
		"appLetter":"",
		"starting":0,
        "Letter":"Y",
        "startingNormal":1999
    },
    {
        "id": 1015,
        "internalName": "Reception7-MRI-Male",
        "externalName": "Reception7-MRI-Female - استقبال 7 - اشعة رنين - رجال",
        "internalDescription": "Reception7-MRI-Male",
        "externalDescription": "استقبال 7 - اشعة رنين - رجال",
		"queueId":2690,
		"apptQueueId":3100,
		"apptLateQueueId":3101,
		"appLetter":"",
		"starting":0,
        "Letter":"Z",
        "startingNormal":19999
    },
    {
        "id": 1014,
        "internalName": "Reception8-Female",
        "externalName": "Reception8-Male - استقبال 8  - نساء",
        "internalDescription": "Reception8-Female",
        "externalDescription": " استقبال 8  - نساء",
		"queueId":2691,
		"apptQueueId":3102,
		"apptLateQueueId":3103,
		"appLetter":"",
		"starting":0,
        "Letter":"H",
        "startingNormal":500
    },
    {
        "id": 1185,
        "internalName": "Reception8-Qatari-Female",
        "externalName": "Reception8-Qatari-Female - استقبال 8 - قطريين - نساء",
        "internalDescription": "Reception8-Qatari-Female",
        "externalDescription": " استقبال 8 - قطريين - نساء",
		"queueId":2693,
		"apptQueueId":3106,
		"apptLateQueueId":3107,
		"appLetter":"",
		"starting":0,
        "Letter":"I",
        "startingNormal":500
    },
    {
        "id": 927,
        "internalName": "Reception8-Male",
        "externalName": "Reception8-Male - استقبال 8  - رجال",
        "internalDescription": "Reception8-Male",
        "externalDescription": " استقبال 8  - رجال",
		"queueId":2692,
		"apptQueueId":3104,
		"apptLateQueueId":3105,
		"appLetter":"",
		"starting":0,
        "Letter":"J",
        "startingNormal":500
    },
    {
        "id": 1203,
        "internalName": "Reception8-Qatari-Male",
        "externalName": "Reception8-Qatari-Female - استقبال 8 - قطريين - رجال",
        "internalDescription": "Reception8-Qatari-Male",
        "externalDescription": " استقبال 8 - قطريين - رجال",
		"queueId":2694,
		"apptQueueId":3108,
		"apptLateQueueId":3109,
		"appLetter":"",
		"starting":0,
        "Letter":"K",
        "startingNormal":500
    },
    {
        "id": 1213,
        "internalName": "Reception8-Special Care",
        "externalName": "Reception8-Male - استقبال 8 - حالات خاصة",
        "internalDescription": "Reception8-Special Care",
        "externalDescription": " استقبال 8 - حالات خاصة",
		"queueId":2695,
		"apptQueueId":3110,
		"apptLateQueueId":3111,
		"appLetter":"",
		"starting":0,
        "Letter":"L",
        "startingNormal":500
    },
    {
        "id": 888,
        "internalName": "Reception9-Female",
        "externalName": "Reception9-female - استقبال 9 - نساء",
        "internalDescription": "Reception9-Female",
        "externalDescription": "استقبال 9 - نساء",
		"queueId":2696,
		"apptQueueId":3112,
		"apptLateQueueId":3113,
		"appLetter":"",
		"starting":0,
        "Letter":"M",
        "startingNormal":500
    },
    {
        "id": 1134,
        "internalName": "Reception9-Male",
        "externalName": "Reception9-Male - استقبال 9 - رجال",
        "internalDescription": "Reception9-Male",
        "externalDescription": "استقبال 9 - رجال",
		"queueId":2697,
		"apptQueueId":3114,
		"apptLateQueueId":3115,
		"appLetter":"",
		"starting":0,
        "Letter":"N",
        "startingNormal":500
    },
    {
        "id": 929,
        "internalName": "Reception9-Qatari-Female",
        "externalName": "Reception9-Qatari-Female -  استقبال 9 - قطريين - نساء",
        "internalDescription": "Reception9-Qatari-Female",
        "externalDescription": " استقبال 9 - قطريين - نساء",
		"queueId":2698,
		"apptQueueId":3116,
		"apptLateQueueId":3117,
		"appLetter":"",
		"starting":0,
        "Letter":"O",
        "startingNormal":9000
    },
    {
        "id": 840,
        "internalName": "Reception9-Qatari-Male",
        "externalName": "Reception9-Qatari-Male - استقبال 9 - قطريين - رجال",
        "internalDescription": "Reception9-Qatari-Male",
        "externalDescription": "استقبال 9 - قطريين - رجال",
		"queueId":2699,
		"apptQueueId":3118,
		"apptLateQueueId":3119,
		"appLetter":"",
		"starting":0,
        "Letter":"P",
        "startingNormal":500
    },
    {
        "id": 1176,
        "internalName": "Reception9-Special Care",
        "externalName": "Reception9-Special Care - استقبال 9 - حالات خاصة",
        "internalDescription": "Reception9-Special Care",
        "externalDescription": "استقبال 9 - حالات خاصة",
		"queueId":2700,
		"apptQueueId":3120,
		"apptLateQueueId":3121,
		"appLetter":"",
		"starting":0,
        "Letter":"Q",
        "startingNormal":500
    },
    {
        "id": 1019,
        "internalName": "Pharmacy - Non Qatari",
        "externalName": "Pharmacy - Non Qatari",
        "internalDescription": "NQatari",
        "externalDescription": "الصيدلية غير قطريين",
		"queueId":94,
		"appLetter":"",
		"starting":0,
        "Letter":"R",
        "startingNormal":0
    },
    {
        "id": 1079,
        "internalName": "Pharmacy",
        "externalName": "Pharmacy ",
        "internalDescription": null,
        "externalDescription": null,
		"queueId":95,
		"appLetter":"",
		"starting":0,
        "Letter":"Y",
        "startingNormal":998
    },
    {
        "id": 954,
        "internalName": "Pharmacy Female - Non Qatari",
        "externalName": "Pharmacy Female - Non Qatari",
        "internalDescription": "OthersFemaleNonQatari",
        "externalDescription": "الصيدلية غير قطريات - نساء",
		"queueId":96,
		"appLetter":"",
		"starting":0,
        "Letter":"Y",
        "startingNormal":751
    },
    {
        "id": 820,
        "internalName": "Pharmacy - Qatari",
        "externalName": "Pharmacy - Qatari ",
        "internalDescription": "Qatari",
        "externalDescription": "الصيدلية قطريين ",
		"queueId":97,
		"appLetter":"",
		"starting":0,
        "Letter":"Q",
        "startingNormal":0
    },
    {
        "id": 874,
        "internalName": "Cashier Non-Qatari",
        "externalName": "Cashier Non-Qatari",
        "internalDescription": "OthersMale",
        "externalDescription": "Cashier - الصندوق",
		"queueId":98,
		"appLetter":"",
		"starting":0,
        "Letter":"Y",
        "startingNormal":0
    },
    {
        "id": 808,
        "internalName": "Cashier Qatari",
        "externalName": "Cashier Qatari",
        "internalDescription": "Othersmale",
        "externalDescription": "Cashier - الصندوق",
		"queueId":99,
		"appLetter":"",
		"starting":0,
        "Letter":"Z",
        "startingNormal":0
    },
    {
        "id": 796,
        "internalName": "222-Clinic Room",
        "externalName": "222-Clinic Room",
        "internalDescription": "222-Clinic Room",
        "externalDescription": "عيادة رقم (222)",
		"queueId":100,
		"apptQueueId":156,
		"appLetter":"W",
		"starting":550,
        "Letter":"W",
        "startingNormal":600
    },
    {
        "id": 975,
        "internalName": "223-Male Plaster Room",
        "externalName": "223-Male Plaster Room",
        "internalDescription": "223-Male Plaster Room",
        "externalDescription": "عيادة رقم (223)",
		"queueId":101,
		"appLetter":"",
		"starting":0,
        "Letter":"W",
        "startingNormal":700
    },
    {
        "id": 1157,
        "internalName": "205 new -Clinic Room",
        "externalName": "205 new -Clinic Room",
        "internalDescription": "205-Clinic Room",
        "externalDescription": "عيادة رقم (205)",
		"queueId":0,
		"appLetter":"W",
		"starting":900,
        "Letter":"W",
        "startingNormal":950
    },
    {
        "id": 839,
        "internalName": "Recption 2 Walk-in",
        "externalName": "Recption 2 Walk-in",
        "internalDescription": "Recption 2 Walk-in",
        "externalDescription": "Recption 2 Walk-in",
		"queueId":103,
		"apptQueueId":2674,
		"apptLateQueueId":120,
		"appLetter":"",
		"starting":0,
        "Letter":"",
        "startingNormal":2901
    },
    {
        "id": 882,
        "internalName": "Reception 3 Walk-in",
        "externalName": "Reception 3 Walk-in",
        "internalDescription": "Recption 3 Walk-in",
        "externalDescription": "Recption 3 Walk-in",
		"queueId":104,
		"appLetter":"",
		"starting":0,
        "Letter":"",
        "startingNormal":3901
    },
    {
        "id": 924,
        "internalName": "Reception 4 Walk-in",
        "externalName": "Reception 4 Walk-in",
        "internalDescription": "Recption 4 Walk-in",
        "externalDescription": "Recption 4 Walk-in",
		"queueId":105,
		"appLetter":"",
		"starting":0,
        "Letter":"",
        "startingNormal":4901
    },
    {
        "id": 825,
        "internalName": "Recption 5 Walk-in",
        "externalName": "Recption 5 Walk-in",
        "internalDescription": "Recption 5 Walk-in",
        "externalDescription": "Recption 5 Walk-in",
		"queueId":106,
		"appLetter":"",
		"starting":0,
        "Letter":"",
        "startingNormal":5901
    },
    {
        "id": 824,
        "internalName": "Reception 8 Walk-in",
        "externalName": "Reception 8 Walk-in",
        "internalDescription": "Recption 8 Walk-in",
        "externalDescription": "Recption 8 Walk-in",
		"queueId":107,
		"appLetter":"",
		"starting":0,
        "Letter":"",
        "startingNormal":8901
    },
    {
        "id": 925,
        "internalName": "Reception 9 Walk-in",
        "externalName": "Reception 9 Walk-in",
        "internalDescription": "Recption 9 Walk-in",
        "externalDescription": "Recption 9 Walk-in",
		"queueId":108,
		"appLetter":"",
		"starting":0,
        "Letter":"",
        "startingNormal":9901
    },
    {
        "id": 1020,
        "internalName": "Pharmacy Consultation",
        "externalName": "Pharmacy Consultation",
        "internalDescription": "Pharmacy Consultation",
        "externalDescription": "الاستشارات الصيدلية",
		"queueId":109,
		"appLetter":"",
		"starting":0,
        "Letter":"",
        "startingNormal":1000
    },
    {
        "id": 1126,
        "internalName": "Satellite Pharmacy",
        "externalName": "Satellite Pharmacy",
        "internalDescription": "Satellite Pharmacy",
        "externalDescription": "الصيدلية",
		"queueId":110,
		"appLetter":"",
		"starting":0,
        "Letter":"",
        "startingNormal":0
    },
    {
        "id": 832,
        "internalName": "Ultra Sound",
        "externalName": "Ultra Sound",
        "internalDescription": "Ultra Sound\n",
        "externalDescription": "الموجات فوق الصوتية",
		"queueId":111,
		"appLetter":"",
		"starting":0,
        "Letter":"",
        "startingNormal":100
    },
    {
        "id": 833,
        "internalName": "Prostatic",
        "externalName": "Prostatic",
        "internalDescription": "Prostatic",
        "externalDescription": "Prostatic",
		"queueId":112,
		"appLetter":"",
		"starting":0,
        "Letter":"",
        "startingNormal":200
    },
    {
        "id": 789,
        "internalName": "138-Physiotherapy",
        "externalName": "138-Physiotherapy",
        "internalDescription": "138-Physiotherapy",
        "externalDescription": "العلاج الطبيعي (138)",
		"queueId":113,
		"appLetter":"",
		"starting":0,
        "Letter":"",
        "startingNormal":300
    },
    {
        "id": 974,
        "internalName": "139-Physiotherapy",
        "externalName": "139-Physiotherapy",
        "internalDescription": "139-Physiotherapy",
        "externalDescription": "العلاج الطبيعي (139)",
		"queueId":114,
		"appLetter":"",
		"starting":0,
        "Letter":"",
        "startingNormal":400
    },
    {
        "id": 1017,
        "internalName": "MRI Preperation",
        "externalName": "MRI Preperation",
        "internalDescription": "MRI Preperation",
        "externalDescription": "إعدادات أشعة الرنين",
		"queueId":115,
		"appLetter":"",
		"starting":0,
        "Letter":"",
        "startingNormal":500
    },
    {
        "id": 867,
        "internalName": "Post Surgery Appointment",
        "externalName": "Help Desk",
        "internalDescription": "Post Surgery Appointment",
        "externalDescription": "بعد الجراحة ",
		"queueId":0,
		"appLetter":"",
		"starting":0,
        "Letter":"",
        "startingNormal":600
    },
    {
        "id": 1124,
        "internalName": "Post Surgery Rec 2",
        "externalName": "Post Surgery Rec 2",
        "internalDescription": "Post Surgery Rec 2",
        "externalDescription": "بعد الجراحة ",
		"queueId":160,
		"appLetter":"",
		"starting":0,
        "Letter":"",
        "startingNormal":700
    },
    {
        "id": 1196,
        "internalName": "Post Surgery Rec 3",
        "externalName": "Post Surgery Rec 3",
        "internalDescription": "Post Surgery Rec 3",
        "externalDescription": "بعد الجراحة ",
		"queueId":161,
		"appLetter":"",
		"starting":0,
        "Letter":"",
        "startingNormal":751
    },
    {
        "id": 1029,
        "internalName": "Post Surgery Rec 4",
        "externalName": "Post Surgery Rec 4",
        "internalDescription": "Post Surgery Rec 4",
        "externalDescription": "بعد الجراحة ",
		"queueId":162,
		"appLetter":"",
		"starting":0,
        "Letter":"",
        "startingNormal":800
    },
    {
        "id": 1031,
        "internalName": "Post Surgery Rec 5",
        "externalName": "Post Surgery Rec 5",
        "internalDescription": "Post Surgery Rec 5",
        "externalDescription": "بعد الجراحة ",
		"queueId":163,
		"appLetter":"",
		"starting":0,
        "Letter":"",
        "startingNormal":851
    },
    {
        "id": 896,
        "internalName": "Post Surgery Rec 8",
        "externalName": "Post Surgery Rec 8",
        "internalDescription": "Post Surgery Rec 8",
        "externalDescription": "بعد الجراحة ",
		"queueId":164,
		"appLetter":"",
		"starting":0,
        "Letter":"",
        "startingNormal":900
    },
    {
        "id": 1198,
        "internalName": "Post Surgery Rec 9",
        "externalName": "Post Surgery Rec 9",
        "internalDescription": "Post Surgery Rec 9",
        "externalDescription": "بعد الجراحة ",
		"queueId":165,
		"appLetter":"",
		"starting":0,
        "Letter":"",
        "startingNormal":951
    },
    {
        "id": 976,
        "internalName": "200 Female Plaster Room",
        "externalName": "200 Female Plaster Room",
        "internalDescription": "200 Female Plaster Room",
        "externalDescription": "200 Female Plaster Room",
        "targetTransactionTime": 0,
		"queueId":169,
		"appLetter":"",
		"starting":0,
        "Letter":"G",
        "startingNormal":600
    }
];


var receptionPrinters=[
    {
        reception:"Reception 1",
        unitId:"TPRec1",
        logicId:15,
        ip:'10.24.26.10'
    },
    {
        reception:"Reception 2",
        unitId:"TPRec2A",
        logicId:1,
        ip:'10.24.26.18'
    },
    {
        reception:"Reception 3",
        unitId:"TPRec3",
        logicId:4,
        ip:'10.24.26.14'
    },
    {
        reception:"Reception 4",
        unitId:"TPRec4",
        logicId:5,
        ip:'10.24.26.17'
    },
    {
        reception:"Reception 6",
        unitId:"TPRec6",
        logicId:3,
        ip:'10.24.26.9'
    },
    {
        reception:"Reception 8",
        unitId:"TPRec8",
        logicId:2,
        ip:'10.24.26.11'
    },
    {
        reception:"Reception 9",
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