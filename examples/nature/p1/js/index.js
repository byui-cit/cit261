//import buildNavigation from './finished.js';
//import placeRepository from './places.js';

const navElement = document.getElementById('mainNav');
//buildNavigation(navElement);

//placeRepository.getPlaces('Yellowstone National Park').then(res => {
//  console.log(res);
//});

// Observations in 2018 for Yellowstone
// https://api.inaturalist.org/v1/observations?geo=true&native=true&photos=true&place_id=10211&year=2018&order=desc&order_by=created_at

// Build drop down based off of info in data.js, vertebrateClasses

function buildDropdown(data, listElementId) {
  const list = document.getElementById(listElementId);
  data.forEach(element => {
    let item = document.createElement('option');
    item.innerHTML = element.name;
    item.value = element.id;
    list.appendChild(item);
  });
}
buildDropdown(places, 'location');
buildDropdown(vertebrateClasses.results, 'species');

function filterObservations(placeId, ancestorId, obs) {
  return obs.filter(item => {
    if (
      item.taxon.ancestor_ids.indexOf(parseInt(ancestorId)) > -1 &&
      item.place_ids.indexOf(placeId) > -1
    ) {
      return true;
    } else return false;
  });
}
function listObservations(list) {
  const listElement = document.getElementById('listElement');
  listElement.innerHTML = '';
  document.getElementById('map').style.display = 'none';
  list.forEach(el => {
    const item = document.createElement('li');
    item.innerHTML = `<details><summary>${el.created_at_details.date}: ${
      el.taxon.preferred_common_name
    }</summary>
    <p>${el.taxon.name}</p>
    <img src="${el.taxon.default_photo.square_url}">`;
    listElement.appendChild(item);
  });
}

document.getElementById('search').addEventListener('touchend', e => {
  const species = document.getElementById('species');

  console.dir(species);
  listObservations(
    filterObservations(
      10211,
      species.options[species.selectedIndex].value,
      yellowstone2019.results
    )
  );
});
