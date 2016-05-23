var FamilyName = 'ZHNG'; //name
var GivenName = 'MGHU'; //name
var Gender = 2;//Male = 1 Female = 2
var Year = 1990;//年月日的年
var Month = 8;//年月日的月
var Day = 26;//年月日的日，输入数字
var Country=44;//出生地。中国是44，不需要修改
//下面填当前的联系地址
var StreetName='Long street'//街道地址，填英文地址，替换xx,注意保留引号
var City='LuZ'//城市，请修改引号内的内容，保留引号!
var CountryCurrent=44//此处44代表中国，不需要修改
var EmailAdress='9555837@qq.com'//电子邮件地址
//个人信息第二页
var PassportNumber = 'E09669410'//此处填你的护照号
//下面是护照有效期限
var PassportYear = 2024;//年月日的年
var PassportMonth = 4;//年月日的月
var PassportDay = 24;//年月日的日，输入数字
//Second Form of Identification
//Please enter the details of another Form of Identification you would be able to produce to prove your identity.
var IdentificationType=3//Driver licese=1, Birth Certificate=2, NationID=3
//下面是Date Document was Issued
var IssuedYear = 2007;//年月日的年
var IssuedMonth = 4;//年月日的月
var IssuedDay = 13;//年月日的日，输入数字
var Howlong = 1;//12月1，24月2
//working Holiday Specific
//Have you ever been issued a visa or permit under a New Zealand Working Holiday Scheme before?
var BeenIssued = 1;//无1，有2
//Do you have sufficient funds available for your Working Holiday in New Zealand? Check the amount of funds you will need here.
var Funds = 2;//无1，有2
var ExpectYear =1;//预计登录年份，2016填1,2017填2
var ExpectMonth = 11;//预计登录月份
var ExpectDay = 6;//预计登录日期日
//Have you been to NZ before?
var BeenTo =1;//否1，有2
var Funds2 =2;//有
var MeetRequirement=2;//有





var openpage= function(){
	window.location.href
	
}



var whv_get = function() {
address=window.location.href;
if(address == 'https://onlineservices.immigration.govt.nz/WorkingHoliday/'){
	var appid = document.getElementById("ctl00_ContentPlaceHolder1_applicationList_applicationsDataGrid_ctl02_referenceNumberLabel").innerHTML;
	alert('脚本开始运行！')
	window.open('https://onlineservices.immigration.govt.nz/WorkingHoliday/Wizard/Personal1.aspx?ApplicationId='+appid+'&IndividualType=Primary&IndividualIndex=1'); 
	window.open('https://onlineservices.immigration.govt.nz/WorkingHoliday/Wizard/Personal2.aspx?ApplicationId='+appid+'&IndividualType=Primary&IndividualIndex=1'); 
	//window.open('https://onlineservices.immigration.govt.nz/WorkingHoliday/Wizard/Personal3.aspx?ApplicationId='+appid+'&IndividualType=Primary&IndividualIndex=1'); 
	window.open('https://onlineservices.immigration.govt.nz/WorkingHoliday/Wizard/Medical1.aspx?ApplicationId='+appid+'&IndividualType=Primary&IndividualIndex=1'); 
	window.open('https://onlineservices.immigration.govt.nz/WorkingHoliday/Wizard/Character.aspx?ApplicationId='+appid+'&IndividualType=Primary&IndividualIndex=1'); 
	window.open('https://onlineservices.immigration.govt.nz/WorkingHoliday/Wizard/WorkingHolidaySpecific.aspx?ApplicationId='+appid+'&IndividualType=Primary&IndividualIndex=1'); 
	}
else if(address.indexOf("Personal1")>0)
{
//如果还没刷出来不停地刷
if(document.getElementById('ctl00_ContentPlaceHolder1_addressContactDetails_address_countryDropDownList')==null)
{document.getElementById('ctl00_ContentPlaceHolder1_wizardPageFooter_wizardPageNavigator_validateButton').click()}		if(document.getElementById('ctl00_ContentPlaceHolder1_addressContactDetails_address_countryDropDownList').value==0)
	{
	//openpage();
	fill_personal1();
	}
	else
	window.close();
}
else if(address.indexOf('Personal2')>0)
{
//如果还没刷出来不停地刷
if(document.getElementById('ctl00_ContentPlaceHolder1_identification_passportNumberTextBox')==null)
{document.getElementById('ctl00_ContentPlaceHolder1_wizardPageFooter_wizardPageNavigator_validateButton').click()}	if(document.getElementById('ctl00_ContentPlaceHolder1_identification_passportNumberTextBox').value==0)
	fill_personal2();
	else
	window.close();

}
else if(address.indexOf('Personal3')>0)
{
	
}
else if(address.indexOf('Medical1')>0)
{
//如果还没刷出来不停地刷
if(document.getElementById('ctl00_ContentPlaceHolder1_medicalConditions_renalDialysisDropDownList')==null)
{document.getElementById('ctl00_ContentPlaceHolder1_wizardPageFooter_wizardPageNavigator_validateButton').click()}
	if(document.getElementById('ctl00_ContentPlaceHolder1_medicalConditions_renalDialysisDropDownList').selectedIndex==0)
	fill_Medical1();
else
	window.close();

}
else if(address.indexOf('Character')>0)
{
//如果还没刷出来不停地刷
if(document.getElementById('ctl00_ContentPlaceHolder1_character_imprisonment5YearsDropDownList')==null)
{document.getElementById('ctl00_ContentPlaceHolder1_wizardPageFooter_wizardPageNavigator_validateButton').click()}
	if(document.getElementById('ctl00_ContentPlaceHolder1_character_imprisonment5YearsDropDownList').selectedIndex==0)
	fill_Character();
else
	window.close();
}
else if(address.indexOf('WorkingHoliday')>0)
{
//如果还没刷出来不停地刷
if(document.getElementById('ctl00_ContentPlaceHolder1_offshoreDetails_commonWHSQuestions_previousWhsPermitVisaDropDownList')==null||document.getElementById('ctl00_ContentPlaceHolder1_wizardPageHeader_nav_submitImageButton')==null
)
{document.getElementById('ctl00_ContentPlaceHolder1_wizardPageFooter_wizardPageNavigator_validateButton').click()}
		if(document.getElementById('ctl00_ContentPlaceHolder1_offshoreDetails_commonWHSQuestions_previousWhsPermitVisaDropDownList').selectedIndex==0)
	fill_WorkingHoliday()
}
}

