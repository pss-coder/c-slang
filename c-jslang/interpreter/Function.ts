import { TreeNode } from "../ast/TreeNode";

export class CFunction {
    name: string;
    body: TreeNode
    parameterNames: string[];
    private _returnValue: any;
    
    public get returnValue(): any {
        return this._returnValue;
    }
    public set returnValue(value: any) {
        this._returnValue = value;
    }
   // localVariables: string[];
  
    constructor(name: string, body: TreeNode, parameterNames: string[]) {
      this.name = name;
      this.body = body;
      this.parameterNames = parameterNames;
    //   this.localVariables = localVariables;
    }

    

}