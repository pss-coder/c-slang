import { evaluate } from "./interpreter/Evaluator"
import {Intepreter} from "./interpreter/Interpreter"

import { parser } from "./parser/parser"

// For testing`
const prog = `int main() { printf('%d %d', 6+3, 6+3); return 0;}`


const prog_1 = `int sum(int x, int y) {return x + y;} int main() { printf('%d %d', sum(7,3), sum(6,8)); return 0;}`
//const prog_2 = `int swap(int *x, int *y) { int temp = *x; *x = *y;*y = temp;} int main() {int x=0; int y=1;} swap(&x, &y); return 0;`
// const prog = `int main() { int a = 3; return a;}`
const prog_3 = `while (3 > 2) { return 4; }`
const prog_4 = `int x = 0; while(x < 5){printf('%d', x); x = x + 1;}`
const prog_5 = `char* x;`


// parse program
const parsed = parser(prog_1)
console.log(
    JSON.stringify(
        parsed,
         null, 
         2)
)

// intepret program
// const interpreter = new Intepreter()
// interpreter.interpreter(parsed)
// console.log(result)

// test struct definition and init
// TODO: IMPLEMENT struct initalisation
// const str = parser(struct_prog)
// console.log(
//     JSON.stringify(
//         str,
//          null, 
//          2)
// )

console.log(evaluate(parsed))