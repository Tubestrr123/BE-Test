/**
 * Direction:
 * Find missing number from the list
 *
 * Expected Result:
 * 8
 */
const numbers = [9, 6, 4, 2, 3, 5, 7, 0, 1];

function result(numbers) {
  let sum = 0;
  for(let x in numbers){
    sum += numbers[x];
  }
  let n = numbers.length + 0;
  expexted_sum = Math.floor((n*(n+1)/2));
  return expexted_sum -sum;
}

console.log(result(numbers));

