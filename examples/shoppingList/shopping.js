import { qs, bindTouch, readFromLS, writeToLS } from "./utils.js";
let shoppingList = null;

// public
export default class Shopping {
  constructor(listElement, key) {
    // opted to store the listElement inside the class.
    this.listElement = listElement;
    // key for localStorage saving and lookup
    this.key = key;

    bindTouch("#addItem", this.newToDo.bind(this));
    this.listItems();
  }

  newItem() {
    const task = document.getElementById("todoInput");
    addItem(task.value, this.key);
    task.value = "";
    this.listItems();
  }

  listItems(hidden = true) {
    renderList(getItems(this.key), this.listElement, hidden);
  }
}
