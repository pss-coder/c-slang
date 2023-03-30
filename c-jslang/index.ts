/* tslint:disable:max-classes-per-file */
import { CharStreams, CommonTokenStream } from 'antlr4ts'
import { ErrorNode } from 'antlr4ts/tree/ErrorNode'
import { ParseTree } from 'antlr4ts/tree/ParseTree'
import { RuleNode } from 'antlr4ts/tree/RuleNode'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'
import * as es from 'estree'

import { CJsLexer } from './CJsLexer'
// import {AssgContext, BinaryOpContext, BlockContext, CJsParser, DefContext, ExprContext, FunCallContext, FuncNameContext, FunDefContext, IfStatContext, ProgramContext, ReturnContext, StatContext, TypeContext, UnaryOpContext, VarDefContext, WhileStatContext} from './CJsParser'
import { CJsVisitor } from './CJsVisitor'
import * as CJsParser from './CJsParser'

interface TreeNode {
  type: string;
  text?: string;
  children?: TreeNode[];
  symbol?: string
}


// Current implementations
//FIXME: FIX THE FUNCTIONS AND IMPLEMENT THE REMAINING FUNCTIONS
class TreeBuilder implements CJsVisitor<TreeNode> {
  private tree: TreeNode = { type: "Program", children: [] };
  private currentNode: TreeNode = this.tree;

  visitProgram(ctx: CJsParser.ProgramContext): TreeNode {
    return {
      type: 'Program',
      text: ctx.text,
      children: [this.visitChildren(ctx)]
    }
  }
  visitStat?: ((ctx: CJsParser.StatContext) => TreeNode) | undefined
  visitReturn (ctx: CJsParser.ReturnContext): TreeNode {
    const children = ctx.children?.map(child => this.visit(child))
    return {
      type: 'Return',
      children
    }
  }
  visitVarDef?: ((ctx: CJsParser.VarDefContext) => TreeNode) | undefined
  visitAssg?: ((ctx: CJsParser.AssgContext) => TreeNode) | undefined
  visitWhileStat?: ((ctx: CJsParser.WhileStatContext) => TreeNode) | undefined
  visitIfStat?: ((ctx: CJsParser.IfStatContext) => TreeNode) | undefined
  visitDef(ctx: CJsParser.DefContext): TreeNode {
    const children = ctx.children?.map(child => this.visit(child))
    return {
      type: 'FunDef',
      children
    }
  }
  visitFunDef(ctx: CJsParser.FunDefContext): TreeNode {
    const children = ctx.children?.map(child => this.visit(child))
    return {
      type: 'FunDef',
      children
    }
  }
  visitFuncName(ctx: CJsParser.FuncNameContext): TreeNode {
    return {
      type: 'FuncName',
      text: ctx.ID()!.text
    }
  }

  visitExpr(ctx: CJsParser.ExprContext): TreeNode {
    if (ctx.INT()) {
      return {
        type: 'Literal',
        text: ctx.INT()?.text
      };
    }
    else if (ctx.ID()) {
      // ID expression
      return {
        type: 'Identifier',
        text: ctx.ID()?.text
      };
    }
    else if (ctx.CHAR()) {
      return {
        type: 'Literal',
        text: ctx.CHAR()?.text
      };
    }
    else if (ctx.funCall()) {
      return this.visitFunCall(ctx.funCall()!)
    }
    else if (ctx.unaryOp()) {
      // Unary expression
      const argument = this.visit(ctx.expr(0));
      const operator = ctx.unaryOp()!.text;
      return {
        type: 'UnaryExpression',
        text: operator,
        children: [argument],
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
        type: 'BinaryExpression',
        text: ctx.text,
        children: [operator, left, right]
      };
    }
  }
  visitFunCall(ctx: CJsParser.FunCallContext): TreeNode {
    const children = ctx.children?.map(child => this.visit(child))
    return {
      type: 'funCall',
      text: ctx.text,
      children
    }
  }
  visitUnaryOp?: ((ctx: CJsParser.UnaryOpContext) => TreeNode) | undefined
  visitBinaryOp(ctx: CJsParser.BinaryOpContext): TreeNode {
      return {
        type: 'BinaryOp',
        text: ctx.text,
      }
  }

  visitBlock?: ((ctx: CJsParser.BlockContext) => TreeNode) | undefined

  visitType?: ((ctx: CJsParser.TypeContext) => TreeNode) | undefined

  visit(node: ParseTree): TreeNode {
    return node.accept(this);
  }

  visitErrorNode(node: ErrorNode): TreeNode {
    return node.accept(this)
  }

  visitChildren(node: RuleNode): TreeNode {
    const childNodes: TreeNode[] = [];
    for (let i = 0; i < node.childCount; i++) {
      const child: ParseTree = node.getChild(i);
      const childNode: TreeNode = child.accept(this);
      if (childNode) {
        childNodes.push(childNode);
      }
    }
    return { type: "Children", text: node.constructor.name, children: childNodes };
  }

  visitTerminal(node: TerminalNode): TreeNode {
    return { type: "Terminal", text: node.text };
  }

  getTree(): TreeNode {
    return this.tree;
  }
  
}

const inputStream = CharStreams.fromString("int main(int x) { return 0;}")
const lexer = new CJsLexer(inputStream)
const tokenStream = new CommonTokenStream(lexer)
const parser = new CJsParser.CJsParser(tokenStream)
parser.buildParseTree = true

const treeBuilder = new TreeBuilder();
const syntaxTree = parser.program().accept(treeBuilder);
console.log(JSON.stringify(syntaxTree, null, 2));