import { type } from "os";
import { TreeNode } from "../ast/TreeNode";
import { Environment } from "./Environment";
// import { CFunction } from "./Function";



export class Intepr {

    // Define a print function that takes a list of values and prints them
  // in the console
  print(values: any[]) {
    console.log(...values);
    return undefined;
  }

  // malloc(...) {..}

  interpreter(node: TreeNode, env: Environment): any {
    switch(node.tag) {
        case 'Program':
          if (node.children?.stat) {
            env.pushScope() // create a new scope for the program
            return this.interpreter(node.children?.stat!, env)
            // env.pushScope()
            // console.log(result)
          }
        return this.interpreter(node.children!, env)
        case 'Statement':
            return this.interpreter(node.children!, env)
        case 'Def':
            return this.interpreter(node.children!, env)
        case 'FunDef':
            // Save the function definition to a environment
            const fnName = this.interpreter(node.children!.funcName!, env)
            const returnType = this.interpreter(node.children!.returnType!, env)
            const fnParams = node.children?.args!.map(param => this.interpreter(param, env)) || []
            const fnBody = node.children!.nextProg!

            env.declareVariable(fnName, {type: returnType, value: fnBody, params: fnParams});
            
                if (fnName == 'main')
                    return this.interpreter(fnBody, env)

            return this.interpreter(node.children!.nextProg!, env)

            break;
        case 'FunCall':
            const fnCallName = this.interpreter(node.children!.funcName!, env)
            const fnCallParams = node.children?.args!.map(param => this.interpreter(param, env)) || []

            const fnDefinition = env.getVariable(fnCallName); // get fn definition
            if (fnDefinition.params.length !== fnCallParams.length)
                throw new Error(`Function ${fnCallName} called with wrong number of arguments`);
            
            env.pushScope() // create new scope for function call
            for (let i = 0; i < fnDefinition.params!.length; i++) {
                env.declareVariable(fnDefinition.params[i], {type: null, value: fnCallParams[i]})
            }
            const r = this.interpreter(fnDefinition.value!, env)
            
            break;
        case 'Return':
            return this.interpreter(node.children!, env)
        case 'BinaryExpression':
            const operator = this.interpreter(node.operator!, env);
            const left = this.interpreter(node.left!, env)
            const right = this.interpreter(node.right!, env)
            const result = this.binaryOp(operator, left,right)
            console.log(result)
            return result;
        case 'BinaryOp':
            return node.text!
        case 'Literal':
            return parseInt(node.text!)
        case 'Identifier':
            return env.getVariable(node.text!).value
        case 'returnType':
            return node.text!
        case 'FuncName':
            return node.text!
        case 'VarDef':
            const varName = node.text!
            const varType = this.interpreter(node.children!.type!, env)
            env.declareVariable(varName, {type: varType, value: null})
            break;
        case 'Type':
            return node.text
        default:
            console.error(node)
            throw new Error(`Unknown AST node type: ${node!}`)
    }
}

    binaryOp(operator: string, left: number, right: number) {
        switch (operator) {
            case '+':
              return left + right;
            case '-':
              return left - right;
            case '*':
              return left * right;
            case '/':
              return left / right;
            case '%':
              return left % right;
            case '==':
              return left === right;
            case '!=':
              return left !== right;
            case '<':
              return left < right;
            case '>':
              return left > right;
            case '<=':
              return left <= right;
            case '>=':
              return left >= right;
            default:
              throw new Error(`Unknown operator:`);
          }
    }
}


// class CEnvironment {
//     // ...
  
//     printf(args: any[]) {
//       // Extract the format string and arguments from the arguments array
//       const format = args[0];
//       const values = args.slice(1);
  
//       // Replace all occurrences of %d in the format string with the
//       // corresponding value from the argument list
//       let output = format.replace(/%d/g, () => {
//         return String(this.pop());
//       });
  
//       // Output the formatted string
//       console.log(output);
//     }
  
//     // ...
//   }
  