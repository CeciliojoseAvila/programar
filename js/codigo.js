
// 1 es piedra, 2 es papel y 3 es tijera
function aleatorio(min, max){
    return Math.floor(Math.random() * (max-min +1) + min)
}

function eleccion(jugada){
        let resultado= " "
            if(jugada==1){
            resultado="piedra 🪨"
        } else if(jugada==2){
            resultado= "papel 🧻"
        }else if(jugada==3){
            resultado="Tijera ✂️"
        }else{
            resultado="MALA ELECCION"
        }
        return resultado
}
        let jugador = 0       
        let pc = 0
        let triunfos=0
        let pérdidas=0

        while(triunfos < 3 && pérdidas <3){
        pc= aleatorio(1, 3)
        jugador= prompt("Elige 1 Piedra, 2 Papel, 3 Tijera")

        //alert("Elegiste " + jugador)
        alert("pc elige: " + eleccion(pc))
        alert("Tú eliges: " + eleccion(jugador))

        //COMBATE
    if(pc==jugador){
        alert("EMPATE")
    }else if(jugador==1 && pc==3){
        alert("GANASTE")
        triunfos = triunfos+1
        triunfos = triunfos+1
    }else if(jugador==2 && pc==1){
        alert("GANASTE")
        triunfos = triunfos+1
    }else {
        alert("PERDISTE")
        pérdidas = pérdidas+1
}  

}
alert("GANASTE " + triunfos + " VECES. PERDISTE " + pérdidas + "VECES. ")
/*aleatorio(1, 3)
jugador= prompt("Elige 1 Piedra, 2 Papel, 3 Tijera")
//alert("Elegiste " + jugador)
alert("pc elige: " + eleccion(pc))
alert("Tú eliges: " + eleccion(jugador))*/
/*if(jugador==1){
    alert("Elegiste 🪨")
} else if(jugador==2){
    alert("Elegiste 🧻")
}else if(jugador==3){
    alert("Elegiste ✂️")
}else{
    alert("Elegiste perder")
}
if(pc==1){
    alert("pc elige 🪨")
} else if(pc==2){
    alert("pc elige 🧻")
}else if(pc==3){
    alert("pc elige ✂️")
}*/
//COMBATE
/* if(pc==jugador){
alert("EMPATE")
}else if(jugador==1 && pc==3){
alert("GANASTE")
}else if(jugador==2 && pc==1){
alert("GANASTE")
}else {
alert("PERDISTE")
}*/

