jQuery(document).ready(function($) {
  function getJSON(url) {
    return fetch(url)
      .then(function(response) {
        return response.json();
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  function pokemonFromApi() {
    $.ajax({
      url: 'https://pokeapi.co/api/v2/type/3',
      dataType: 'json',
      success: function(data) {
        console.log(data);

        var type = data['name'];
        var pokelist = $('#pokelist');
        $('#type').html(type);
        $.each(data['pokemon'], function(key, value) {
          pokelist.append(
            "<li data-url='" +
              value.pokemon.url +
              "'>" +
              value.pokemon.name +
              '</li>'
          );
        });
        $('#pokelist').on('click', 'li', function(e) {
          console.log($(this).attr('data-url'));
          getPokemonDetails(e.target.getAttribute('data-url'));
        });
      }
    });
  }

  function getPokemonDetails(url) {
    $.ajax({
      url: url,
      dataType: 'json',
      success: function(data) {
        console.log(data);

        $('.name').html(data.name);
        $('.number').html(data.id);
        $('.pokeimg').attr('src', data.sprites.front_default);
        $('#detailsbox').removeClass('hidden');
      }
    });
  }
  pokemonFromApi();

  //ajaxFromLocalJson("Franklin");
  //ajaxFromApi();
});
