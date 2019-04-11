// I've left the model view and controller code together in the one file for simplicity

//commentModel
class CommentModel {
  constructor(type) {
    this.type = type;
  }
  getComments(q = null) {
    if (this.type === 'All') {
    } else {
      if (q === null) {
        // no query, get all comments of the type
        return JSON.parse(window.localStorage.getItem(this.type));
      } else {
        // comments for a specific post...add ability to add a comment here
        let comments = JSON.parse(window.localStorage.getItem(this.type));
        return comments.filter(el => el.name === q);
      }
    }
  }
  addComment(value) {
    let comments = JSON.parse(window.localStorage.getItem(this.type));
    if (comments === null) {
      comments = [];
    }
    comments.push(value);
    window.localStorage.setItem(this.type, JSON.stringify(comments));
  }
}

// commentsView
const commentUI = `<div class="addComment">
<h2>Add a comment</h2>
<input type="text" id="commentEntry" />
<button id="commentSubmit">Comment</button>
</div>
<h2>Comments</h2>
<ul class="comments"></ul>`;
// I only had one function for the view...so I chose not to use an object or class.
function renderCommentList(element, comments) {
  // clear out any comments that might be listed
  element.innerHTML = '';
  // add the new list of comments
  comments.forEach(el => {
    let item = document.createElement('li');
    item.innerHTML = `
            ${el.name}: ${el.comment}
      `;

    element.appendChild(item);
  });
}
// Comments controller
class Comments {
  constructor(type, commentElementId) {
    this.type = type;
    this.commentElementId = commentElementId;
    this.model = new CommentModel(this.type);
  }

  addSubmitListener(postName) {
    // use element.ontouchend to avoid more than one listener getting attached at a time to the button.
    document.getElementById('commentSubmit').ontouchend = () => {
      // debugger;
      this.model.addComment({
        name: postName,
        comment: document.getElementById('commentEntry').value
      });
      document.getElementById('commentEntry').value = '';
      this.showCommentList(postName);
    };
  }
  showCommentList(q = null) {
    try {
      const parent = document.getElementById(this.commentElementId);
      if (!parent) throw new Error('comment parent not found');
      // check to see if the commentUI code has been added yet
      if (parent.innerHTML === '') {
        parent.innerHTML = commentUI;
      }
      if (q !== null) {
        // looking at one post, show comments and new comment button
        document.querySelector('.addComment').style.display = 'block';
        this.addSubmitListener(q);
      } else {
        // no post name provided, hide comment entry
        document.querySelector('.addComment').style.display = 'none';
      }
      // get the comments from the model
      let comments = this.model.getComments(q);
      if (comments === null) {
        // avoid an error if there are no comments yet.
        comments = [];
      }
      renderCommentList(parent.lastChild, comments);
    } catch (error) {
      console.log(error);
    }
  }
}

export default Comments;
