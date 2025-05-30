let str = 'A car, a man, a maraca.';
let sp = str.replaceAll(" ","").toLowerCase();
let arr = sp.split("");
console.log(arr);

for (let i=0; i<arr.length; i++) {
     if(arr[i]==="," || arr[i]==="."){
         arr.splice(i,1);
     }
 }
arr.splice();
console.log(arr);
let reverse = arr.slice().reverse().toString();
let arr1 = arr.toString();
if(arr1===reverse){
    console.log(true);
}
else{
    console.log(false);
}
