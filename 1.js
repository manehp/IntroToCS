//1. Using while write a program that prints the following figure for given number of lines.

const numLines = 3

let curLine = 1
let text = '+'
let result = text.repeat(numLines)
  while (curLine<=numLines){
    console.log (result)
    curLine++
}