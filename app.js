
// aqui es zona de variables
let numeroSecreto = Math.floor(Math.random()*100+1);
let numeroUsuario = 0;
let intentosAdivinar = 1;
let plural = 'vez';
let maximoDeIntento = Math.floor(Math.random()*25+1);

alert(`Bienvenidos al jueguito random tienes un maximo de ${maximoDeIntento} intentos para adivinar`);

console.log(numeroSecreto);

while(numeroUsuario != numeroSecreto){

    let numeroUsuario = parseInt(prompt("Digita un numero entre 1 y 10 para jugar:"));
console.log(typeof(numeroUsuario));

    //metodos; donde la logica trabaja
    if (numeroUsuario == numeroSecreto) {
        //fue verdadera la condicion
        alert(`Adivinaste, el numero es: ${numeroSecreto} con ${intentosAdivinar} ${plural}`);
    } else {
        if (numeroUsuario > numeroSecreto ) {
            alert('El numero es mayor al numero secreto');
        } else {
            alert('El numero es menor al numero secreto');
        }
        

        //contador para sumar los numero de intentos y comparar cuando la palabra debe cambiar a su plural
        intentosAdivinar = intentosAdivinar + 1; 
        plural = plural = 2 ;
        plural = 'veces';


        if (intentosAdivinar > maximoDeIntento){
            alert(`has llegado al maximo de ${maximoDeIntento} ${intentosAdivinar== 1 ? 'vez': 'Veces'}`)
            break;
        }
    }

}
