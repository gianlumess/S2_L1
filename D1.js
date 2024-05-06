/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/*Per datatype si intende una classificazione della tipologia di dati. I principali datatype in javascript sono:
-Stringhe: del testo delimitato dagli apici
-Numeri: possono essere interi o decimali
-Booleani: Possono avere solamente 2 valori: SI o NO (TRUE OR FALSE)
-Null: Un valore nullo, come una scatola vuota(non è uguale a 0!!)
-undefined: significa che non vi è un valore specifico perchè non è stato effettivamente asseganto
 */

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let myName="Gianluca";
console.log("il valore della variabile myName è: ", myName)

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let addizione= 12+20;
console.log("12+20 è uguale ad: ", addizione)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x= 12;
console.log("il valore della variabile x è: ", x)

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

myName= "Messina";
console.log("il valore della variabile myName adesso è: ", myName)
/*
const costante= "ciao";    non è possibile cambiare valore ad una variabile "const" in quanto è un valore fisso e l'errore viene riportato sulla console.
costante= "arrivederci";
*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let sottrazione = 4-x;
console.log("4- la variabile x è uguale ad: ", sottrazione)


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1= "john";
let name2= "John";
console.log(name1 !== name2);
 /*EXTRA */
 name2= name2.toLowerCase();
 console.log(name1 === name2)