import './../css/style.css'

const appContainer = document.getElementById("app");

//Uppgift ett GISSA TALET

//Skapa html
const instruction = document.createElement("h1");
instruction.innerHTML = "Gissa ett tal från 0-100 och tryck på enter";
appContainer.appendChild(instruction);

const rightNumberInputLabel = document.createElement("label");
rightNumberInputLabel.innerHTML = "Skriv en hemlig siffra";
appContainer.appendChild(rightNumberInputLabel);

const rightNumberInput = document.createElement("input");
rightNumberInput.type = "password";
appContainer.appendChild(rightNumberInput);

const playerInputLabel = document.createElement("label");
playerInputLabel.innerHTML = "Gissa siffran";
appContainer.appendChild(playerInputLabel);

const playerInput = document.createElement("input");
appContainer.appendChild(playerInput);

const rubrik = document.createElement("h2");
appContainer.appendChild(rubrik);

//Skapa nummer
let rightNumber = Number(rightNumberInput.value);
let yourNumber = -1;

rightNumberInput.addEventListener("keypress", (e) => {
  if(e.key === "Enter") {
    rightNumber = Number(rightNumberInput.value);
    console.log(rightNumber);
  }
})

//Lyssna på gissning
playerInput.addEventListener("keypress", (e) => {
  if(e.key === "Enter") {
    yourNumber = Number(playerInput.value);
    console.log(yourNumber);
    compareNumber();
  }
});

//Jämför gissning
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

//Första försöket
// while(rightNumber !== yourNumber) {
//   yourNumber = Number(prompt("Skriv ditt tal!"));
  
//   console.log(yourNumber);
// }






//LOOPA LISTA + KLICK

const clothes = ["skor", "klänningar", "jackor", "kjolar"];

const ul = document.createElement("ul");

appContainer.appendChild(ul);


// skapa alla li

clothes.forEach(element => {
  const li = document.createElement("li");
  li.innerHTML = element;
  ul.appendChild(li);
    li.addEventListener("click", () => {
        clothesSelection(element);
    })

});

const clothesSelection = (product) => {
    console.log(product);
}




//Uppgift tre!

const apiContainer = document.getElementById("api");

async function logMovies() {
  const response = await fetch("https://medieinstitutet-wie-products.azurewebsites.net/api/products");
  const movies = await response.json();
  console.log(movies);
  // console.log(movies[0].description);

  for (let i = 0; i < movies.length; i++) {
    const movieCard = document.createElement("article");
    movieCard.className = "moviecard";
    apiContainer.appendChild(movieCard);

    const name = document.createElement("h2");
    name.innerHTML = movies[i].name;
    movieCard.appendChild(name);

    const img = document.createElement("img");
    img.alt = "Poster for " + movies[i].name;
    img.src = movies[i].imageUrl;
    img.className = "movieposter";
    movieCard.appendChild(img);

    const description = document.createElement("h2");
    description.innerHTML = movies[i].description;
    movieCard.appendChild(description);
    


  }
  
  
  
}

const filmLista = logMovies();


