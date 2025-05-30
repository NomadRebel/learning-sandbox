let filterRange = function(arr, value_a, value_b){
  return arr.filter(function(item) {
    return value_a<=item && item<=value_b;
  });
}

let arr = [5,3,8,1];

let filtered = filterRange(arr, 1, 4);

console.log(filtered);
console.log(arr);