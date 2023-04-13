export class Environment {
    values: { [key: string]: any } = {};
    private parentEnv?: Environment;
  
    constructor(parentEnv?: Environment) {
      this.parentEnv = parentEnv;
    }
  
    lookup(name: string): any {
      if (name in this.values) {
        return this.values[name];
      } else if (this.parentEnv) {
        return this.parentEnv.lookup(name);
      } else {
        throw new Error(`Undefined variable ${name}`);
      }
    }
  
    define(name: string, value: any): void {
      this.values[name] = value;
    }
  
    extend(): Environment {
      return new Environment(this);
    }
  }