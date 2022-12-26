//alert("HOLA, MUNDO JS") 
//aca las variables globales
let ataqueJugador
let ataqueEnemigo

//a continuacion las funciones del juego
function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)   
    
    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener ('click', ataqueFuego)

    let botonAgua= document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)

    let botonTierra= document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)
}

function seleccionarMascotaJugador(){
    let inputHipodoge= document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')    
    let inputRatigueya = document.getElementById('ratigueya')
    let spanMascotaJugador = document.getElementById('mascota-jugador')

    if(inputHipodoge.checked){
        //alert("SELECCIONASTE A HIPODOGE")
        spanMascotaJugador.innerHTML= 'Hipodoge'
    }else if(inputCapipepo.checked){
        //alert("SELECCIONASTE A CAPIPEPO")
        spanMascotaJugador.innerHTML= 'Capipepo'
    }else if(inputRatigueya.checked){
        //alert("SELECCIONASTE A RATIGUEYA")
        spanMascotaJugador.innerHTML= 'Ratigueya'
    }else{
        alert("POR FAVOR SELECCIONA UNA MASCOTA")
    }
    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo(){
    let mascotaAleatoria= aleatorio(1,3)
    let spanMascotaEnemigo= document.getElementById('mascota-enemigo')

    if(mascotaAleatoria == 1){
        spanMascotaEnemigo.innerHTML= 'Hipodoge'
        
    } else if(mascotaAleatoria==2){
        spanMascotaEnemigo.innerHTML= 'Capipepo'
        
    }else {
        spanMascotaEnemigo.innerHTML= 'Ratigueya'                
    }
}
//las funciones de los botones de ataque para modificar las v. globales
function ataqueFuego(){
    ataqueJugador= 'FUEGO'
    ataqueAleatorioEnemigo()
}
function ataqueAgua(){
    ataqueJugador= 'AGUA'
    ataqueAleatorioEnemigo()
}
function ataqueTierra(){
    ataqueJugador= 'TIERRA'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio= aleatorio(1,3)

    if(ataqueAleatorio==1){
        ataqueEnemigo= 'FUEGO'
    }else if(ataqueAleatorio==2){
        ataqueEnemigo= 'AGUA'
    }else {
        ataqueEnemigo= 'TIERRA'
    }

    combate()
}

function combate(){
    if(ataqueEnemigo==ataqueJugador){
        crearMensaje("EMPATE")
    }else if(ataqueJugador == 'FUEGO' && ataqueEnemigo== 'TIERRA'){
        crearMensaje("GANASTE")
       
    }else if(ataqueJugador== 'AGUA' && ataqueEnemigo== 'FUEGO'){
        crearMensaje("GANASTE")
     
    }else if(ataqueJugador== 'TIERRA' && ataqueEnemigo== 'AGUA'){
        crearMensaje("GANASTE")
     
    }else {
        crearMensaje("PERDISTE")       
    } 
}

function crearMensaje(resultado){
    let sectionMensajes= document.getElementById('mensajes')   
    let parrafo = document.createElement('p')

    parrafo.innerHTML = 'Tu mascota atacó con' + ataqueJugador + ', la mascota del enemigo atacó con' + ataqueEnemigo + ' - ' + resultado
    sectionMensajes.appendChild(parrafo)
}
// traigo este metodo de aleatoriedad
// desde PublicKeyCredential, papel y tijera

function aleatorio(min, max){
    return Math.floor(Math.random() * (max-min +1) + min)
}


    window.addEventListener('load', iniciarJuego)


