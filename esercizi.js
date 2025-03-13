// Crea una funzione che somma due numeri.
// Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
// Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
// Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.

// const somma = (a, b) => a + b;
// console.log(somma(2, 3)); 

// Crea una arrow function che calcola il quadrato di un numero.
// Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga.

// const quadrato = (a)=> a*a;
// console.log(quadrato(2));

// Crea una funzione eseguiOperazione
// Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri.

// const sottrazione = (a,b)=> a - b;
// const divisione = (a,b)=> a / b;
// const eseguiOperazione = (a,b, operatore) => operatore(a,b);
// console.log(eseguiOperazione(800,400,sottrazione));

// Crea un generatore di funzioni creaTimer
// Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".

// function creaTimer(t){
// return function(){
//     setTimeout(()=>console.log("Tempo scaduto!"),t);
// }
// }
// creaTimer(2000)()

// Crea una funzione stampaOgniSecondo con setInterval.
// Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.

// Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script.

// function stampaOgniSecondo(messaggio){
//     let id = setInterval(()=> console.log(messaggio),2000);
//     setTimeout(()=>clearInterval(id),4000);
// }
// stampaOgniSecondo("ciao")

// Crea un contatore automatico con setInterval
// Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.

// function creaContatoreAutomatico(t){
//     return function mhanz(){
//         let contatore=0;
//        let id = setInterval(()=>console.log(contatore++),t);
//        setTimeout(()=>clearInterval(id),5000);
//     }
// }
// creaContatoreAutomatico(1000)();

// Crea una funzione che ferma un timer dopo un certo tempo
// Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.

// function eseguiEferma(m,ti,ts){
// let id=setInterval(()=>console.log(m),ti);
// setTimeout(()=>clearInterval(id),ts);
// }
// eseguiEferma("ciao11",2000,5000)

// Crea una funzione che simula un conto alla rovescia
// Scrivi una funzione contoAllaRovescia che accetta un numero n e stampa il conto alla rovescia da n a 0, con un intervallo di 1 secondo tra ogni numero. Quando arriva a 0, stampa "Tempo scaduto!" e interrompe il timer.

// function ContoAllaRovescia(n){
// let id = setInterval(()=>console.log(n--),1000);
// setTimeout(()=>clearInterval(id),n*1000,);
// setTimeout(()=>console.log("tempo scaduto"),n*1000);
// }
// ContoAllaRovescia(5);