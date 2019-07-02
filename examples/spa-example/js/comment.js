export default class Comments {
  constructor(type) {
    this.type = type;
  }
  get type() {
    return this.type;
  }
  getComments(q = null) {
    // get comments related to this.type
    const comments = JSON.parse(window.localStorage.getItem(this.type));

    // if q is set, filter comments by q
    if (q !== null) {
      return comments.filter(comment => comment.name === q);
    }
    // return results
    return comments;
  }

  addComment(value) {
    //get array of existing comments
    const comments = getComments();
    // add new comment to array
    comments.push(value);
    // set new array back to the key
    window.localStorage.setItem(this.type, JSON.stringify(comments));
  }

  renderComments(parent, comments) {}
}
