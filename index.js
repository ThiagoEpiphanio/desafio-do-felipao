let nomeDoHeroi = "Kratos"
let expDoHeroi = 7689

if (expDoHeroi < 1000){
    nivelHeroi = "Ferro"
}
else if ((expDoHeroi >= 1001) && (expDoHeroi <=2000)){
    nivelHeroi = "Bronze"
}
else if ((expDoHeroi >= 2001) && (expDoHeroi <=5000)){
    nivelHeroi = "Prata"
}
else if ((expDoHeroi >= 5001) && (expDoHeroi <=7000)){
    nivelHeroi = "Ouro"
}
else if ((expDoHeroi >= 7001) && (expDoHeroi <=8000)){
    nivelHeroi = "Platina"
}
else if ((expDoHeroi >= 8001) && (expDoHeroi <=9000)){
    nivelHeroi = "Ascendente"
}
else if ((expDoHeroi >= 9001) && (expDoHeroi <=10000)){
    nivelHeroi = "Imortal"
}
else {
    nivelHeroi = "Radiante"
}

console.log("O Herói de nome " + nomeDoHeroi, "está no nível " + nivelHeroi)