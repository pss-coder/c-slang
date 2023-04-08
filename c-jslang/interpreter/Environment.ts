export class Environment {
    private stack: any[];
  
    constructor() {
      this.stack = [];
    }
  
    push(scope: any) {
      this.stack.push(scope);
    }
  
    pop() {
      this.stack.pop();
    }
  
    lookup(name: string) { // look up function name
      for (let i = this.stack.length - 1; i >= 0; i--) {
        if (name in this.stack[i]) {
          return this.stack[i][name];
        }
      }
      throw new ReferenceError(`Variable '${name}' is not defined.`);
    }
  
    assign(name: string, value: any) {
      for (let i = this.stack.length - 1; i >= 0; i--) {
        if (name in this.stack[i]) {
          this.stack[i][name] = value;
          return;
        }
      }
      throw new ReferenceError(`Variable '${name}' is not defined.`);
    }
  
    pushFrame() {
      this.push({});
    }
  
    popFrame() {
      this.pop();
    }
  
    assignParam(paramName: string, value: any) {
      if (this.stack.length == 0) {
        throw new Error("Attempted to assign parameter without an active function frame");
      }
      this.stack[this.stack.length - 1][paramName] = value;
    }
  
    lookupParam(paramName: string) {
      if (this.stack.length == 0) {
        throw new Error("Attempted to look up parameter without an active function frame");
      }
      return this.stack[this.stack.length - 1][paramName];
    }
  }
  