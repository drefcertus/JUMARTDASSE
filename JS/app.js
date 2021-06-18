//MENU RESPONSIVE
var btnAbrirMenu = document.getElementById("btnAbrirMenu"),
    btnCerrarMenu = document.getElementById("btnCerrarMenu"),
    menuResponsive = document.getElementById("barraMenu"),
    enlaces = document.getElementById("enlaces");

    //Evento click abrir
    btnAbrirMenu.addEventListener("click", function () {
        menuResponsive.classList.add("active");  //agrega clase
    });

    //Evento click cerrar
    btnCerrarMenu.addEventListener("click", function () {
        menuResponsive.classList.remove("active");  //quita clase
    });

    //Evento cerrar menú con enlace
    enlaces.addEventListener("click", function () {
        menuResponsive.style.transitionDelay = "0.5s";
        menuResponsive.classList.remove("active");  //quita clase
    });

//SLIDER PRODUCTOS

var contenedor = document.querySelector(".slider"),  //id o class
    btnIzq = document.getElementById("btn-izq"),
    btnDer = document.getElementById("btn-der");

    //Evento botón derecho
    btnDer.addEventListener("click", function() {
        contenedor.scrollLeft += contenedor.offsetWidth; //scroll
    })

    //Evento boton izquierdo
    btnIzq.addEventListener("click", function() {
        contenedor.scrollLeft -= contenedor.offsetWidth; //scroll
    })

//VALIDAR FORMULARIO

var formulario = document.getElementById("formulario")

    function validar(e){
        var inputNombre = document.getElementById("nombre"),
            inputEmail = document.getElementById("email"),
            inputComent = document.getElementById("comentarios"),
            alertCorrecto = document.getElementById("alerta-correcto"),
            alertError = document.getElementById("alerta-error");

        if(inputNombre.value == 0 || inputEmail.value == 0 || inputComent.value == 0){
            e.preventDefault();
            alertError.classList.remove("hide");
            alertError.classList.add("show");

            setTimeout(function(){
                alertError.classList.remove("show");
                alertError.classList.add("hide");
            },2000)

        }else{
            e.preventDefault();
            alertCorrecto.classList.remove("hide");
            alertCorrecto.classList.add("show");

            setTimeout(function(){
                alertCorrecto.classList.remove("show");
                alertCorrecto.classList.add("hide");
            },2000)

            inputNombre.value = "";
            inputEmail.value = "";
            inputComent.value = "";
        }
    }
    
//Evento formulario

formulario.addEventListener("submit",validar)

//BOTÓN SCROLL TOP
var btnTop = document.getElementById("btn-top");

//DETECTAMOS SCROLL
window.addEventListener("scroll",function(){
    var scroll = document.documentElement.scrollTop,
        fullSize = document.documentElement.offsetHeight,
        sizeViewPort = document.documentElement.clientHeight;

    if(scroll>100){
        btnTop.classList.add("show");
    }else{
        btnTop.classList.remove("show");
    }

    //MODIFICAR ELEMENTO FINAL DE PÁGINA
    if(fullSize == (scroll + sizeViewPort)){
        btnTop.classList.add("final")
    }else{
        btnTop.classList.remove("final")
    }

})

//DETECTAMOS CLICK EN BTN TOP

btnTop.addEventListener("click", function(){
    window.scrollTo(0,0) /*ejex,ejey*/

})

//EVENTO CLICK LOGO

var logo = document.getElementById("logo");

logo.addEventListener("click",function(){
    window.scrollTo(0,0)
})
