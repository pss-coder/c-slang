interface Variable {
    name: string;
    value: any;
  }
  
  export class Environment {
    private stack: Variable[][];
  
    constructor() {
      this.stack = [[]];
    }
  
    pushScope(): void {
      this.stack.push([]);
    }
  
    popScope(): void {
      this.stack.pop();
    }
  
    declareVariable(name: string, value?: any): void {
      const top = this.stack[this.stack.length - 1];
      top.push({ name, value });
    }
  
    getVariable(name: string): any {
      for (let i = this.stack.length - 1; i >= 0; i--) {
        const frame = this.stack[i];
        const variable = frame.find((v) => v.name === name);
        if (variable) {
          return variable.value;
        }
      }
      throw new Error(`Undefined variable: ${name}`);
    }
  
    setVariable(name: string, value: any): void {
      for (let i = this.stack.length - 1; i >= 0; i--) {
        const frame = this.stack[i];
        const variable = frame.find((v) => v.name === name);
        if (variable) {
          variable.value = value;
          return;
        }
      }
      throw new Error(`Undefined variable: ${name}`);
    }
  }
  
//   const env = new Environment();
  
//   env.pushScope();
//   env.declareVariable('x', 10);
//   env.pushScope();
//   env.declareVariable('y', 20);
//   console.log(env.getVariable('x')); // 10
//   console.log(env.getVariable('y')); // 20
//   env.setVariable('x', 30);
//   console.log(env.getVariable('x')); // 30
//   env.popScope();
//   console.log(env.getVariable('x')); // 10
  