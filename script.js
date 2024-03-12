var btnEncriptar = document.querySelector(".boton-encriptar");
var btnDesencriptar = document.querySelector(".boton-desencriptar");
var btnCopiar = document.querySelector(".boton-copiar");
var imagenPanelDerecho = document.querySelector("#imagen-sin-texto");
var h3 = document.querySelector("#div-h3");
var ingresoTextoAProcesar = document.querySelector("#div-p");
var respuesta = document.querySelector(".respuesta-encriptada");

btnEncriptar.onclick = encriptacion;
btnDesencriptar.onclick = desEncriptacion;
btnCopiar.onclick = copiarEncriptado;

function copiarEncriptado(){
    var textoCopiable = respuesta.textContent;
    navigator.clipboard.writeText(textoCopiable);
}

function encriptacion(){
    cambioPanelDerecho();
    var textoIngresado = ingresoTexto()
    respuesta.textContent = encriptacionDeTexto(textoIngresado);
}

function desEncriptacion(){
    cambioPanelDerecho();
    var textoIngresado = ingresoTexto()
    respuesta.textContent = DesEncriptacionDeTexto(textoIngresado);
}

function ingresoTexto(){
    var textoIngresado = document.querySelector("#ingreso-texto");
    return textoIngresado.value;
}

function cambioPanelDerecho(){
    imagenPanelDerecho.classList.add("esconder");
    h3.classList.add("esconder");
    ingresoTextoAProcesar.classList.add("esconder");
}

function encriptacionDeTexto(mensaje){
    var texto = mensaje;
    var textoEncriptado = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoEncriptado = textoEncriptado + "ai"
        }
        else if(texto[i] == "e"){
            textoEncriptado = textoEncriptado + "enter"
        }
        else if(texto[i] == "i"){
            textoEncriptado = textoEncriptado + "imes"
        }
        else if(texto[i] == "o"){
            textoEncriptado = textoEncriptado + "ober"
        }
        else if(texto[i] == "u"){
            textoEncriptado = textoEncriptado + "ufat"
        }
        else{
            textoEncriptado = textoEncriptado + texto[i];
        }
    }
    return textoEncriptado;
}

function DesEncriptacionDeTexto(mensaje){
    var texto = mensaje;
    var textoEncriptado = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoEncriptado = textoEncriptado + "a"
            i = i + 1;
        }
        else if(texto[i] == "e"){
            textoEncriptado = textoEncriptado + "e"
            i = i + 4;
        }
        else if(texto[i] == "i"){
            textoEncriptado = textoEncriptado + "i"
            i = i + 3;
        }
        else if(texto[i] == "o"){
            textoEncriptado = textoEncriptado + "o"
            i = i + 3;
        }
        else if(texto[i] == "u"){
            textoEncriptado = textoEncriptado + "u"
            i = i + 3;
        }
        else{
            textoEncriptado = textoEncriptado + texto[i];
        }
    }
    return textoEncriptado;
}