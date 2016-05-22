var FamilyName = 'lalaly'; //name
var GivenName = 'Bili'; //name
var Gender = 1//MR = 1 MRS = 2 MS =3
var FName = 'Jinun';
var w1,w2,w3,w4,w5,w6;



var whv_get = function() {
	var address = window.location.href;
	if(address == 'https://onlineservices.immigration.govt.nz/WorkingHoliday/'){
	var appid = document.getElementById("ctl00_ContentPlaceHolder1_applicationList_applicationsDataGrid_ctl02_referenceNumberLabel").innerHTML;
	alert('脚本开始运行！')
	w1=window.open('https://onlineservices.immigration.govt.nz/WorkingHoliday/Wizard/Personal1.aspx?ApplicationId='+appid+'&IndividualType=Primary&IndividualIndex=1'); 
	w2=window.open('https://onlineservices.immigration.govt.nz/WorkingHoliday/Wizard/Personal2.aspx?ApplicationId='+appid+'&IndividualType=Primary&IndividualIndex=1'); 
	w3=window.open('https://onlineservices.immigration.govt.nz/WorkingHoliday/Wizard/Personal3.aspx?ApplicationId='+appid+'&IndividualType=Primary&IndividualIndex=1'); 
	w4=window.open('https://onlineservices.immigration.govt.nz/WorkingHoliday/Wizard/Medical1.aspx?ApplicationId='+appid+'&IndividualType=Primary&IndividualIndex=1'); 
	w5=window.open('https://onlineservices.immigration.govt.nz/WorkingHoliday/Wizard/Character.aspx?ApplicationId='+appid+'&IndividualType=Primary&IndividualIndex=1'); 
	w6=window.open('https://onlineservices.immigration.govt.nz/WorkingHoliday/Wizard/WorkingHolidaySpecific.aspx?ApplicationId='+appid+'&IndividualType=Primary&IndividualIndex=1'); 
}
else if(address.indexOf("Personal1.")>0)
{
	alert('personal1')
}
else if(address.indexOf('Personal2')>0)
{
	alert('personal2')
}
else if(address.indexOf('Personal3')>0)
{
	alert('personal3')
}
else if(address.indexOf('Medical1')>0)
{
	alert('Medical1')
}
else if(address.indexOf('Character')>0)
{
	alert('Character')
}
else if(address.indexOf('WorkingHoliday')>0)
{
	alert('WorkingHoliday')
}
}


window.onload = whv_get;