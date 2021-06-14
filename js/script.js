// created a function for names
function names(){

    let birthday = document.getElementById("birthday");

    let gender = document.eudes.gender;

    let date = new Date(document.getElementById('birthday').value);
    let theday = date.getDay();
 // created arrays that hold the akans name and weekdays
    let week =  ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = week[theday];
    let female =["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    let male = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    let valid = false;
    
    // using DOM method i called for the div container
    let answer = document.getElementById('answer');
    // created an if statement if usser placed an invalid information
    if(birthday == ""){
        dateError.innerHTML = "invalid response";
        birthday.focus();
        return false;
    }else{
        for(var i = 0;i<gender.length;i++){
            if(gender[i].checked){
                valid = true;
                break;
            }
        }
     // created an else statement if a usser key's in right information
       if(valid){
        if(gender[i].value == "male"){
            answer.innerHTML = "You were born on a "+day+".<br>"+"Your Akan Name is " + male[theday]; 
            
        }else{
            if(gender[i].value == "female"){
                answer.innerHTML = "You were born on a "+day+".<br> "+"Your Akan Name is " + female[theday];
            }
        }
        }else{
            invalidGender.innerHTML = "input gender";
            return false;
        }

    }

}
function reload(){
    document.getElementById('invalidDate').innerHTML = "";
    document.getElementById('invalidGender').innerHTML = "";
    document.getElementById('answer').innerHTML = "";
    birthday.value = "";
    for(let j=0; j<gender.length; j++)
    gender[j].checked = false;

}