var fill_personal1 = function(){
	document.getElementById('ctl00_ContentPlaceHolder1_personDetails_familyNameTextBox').value=FamilyName;
document.getElementById('ctl00_ContentPlaceHolder1_personDetails_givenName1Textbox').value=GivenName;
document.getElementById('ctl00_ContentPlaceHolder1_personDetails_genderDropDownList').selectedIndex=Gender;
document.getElementById('ctl00_ContentPlaceHolder1_personDetails_dateOfBithDatePicker_Day').selectedIndex=Day;
document.getElementById('ctl00_ContentPlaceHolder1_personDetails_dateOfBithDatePicker_Month').selectedIndex=Month;
document.getElementById('ctl00_ContentPlaceHolder1_personDetails_dateOfBithDatePicker_Year').selectedIndex=Year-1985+1;
document.getElementById('ctl00_ContentPlaceHolder1_personDetails_CountryDropDownList').selectedIndex=Country;

//
document.getElementById('ctl00_ContentPlaceHolder1_addressContactDetails_address_address1TextBox').value=StreetName;
document.getElementById('ctl00_ContentPlaceHolder1_addressContactDetails_address_cityTextBox').value=City;
document.getElementById('ctl00_ContentPlaceHolder1_addressContactDetails_address_countryDropDownList').selectedIndex=CountryCurrent;
document.getElementById('ctl00_ContentPlaceHolder1_addressContactDetails_contactDetails_emailAddressTextBox').value=EmailAdress;
document.getElementById('ctl00_ContentPlaceHolder1_hasAgent_representedByAgentDropdownlist').selectedIndex=1
document.getElementById('ctl00_ContentPlaceHolder1_communicationMethod_communicationMethodDropDownList').selectedIndex=1
document.getElementById('ctl00_ContentPlaceHolder1_hasCreditCard_hasCreditCardDropDownlist').selectedIndex=2

document.getElementById('ctl00_ContentPlaceHolder1_wizardPageFooter_wizardPageNavigator_validateButton').click();

}

var fill_personal2 = function(){
	document.getElementById('ctl00_ContentPlaceHolder1_identification_passportNumberTextBox').value=PassportNumber;
document.getElementById('ctl00_ContentPlaceHolder1_identification_confirmPassportNumberTextBox').value=PassportNumber;
document.getElementById('ctl00_ContentPlaceHolder1_identification_passportExpiryDateDatePicker_Day').selectedIndex=PassportDay;
document.getElementById('ctl00_ContentPlaceHolder1_identification_passportExpiryDateDatePicker_Month').selectedIndex=PassportMonth;
document.getElementById('ctl00_ContentPlaceHolder1_identification_passportExpiryDateDatePicker_Year').selectedIndex=PassportYear-2016+1;
document.getElementById('ctl00_ContentPlaceHolder1_identification_otherIdentificationDropdownlist').selectedIndex=IdentificationType;
document.getElementById('ctl00_ContentPlaceHolder1_identification_otherIssueDateDatePicker_Day').selectedIndex=IssuedDay;
document.getElementById('ctl00_ContentPlaceHolder1_identification_otherIssueDateDatePicker_Month').selectedIndex=IssuedMonth;
document.getElementById('ctl00_ContentPlaceHolder1_identification_otherIssueDateDatePicker_Year').selectedIndex=IssuedYear-1985+1;

document.getElementById('ctl00_ContentPlaceHolder1_wizardPageFooter_wizardPageNavigator_validateButton').click();
}


