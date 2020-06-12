//helper function to fetch the data from an external source and return it in JSON format
async function getJSON(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw Error(response.statusText);
    } else {
      const fetchJson = await response.json();
      return fetchJson;
    }
  } catch (error) {
    console.log(error);
  }
}
// model code...it is a bit redundant in this case...we could just call getJSON directly...but if our model became more complex this sets us up to accomodate that.
function getShips(url) {
  return getJSON(url);
}
//  View code
function renderShipList(ships, shipListElement) {
  // I decided to use a table to display my list of ships. The shipList Element is that table and it has 2 children: thead and tbody...we need to put our ships into tbody...so I reference the second child.
  const list = shipListElement.children[1];
  list.innerHTML = "";
  //loop through the ships
  ships.forEach(function (ship) {
    //console.log(ship);
    //create elements for list...tr
    let listItem = document.createElement("tr");
    listItem.innerHTML = `
        <td><a href="${ship.url}">${ship.name}</a></td>
        <td>${ship.length}</td>
        <td>${ship.crew}</td>
        `;

    listItem.addEventListener("click", function (event) {
      //when clicked the default link behavior should be stopped, and the ship details function should be called...passing the value of the href attribute in
      event.preventDefault();
      getShipDetails(ship.url);
    });

    //add the list item to the list
    list.appendChild(listItem);
  });
}
// need to write the code to render the details to HTML
function renderShipDetails(shipData) {
  console.log(shipData);
}

// controller code
async function showShips(url = "https://swapi.dev/api/starships/") {
  const results = await getShips(url);

  //get the list element
  const shipListElement = document.getElementById("shiplist");
  renderShipList(results.results, shipListElement);

  // enable the next and prev buttons.
  if (results.next) {
    const next = document.getElementById("next");
    // normally we would prefer the addEventListener method of adding a listener. Using something like 'element.onEvent = event_function' has the limitation of only being able to hold one listener of the type. In this case that is a good thing however. Because we are not re-creating the buttons each time we load a new batch of data we could end up with several listeners attached to each button by the last page. We won't have that issue here.
    next.ontouchend = () => {
      // notice to show the next page we just re-call the showShips function with a new URL
      showShips(data.next);
    };
  }
  if (results.previous) {
    const prev = document.getElementById("prev");
    // we need to set the once option on the listener since the buttons do not get recreated with each page load. If we don't we will end up with several listeners all trying to fire at once after a few pages
    prev.ontouchend = () => {
      showShips(data.previous);
    };
  }
}

async function getShipDetails(url) {
  //call getJSON functions for the provided url
  const ship = await getShips(url);
  renderShipDetails(ship);
  //with the results populate the elements in the #detailsbox
}
showShips();
