/*
use https://boundingbox.klokantech.com to define a box we want to look at.
nelat = highest latitude = north limit 
nelng = highest longitude = east limit 
swlat = smallest latitude = south limit 
swlng = smallest longitude = west limit 
*/

const nelat = 45.0074; //north limit
const nelng = -110.0237; //east limit
const swlat = 44.1437; //south limit
const swlng = -111.0604; //west limit

const placeRepository = {
  baseUrl: 'https://api.inaturalist.org/v1/places/',
  getPlaces(q, page = null) {
    const url = page || this.baseUrl;
    q = encodeURI(q);
    return fetch(url + `autocomplete?q=${q}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw Error(response.statusText);
      })
      .catch(error => {
        console.log(error);
      });
  },
  getNearbyPlaces: function(loc) {}
};

export default placeRepository;
