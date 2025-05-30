let sortByAge = (a,b) =>{
    if(a.age<b.age){
        return -1;
    }
    else if(a.age>b.age){
        return 1;
    }
    else {
        return 0;
    }
}
    
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];
arr.sort(sortByAge);
console.log(arr)

