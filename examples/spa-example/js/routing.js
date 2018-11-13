const routes = [
  { file: 'views/hikes.html', label: 'Hiking' },
  { file: 'views/parks.html', label: 'Parks' }
];

// function to create a navigation for the items found in routes.
// creates element, add a touchend event listener and appends it to parent
export default function buildNavigation(parent) {}

// makes an AJAX request for the html file found at viewPath and returns it as text
function getView(viewPath) {}

// adds a touchend event to element that will insert the view found at path into the content area of the index.html
function addNavEvent(element, path) {}

// inserts the view into the content area of index.html
// remember that getView returns a promise!
function insertView(viewPromise) {
  const contentElement = document.getElementById('content');
}
