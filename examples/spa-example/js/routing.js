const routes = [
  { file: 'views/hikes.html', label: 'Hiking' },
  { file: 'views/parks.html', label: 'Parks' }
];

// Function to create a navigation for the items found in routes.
// Creates element, add a touchend event listener and appends it to parent
export default function buildNavigation(parent) {
  routes.forEach(route => {
    let item = document.createElement('li');
    item.innerHTML = `<a href="#">${route.label}</a>`;
    parent.appendChild(item);
    addNavEvent(item, route.file);
  });
}

// Makes an AJAX request for the html file found at viewPath and returns it as text
function getView(viewPath) {
  return fetch(viewPath)
    .then(response => {
      return response.text();
    })
    .catch(err => {
      console.log('Something went wrong', err);
    });
}

// Adds a touchend event to element that will insert the view found at path into the content area of the index.html
function addNavEvent(element, path) {}

// Inserts the view into the content area of index.html
// Remember that getView returns a promise!
function insertView(viewPromise) {
  const contentElement = document.getElementById('content');
}
