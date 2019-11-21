export function getJSON(url, options = null) {
  return fetch(url, options)
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

export const getLocation = function(options) {
  return new Promise(function(resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
};
