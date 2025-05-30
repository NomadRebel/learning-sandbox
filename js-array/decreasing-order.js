// I need to sort array in decreasing order. But how-
// first I definitely need a loop, I don't think so...
// let's first use sort function
let sortFunc = function (a,b){
  if (a < b) return 1; // if the first value is greater than the second
  if (a == b) return 0; // if values are equal
  if (a > b) return -1;
}

let arr = [5, 2, 1, -10, 8];
arr.sort((a,b)=>b-a); // solution provided by the site
// you can use arr.sort(sortFunc) the result will be the same.
// let order = arr.sort();
// order.reverse();

console.log(arr);
