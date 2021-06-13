// created a function for names
function names(){
    let = document.getElementById("birthday");
    let gender = document.compareDocumentPosition.gender;
    let dbir = birthday.value;    
    let date = newDate(document.getElementById(birthday).value);
    let theday = date.getDay();
 // created arrays that hold the akans name and weekdays
    let week =  ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let female =["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    let male = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    let valid = false;
    
    // using DOM method i called for the div container
    let container = document.getElementById("container");
    // created an if statement if usser placed an invalid information
    if(birthday == "");{
        dateError.innerHTML = "invalid response";
        birthday.focus();
        return false;
    }
   


}