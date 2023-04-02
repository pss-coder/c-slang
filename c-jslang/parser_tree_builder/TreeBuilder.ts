import { ParseTree } from 'antlr4ts/tree/ParseTree'
import { ErrorNode } from 'antlr4ts/tree/ErrorNode'
import { RuleNode } from 'antlr4ts/tree/RuleNode'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'

import * as CJsParser from '../lang/CJsParser'
import { CJsVisitor } from '../lang/CJsVisitor'

import {TreeNode} from '../parser_tree_builder/TreeNode'



// Current implementations
//FIXME: FIX THE FUNCTIONS AND IMPLEMENT THE REMAINING FUNCTIONS
export class TreeBuilder implements CJsVisitor<TreeNode> {
  private tree: TreeNode = { tag: "Program", children: {} };
  private currentNode: TreeNode = this.tree;

  visitProgram(ctx: CJsParser.ProgramContext): TreeNode {
    const stat = this.visit(ctx.stat())
    if (!ctx.program())
      return {
        tag: 'Program',
        text: ctx.text,
        children: stat
      }
    else
    return {
      tag: 'Program',
      text: ctx.text,
      children: {stat, nextProg: this.visit(ctx.program()!)}
    }

  }
  visitStat(ctx: CJsParser.StatContext): TreeNode {
    const stat = {tag: 'Statement', children: {}}

    //assingment
    if (ctx.assg()) {stat.children = this.visitAssg(ctx.assg()!)}
    //expression
    if (ctx.expr()){ stat.children = this.visitExpr(ctx.expr()!)}

    // if

    // while

    // block

    // definitions
    if (ctx.def()){ stat.children = this.visitDef(ctx.def()!)}

    // return
    if (ctx.return()) { stat.children = this.visitReturn(ctx.return()!)}

    // //COLON
    // else {
    //   stat.children = this.visitTerminal(ctx.COLON()!)
    // }

    return stat;
  }

  visitReturn (ctx: CJsParser.ReturnContext): TreeNode {
    const expr = this.visitExpr(ctx.expr()!)
    return { tag: 'Return', children: expr}
  }

  visitVarDef(ctx: CJsParser.VarDefContext): TreeNode {
    // const id = ctx.ID()?.text
    const type = this.visitType(ctx.type()!);
    const assignment = this.visitAssg(ctx.assg()!)

    return {
      tag: 'VarDef',
      text: ctx.ID()?.text,
      children: {type, assignment}
    }
  }


  visitAssg(ctx: CJsParser.AssgContext): TreeNode {
    //TODO
    const expr = this.visitExpr(ctx.expr()!)
    return {
      tag:'Assignment',
      text: ctx.ID().text,
      isPointerPresent: ctx.MUL() ? true : false,
      children: expr
    }
  }


  visitWhileStat?: ((ctx: CJsParser.WhileStatContext) => TreeNode) | undefined
  visitIfStat?: ((ctx: CJsParser.IfStatContext) => TreeNode) | undefined

  visitDef(ctx: CJsParser.DefContext): TreeNode {
    const def = {tag: 'Def', children: {}}

    if(ctx.funDef()) { def.children = this.visitFunDef(ctx.funDef()!)}
    if (ctx.varDef()) { def.children = this.visitVarDef(ctx.varDef()!)} 
    // else { def.children = this.visitTerminal(ctx.COLON()!)}

    return def;
  }
  visitFunDef(ctx: CJsParser.FunDefContext): TreeNode {
    
    const funcName: TreeNode = this.visitFuncName(ctx.funcName());

    const returnType: TreeNode = this.visitType(ctx.type())
    
    const argCount = ctx.varDef().length
    let args: TreeNode[] = []

    for (let i = 0; i < argCount; i++) {
      var res = this.visit(ctx.varDef()[i])
      args.push(res)
    }
    const nextProg: TreeNode = this.visitProgram(ctx.program())

    return {
      tag: 'FunDef',
      children: {returnType, funcName, args, nextProg}
    }
  }
  visitFuncName(ctx: CJsParser.FuncNameContext): TreeNode {
    return {
      tag: 'FuncName',
      text: ctx.ID()!.text
    }
  }

  visitExpr(ctx: CJsParser.ExprContext): TreeNode {
    if (ctx.INT()) {
      return {
        tag: 'Literal',
        text: ctx.INT()?.text
      };
    }
    else if (ctx.ID()) {
      // ID expression
      return {
        tag: 'Identifier',
        text: ctx.ID()?.text
      };
    }
    else if (ctx.CHAR()) {
      return {
        tag: 'Literal',
        text: ctx.CHAR()?.text
      };
    }
    else if (ctx.funCall()) {
      return this.visitFunCall(ctx.funCall()!)
    }
    else if (ctx.unaryOp()) {
      // Unary expression
      // todo: call visitunary
      const expr = this.visit(ctx.expr(0));
      const operator = this.visit(ctx.unaryOp()!);
      return {
        tag: 'UnaryExpression',
        text: ctx.text,
        operator,
        right: expr
      };
    }
    else if (ctx.expr().length === 1) {
      // Parenthesized expression
      return this.visit(ctx.expr(0));
    }
    else {
      // binary operation
      // Binary expression
      const left = this.visit(ctx.expr(0));
      const right = this.visit(ctx.expr(1));
      const operator = this.visit(ctx.binaryOp()!);
      return {
        tag: 'BinaryExpression',
        text: ctx.text,
        operator: operator,
        left: left,
        right: right
      };
    }
  }

  visitFunCall(ctx: CJsParser.FunCallContext): TreeNode {
    return {
      tag: 'funCall',
      text: ctx.text,
      children: this.visitChildren(ctx)
    }
  }

  visitUnaryOp (ctx: CJsParser.UnaryOpContext) : TreeNode {
    return {
      tag: 'UnaryOp',
      text: ctx.text,
    }
  }

  visitBinaryOp(ctx: CJsParser.BinaryOpContext): TreeNode {
      return {
        tag: 'BinaryOp',
        text: ctx.text,
      }
  }

  visitBlock?: ((ctx: CJsParser.BlockContext) => TreeNode) | undefined

  visitType(ctx: CJsParser.TypeContext): TreeNode {
    return {tag: 'Type', text:ctx.text}
  }

  visit(node: ParseTree): TreeNode {
    return node.accept(this);
  }

  visitErrorNode(node: ErrorNode): TreeNode {
    return node.accept(this)
  }

  visitChildren(node: RuleNode): TreeNode {
    // const childNodes: TreeNode[] = [];
    // for (let i = 0; i < node.childCount; i++) {
    //   const child: ParseTree = node.getChild(i);
    //   const childNode: TreeNode = child.accept(this);
    //   if (childNode) {
    //     childNodes.push(childNode);
    //   }
    // }
    // return { tag: "Children", children: childNodes };
    return node.accept(this)
  }

  visitTerminal(node: TerminalNode): TreeNode {
    console.log(node)
    return { tag: "Terminal", text: node.text };
  }

  getTree(): TreeNode {
    return this.tree;
  }
  
}