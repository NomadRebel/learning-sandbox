function filteredArray(arr, a, b){ 
  for (let i=0; i<arr.length; i++){
    let digit = arr[i];
    if(digit<a || digit>b){
      arr.splice(i,1);
      i--;
    }
  }
}
let arr = [5,3,8,1];
filteredArray(arr, 1,4);
console.log(arr);