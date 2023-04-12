import { CFunction } from "./Function";

export class CStack {
    private values: CFunction[] = [];
  
    push(value: any) {
      this.values.push(value);
    }
  
    pop(): any {
      return this.values.pop();
    }
  
    peek(): any {
      return this.values[this.values.length - 1];
    }
  
    isEmpty(): boolean {
      return this.values.length === 0;
    }
  }
  