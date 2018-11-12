const routes = [
  { file: 'views/hikes.html', label: 'Hiking' },
  { file: 'views/parks.html', label: 'Parks' }
];

// function to create a navigation for the items founc in routes.
// creates element, add a touchend event listener and appends it to parent
export default function buildNavigation(parent) {}

// makes an AJAX request for the html file found at viewPath and returns it as text
function getView(viewPath) {}

// adds a touchend event to element that will insert the view found at path into the content area of the index.html
function addNavEvent(element, path) {}

// inserts the view into the content area of index.html
function insertView(view) {}

// export function buildNavigation(parent) {
//   routes.forEach(route => {
//     const item = document.createElement('li');
//     item.innerHTML = `<a href="#">${route.label}</a>`;
//     parent.appendChild(item);
//     addNavEvent(item, route.file);
//   });
// }

// function getView(viewPath) {
//   return fetch(viewPath).then(response => response.text());
// }
// function addNavEvent(element, path) {
//   element.addEventListener('touchend', e => {
//     insertView(getView(path));
//   });
// }

// function insertView(view) {
//   const contentElement = document.getElementById('content');
//   view.then(data => {
//     contentElement.innerHTML = data;
//   });
// }
