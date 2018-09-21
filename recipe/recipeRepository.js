import recipes from './recipes.js';

const recipeListFactory = function(recipes) {
  let recipeList = recipes;
  return {
    getRecipes: function() {
      return recipeList;
    },
    filterRecipes: function(q) {
      return recipeList.filter(recipe => {
        let keywords = recipe.keywords; //.split(',');
        return keywords.toLowerCase().indexOf(q.toLowerCase()) > -1;
      });
    }
  };
};

const recipe = new recipeListFactory(recipes);
console.log(recipe.filterRecipes('entree'));
