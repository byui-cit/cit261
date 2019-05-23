function getJSON(url) {
  return fetch(url)
    .then(function(response) {
      if (!response.ok) {
        throw Error(response.statusText);
      } else {
        //console.log(response.json());
        return response.json();
      }
    })
    .catch(function(error) {
      console.log(error);
    });
}
function pokemonFromApi() {
  getJSON('https://pokeapi.co/api/v2/type/3').then(function(data) {
    console.log(data);

    var type = data['name'];
    var pokelist = document.getElementById('pokelist');
    document.getElementById('type').innerHTML = type;
    data['pokemon'].forEach(function(value) {
      let item = document.createElement('li');
      item.innerHTML = `<li data-url='${value.pokemon.url}'> 
          ${value.pokemon.name}</li>`;
      pokelist.appendChild(item);
    });
    pokelist.addEventListener('click', function(e) {
      //console.log(this.attr('data-url'));
      let list = document.querySelector('.listbox');
      let details = document.getElementById('detailsbox');
      getPokemonDetails(e.target.getAttribute('data-url'));
      list.style.transform = 'translateX(-100vw)';
      details.style.transform = 'translateX(-100vw)';
    });
  });
}

function getPokemonDetails(url) {
  getJSON(url).then(function(data) {
    console.log(data);

    document.querySelector('.name').innerHTML = data.name;
    document.querySelector('.number').innerHTML = data.id;
    document.querySelector('.pokeimg').src = data.sprites.front_default;
    const box = document.querySelector('#detailsbox');
  });
}
pokemonFromApi();
const backButton = document.getElementById('back');
backButton.addEventListener('click', () => {
  let list = document.querySelector('.listbox');
  let details = document.getElementById('detailsbox');
  list.style.transform = 'translateX(0)';
  details.style.transform = 'translateX(100vw)';
});
