let a = 'A car, a man, a maraca.';
let arr = a.split('');
let start = 0;
for(let i=0; i<arr.length; i++){
  // console.log(i);
  if(arr[i]===" " || arr[i]==="," ){
    arr.splice(start,i);
    start=i+1;
    return(arr[i]);
  }
   else{
    return(arr[i]);
   }
}
console.log(arr);