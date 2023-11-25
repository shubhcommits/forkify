import * as model from './model.js';
import recipeView from './views/recipeView.js'
  // console.log(icons);

  import 'core-js/stable';
  import 'regenerator-runtime/runtime';
// const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
console.log('Test');

const controlRecipe = async function(){
  try{
    const id=window.location.hash.slice(1);
    if(!id) return;
    console.log(id);
    // renderSpinner(recipeContainer);
    recipeView.renderSpinner();

   await model.loadRecipe(id);
   const {recipe}=model.state;
    // Rendering recipie
    recipeView.render(model.state.recipe);

  }catch(err){
    alert(err);
  }
};

// controlRecipe();

window.addEventListener('hashchange',controlRecipe);

['hashchange','load'].forEach(ev=>window.addEventListener(ev,controlRecipe));