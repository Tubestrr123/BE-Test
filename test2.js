/**
 * Direction:
 * Remove duplicated data from array
 * 
 * Expected Result:
 * [1, 2, 3, 4, 5]
 */
let data = [1, 4, 2, 3, 5, 3, 2, 4];

let unique = [];
let len = data.length;

data.sort();

let _temp;

for (let i = 0; i < len; i++) {
  if(data[i] !== _temp){
    unique.push(data[i]);
    _temp = data[i];
  }
}



console.log(unique);
