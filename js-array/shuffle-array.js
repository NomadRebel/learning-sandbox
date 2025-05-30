function shuffle(arr){
  arr.sort(function(){
    return Math.random()-0.5;
    });
  return arr;
} 
    /* we've subtract 0.5 because that way shift the range
    of math.random to -0.5 and +0.5 so we can get positive and
    negative values.

    if value is negative that means put the second number before
    the first

    and if value is positive that means put the put first after second

    so that way we can shuffle an array though this method isn't recommended*/
  

let arr = [1, 2, 3];

console.log(shuffle(arr));

// 123
// 132
// 213
// 231
// 312
// 321
