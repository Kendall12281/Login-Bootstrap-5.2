function ShowAlert(visible, text, typeofAlert){
    var showAlert = document.getElementById("alert");
    if(visible){
        if(typeofAlert == "alert-success"){
            showAlert.classList.remove("alert-danger");
            showAlert.classList.remove("hide-alert");
            showAlert.classList.add("alert-success");
            showAlert.innerText = text;
        }else{
            showAlert.classList.remove("alert-success");
            showAlert.classList.remove("hide-alert");
            showAlert.classList.add("alert-danger");
            showAlert.innerText = text;
        }
    }else{

        showAlert.classList.add("hide-alert");
        showAlert.innerText = "";
    }
}




