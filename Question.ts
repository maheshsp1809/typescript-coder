type val=string|number|boolean;
function swap<T>(a: T, b: T):[T,T]{
   return [b,a];
  
}
console.log("ans "+swap("mahesh","afroz"));
console.log("ans is noted in  the loca lhost se")

// Question 2

function swap2<T, U>(a: T, b:U): [U,T] {
    return [b, a]
}

console.log("ans " + swap2("mahesh", true));
// Question 3 

