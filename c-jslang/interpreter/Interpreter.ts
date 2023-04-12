import { TreeNode } from "../ast/TreeNode";

type Environment = { [name: string]: any };



export class Intepreter {


  // Define a print function that takes a list of values and prints them
  // in the console
  print(values: any[]) {
    console.log(...values);
    return undefined;
  }


  interpreter(node: TreeNode): any {
    switch(node.tag) {
        case 'Program':
          if (node.children?.stat)
              return this.interpreter(node.children?.stat!)
            return this.interpreter(node.children!)
        case 'Statement':
            return this.interpreter(node.children!)
        case 'Def':
            return this.interpreter(node.children!)
        case 'FunDef':
            const functionName = this.interpreter(node.children!.funcName!)
            const body = node.children!.nextProg!
            const args = node.children!.args
            if (functionName == 'main')
                return this.interpreter(body)
        
            // define function as new frame into environment
              // including mapping of variable, if not assingment, set undefined first
            // if it is main => execute it
              // else store body until if it is function call
              
          //  const program = this.interpreter(node.children!.nextProg!)
          ///            return program
            break;
        case 'FunCall':
            // lookup function name in environment if present, e.g: builtins eg printf(), else show error
              // pass args into 
            // evaulate args in func first
              // then call function in environment
              const fnName = this.interpreter(node.funcName!)
              // evaulate args
              const ags = node!.args
              //TODO: store params
              if (ags) {
                
                // ags.forEach(item => {
                //   const val = this.interpreter(item)
                //   const name = parameterNames.shift()!;
                //   frame.environment[name] = val;  
                // });
                if (fnName == 'printf') {
                  // Replace all occurrences of %d in the first argument with
                  // the corresponding value from the argument list
                  const format = ags[0].text!;
                  const values = ags.slice(1).map(item => this.interpreter(item))
                  const replaced = format.replace(/%d/g, () => values.shift());
                  // Call the print function with the replaced string
                  return this.print([replaced]);
                }
              }

            break;
        case 'Return':
            return this.interpreter(node.children!)
        case 'BinaryExpression':
            const operator = this.interpreter(node.operator!);
            const left = this.interpreter(node.left!)
            const right = this.interpreter(node.right!)
            const result = this.binaryOp(operator, left,right)
            // console.log(result)
            return result;
            break;
        case 'BinaryOp':
            return node.text!
        case 'Literal':
            return parseInt(node.text!)
        case 'returnType':
            return node.text!
        case 'FuncName':
            return node.text!
        default:
            console.log("error=")
            console.log(node);
            throw new Error(`Unknown AST node type: ${node.tag!}`)
    }
}
  
    // TODO: Implement environment
    // interpreter(node: TreeNode): any {
    //     switch(node.tag) {
    //         case 'Program':
    //             return this.interpreter(node.children!)
    //         case 'Statement':
    //             return this.interpreter(node.children!)
    //         case 'Def':
    //             return this.interpreter(node.children!)
    //         case 'FunDef':
    //             // const returnType = this.interpreter(node.children!.returnType!)
    //             // const funcName = this.interpreter(node.children!)
    //             //const args = this.interpreter(node.args) <-TODO: IMPLEMENT
    //             const program = this.interpreter(node.children!.nextProg!)
    //             return program
    //             // console.log(program)
    //             break;
    //         case 'Return':
    //             return this.interpreter(node.children!)
    //         case 'BinaryExpression':
    //             const operator = this.interpreter(node.operator!);
    //             const left = this.interpreter(node.left!)
    //             const right = this.interpreter(node.right!)
    //             const result = this.binaryOp(operator, left,right)
    //             // console.log(result)
    //             return result;
    //             break;
    //         case 'BinaryOp':
    //             return node.text!
    //         case 'Literal':
    //             //TODO: check typ of literal before parsing
    //             return parseInt(node.text!)
    //         case 'returnType':
    //             return node.text!
    //         case 'FuncName':
    //             return node.text!
    //         default:
    //             console.log("error=")
    //             console.log(node);
    //             throw new Error(`Unknown AST node type: ${node}`)
    //     }
    // }

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