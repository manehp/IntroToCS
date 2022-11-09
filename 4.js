//Using a for loop, write a program that reverses a given array

let arr = [1, 2, 3,];
let result = ""
for(let index = arr.length - 1; index>=0; index--){
    result+= arr[index];
}
console.log(result)

