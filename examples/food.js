import { foodKey } from './keys.js';

function getJSON(url) {
  return fetch(url)
    .then(function(response) {
      if (!response.ok) {
        throw Error(response.statusText);
      } else {
        //console.log(response.json());
        return response.json();
      }
    })
    .catch(function(error) {
      console.log(error);
    });
}

function renderFoodList(food) {
  const item = document.createElement('li');
  item.classList.add('foodList');
  item.innerHTML = ` 
       <h2>${food.name}</h2>
          <div>
              <h3>ndbno</h3>
              <p>${food.ndbno}</p>
          </div>
         `;
  item.addEventListener('touchend', e => {
    foodController.getFood(food.ndbno);
  });
  return item;
}

function renderFoodFull(food) {
  const item = document.createElement('li');
  const backButton = document.createElement('button');
  backButton.innerHTML = '&lt;- All Food';
  backButton.ontouchend = () => {
    foodController.searchFood();
  };

  item.innerHTML = ` 
               <h2>${food.food.name}</h2>
             <h3>Ingredients</h3>
             <p>${food.food.ing.desc}</p>
    `;
  food.food.nutrients.map(item => {});
  console.log(food);
  item.insertBefore(backButton, item.childNodes[0]);
  return item;
}
const foodController = {
  _baseURL: 'https://api.nal.usda.gov/ndb/',
  _foodListElement: null,
  _foodList: null,
  _query: '',
  init: function() {
    this._foodListElement = document.getElementById('foodList');
    this._foodList = [];
  },
  searchFood: async function(q = this._query) {
    this._foodListElement.innerHTML = '';
    this._query = q;
    this._foodList = await getJSON(
      this._baseURL +
        `search/?format=json&q=${q}&sort=n&max=25&offset=0&api_key=${foodKey}`
    );
    this._foodList.list.item.map(food => {
      this._foodListElement.appendChild(renderFoodList(food));
    });
  },
  getFood: async function(id) {
    let foodDetail = await getJSON(
      this._baseURL +
        `reports/?ndbno=${id}&type=b&format=json&api_key=${foodKey}`
    );
    this._foodListElement.innerHTML = '';
    this._foodListElement.appendChild(renderFoodFull(foodDetail.report));
  }
};

export default foodController;
