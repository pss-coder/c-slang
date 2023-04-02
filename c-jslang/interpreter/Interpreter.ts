import { TreeNode } from "../parser_tree_builder/TreeNode";

export class Intepreter {

    // TODO: Implement environment
    interpreter(node: TreeNode): any {
        switch(node.tag) {
            case 'Program':
                return this.interpreter(node.children!)
            case 'Statement':
                return this.interpreter(node.children!)
            case 'Def':
                return this.interpreter(node.children!)
            case 'FunDef':
                // const returnType = this.interpreter(node.children!.returnType!)
                // const funcName = this.interpreter(node.children!)
                //const args = this.interpreter(node.args) <-TODO: IMPLEMENT
                const program = this.interpreter(node.children!.nextProg!)
                return program
                // console.log(program)
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
                //TODO: check typ of literal before parsing
                return parseInt(node.text!)
            case 'returnType':
                return node.text!
            case 'FuncName':
                return node.text!
            default:
                console.log("error=")
                console.log(node);
                throw new Error(`Unknown AST node type: ${node}`)
        }
    }

    // interpret(node: TreeNode, environment: any = {}): any {
    //     console.log(node)
    //     switch(node.tag) {
    //         case 'Program':
    //             return this.interpret(node.children![0], environment)
    //             break;
    //         case 'Children':
    //             for (const child of node.children!) {
    //                 if (child.tag != 'Terminal')
    //                     this.interpret(child, environment);
    //               }
    //               break;
    //         case 'Statement':
    //             for (const child of node.children!) {
    //                     this.interpret(child, environment);
    //               }
    //             break;
    //         case 'Def':
    //             for (const child of node.children!) {
    //                 this.interpret(child, environment);
    //               }
    //             break;
    //         case 'FunDef':
    //             const children = this.interpret(node.children![0], environment)
    //             console.log(children)
    //             break;
    //         case 'FuncName':
    //             return node.text
    //         case 'Return':
    //             const r = this.interpret(node.children![0], environment)
    //             console.log(r)
    //             break
    //         case 'BinaryExpression':
    //             const symbol = node.operator!.text!
    //             const expr1: number = this.interpret(node.left!, environment )!;
    //             const expr2: number = this.interpret(node.right!, environment )!;
    //             const result = this.binaryOp(symbol, expr1, expr2);

    //             console.log(result)
    //             break;
    //         case 'Literal':
    //             return parseInt(node.text!)
    //             break;
    //         case 'Terminal':
    //             //TODO: CHECK the kind of terminal?
    //             return;
    //         default:
    //             // return;
    //             console.log("error=")
    //             console.log(node);
    //             throw new Error(`Unknown AST node type:`);
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