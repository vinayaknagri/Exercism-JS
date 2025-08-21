// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch(name) {
    case 'Pure Strawberry Joy':
      return 0.5;
    case 'Energizer':
    case 'Green Garden':
      return 1.5;
    case 'Tropical Island':
      return 3;
    case 'All or Nothing':
      return 5;
    default:
      return 2.5;
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let wedges = 0;
  let count = 0;

  for (const lime of limes) {
    if (wedges >= wedgesNeeded) break;

    if(lime == 'small') wedges += 6;
    if(lime == 'medium') wedges += 8;
    if(lime == 'large') wedges += 10;

    count++;
  }

  return count;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let timeElapsed = 0;
  let i = 0;

  for (const order of orders) {
    if (timeElapsed >= timeLeft) break;      // stop if out of time
    timeElapsed += timeToMixJuice(order);    // add the time of this drink
    i++;                                     // move to next index
  }

  return orders.slice(i); // remove all orders already prepared
  
}
