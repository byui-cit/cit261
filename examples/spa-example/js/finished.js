import hikes from './hikes.js';
const routes = [
  { controller: hikes, file: 'views/hikes.html', label: 'Hiking' },
  { controller: 'parks', file: 'views/parks.html', label: 'Parks' }
];

// function to create a navigation for the items found in routes.
// creates element, add a touchend event listener and appends it to parent
export default function buildNavigation(parent) {
  routes.forEach(route => {
    let item = document.createElement('li');
    item.innerHTML = `<a href="#${route.label}">${route.label}</a>`;
    parent.appendChild(item);
    addNavEvent(item, route.file, route.controller);
  });
}

// makes an AJAX request for the html file found at viewPath and returns it as text
function getView(viewPath) {
  return fetch(viewPath)
    .then(response => {
      return response.text();
    })
    .catch(err => {
      console.log('Something went wrong', err);
    });
}

// using async/await
async function getViewAsync(viewPath) {
  try {
    const response = await fetch(viewPath);
    return await response.text();
  } catch (err) {
    console.log('Something went wrong', err);
  }
}

// adds a touchend event to element that will insert the view found at path into the content area of the index.html
function addNavEvent(element, path, controller) {
  element.addEventListener('touchend', e => {
    insertView(getView(path), controller);
  });
}

// using async/await
function addNavEventAsync(element, path, controller) {
  element.addEventListener('touchend', e => {
    insertViewAsync(getViewAsync(path), controller);
  });
}

// inserts the view into the content area of index.html
// remember that getView returns a promise!
// runs a function from the controller to load any dynamic elements
function insertView(viewPromise, controller) {
  const contentElement = document.getElementById('content');
  viewPromise.then(data => {
    contentElement.innerHTML = data;
    controller.init();
  });
}

// using async/await
async function insertViewAsync(viewPromise, controller) {
  const contentElement = document.getElementById('content');
  contentElement.innerHTML = await viewPromise;
  controller.init();
}
