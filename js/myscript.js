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
const arrRandomPcNum = genArrNumUnicRandomMinMax (5, 1, 50);
console.log(arrRandomPcNum);

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
        let inputNum = parseInt(document.getElementById("input").value);
        document.getElementById("input").value = "";
        console.log(inputNum);
        arrSolutionNum.push(inputNum);
        console.log(arrSolutionNum);

        // faccio un controllo sul arrSolutionNum
        if (arrSolutionNum.length == arrRandomPcNum.length) {

            let elemUguali = arrayElementiUguali(arrRandomPcNum, arrSolutionNum);
            console.log("hai indovinato " + elemUguali.length + " numeri");
            // .map scandisce tutti gli elementi di un array come il ciclo for
            // elem corrisponde ad array[i]
            console.log("i numeri indovinati sono " + elemUguali.map(elem => elem));

            // richiamo il p dove inserire la soluzione
            let solution = document.getElementById("solution");
            solution.innerHTML = `Hai indovinato ${elemUguali.length} numeri e sono ${elemUguali.map(elem => elem)}.`;
        }
    }
);

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

// creo una funzione per controllare gli elementi di due array sono uguali
function arrayElementiUguali (array1, array2) {

    // array risultato
    let elementiUguali = [];

    for (let i = 0; i < array1.length; i++) {

        if (array1[i] === array2[i]) {
            elementiUguali.push(array1[i]);
        }
    }

    return elementiUguali;
}