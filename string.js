let firstName = new String("Nikhil is a full-stack developer");
let lastName = "verma";
let number = 5;
//console.log(`My First Name is ${firstName.toUpperCase().trimStart()} and my Last Name is ${lastName.bold()}
 //and the utf code of 5 is ${firstName.codePointAt(1).toString(7)}` );
// console.log(firstName.concat(" ",lastName));
//  console.log(firstName.endsWith("developer"));
//  console.log(firstName.includes(`${lastName}`));
//  console.log(firstName.indexOf(`${lastName}`));
// console.log(firstName.split("-",(2)));

let randomYear = Math.floor(Math.random()*1000+1000);
// if(randomNumber<=4){
//   console.log(`rock`);
// }
// else if(randomNumber<=7){
//   console.log(`paper`);
// }
// else {
//   console.log(`scissors`);
// }
console.log(randomYear);
let leapYear = function(year){
  x=year%4;
  if(x===0){
    console.log(`${year} is a Leap Year!`);
  }
  else{
    console.log(`${year} is not a Leap Year!`);
  }
}
console.log(leapYear(1996));