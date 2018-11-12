import shipController from './ships.js';
import buildNavigation from './routing.js';

// install moment.js for example

//console.log(shipController.getShips());
//console.log(shipController.getShipByName('Executor'));

const navElement = document.getElementById('mainNav');
buildNavigation(navElement);

// check to see if javascript is working
function component() {
  const element = document.createElement('p');

  element.innerHTML = 'Setup Appears to be working &#128521;';

  return element;
}
document.body.appendChild(component());

// shipController.getShips().then((data) => {
//   console.log(data);
// });
