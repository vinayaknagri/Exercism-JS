/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus (timeRemaining) {
  switch(timeRemaining) {
    case 0:
      return 'Lasagna is done.';
    case undefined:
      return 'You forgot to set the timer.';
    default:
      return 'Not done, please wait.';
  }
}

export function preparationTime(layers, averageTime = 2) {
  return averageTime*layers.length;
}

export function quantities(layers) {
  const noodlesQuant = 50 * (layers.filter(x => x === 'noodles').length);
  const sauceQuant = 0.2 * (layers.filter(x => x === 'sauce').length);
  return {
    noodles: noodlesQuant,
    sauce: sauceQuant,
  };
}

export function addSecretIngredient(friendsList, myList) {
  myList = myList.push(friendsList.at(-1));
}

export function scaleRecipe(recipe, portions) {
   const factor = portions / 2;
   const newRecipe = {};

  for (let item in recipe)
    {
      newRecipe[item] = recipe[item] * factor;
    }
  
  return newRecipe;
}