import './../css/style.css'

const appContainer = document.getElementById("app");

const rightNumber = Math.round(Math.random()*100);
let yourNumber = -1;

console.log(rightNumber);
console.log(yourNumber);

const instruction = document.createElement("h1");
instruction.innerHTML = "Gissa ett tal från 0-100 och tryck på enter";
appContainer.appendChild(instruction);

const input = document.createElement("input");
appContainer.appendChild(input);

const rubrik = document.createElement("h2");
appContainer.appendChild(rubrik);


input.addEventListener("keypress", (e) => {
  if(e.key === "Enter") {
    yourNumber = Number(input.value);
    console.log(yourNumber);
    compareNumber();
  }
});

function compareNumber() {
  if (yourNumber === rightNumber) {
    rubrik.innerHTML = "Du gissade rätt!";
    rubrik.className = "green";
  }
  else {
    rubrik.innerHTML = "Försök igen!";
    rubrik.className = "red";

  }
}


// while(rightNumber !== yourNumber) {
//   yourNumber = Number(prompt("Skriv ditt tal!"));
  
//   console.log(yourNumber);
// }



