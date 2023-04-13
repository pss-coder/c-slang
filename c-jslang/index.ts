import { Environment } from "./interpreter/Environment"
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
const prog_5 = `int add_one(int x) { return x + 1;} int main() {printf("%d", add_one(1));}`


// parse program
const parsed = parser(prog_5)
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

const builtIn = {
    printf: (format: string,args: any[]) => {
        let index = 0;
    let output = "";
    for (let i = 0; i < format.length; i++) {
      if (format[i] === "%") {
        const specifier = format[i + 1];
        switch (specifier) {
          case "d":
            output += args[index++];
            break;
          case "s":
            output += args[index++];
            break;
          case "c":
            output += String.fromCharCode(args[index++]);
            break;
          default:
            throw new Error(`Invalid format specifier: ${specifier}`);
        }
        i++; // Skip over the specifier
      } else {
        output += format[i];
      }
    }
  
    console.log(output);
    }
}

const globalEnv: Environment = new Environment();

globalEnv.define("printf", builtIn.printf)

console.log(evaluate(parsed, globalEnv))