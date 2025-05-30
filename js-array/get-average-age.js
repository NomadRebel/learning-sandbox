// Given Solution
function getAverageAges(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}


// MY SOLUTION
function getAverageAge(arr){
  let det = [];
  for(let i =0; i<arr.length; i++){
    let age = arr[i].age;
    det.push(age); 
  }
  let total= 0;
  let average = 0;
  for(let i=0; i<det.length; i++){
    total +=det[i];
    average = total/det.length;
  }
  return average;
}
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ]

console.log(getAverageAge(arr));
console.log(getAverageAges(arr));