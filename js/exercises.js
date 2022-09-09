/**get age **/
function GetAge(){
    var age = document.getElementById("age").value;
    var textAreaDate = document.getElementById("textAreaDate");
    var birthday = new Date(age);
    var date = new Date();
    var today = new Date(date.getFullYear(),date.getMonth(),date.getDay());

    var diff_ms = Date.now() - birthday.getTime();
    var age_dt = new Date(diff_ms); 
  
    var years = Math.abs(age_dt.getUTCFullYear() - 1970);

    console.log(years)
    textAreaDate.innerHTML = "Su edad es: "+years+" años";

}

/*Get gender*/
function GetGender(){
    var selectGender = document.getElementById("selectGender").value;
    var textAreaGender = document.getElementById("textAreaGender");

    textAreaGender.innerHTML = "Genero "+selectGender;

}

/** Get message* */
function GetMessage(){
    var textAreaMessage = document.getElementById("textAreaMessage").value;
    var greenText = document.getElementById("greenText");
    var letterCounter = document.getElementById("letterCounter");
    var messages = document.getElementById("messages");

    messages.classList.remove("show-text");

    greenText.value = textAreaMessage;
    letterCounter.value = " Cantidad de letras: "+textAreaMessage.length;
}