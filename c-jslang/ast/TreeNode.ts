
// Implementation of AST Node in antlr Visitor
// TODO: change type to tag, update other optional values for parsing
export interface TreeNode {
    tag?: string;
    text?: string;

    children?: TreeNode,

    // for Binary/Unary
    operator?: TreeNode,
    left?: TreeNode,
    right?: TreeNode,


    //structFields
    members? : TreeNode[]
    structName?: string
  
    // Function Definition
    returnType?: TreeNode,
    funcName?: TreeNode
    args?: TreeNode[],

    // Type
    type?: TreeNode,

    // Program / Statement
    stat?: TreeNode,
    nextProg?: TreeNode,

    // Assignment
    assignment?: TreeNode

    // is pointer * present in assignment
    isPointerPresent?: boolean | false,
    isAddressRefPresent?: boolean | false

    // for if-else
    condition? : TreeNode
    consequent? : TreeNode
    alternative? : TreeNode
    block?: TreeNode

    // for while
    predicate?: TreeNode,
    body?: TreeNode

    //for array
    arrValues?: TreeNode[]
    arrIndex?: number

  }