var fill_Medical1 = function(){
	
document.getElementById('ctl00_ContentPlaceHolder1_medicalConditions_renalDialysisDropDownList').selectedIndex=1;
document.getElementById('ctl00_ContentPlaceHolder1_medicalConditions_tuberculosisDropDownList').selectedIndex=1;
document.getElementById('ctl00_ContentPlaceHolder1_medicalConditions_cancerDropDownList').selectedIndex=1;
document.getElementById('ctl00_ContentPlaceHolder1_medicalConditions_heartDiseaseDropDownList').selectedIndex=1;
document.getElementById('ctl00_ContentPlaceHolder1_medicalConditions_disabilityDropDownList').selectedIndex=1;
document.getElementById('ctl00_ContentPlaceHolder1_medicalConditions_hospitalisationDropDownList').selectedIndex=1;
document.getElementById('ctl00_ContentPlaceHolder1_medicalConditions_residentailCareDropDownList').selectedIndex=1;
if(document.getElementById('ctl00_ContentPlaceHolder1_medicalConditions_pregnancy_pregnancyStatusDropDownList')!=null)
document.getElementById('ctl00_ContentPlaceHolder1_medicalConditions_pregnancy_pregnancyStatusDropDownList').selectedIndex=1;

if(document.getElementById('ctl00_ContentPlaceHolder1_medicalConditions_tbRiskDropDownList')!=null)
document.getElementById('ctl00_ContentPlaceHolder1_medicalConditions_tbRiskDropDownList').selectedIndex=1;

document.getElementById('ctl00_ContentPlaceHolder1_wizardPageFooter_wizardPageNavigator_validateButton').click();
}
var fill_Character = function(){
	
document.getElementById('ctl00_ContentPlaceHolder1_character_imprisonment5YearsDropDownList').selectedIndex=1;
document.getElementById('ctl00_ContentPlaceHolder1_character_imprisonment12MonthsDropDownList').selectedIndex=1;
document.getElementById('ctl00_ContentPlaceHolder1_character_removalOrderDropDownList').selectedIndex=1;
document.getElementById('ctl00_ContentPlaceHolder1_character_deportedDropDownList').selectedIndex=1;

document.getElementById('ctl00_ContentPlaceHolder1_character_chargedDropDownList').selectedIndex=1;

document.getElementById('ctl00_ContentPlaceHolder1_character_convictedDropDownList').selectedIndex=1;
document.getElementById('ctl00_ContentPlaceHolder1_character_underInvestigationDropDownList').selectedIndex=1;
document.getElementById('ctl00_ContentPlaceHolder1_character_excludedDropDownList').selectedIndex=1;
document.getElementById('ctl00_ContentPlaceHolder1_character_removedDropDownList').selectedIndex=1;
document.getElementById('ctl00_ContentPlaceHolder1_wizardPageFooter_wizardPageNavigator_validateButton').click();
}


var fill_WorkingHoliday = function(){

document.getElementById('ctl00_ContentPlaceHolder1_offshoreDetails_commonWHSQuestions_previousWhsPermitVisaDropDownList').selectedIndex=BeenIssued;
document.getElementById('ctl00_ContentPlaceHolder1_offshoreDetails_commonWHSQuestions_sufficientFundsHolidayDropDownList').selectedIndex=Funds;


document.getElementById('ctl00_ContentPlaceHolder1_offshoreDetails_intendedTravelDateDatePicker_Day').selectedIndex=ExpectDay;
document.getElementById('ctl00_ContentPlaceHolder1_offshoreDetails_intendedTravelDateDatePicker_Month').selectedIndex=ExpectMonth;
document.getElementById('ctl00_ContentPlaceHolder1_offshoreDetails_intendedTravelDateDatePicker_Year').selectedIndex=ExpectYear;
//不同的国家可能有下面这个选项
if(document.getElementById('ctl00_ContentPlaceHolder1_offshoreDetails_lengthOfStay_lengthOfStayDropDownList')!=null){
document.getElementById('ctl00_ContentPlaceHolder1_offshoreDetails_lengthOfStay_lengthOfStayDropDownList').selectedIndex=Howlong;
}
document.getElementById('ctl00_ContentPlaceHolder1_offshoreDetails_beenToNzDropDownList').selectedIndex=BeenTo;
document.getElementById('ctl00_ContentPlaceHolder1_offshoreDetails_requirementsQuestions_sufficientFundsOnwardTicketDropDownList').selectedIndex=Funds2;
document.getElementById('ctl00_ContentPlaceHolder1_offshoreDetails_requirementsQuestions_readRequirementsDropDownList').selectedIndex=MeetRequirement;

document.getElementById('ctl00_ContentPlaceHolder1_wizardPageFooter_wizardPageNavigator_validateButton').click()
	
}
window.onload = whv_get;