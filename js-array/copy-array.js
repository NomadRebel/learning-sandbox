let copySorted = function(arr){
  let arr1 = [...arr];
  let sorted = arr1.sort();
  return sorted;
}
let arr = ["HTML", "JavaScript", "CSS"];
console.log(copySorted(arr));
console.log(arr);