//helper function to fetch the data from an external source
function getJSON(url) {
  // const myHeaders = new Headers({
  //   'Content-Type': 'application/json'
  // });

  //var request = new Request();
  return fetch(url)
    .then(function (response) {
      if (!response.ok) {
        throw Error(response.statusText);
      } else {
        //console.log(response.json());
        return response.json();
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}

function fetchShips() {
  const url = "https://swapi.dev/api/starships/";
  //const url = 'sw-ships.json';
  //call getJSON function to get the list of ships from the api
  getJSON(url).then(function (data) {
    //console.log(data);
    const results = data.results;

    //get the list element
    const shipListElement = document.getElementById("shiplist");
    //make sure it is empty...this becomes important when we implement the prev/next buttons
    shipListElement.innerHTML = "";
    //loop through the ships
    results.forEach(function (ship) {
      //console.log(ship);
      //create elements for list...li and a
      let listItem = document.createElement("li");

      let link = document.createElement("a");
      //set href attribute to the URL of the ship
      link.setAttribute("href", ship.url);
      //set the contents of the link element to the name of the ship
      link.innerHTML = ship.name;
      link.addEventListener("click", function (event) {
        //when clicked the default link behavior should be stopped, and the ship details function should be called...passing the value of the href attribute in
        event.preventDefault();
        getShipDetails(ship.url);
      });
      //add the link to the list item
      listItem.appendChild(link);
      //and the list item to the list
      shipListElement.appendChild(listItem);
    });

    //PART 2
    //get all of our new list items hint: querySelectorAll

    //loop through each of them

    //attach a click event listener

    //when clicked the default link behavior should be stopped, and the ship details function should be called...passing the value of the href attribute in

    //PART 3
    //set prev and next links
    return results;
  });
}

function getShipDetails(url) {
  //call getJSON functions for the provided url
  getJSON(url).then(function (data) {
    console.log(data);

    //with the results populate the elements in the #detailsbox

    //Extra!  Get the name of each movie the ship was used in and place it in your list
  });
}
fetchShips();
