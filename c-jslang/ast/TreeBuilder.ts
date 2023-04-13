import { ParseTree } from 'antlr4ts/tree/ParseTree'
import { ErrorNode } from 'antlr4ts/tree/ErrorNode'
import { RuleNode } from 'antlr4ts/tree/RuleNode'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'

import * as CJsParser from '../lang/CJsParser'
import { CJsVisitor } from '../lang/CJsVisitor'

import {TreeNode} from './TreeNode'



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
    let children = {}

    //assingment
    if (ctx.assg()) {children = this.visitAssg(ctx.assg()!)}
    //expression
    if (ctx.expr()){ children = this.visitExpr(ctx.expr()!)}

    // if
    if (ctx.ifStat()) { children = this.visitIfStat(ctx.ifStat()!)}

    // while
    if (ctx.whileStat()) { children = this.visitWhileStat(ctx.whileStat()!)}

    // block
    if(ctx.block()) { children = this.visitBlock(ctx.block()!)}

    // definitions
    if (ctx.def()){ children = this.visitDef(ctx.def()!)}

    // return
    if (ctx.return()) { children = this.visitReturn(ctx.return()!)}

    // //COLON
    // else {
    //   stat.children = this.visitTerminal(ctx.COLON()!)
    // }

    return{tag: 'Statement', children}
    
  }

  visitReturn (ctx: CJsParser.ReturnContext): TreeNode {
    const expr = this.visitExpr(ctx.expr()!)
    return { tag: 'Return', children: expr}
  }

  visitVarDef(ctx: CJsParser.VarDefContext): TreeNode {
    if (ctx.structInit()) {
      return {tag: 'VarDef', children: this.visitStructInit(ctx.structInit()!)}
    }

    const type = this.visitType(ctx.type()!);
    const assignment = ctx.assg() ? this.visitAssg(ctx.assg()!) : undefined;

    return {
      tag: 'VarDef',
      text: ctx.ID()?.text,
      children: {type, assignment}
    }
  }


  visitAssg(ctx: CJsParser.AssgContext): TreeNode {
    //TODO
    const expr = this.visitExpr(ctx.expr())
    return {
      tag:'Assignment',
      text: ctx.ID().text,
      isPointerPresent: ctx.MUL() ? true : false,
      children: expr
    }
  }


  visitWhileStat (ctx: CJsParser.WhileStatContext): TreeNode {
    const predicate = this.visitExpr(ctx.expr())
    const body = this.visitBlock(ctx.block())
    return {
      tag: 'WhileStat',
      predicate,
      body
    }
  }

  visitIfStat (ctx: CJsParser.IfStatContext) : TreeNode {
    const condition = this.visit(ctx.expr())
    const consequent = this.visit(ctx.block()[0])
    const alternative = this.visit(ctx.block()[1])
    return {
      tag: 'IfStat',
      condition,
      consequent,
      alternative
    }
  }

  visitDef(ctx: CJsParser.DefContext): TreeNode {
    const def = {tag: 'Def', children: {}}

    if(ctx.funDef()) { def.children = this.visitFunDef(ctx.funDef()!)}
    if (ctx.varDef()) { def.children = this.visitVarDef(ctx.varDef()!)} 
    if (ctx.structDef()) {def.children = this.visitStructDef(ctx.structDef()!)}
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
      children: {funcName, returnType, args, nextProg}
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
    else if (ctx.STRING()) {return { tag: 'Literal',text: ctx.STRING()?.text};
    }
    else if (ctx.funCall()) {
      return this.visitFunCall(ctx.funCall()!)
    }
    else if (ctx.unaryOp()) {
      // Unary expression
      // todo: call visitunary
      const expr = this.visitExpr(ctx.expr(0));
      const operator = this.visitUnaryOp(ctx.unaryOp()!);
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
      tag: 'FunCall',
      funcName: this.visitFuncName(ctx.funcName()),
      args: ctx.expr().map(item => this.visitExpr(item))
    }
  }

  visitUnaryOp (ctx: CJsParser.UnaryOpContext) : TreeNode {
    let isAddressRefPresent = false;
    if (ctx.text == '&')
      isAddressRefPresent = true;
    return {
      tag: 'UnaryOp',
      text: ctx.text,
      isAddressRefPresent
    }
  }

  visitBinaryOp(ctx: CJsParser.BinaryOpContext): TreeNode {
      return {
        tag: 'BinaryOp',
        text: ctx.text,
      }
  }

  visitStructMember(ctx: CJsParser.StructMemberContext): TreeNode {
    return {
      tag: 'structMember',
      text: ctx.ID().text,
      type: this.visitType(ctx.type())
    }
  }


  visitStructDef (ctx: CJsParser.StructDefContext) : TreeNode {
    const members = ctx.structMember().map(item => this.visitStructMember(item))

    return {
      tag: 'StructDef',
      text: ctx.ID().text,
      members,
    }
  }

  visitStructInit (ctx: CJsParser.StructInitContext): TreeNode {
    return {
      tag: 'StructInit',
      structName: ctx.ID(0).text,
      text: ctx.ID(1).text,
    }
  }

  visitBlock (ctx: CJsParser.BlockContext): TreeNode {
    return {
      tag: 'Block',
      block: this.visit(ctx.program()!)
    }
  }

  visitType(ctx: CJsParser.TypeContext): TreeNode {
    let isPointerPresent = false;
    if(ctx.text.includes('*'))
      isPointerPresent = true        
    return {tag: 'Type', text:ctx.text, isPointerPresent}
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