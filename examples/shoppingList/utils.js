// helper function...just a wrapper for document.querySelector
// example of a named export...
export function qs(selectorName) {
  return document.querySelector(selectorName);
}

export function readFromLS(key) {
  return JSON.parse(localStorage.getItem(key));
}
export function writeToLS(key) {
  localStorage.setItem(key, JSON.stringify(liveToDos));
}
// uses a touchend for mobile devices and falls back to a click for desktop
export function bindTouch(selector, callback) {
  const element = qs(selector);
  element.addEventListener("touchend", e => {
    e.preventDefault();
    callback();
  });
  element.addEventListener("click", callback);
}
