// The controller needs access to both the model and the view...so let's import them
import hikeModel from './hikesModel.js';
import hikesView from './hikesView.js';

// Just like with the view we should organize the functions we need to our controller. Let's use a class for this one

export default class HikesController {
  // a class needs a constructor
  constructor(parentId) {
    this.parentId = parentId;
    this.parent = document.getElementById(this.parentId);
  }
  // add an init function to allow us to control when the parent element gets selected and the hike list displayed.

  showHikeList() {
    // the list of hikes will come from the model...
    const hikeList = hikeModel.getHikes();
    // send the list of hikes and the element we would like those placed into to the view.
    hikesView.renderHikeList(this.parent, hikeList);
    // after the hikes have been rendered...add our listener
    this.addHikeListener();
  }
  showOneHike(hikeName) {
    const hike = hikeModel.getHike(hikeName);
    hikesView.renderOneHikeFull(this.parent, hike).ontouchend = () => {
      this.showHikeList();
    };
  }
  // in order to show the details of a hike ontouchend we will need to attach a listener AFTER the list of hikes has been built. The function below does that.
  addHikeListener() {
    // We need to loop through the children of our list and attach a listener to each, remember though that children is a nodeList...not an array. So in order to use something like a forEach we need to convert it to an array.
    const childrenArray = Array.from(this.parent.children);
    childrenArray.forEach(child => {
      child.addEventListener('touchend', e => {
        // why currentTarget instead of target?
        this.showOneHike(e.currentTarget.dataset.name);
      });
    });
  }
}
