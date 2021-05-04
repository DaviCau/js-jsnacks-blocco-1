// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari (verifichiamolo con una funzione) inseriscilo nell’array. Stampa l'array nella console.

var numeriDispari = [];

for (var i = 0; i < 6; i++) {
    var numeroInserito;
    do {
        numeroInserito = parseInt(prompt("inserisci un numero"));
    } while (isNaN(numeroInserito));
    console.log(numeroInserito);
    if (isOdd(numeroInserito)) {
        numeriDispari.push(numeroInserito);
    }
}

console.log(numeriDispari);


function isOdd(num) {
    if (num % 2 == 0) {
        return false;
    } else {
        return true;
    }
}