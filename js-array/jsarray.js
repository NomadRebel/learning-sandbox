// - a function that will take three value one of which 
//   is array.
// - then it will check the array for the conditions
// - and coditions are elements that are higher and equal to a
// - and elements that are lower or equal to b will return a 
//    result as an array

// to check conditions I think I need to use AND or OR operator

let filterRange = function(arr, value_a, value_b){
  let arrone = [];
  for (let i=0; i<arr.length; i++){     //loop so we can go through each value of an array
    
    if(arr[i]>=value_a && arr[i]<=value_b){  // now the last thing is to do to put the values in the same array
      let digit = Number(arr[i]);
      let newarr = arrone.push(Array.from(String(digit))); //conversion into array
    //turning two arrays into one
    }
  }
  return arrone;
}
let arr = [5,3,8,1]; // first let's declare an array
let filtered = filterRange(arr,1,4);
console.log(filtered);
console.log(arr);

