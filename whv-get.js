var FamilyName = 'lalaly'; //name
var GivenName = 'Bili'; //name
var Gender = 1//MR = 1 MRS = 2 MS =3
var FName = 'Jinun';




var whv_get = function() {
	if(window.location.href == 'https://onlineservices.immigration.govt.nz/WorkingHoliday/'){
	var appid = document.getElementById("ctl00_ContentPlaceHolder1_applicationList_applicationsDataGrid_ctl02_referenceNumberLabel").innerHTML;
	alert('脚本开始运行！')
	window.open('https://onlineservices.immigration.govt.nz/WorkingHoliday/Wizard/Personal1.aspx?ApplicationId='+appid+'&IndividualType=Primary&IndividualIndex=1'); 
	window.open('https://onlineservices.immigration.govt.nz/WorkingHoliday/Wizard/Personal2.aspx?ApplicationId='+appid+'&IndividualType=Primary&IndividualIndex=1'); 
	window.open('https://onlineservices.immigration.govt.nz/WorkingHoliday/Wizard/Personal3.aspx?ApplicationId='+appid+'&IndividualType=Primary&IndividualIndex=1'); 
	window.open('https://onlineservices.immigration.govt.nz/WorkingHoliday/Wizard/Medical1.aspx?ApplicationId='+appid+'&IndividualType=Primary&IndividualIndex=1'); 
	window.open('https://onlineservices.immigration.govt.nz/WorkingHoliday/Wizard/Character.aspx?ApplicationId='+appid+'&IndividualType=Primary&IndividualIndex=1'); 
	window.open('https://onlineservices.immigration.govt.nz/WorkingHoliday/Wizard/WorkingHolidaySpecific.aspx?ApplicationId='+appid+'&IndividualType=Primary&IndividualIndex=1'); 
}
else{
	alert('process')
}
  



 
}


window.onload = whv_get;