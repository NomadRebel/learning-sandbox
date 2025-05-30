let john = {name: "John", age: 25};
let pete = {name: "Pete", age: 30};
let mary = {name: "Mary", age: 28};

let users = [john, pete, mary];

// GIVEN SOLUTION
let names = users.map(item=> item.name);
console.log(names);

//MY SOULUTION
let arr = [];
for(let i=0; i<users.length; i++){
  let username = users[i].name;
  arr.push(username);
}
console.log(arr);