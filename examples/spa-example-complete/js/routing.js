/*
Asynchronous foundations
- advantages and problems with asynchronous code
- Basic Fetch usage: create a json file with random data in it, course info, movie/music info, game info, etc
- use fetch to pull data, then build some HTML to display it.
- talk about promises and evaluating them.
- introduce async/await
Routing:
- start by building out the navigation.
- Create list of links (routes) in an array
- We don't want the default link behavior though, we want to load the .html partial into the existing page (AJAX)
- attach a listener to the links that will stop their default behavior, then load the proper .html into the page
- make a function to go out and grab the html corresponding to the link.
- make a function to take the view and insert the text into an area in the index.html
- if there is still time talk about initializing any dynamic content after we have loaded the partial.

*/

import hikes from './hikesController.js';
import parks from './parks.js';
const routes = [
  { controller: new hikes('hikes'), file: 'views/hikes.html', label: 'Hiking' },
  { controller: parks, file: 'views/parks.html', label: 'Parks' }
];

// Function to create a navigation for the items found in routes.
// Creates element, add a touchend event listener and appends it to parent.
export default function buildNavigation(parent) {
  routes.forEach(route => {
    let item = document.createElement('li');
    item.innerHTML = `<a href="#${route.label}">${route.label}</a>`;
    parent.appendChild(item);
    addNavEvent(item, route.file, route.controller);
  });
}

// Makes an AJAX request for the html file found at viewPath and returns it as text
function getView(viewPath) {
  return fetch(viewPath)
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      } else {
        //console.log(response.json());
        return response.text();
      }
    })
    .catch(err => {
      console.log('Something went wrong', err);
    });
}

// Adds a touchend event to element that will insert the view found at path into the content area of the index.html
function addNavEvent(element, path, controller) {
  element.addEventListener('touchend', e => {
    insertView(getView(path), controller);
  });
}

// Inserts the view into the content area of index.html
// Remember that getView returns a promise!
// Runs a function from the controller to load any dynamic elements.
function insertView(viewPromise, controller) {
  const contentElement = document.getElementById('content');
  viewPromise.then(data => {
    contentElement.innerHTML = data;
    controller.init();
  });
}

// Using async/await.
async function getViewAsync(viewPath) {
  try {
    const response = await fetch(viewPath);
    const text = await response.text();
    //debugger;
    return text;
  } catch (err) {
    console.log('Something went wrong', err);
  }
}

// using async/await
function addNavEventAsync(element, path, controller) {
  element.addEventListener('touchend', e => {
    insertViewAsync(getViewAsync(path), controller);
  });
}

// using async/await
async function insertViewAsync(viewPromise, controller) {
  const contentElement = document.getElementById('content');
  //debugger;
  contentElement.innerHTML = await viewPromise;
  controller.init();
}
