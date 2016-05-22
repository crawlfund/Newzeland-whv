var FamilyName = 'lalaly'; //name
var GivenName = 'Bili'; //name
var Gender = 1//MR = 1 MRS = 2 MS =3
var FName = 'Jinun';




var windowNum=6;
var w;

var whv_get = function() {
	
w=window.open('https://onlineservices.immigration.govt.nz/WorkingHoliday/Wizard/Medical1.aspx?ApplicationId=1488860&IndividualType=Primary&IndividualIndex=1'); 
  


document.getElementById('ctl00_ContentPlaceHolder1_wizardPageFooter_wizardPageNavigator_validateButton').click()

document.getElementById('ctl00_ContentPlaceHolder1_personDetails_familyNameTextBox').value=FamilyName;
  document.getElementById('ctl00_ContentPlaceHolder1_personDetails_givenName1Textbox').value=GivenName;
document.getElementById('ctl00_ContentPlaceHolder1_personDetails_genderDropDownList').selectedIndex=Gender; 
 
}


window.onload = whv_get;