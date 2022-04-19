let pais
let temperatura
let estatura
let acompañante
let entrada
do{
    pais = prompt("¿De donde viene?(Col o Usa)")
}while(pais!="Col" && pais!="Usa")
if (pais=="Col") {
    do {
        estatura=Number(prompt("¿Cuanto mide?(m)"))
    } while (isNaN(estatura)&&estatura>3&& estatura<=0);
    do {
        temperatura=Number(prompt("¿A que temperatura esta?(°C)"))
    } while (isNaN(temperatura)&& temperatura>70&& temperatura<=0);
}
if (pais=="Usa") {
    do {
        estatura=Number(prompt("¿Cuanto mide?(pies)"))
    } while (isNaN(estatura)&&estatura>9.8 && estatura<=0);
    do {
        temperatura=Number(prompt("¿A que temperatura esta?(°F)"))
    } while (isNaN(temperatura)&&temperatura>176 && temperatura<=0);
    estatura=estatura/3.281
    temperatura=(temperatura-32)*5/9
}
do {
    acompañante=prompt("¿Viene con acompañante?(si/no)")
} while (acompañante!="si" && acompañante!="no");

if (temperatura>40) {
    entrada="No puede entar"
    if (estatura<1.4 && acompañante=="si") {
        entrada="No puede entrar"
    } else {
        entrada="Si puede entrar"
    }
}
document.getElementById ("Respuesta").innerHTML= entrada
