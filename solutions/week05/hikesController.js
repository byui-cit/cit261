// The controller needs access to both the model and the view...so let's import them
import hikeModel from './hikesModel.js';
import hikesView from './hikesView.js';

// Just like with the view we should organize the functions we need to our controller. Let's use a class for this one

export default class HikesController {
  // a class needs a constructor
  constructor() {
    this.parent = document.getElementById('hikes');
  }
  renderHikeList() {
    const hikeListElement = document.getElementById('hikes');
    // the list of hikes will come from the model now...
    const hikeList = hikeModel.getHikes();
    // send the list of hikes and the element we would like those placed into to the view.
    hikesView.renderHikeList(hikeListElement, hikeList);
    // after the hikes have been rendered...add our listener
    this.addHikeListener();
  }
  renderOneHike(hikeName) {
    const hike = hikeModel.getHike(hikeName);
    hikesView.renderOneHikeFull(this.parent, hike);
  }
  // in order to show the details of a hike ontouchend we will need to attach a listener AFTER the list of hikes has been built. The function below does that.
  addHikeListener() {
    // get the list of hikes.  We did this exact same thing above...maybe we should add this element as a property of our class?
    const hikeListElement = document.getElementById('hikes');
    // We need to loop through the children of our list and attach a listener to each, remember though that children is a nodeList...not an array. So in order to use something like a forEach we need to convert it to an array.
    const childrenArray = Array.from(hikeListElement.children);
    childrenArray.forEach(child => {
      child.addEventListener('click', e => {
        // why currentTarget instead of target?
        this.renderOneHike(e.currentTarget.dataset.name);
      });
    });
  }
}
