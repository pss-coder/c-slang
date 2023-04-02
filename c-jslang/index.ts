import {Intepreter} from "./interpreter/Interpreter"
import { parser } from "./parser/parser"

// For testing
const prog = `int main() {return 2+3;}`

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
const result = interpreter.interpreter(parsed)
console.log(result)

