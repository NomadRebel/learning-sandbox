let john = {name: "John", surname: "Smith", id: 1 };
let pete = {name: "Pete", surname: "Hunt", id: 2 };
let mary = {name: "Mary", surname: "Key", id: 3 };


let users = [ john, pete, mary ];

// MY CODE

let usersMapped = users.map(function(items){
  let obj = {};       // declaring the new object so we can put new values into it.
  obj.fullName = (items.name + " " + items.surname);  // adding new key fullName and combining name and surname from  users
  obj.id = items.id;  // adding new key which shows the id
  return obj; // returning the object
});

console.log(usersMapped);
console.log(usersMapped[0].fullName);
console.log(usersMapped[1].id);



// Given Solution

let usersMap = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));

console.log(usersMap);
console.log(usersMap[0].fullName);
console.log(usersMap[1].id);
