function camelize(str){
    let parts = str.split("-");
    
    for (let i=0; i<parts.length; i++){
        let word = parts[i];
        parts[i]=word[0].toUpperCase()+word.slice(1);
    }
    let result = parts.join('');
    return result;
}
let name = "the-nikhil-verma-to-for-pre"
console.log(camelize(name));
