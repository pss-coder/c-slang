import { TreeNode } from "../ast/TreeNode";

/**
 * Each FunctionFrame represents function data,
 *
 */
interface FunctionFrame {
    name: string,
    returnType: string,
    params: any[],
    body: TreeNode | undefined
}