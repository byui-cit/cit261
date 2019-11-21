import { key } from "./keys.js";
import { getJSON } from "./utilities.js";

// curl -H "Content-Type:application/json"

//-d '{}'

const baseUrl = "https://api.nal.usda.gov/fdc/v1/";

// search?api_key=MY_API_KEY

async function getFood(search) {
  const options = {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      generalSearchInput: search,
      includeDataTypes: {
        "Survey (FNDDS)": true,
        Foundation: true,
        Branded: false
      },
      requireAllWords: "true"
    })
  };
  return await getJSON(baseUrl + `search?api_key=${key}`, options);
}
function renderList(foodList) {
  document.getElementById("list").innerHTML = foodList
    .map(item => `<li>${item.description}</li>`)
    .join("");
}
const searchElement = document.getElementById("query");
searchElement.addEventListener("keyup", search);

async function search() {
  const query = searchElement.value;
  if (query.length > 2) {
    const foods = await getFood(query);
    renderList(foods.foods);
  }
}
