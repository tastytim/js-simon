// Un alert() espone 5 numeri generati casualmente.
let randomNumbersArray = [];
let arrayNumbersPrompt = [];
let count = 0;
for (let i = 0; i < 5; i++) {
  randomNumbersArray.push(Math.floor(Math.random() * 100 + 1));
}

console.log(randomNumbersArray);

alert("Memorizza seguenti numeri: " + randomNumbersArray);

// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
function askUsserForNumbers() {
    
  setTimeout(function () {
    for (let k = 1; k <= 5; k++) {
      arrayNumbersPrompt.push(parseInt(prompt("Inserisci il numero " + k)));
    //   Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
      if(k == 5){
          matchTwoArrays(randomNumbersArray, arrayNumbersPrompt);
      }
      console.log(arrayNumbersPrompt);
    }
  }, 3000);
}

askUsserForNumbers();


function matchTwoArrays(array1, array2){
    let count = 0;
    for(let l=0;l<array1.length;l++){
        if(array2.includes(array1[l])){
            count++;
        }
    }
    alert(count);
}



