export default class Comments {
  constructor(type) {
    this.type = type;
  }
  get type() {
    return this.type;
  }
  getComments(q = null) {
    // Get comments related to this.type
    const comments = JSON.parse(window.localStorage.getItem(this.type));

    // If q is set, filter comments by q
    if (q !== null) {
      return comments.filter(comment => comment.name === q);
    }
    //Return results.
    return comments;
  }

  addComment(value) {
    //Get array of existing comments.
    const comments = getComments();
    // Add new comment to array.
    comments.push(value);
    // Set new array back to the key.
    window.localStorage.setItem(this.type, JSON.stringify(comments));
  }

  renderComments(parent, comments) {}
}
