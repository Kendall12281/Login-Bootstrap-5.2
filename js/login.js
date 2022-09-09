var signInButton = document.getElementById("signIn");

signInButton.addEventListener("click",function(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var healtCenter = document.getElementById("selectHealthCenter").value;
    
    if(username.length < 1 || password.length < 1){
        // alert("Usuario o contraseña no pueden estar vacios");
        ShowAlert(true,"Usuario o contraseña no pueden estar vacios");
    }else{
        if(username == "UTN" && password == "MAVERICK" && healtCenter == 3){
            ShowAlert(true,"Datos ingresados validos,\nTransfiriendo, favor espere ... ","alert-success");
            setTimeout(() => {  NavigateTo("IndexTarea1.html"); }, 1000);
            
        }else{
            ShowAlert(true,"Datos ingresados invalidos","alert-danger");
        }
    }

});

