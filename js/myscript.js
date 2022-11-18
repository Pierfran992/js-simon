// CONSEGNA
/*Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

// richiamo il div in cui andrò a inserire i numeri casuali generati
const containerRandomPcNumber = document.getElementById("container_random_pc_number");

// richiamo il container in cui l'user inserirà la soluzione
const containerSolutionUser = document.querySelector("div.solution_user_container");

// genero 5 numeri casuali e lì inserisco in un array
// const arrRandomPcNum = genArrNumUnicRandomMinMax (5, 1, 50);
// console.log(arrRandomPcNum);
const arrRandomPcNum = [1, 2 ,3 ,4 ,5];

// inserisco nel DOM i numeri dell'array
for (let i = 0; i < arrRandomPcNum.length; i++) {

    // creo lo span che conterrà un singolo numero dell'array
    let newElement = createElement("span");
    console.log(newElement);

    // inserisco nel nuovo elemento creato il numero dell'array
    newElement.append(arrRandomPcNum[i] + " ");

    // inserisco nel DOM il nuovo elemento creato
    containerRandomPcNumber.appendChild(newElement);
}

// creo la variabile del tempo e dei secondi
let second = 1;
let timer;

// richiamo lo span in cui vado a inserire i secondi
let time = document.querySelector("span.time");

// creo la timing functions per il contatore dei secondi
timer = setInterval( 
    function() {
        if (second != 0) {
            second--;
            console.log(second);
            time.innerHTML = second;
        } else {
            containerRandomPcNumber.classList.add("none");
            containerSolutionUser.classList.add("dblock");
            clearInterval(timer);

        }

    }, 1000);

// creo l'array vuoto
const arrSolutionNum = [];

// richiamo il pulsante per attivare la funzione
const button = document.getElementById("invia");

// creo l'evento al click del bottone
button.addEventListener("click",
    // creo la funzione per inserire nell'array delle soluzioni i valori inseriti
    function () {
        let inputNum = document.getElementById("input").value;
        console.log(inputNum);
        arrSolutionNum.push(inputNum);
    }
);

console.log(arrSolutionNum);











// FUNZIONI
// Creo la funzione per generare vari elementi con classi o id
function createElement (typeElement, idClassElement) {
    // creo l'elemento
    const element = document.createElement(typeElement);
    element.classList.add(idClassElement);

    // ritorno l'elemento
    return element;
} 

// creo la funzione per generare numeri random
function randomNumberMinMax (min, max) {
    return ( Math.floor(Math.random() * ((max + 1) - min) + min));
}

// creo la funzione per creare un arrey di numeri random unici 
function genArrNumUnicRandomMinMax (maxElement, minNum, maxNum) {
    
    // creo l'array
    const arrNumUnicRandom = [];

    // genero i numeri da inserire nell'array
    while (arrNumUnicRandom.length < maxElement) {
        let newNumber = randomNumberMinMax (minNum, maxNum);
        if (!arrNumUnicRandom.includes(newNumber)){
            arrNumUnicRandom.push(newNumber);
        }
    }

    // ritorno l'array generato
    return arrNumUnicRandom;
}