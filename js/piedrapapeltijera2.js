//Version mejorada, menos codigo
//1=piedra /2=papel/ 3=tijera

function random(min,max){
    return Math.floor(Math.random() * (max - min + 1)+min)
}

//funcion para la eleccion de numeros para jugador y pc
function selection(player){
    let result = " "
    if (player == 1) {
        result = " 🥌🥌(piedra)"
    } else if(player==2){
        result = " 📋📋(papel)"
    }else if(player==3){
        result = " ✂✂(tijera)"
    }else {
        result = " ha elegido mal";
        }
    return result;
}

function combate(player1,player2) {
    let msj = " "
    //player1 es pc
    if (player1 == player2){
        msj = "Empate!";
    }else if ((player2 == 1 && player1 == 3) || (player2 == 2 && player1 == 1) || (player2 == 3 && player1 == 2)){
        msj = "Ganaste!";
        
    }else {
        msj= "Perdiste!";
        
    }
    return msj;
}





function play(){

    let pc = 0
    let jugador = 0;
    let lost = 0;
    let goals = 0;
    let empate= 0;
    

    while (lost<3 && goals <3) {
        
        pc = random(1,3);
        jugador = prompt("Elija (1) para piedra, (2) para papel y (3) para tijera");

        //invocacion de funcion eleccion
        alert("Usted eligio: " + selection(jugador));
        alert("Pc eligio: " + selection(pc));

        //combate
        alert(combate(pc,jugador))

        if (combate(pc,jugador) == "Ganaste!") {
            goals +=1;
        }else if (combate(pc,jugador) == "Empate!"){
            empate +=1;
        }
        else {
            lost +=1;
        }
    
    }

    alert("Ganaste "+ goals + " veces. " + "Perdiste "+ lost + " veces." + " Empataste "+ empate + " veces.");

}

function startPlay(){
    let btnPlay = document.getElementById('btn-play');
    btnPlay.addEventListener('click', play);
}
// console.log(play());



console.log(startPlay);



window.addEventListener('load',startPlay);

// console.log(btn);
// document.write(btn);

