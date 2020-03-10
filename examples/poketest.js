function getJSON(url) {
  return fetch(url)
    .then(function(response) {
      if (!response.ok) {
        throw Error(response.statusText);
      } else {
        return response.json();
      }
    })
    .catch(function(error) {
      console.log(error);
    });
}

function revealDetails(e) {
  //console.log(this.attr('data-url'));
  const list = document.querySelector(".listbox");
  const details = document.getElementById("detailsbox");
  getPokemonDetails(e.target.getAttribute("data-url"));
  list.style.transform = "translateX(-100vw)";
  details.style.transform = "translateX(-100vw)";
}

function hideDetails() {
  const list = document.querySelector(".listbox");
  const details = document.getElementById("detailsbox");
  list.style.transform = "translateX(0)";
  details.style.transform = "translateX(100vw)";
}
function pokemonFromApi() {
  getJSON("https://pokeapi.co/api/v2/type/3").then(function(data) {
    console.log(data);

    var type = data["name"];
    var pokelist = document.getElementById("pokelist");
    document.getElementById("type").innerHTML = type;
    data["pokemon"].forEach(function(value) {
      let item = document.createElement("li");
      // semantically we should probably wrap the pokemon name in an <a>, then the URL could just be placed in the href, with an event listener to preventDefault...But I wanted to show how to add custom data- attributes.
      item.innerHTML = `<li data-url='${value.pokemon.url}'> 
          ${value.pokemon.name}</li>`;
      pokelist.appendChild(item);
    });
    pokelist.addEventListener("click", revealDetails);
  });
}

function getPokemonDetails(url) {
  getJSON(url).then(function(data) {
    console.log(data);

    document.querySelector(".name").innerHTML = data.name;
    document.querySelector(".number").innerHTML = data.id;
    document.querySelector(".pokeimg").src = data.sprites.front_default;
  });
}
pokemonFromApi();
const backButton = document.getElementById("back");
backButton.addEventListener("click", hideDetails);
