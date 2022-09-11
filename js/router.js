var path = window.location.pathname;
var isUserSigned = sessionStorage.getItem("UTN");
const restrictedRoutes = [
    "/FecCumple.html",
    "/IndexTarea1.html",
    "/Mensaje.html",
    "/SeleccioneGenero.html"
];
var restrictedRoutesToLower = restrictedRoutes.map(Element => {
    return Element.toLocaleLowerCase();
})
if(restrictedRoutes.includes(path)){
    if(!isUserSigned){
        NavigateTo("404.html");
    }
}

