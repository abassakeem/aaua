// function doGet(e){
//     var x = HtmlService.createTemplateFromFile("Online-registration-page");
//     var y = x.evaluate();
//     var z = y.setXframeOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
//     return z;
// }
// function checkLogin(Firstname,Surname){
//     var url="https://docs.google.com/spreadsheets/d/16sBj5sculNM48H7AjTJMFHQUHEts1qNDjNpAwJgSKyE/edit#gid=0";
//     var ss= SpreadsheetApp.openByUrl(url);
//     var webAppSheet = ss.getSheetByName("DATA");
//     var getLastRow = webAppSheet.getLastRow();
//     var found_record = "";

//     for (var i = 1; i <= getLastRow; i++){
//         if (webAppSheet.getRange(i, 1).getValue().toUpperCase() == username.toUpperCase() && webAppSheet.getRange( i,2).getValue().toUpperCase() == password.toUpperCase())

//     {
//         found_record = 'TRUE';
//     }}
//     if(found_record == ""){
//         found_record = 'FALSE'
//     }
// }


// function AddRecord(Firstname,Surname,Email){
//     var url= "https://docs.google.com/spreadsheets/d/16sBj5sculNM48H7AjTJMFHQUHEts1qNDjNpAwJgSKyE/edit#gid=0";
//     var ss = SpreadsheetApp.openByUrl(url);
//     var webAppSheet = ss.getSheetByName("DATA");
//     webAppSheet.appendRow([Firstname,Surname,Email])
// }

const scriptURL = "https://script.google.com/macros/s/AKfycbxHgR7tUrIsM8UJAEM290NA6iaYD9A1B84RRSzS7-4dgkphunT-oruGun2CxNPeuISc/exec"
const form = document.forms['google-sheet']
console.log("abass")

form.addEventListner('submit', e =>{
    e.preventDefault()
    fetch(scriptUrl, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Successfully registered"))
    .catch(error => console.error('Error!', error.message))
})