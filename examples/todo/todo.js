/*
 Start by brainstorming with class what methods the app will need to work.
Add Todo
Complete Todo
Edit ToDo?
Delete ToDo?
List Todos
Show/hide completed
Filter ToDos (complete/not complete)
Read toDos from local storage
Write ToDos to local storage

Then organize it into things that the interface needs (public) and things that it doesn't need direct access to (private)
Public:
Add Todo
Edit Todo
filter Todos
Delete todo
list todos


private:
read/write localStorage

*/
//  private code here. Not exported from the module

function writeToLS(key, data) {
  // we can use JSON.stringify to convert our object to a string that can be stored in localStorage.
  window.localStorage.setItem(key, JSON.stringify(data));
}

function readFromLS(key) {
  // the string we retrieve from localStorage needs to be converted back to an object with JSON.parse
  return JSON.parse(window.localStorage.getItem(key));
}

// View code here
function renderList(list, element, hidden) {
  console.log(list);
  element.innerHTML = '';

  list.forEach(toDo => {
    const item = document.createElement('li');
    const formattedDate = new Date(toDo.id).toLocaleDateString('en-US');

    item.innerHTML = `${formattedDate}: ${toDo.content}`;
    element.appendChild(item);
  });
}
function getToDos(key) {
  let toDos = readFromLS(key);
  //check to make sure we found something...mention that maybe this error checking may be better done in the readFromLS function
  if (!toDos) {
    toDos = [];
  }
  return toDos;
}

function addToDo(value, key) {
  // use Date.now() for UTC millisecond string.
  const newToDo = {
    id: new Date(),
    content: value,
    completed: false
  };
  let toDos = getToDos(key);
  toDos.push(newToDo);
  writeToLS(key, toDos);
}
// this would be done last if you still have time...and if you haven't blown too many minds yet :)  If you do get here...mention how similar this method is with getToDos...they could probably be combined easily.
function filterToDos(key, completed = true) {
  let toDos = readFromLS(key);
  if (!toDos) {
    return [];
  } else {
    // return a list of either completed or not completed toDos based on the parameter.
    return toDos.filter(item => item.completed === hidden);
  }
}
function findTodo(id) {}
function completeTodo(id) {}

// public
export default class ToDos {
  constructor(listElement, key) {
    // opted to store the listElement inside the class.
    this.listElement = listElement;
    // key for localStorage saving and lookup
    this.key = key;
    // try and read from localStorage to see if there are any pre-existing todos...otherwise set the list to an empty array
    this.toDos = readFromLS(this.key) || [];

    this.listToDos();
  }

  newToDo(value) {
    addToDo(value);
    this.listToDos();
  }

  listToDos(hidden = true) {
    renderList(getToDos(), this.listElement, hidden);
  }
}

//  This could also be done as a simple object literal as well.
// const ToDos = {
//   _key: null,
//   _listElement: null,
//   newToDo: function(value) {
//     addToDo(value);
//     this.listToDos();
//   },
//   listToDos: function(hidden = true) {
//     renderList(getToDos(), this.listElement, hidden);
//   }
// };

// export default toDos;
