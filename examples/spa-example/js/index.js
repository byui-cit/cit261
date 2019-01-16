import buildNavigation from './finished.js';

const navElement = document.getElementById('mainNav');
buildNavigation(navElement);

// check to see if javascript is working
function component() {
  const element = document.createElement('p');

  element.innerHTML = 'Setup Appears to be working &#128521;';

  return element;
}
document.body.appendChild(component());
