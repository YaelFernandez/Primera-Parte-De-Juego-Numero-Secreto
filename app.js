//VARIABLES
let numeroMaximoPosible = 100;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario = 0;
let intento = 1;
let palabraVeces = 'vez';
let maximosIntentos = 3;
console.log(numeroSecreto);
while (numeroUsuario != numeroSecreto){
    numeroUsuario = parseInt(prompt(`Me indicas un numero entre 1 y ${numeroMaximoPosible} por favor: `));    
    
    console.log(numeroUsuario);

    //Este codigo realiza la comparacion del numero
    if (numeroUsuario == numeroSecreto) {
        //el if es traducido como si, aqui acertamos la condicion del numero
        alert(`Acertaste el numero, el numero es: ${numeroUsuario}, Lo hiciste en ${intento} ${intento == 1 ? 'vez' : 'veces'}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El numero secreto es menor');
        } else {
            alert('El numero secreto es mayor');
        }
        
        //intento = intento + 1;
        intento++;
        //palabraVeces = 'veces';
        
        if (intento > maximosIntentos){
            alert(`Llegaste al numero maximo de ${maximosIntentos} intentos`);
            break
        }
    }
}