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

Then organize it into Model, view, and controller functionality
Model:
Add Todo
Edit Todo
filter Todos
Delete todo
read/write localStorage

View:
List Todos

Controller: 
Pretty much everything!  Explain that each action that is the result of a user action needs a method in the controller. As well as everything necessary to get and display the initial state of the app.
*/

// Model code here.
class ToDoModel {
  constructor(key) {
    // key for localStorage saving and lookup
    this.key = key;
    // Try and read from localStorage to see if there are any pre-existing todos, otherwise set the list to an empty array
    this.toDos = readFromLS(this.key) || [];
  }
  getToDos() {
    // Make sure the stored list of toDos matches what is in localstorage. Do we really need to do this? Maybe not.
    this.toDos = readFromLS(this.key);
    // Check to make sure we found something, mention that maybe this error checking may be better done in the readFromLS function.
    if (!this.toDos) {
      this.toDos = [];
    }
    return this.toDos;
  }
  // This would be done last if you still have time, and if you haven't blown too many minds yet.  If you do get here, mention how similar this method is with getToDos, they could probably be combined easily.
  filterToDos(completed = true) {
    this.toDos = readFromLS(this.key);
    // Return a list of either completed or not completed toDos based on the parameter.
    return this.toDos.filter(item => item.completed === hidden);
  }
  addToDo(value) {
    // use Date.now() for UTC millisecond string.
    const newToDo = {
      id: new Date(),
      content: value,
      completed: false
    };
    this.toDos.push(newToDo);
    writeToLS(this.key, this.toDos);
  }
  findTodo(id) {}
  completeTodo(id) {}
}
function writeToLS(key, data) {
  // We can use JSON.stringify to convert our object to a string that can be stored in localStorage.
  window.localStorage.setItem(key, JSON.stringify(data));
}

function readFromLS(key) {
  // The string we retrieve from localStorage needs to be converted back to an object with JSON.parse
  return JSON.parse(window.localStorage.getItem(key));
}

// Controller
export default class ToDoController {
  constructor(listElement) {
    // Opted to store the listElement inside the class.
    this.listElement = listElement;
    // Create a new instance of our model and add it to the controller.
    this.toDoModel = new ToDoModel('todo');
    this.listToDos();
  }

  newToDo(value) {
    this.toDoModel.addToDo(value);
    this.listToDos();
  }

  listToDos(hidden = true) {
    renderList(this.toDoModel.getToDos(), this.listElement, hidden);
  }
}
// View code here.
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

// Another model for OOP in Javascript is factory functions.  This is an example of the todoModel as a factory function
// factory function
// function ToDoModel(key) {
//   const readFromLS = function(key) {
//     return JSON.parse(window.localStorage.getItem(key));
//   };
//   const writeToLS = function(key, data) {
//     window.localStorage.setItem(key, JSON.stringify(data));
//   };
//   let toDos = readFromLS(key) || [];
//   return {
//     get: function() {
//       return toDos;
//     },
//     add: function(value) {
//       // use Date.now() for UTC millisecond string.
//       const newToDo = {
//         id: new Date(),
//         content: value,
//         completed: false
//       };
//       toDos.push(newToDo);
//       writeToLS(key, toDos);
//     }
//   };
// }
// const myToDos = ToDoModel('todo');
