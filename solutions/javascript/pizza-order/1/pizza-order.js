/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  const basePrices = {
    'Margherita': 7,
    'Caprese': 9,
    'Formaggio': 10,
  };

  const extraPrices = {
    'ExtraSauce': 1,
    'ExtraToppings': 2,
  };

  function calc(extrasLeft, total) {
    if(extrasLeft.length === 0) {    //base case
      return total;
    }

    const[first,...rest] = extrasLeft;
    return calc(rest, total+(extraPrices[first]??0)); //recursive case
  }

  return calc(extras, basePrices[pizza] ?? 0);
  }


/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  const basePrices = {
    'Margherita': 7,
    'Caprese': 9,
    'Formaggio': 10,
  };

  const extraPrices = {
    'ExtraSauce': 1,
    'ExtraToppings': 2,
  };

  let total = 0;

  for(let i=0; i<pizzaOrders.length;i++)
    {
      const order = pizzaOrders[i];

      //start with base price

      let pizzaTotal = basePrices[order.pizza];

      //loop through extras

      for(let j=0;j<order.extras.length;j++) {
        const extra = order.extras[j];
        pizzaTotal += extraPrices[extra];
      }
      total+= pizzaTotal; 
    }

  return total;
}
