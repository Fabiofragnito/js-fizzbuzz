// Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.Prima di partire a scrivere codice poniamoci qualche domanda: Come faccio a sapere se un numero è divisibile per? Abbiamo visto qualcosa di particolare che possiamo usare?Consigli del giorno:

//     scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
//     proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"



/* strumenti conosciuti */

/* per sapere se un numero e divibile per 3 utilizzo l operatore modulo % che mi restituisce resto zero e quindi  e' divisibile*/

/* es. (i % 3 === 0); */

/* per sapere se un numero e divibile per 5 utilizzo l operatore modulo % che mi restituisce resto zero e quindi  e' divisibile*/

/* es. (i % 5 === 0); */




/* preparazione */

/* la i sara un numero compreso tra 1 e 100 */
//  0 > i <= 100;

/* dichiaro la variabile che sara' miultiplo di 3 e che stampera' "fizz" */

let multipliTre = "Fizz";



/* dichiaro la variabile che sara' miultiplo di 5 e che stampera' "buzz" */

let multipliCinque = "Buzz"



// elaborazione

/* stampo con un ciclo tutti i numeri compresi tra 1 e 100 */

for (let i = 1; i <= 100; i++) {
    
    /*  metto la condizine che i sia contemporaneamente divisibile per 5 e 3 */
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");   
    }
    
    /*  metto la condizine che i sia divisibile per 5  */
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    
    /*  metto la condizine che i sia divisibile per 3 */
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    
    else {
        console.log(i);

    }
}






