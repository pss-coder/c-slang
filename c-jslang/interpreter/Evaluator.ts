import { TreeNode } from "../ast/TreeNode";
import { Environment } from "./Environment";
import { StackFrame } from "./StackFrame";
import { RuntimeStack } from "./RuntimeStack";


//globalenv["printf"] = builtIn.printf;
const RTS: RuntimeStack = new RuntimeStack()

// stores final value from program
const resultStack: number[] = [];

export class Evaluator {
    output:string[] = []

    evaluate(node: TreeNode, env: Environment): any {
        switch(node.tag) {
            case 'Program':
              if (node.children?.stat) {
                    const stat = this.evaluate(node.children?.stat!, env)
                }
                if (node.children?.nextProg)
                    return this.evaluate(node.children?.nextProg, env)
    
                return this.evaluate(node.children!, env)
                
            case 'Statement':
                return this.evaluate(node.children!, env)
            case 'Def':
                return this.evaluate(node.children!, env)
            case 'IfStat':
                const condition: boolean = this.evaluate(node.condition!, env)
                const consequent = node.consequent!
                const alternative = node.alternative!
                if (condition)
                    return this.evaluate(consequent, env)
                else
                    return this.evaluate(alternative, env)
                break;
            case 'WhileStat': //FIXME: Not Yet Implemented
                const predicate: boolean = this.evaluate(node.predicate!, env)
                const body = node.body
                //TODO: update variable increment!!
                    // call again body again
                break;
            case 'Block':
                return this.evaluate(node.block!, env)
            case 'FunDef':
                
                const fnName = this.evaluate(node.children!.funcName!, env)
                    
                // Save the function definition to a environment
                const returnType = this.evaluate(node.children!.returnType!, env)
                const params = node.children?.args!.map(param => this.evaluate(param, env)) || []
                const bdy = node.children!.nextProg!
                const frame: StackFrame = {name: fnName, returnType, params, body: bdy, variables: {}}
                env.define(fnName, frame)
    
                 // if it is the main function <= evaluate it, since its function definition is execution
                 if (fnName == 'main') { 
                    RTS.push(frame)
                    return this.evaluate(node.children!.nextProg!, env)
                    // RTS.pop(frame)
                }
                
                // Return undefined since we're not actually evaluating the function here
                return undefined;
    
            case 'FunCall':
                
                // do lookup of functions => if not present throw an error
                    // if present => map names to value and evaluate
                const fn_name:string = this.evaluate(node.funcName!, env)
    
                // map the value in the fn call to fn def params
                const fnCallParams = node.args!.map(param => this.evaluate(param, env)) || []
    
                if (fn_name == 'printf') { // check for builtIns
                    const string = this.evaluate(node.args![0], env)
                    const va =  env.lookup(fn_name)(string,resultStack)
                    this.output.push(va)
                    return va;
                }
    
                const fn = env.lookup(fn_name)
                if (!fn)
                    throw new Error(`Function ${node.funcName!.text!} is not defined`);
    
                
                const localEnv: Environment = env.extend()
                for (let i = 0; i < fn.params.length; i++) {
                    localEnv.define(fn.params[i].varName, fnCallParams[i])
                }
    
                // add to RTS
                RTS.push(fn)
                const r = this.evaluate(fn.body!, localEnv)
                resultStack.push(r)
                RTS.pop()
                return r;
                
                break;
            case 'Return':
                return this.evaluate(node.children!, env)
            case 'BinaryExpression':
                const operator = this.evaluate(node.operator!, env);
                const left = this.evaluate(node.left!, env)
                const right = this.evaluate(node.right!, env)
                const result = this.binaryOp(operator, left,right)
                return result;
            case 'BinaryOp':
                return node.text!
            case 'Literal':
                const val = Number(node.text!)
                if (isNaN(val))
                    return node.text!
                return val
            case 'Identifier': // GET FROM ENVIRONMENT, FIXME: IMPROVE IT!
                // return peekStackFrame().env[node.text!]
                // console.log(env.values[node.text!])
                return env.values[node.text!]
                break;
            case 'returnType':
                return node.text!
            case 'FuncName':
                return node.text!
            case 'VarDef':
                
                if (node.children?.assignment) { // if there is an assignment
                    
                    const varType = this.evaluate(node.children!.type!, env)
                    const assignment = this.evaluate(node.children.assignment, env)
                    const varName = assignment.name
                    const isPointerPresent = assignment.isPointerPresent
                    const value = assignment.value
                    env.define(varName, value)
                    return {varName, varType, isPointerPresent, value}
                }
                
                const varName = node.text!
                const varType = this.evaluate(node.children!.type!, env)
    
                return {varName, varType, value: undefined}
    
            case 'Assignment':
                env.values[node.text!] = this.evaluate(node.children!, env)
                    return {name: node.text!, 
                        isPointerPresent: node.isPointerPresent, 
                        value: this.evaluate(node.children!, env) }
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



