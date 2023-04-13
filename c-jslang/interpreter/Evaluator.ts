import { TreeNode } from "../ast/TreeNode";

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
  

type StackFrame = {
    env: Record<string, Function>,
    retAddr: number,
}


interface Function {
    name: string,
    returnType: string,
    params: any[],
    body: TreeNode | undefined
}


// stack to keep track of the current state of the program. This stack will be used to store information 
// such as the current function being executed, 
//the current block of code being executed, and the current value of any variables that are currently in scope.

const runtimeStack: StackFrame[] = [];
const resultStack: number[] = [];
const globalenv: Record<string,any> = {}
globalenv["printf"] = builtIn.printf;

function pushStackFrame(env: Record<string, any>, retAddr: number) {
    runtimeStack.push({ env, retAddr })
  }
  
  function popStackFrame() {
    return runtimeStack.pop()
  }
  
  function peekStackFrame() {
    return runtimeStack[runtimeStack.length - 1]
  }

function evaluateFunctionDefinition(node: TreeNode) {
    const fnName = evaluate(node.children!.funcName!)
    const returnType = evaluate(node.children!.returnType!)
    const params = node.children?.args!.map(param => evaluate(param)) || []
    const body = node.children!.nextProg!

    const frame: Function = {name: fnName, returnType, params, body}

    const env: Record<string, any> = {}
    // add function parameters to environment
    for (let i = 0; i < params.length; i++) {
        env[params[i].varName] = undefined
    }
   
    env[fnName] = frame
    pushStackFrame(env, -1)

    // console.log(env)
}

function evaluateFunctionCall(node: TreeNode, args: any[]) { 
    // perform lookup of funDefinition
        // check builtIn functions e.g: printf

    const fnName:string = evaluate(node.funcName!)
    if (fnName == 'printf') {
        const string = evaluate(node.args![0])
        globalenv[fnName](string,resultStack )
        //const format = resultStack[resultStack.length - 1]
        return;
    }

    const stack = popStackFrame()
    const env = stack!.env
    const frame = env[fnName]

    //console.log(stack.env[fnName])

    // map the args to the frame
    // add arguments to environment
    for (let i = 0; i < args.length; i++) {
        env[frame.params[i].varName] = args[i]
    }

    pushStackFrame(env, 0)
    
    const result = evaluate(frame.body!)
    resultStack.push(result)
}


export function evaluate(node: TreeNode): any {
    switch(node.tag) {
        case 'Program':
          if (node.children?.stat) {
                 const stat = evaluate(node.children?.stat!)
                //  console.log(stat)
            }
            if (node.children?.nextProg)
                return evaluate(node.children?.nextProg)

            return evaluate(node.children!)
        case 'Statement':
            return evaluate(node.children!)
        case 'Def':
            return evaluate(node.children!)
        case 'IfStat':
            const condition: boolean = evaluate(node.condition!)
            const consequent = node.consequent!
            const alternative = node.alternative!
            if (condition)
                return evaluate(consequent)
            else
                return evaluate(alternative)
            break;
        case 'WhileStat': //FIXME: Not Yet Implemented
            const predicate: boolean = evaluate(node.predicate!)
            const body = node.body
            //TODO: update variable increment!!
                // call again body again
        case 'Block':
            return evaluate(node.block!)
        case 'FunDef':
            // if it is the main function <= evaluate it, since its function definition is execution
            const fnName = evaluate(node.children!.funcName!)
            if (fnName == 'main')
                return evaluate(node.children!.nextProg!)

            // Save the function definition to a environment
            evaluateFunctionDefinition(node)

            // Return undefined since we're not actually evaluating the function here
            return undefined;

        case 'FunCall':

            // do lookup of functions => if not present throw an error
                // if present => map names to value and evaluate
            const fnCallName = evaluate(node.funcName!)

            const fnCallParams = node.args!.map(param => evaluate(param)) || []
            // console.log(fnCallParams)
            
            evaluateFunctionCall(node,fnCallParams)

            break;
        case 'Return':
            return evaluate(node.children!)
        case 'BinaryExpression':
            const operator = evaluate(node.operator!);
            const left = evaluate(node.left!)
            const right = evaluate(node.right!)
            const result = binaryOp(operator, left,right)
            return result;
        case 'BinaryOp':
            return node.text!
        case 'Literal':
            const val = Number(node.text!)
            if (isNaN(val))
                return node.text!
            return val
        case 'Identifier': // GET FROM ENVIRONMENT, FIXME: IMPROVE IT!
            return peekStackFrame().env[node.text!]
        case 'returnType':
            return node.text!
        case 'FuncName':
            return node.text!
        case 'VarDef':
            const varName = node.text!
            const varType = evaluate(node.children!.type!)
            return {varName, varType, value: undefined}
        case 'Type':
            return node.text
        default:
            console.error(node)
            throw new Error(`Unknown AST node type: ${node!}`)
    }
}

function binaryOp(operator: string, left: number, right: number) {
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

