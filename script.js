

var Chilometri = prompt("inserisci  i Chilometri");
console.log('Chilometri')

var Eta = prompt("inserisci la tua Eta'");
console.log('eta');

var Biglietto = Number(0.21);

var prezzo = Math.floor(Chilometri*Biglietto);
console.log('prezzo');



//se il passeggero ha meno di 18 anni ha uno sconto sul prezzo del biglietto del 20%
if (Eta<18) {
    
    document.write(prezzo-(prezzo*20/100));
}

//se il passeggero ha piu' di 65 anni ha uno sconto sul prezzo del biglietto del 40%
else if (Eta>64) {
    
    document.write(prezzo-(prezzo*40/100));

}

//se il passeggero ha un'eta' tra i 18 e i 64 anni non ha diritto allo sconto
else   {
    
    document.write(prezzo);
}
