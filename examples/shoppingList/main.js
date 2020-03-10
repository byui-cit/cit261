import Shopping from "./shopping.js";

const listElement = document.querySelector("#shoppingList tbody");

const shopping = new Shopping(listElement, "shoppingItems");
