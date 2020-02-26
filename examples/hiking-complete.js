//on load grab the array and insert it into the page
window.addEventListener("load", renderHikeList);

function renderHikeList() {
  // 1 get the element that will hold the list
  const listElement = document.getElementById("hikes");
  // 2 clear out the current contents
  listElement.innerHTML = "";
  // 3 for each element in the list...
  hikeList.forEach(hike => {
    // 4 ...build and append an element
    listElement.appendChild(renderHikeLight(hike));
  });
}

// 5 function to build out an li element with the appropriate html structure using create/append DOM methods
// do this first then switch to the light version below to talk about template literals and events.
function createHike(hike) {
  //create the DOM elements and append them together
  // li to hold everything
  const item = document.createElement("li");

  //  we also need an img
  const img = document.createElement("img");
  //  and we need to set the src and alt attributes
  console.dir(img);
  img.alt = hike.imgAlt;
  img.src = hike.imgSrc;

  // and create elements for headlines and paragraphs
  const title = document.createElement("h2");
  title.innerText = hike.name;
  // continue with the rest of the information

  //  append all of the parts to our item
  item.appendChild(img);
  item.appendChild(title);

  // return our new element
  return item;
}

// same thing as above using template literal strings and with some classes added for styling.
function renderHikeLight(hike) {
  const item = document.createElement("li");
  item.classList.add("light");
  item.innerHTML = ` <h2>${hike.name}</h2>
        <div class="image"><img src="${hike.imgSrc}" alt="${hike.imgAlt}"></div>
        <div>
                <div>
                    <h3>Distance</h3>
                    <p>${hike.distance}</p>
                </div>
                <div>
                    <h3>Difficulty</h3>
                    <p>${hike.difficulty}</p>
                </div>
        </div>`;
  // add event listener to watch for a touch...if there is time show how a detailed listing of the hike could be shown.

  item.addEventListener("touchend", event => {
    // show what is available in the event object
    console.dir(event);
    // take a look at this as well.
    console.dir(event.currentTarget);
    // we could send the name of the hike to another function, use it to look up that hike in our data, and render it out.
    const hikeName = event.currentTarget.children[0].innerText;
    console.log(hikeName);
    renderOneHike(hikeName);
  });

  return item;
}

function renderOneHike(hikeName) {
  const listElement = document.getElementById("hikes");
  // clear out the current contents
  listElement.innerHTML = "";
  // get the hike
  const hike = hikeList.find(item => item.name == hikeName);
  listElement.appendChild(renderHikeFull(hike));
}
// full hike details.
function renderHikeFull(hike) {
  const item = document.createElement("li");
  item.innerHTML = ` 
            
                <img src="${hike.imgSrc}" alt="${hike.imgAlt}">
                <h2>${hike.name}</h2>
                <div>
                    <h3>Distance</h3>
                    <p>${hike.distance}</p>
                </div>
                <div>
                    <h3>Difficulty</h3>
                    <p>${hike.difficulty}</p>
                </div>
                <div>
                    <h3>Description</h3>
                    <p>${hike.description}</p>
                </div>
                <div>
                    <h3>How to get there</h3>
                    <p>${hike.directions}</p>
                </div>
            
            `;
  return item;
}
