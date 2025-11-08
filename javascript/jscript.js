/* Visualizza in pagina 5 parole casuali prese da un piccolo 
dizionario di parole (puoi crearne uno tu, ad esempio un array di 20 parole).
Dopo 20 secondi, le parole scompaiono e compaiono 5 input
 text in cui l’utente deve scrivere le parole che ricorda.

Quando l’utente preme un bottone “Verifica”, il programma deve dire:

quante parole sono state ricordate correttamente;

e quali erano corrette.
 */

/* Milestone 1

Genera 5 parole casuali da un array.

Mostrale in pagina.

Fai partire un timer di 20 secondi.

Alla fine del timer, nascondi le parole e mostra i 5 input text.

⚙️ Milestone 2

Al click su “Verifica”, leggi le parole inserite dall’utente.

Confrontale con quelle mostrate all’inizio.

Mostra in pagina quanti e quali risultati sono corretti.

⭐ BONUS

Se l’utente lascia un campo vuoto o scrive numeri, segnala l’errore visivamente.

Mostra il tempo rimanente con un countdown visibile.

Permetti di ricominciare la partita con un tasto “Riprova”. */

/* elementi necessari */

const btnInputSuccess = document.querySelector(".btn-success");
const btnInputCheked = document.querySelector(".btn-secondary");
const containerWord = document.querySelector(".container-words");
const output = document.querySelector(".output");
const containerBtnSecondary = document.querySelector(
  ".container-btn-secondary"
);
const btnDanger = document.querySelector(".btn-danger");
const timer = document.querySelector(".timer");
/* variabili globali */
let arryNumRandom = [];
let contatoreTimer = 30;
/*  click sul bottone genera parole */
btnInputSuccess.addEventListener("click", () => {
  btnInputSuccess.classList.add("d-none");
  componeCinqueParole();
  mostrainputTime();
});
/* al click sul bottone verifica */
btnInputCheked.addEventListener("click", () => {
  let contatore = 0;
  let arrOutput = [];
  btnInputCheked.disabled = true;
  const InputControll = document.querySelectorAll(".form-control");
  const InputWordUtente = calcolorisultato(InputControll);
  for (let i = 0; i < arryNumRandom.length; i++) {
    for (let j = 0; j < InputWordUtente.length; j++) {
      if (arryNumRandom[i] === InputWordUtente[j]) {
        contatore++;
        arrOutput.push(arryNumRandom[i]);
      }
    }
  }
  output.innerHTML = "";
  if (contatore === 0) {
    output.innerHTML = "Mi dispiace hai perso";
  } else {
    output.innerHTML = `hai indovinato ${contatore} parole  (${arrOutput})`;
  }
  btnDanger.classList.remove("d-none");
});
/* al click sul bottone rigioca */
btnDanger.addEventListener("click", () => {
  contatoreTimer = 30;
  timer.innerHTML = contatoreTimer;
  output.innerHTML = "";
  containerWord.innerHTML = "";
  containerBtnSecondary.classList.add("d-none");
  btnInputCheked.disabled = false;
  btnDanger.classList.add("d-none");
  componeCinqueParole();
  mostrainputTime();
});
/* funzione che prende i valori inseriti dall'utente e li confronta con quelli precedenti */
function calcolorisultato(InputControll) {
  const arrwordUtente = [];
  for (let i = 0; i < InputControll.length; i++) {
    const input = InputControll[i].value.trim();
    arrwordUtente.push(input);
  }
  return arrwordUtente;
}
let timerInterval = "";
/* funzione che dopo 20 secondi nasconde parole generate e mostra input con bottone verifica */
function mostrainputTime() {
  timerInterval = setInterval(() => {
    contatoreTimer--;
    timer.innerHTML = contatoreTimer;
    if (contatoreTimer === 0) {
      clearInterval(timerInterval);
      containerWord.innerHTML = "";
      containerWord.innerHTML = `<input type="text" class="form-control bg-transparent" id="text1">
    <input <input type="text" class="form-control bg-transparent" id="text2">
     <input <input type="text" class="form-control bg-transparent" id="text3">
      <input <input type="text" class="form-control bg-transparent" id="text4">
       <input <input type="text" class="form-control bg-transparent" id="text5">`;
      containerBtnSecondary.classList.remove("d-none");
    }
  }, 1000);
}

/* funzione che mostra le paroli random in pagina */
function componeCinqueParole() {
  const wordRandom = selezionaCinqueParoleRandom();
  for (let i = 0; i < wordRandom.length; i++) {
    containerWord.innerHTML += `<p>${wordRandom[i]}</p>`;
  }
}

/* funzioni generiche che ritornano qualcosa */
/* funzione  che restituisce 5 parole random su 20  mai uguali*/
function selezionaCinqueParoleRandom() {
  arryNumRandom = [];
  const parole = [
    "sole",
    "luna",
    "mare",
    "montagna",
    "computer",
    "libro",
    "finestra",
    "viaggio",
    "musica",
    "telefono",
    "bicicletta",
    "città",
    "amore",
    "scuola",
    "tempo",
    "cane",
    "gatto",
    "foresta",
    "gioco",
    "memoria",
  ];
  for (let i = 0; i < 5; i++) {
    const NumRandom = Math.floor(Math.random() * parole.length);
    const parolaRandom = parole[NumRandom];
    if (arryNumRandom.includes(parolaRandom)) {
      i--;
    } else {
      arryNumRandom.push(parolaRandom);
    }
  }
  return arryNumRandom;
}
