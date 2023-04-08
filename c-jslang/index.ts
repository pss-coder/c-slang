import {Intepreter} from "./interpreter/Interpreter"
import { parser } from "./parser/parser"

// For testing
const struct_prog = `
struct Circle {int x; int y;}; 
int main() {
    struct Circle c;
    return 0;
}

`
const prog = `int main() { printf('%d', 6+3); return 0;}`

// parse program
const parsed = parser(prog)
console.log(
    JSON.stringify(
        parsed,
         null, 
         2)
)

// intepret program
const interpreter = new Intepreter()
interpreter.interpreter(parsed)
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