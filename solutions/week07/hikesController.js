// The controller needs access to both the model and the view...so let's import them
import hikeModel from './hikesModel.js';
import hikesView from './hikesView.js';
//  we also need the new comments class to add that functionality
import Comments from './comments.js';

export default class HikesController {
  // a class needs a constructor
  constructor() {
    this.parent = document.getElementById('hikes');
    //add an instance of our comments class to the controller
    this.comments = new Comments('hikes', 'comments');
  }
  showHikeList() {
    const hikeListElement = this.parent;
    // the list of hikes will come from the model now...
    const hikeList = hikeModel.getHikes();
    // send the list of hikes and the element we would like those placed into to the view.
    hikesView.renderHikeList(hikeListElement, hikeList);
    // after the hikes have been rendered...add our listener
    this.addHikeListener();
    // show comments
    this.comments.showCommentList();
  }
  showOneHike(hikeName) {
    const hike = hikeModel.getHike(hikeName);
    hikesView.renderOneHikeFull(this.parent, hike).ontouchend = () => {
      this.showHikeList();
    };
    // show the comments for just this hike
    this.comments.showCommentList(hikeName);
  }
  // in order to show the details of a hike ontouchend we will need to attach a listener AFTER the list of hikes has been built. The function below does that.
  addHikeListener() {
    // We need to loop through the children of our list and attach a listener to each, remember though that children is a nodeList...not an array. So in order to use something like a forEach we need to convert it to an array.
    const childrenArray = Array.from(this.parent.children);
    childrenArray.forEach(child => {
      child.addEventListener('touchend', e => {
        this.showOneHike(e.currentTarget.dataset.name);
      });
    });
  }
}
