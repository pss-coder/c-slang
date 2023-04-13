import { TreeNode } from "../ast/TreeNode";

/**
 * Each FunctionFrame represents function data,
 *
 */
export interface StackFrame {
    name: string,
    returnType: string,
    params: any[],
    variables: Record<string, any> | undefined
    body: TreeNode | undefined
}