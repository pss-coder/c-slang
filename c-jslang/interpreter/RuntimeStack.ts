import { StackFrame } from "./StackFrame";

export class RuntimeStack {
  // Set limit???
    private frames: StackFrame[] = [];
  
    push(frame: StackFrame): void {
      this.frames.push(frame);
    }
  
    pop(): StackFrame | undefined {
      return this.frames.pop();
    }
  
    peek(): StackFrame {
      return this.frames[this.frames.length - 1];
    }
  }