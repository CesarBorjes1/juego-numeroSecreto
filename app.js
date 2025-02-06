//Variables

let numeroSecreto = 0
let intentos = 0;
let listaNumerosSorteados = [];
let maximoNumeros = 10;

//Llamada de funciones
condicionesIniciales();


//Funciones

function asignarElementoHtml(elemento,texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*10+1); //Genera un número (entero) aleatorio entre 1 y 10.
    console.log(listaNumerosSorteados);
    //Verificamos si númeroGenerado no supera el maximo de números permitidos.
    if (listaNumerosSorteados.length == maximoNumeros) { //Si la lista de números sorteados es igual al máximo de números permitidos..
        asignarElementoHtml('p', `¡Lo siento! Se alcanzó el máximo de ${maximoNumeros} números sorteados. Reinicia el juego.`);
        document.getElementById('reiniciar').setAttribute('disabled',false);
    }   else { //Sino..
            if (listaNumerosSorteados.includes(numeroGenerado)) { //.includes() revisa si el valor sorteado ya se encuentra adentro de la lista.
              return generarNumeroSecreto(); //Si el numero sorteado se encuentra dentro de la lista, volvemos a llamar la funcion y generamos un nuevo número
            } else {  //Si el numero no fue sorteado..
              listaNumerosSorteados.push(numeroGenerado); //.push  toma el número sorteado y lo empuja a la lista de números sorteados.
              return numeroGenerado;// Y luego retorna el valor de de numeroGenerado.
              }
        }        
} 



function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto) {
      asignarElementoHtml('p',`¡Felicidades! El número secreto es ${numeroDeUsuario}. Lo hiciste en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}.`);
      document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
          if (numeroDeUsuario > numeroSecreto) {
            asignarElementoHtml('p',`El número secreto es menor a ${numeroDeUsuario}.`);
      } else {
            asignarElementoHtml('p',`El número secreto es mayor a ${numeroDeUsuario}.`);
      };
    intentos++;
    limpiarCaja();
    }
    return;
}

function limpiarCaja() {
  document.getElementById('valorUsuario').value = '';
}

function condicionesIniciales() {
    asignarElementoHtml('h1','Juego del número secreto');
    asignarElementoHtml('p' , `Escribe un número entre 1 y ${maximoNumeros}`);
    limpiarCaja();
    numeroSecreto = generarNumeroSecreto();
    //console.clear();
    console.log(numeroSecreto);
    intentos = 1;
}

function reiniciarJuego() {
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled',true);  
}

/*
let reinicioJuego = [];
let maximoReinicios = 10;

function asignarElementoHtml(elemento,texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
}
function condicionesIniciales() {
    asignarElementoHtml('h1','Juego del número secreto');
    asignarElementoHtml('p' , 'Escribe un número entre 1 y 10');
    limpiarCaja();
    numeroSecreto = generarNumeroSecreto();
    //console.clear();
    console.log(numeroSecreto);
    intentos = 1;
}
*/