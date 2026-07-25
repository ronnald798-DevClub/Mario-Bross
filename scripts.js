

const formulario = document.querySelector(".formulario");
const mascara = document.querySelector(".mascara-formulario");

function mostrarFormario(){   
    formulario.style.left = "50%";
    formulario.style.transform = "translate(-50%)";
    mascara.style.visibility = "visible";
    
}

function esconderformulario(){
    formulario.style.left = "-340px";
    formulario.style.transform = "translate(0)";
    mascara.style.visibility = "hidden";
}