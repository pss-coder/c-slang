/* tslint:disable:max-classes-per-file */
import { CharStreams, CommonTokenStream } from 'antlr4ts'
import { ErrorNode } from 'antlr4ts/tree/ErrorNode'
import { ParseTree } from 'antlr4ts/tree/ParseTree'
import { RuleNode } from 'antlr4ts/tree/RuleNode'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'
import * as es from 'estree'

import { CCalcLexer } from './CCalcLexer'
import * as cparser from './CCalcParser'
import { CCalcVisitor } from './CCalcVisitor'

function contextToLocation(ctx: cparser.ExpressionContext): es.SourceLocation {
  return {
    start: {
      line: ctx.start.line,
      column: ctx.start.charPositionInLine
    },
    end: {
      line: ctx.stop ? ctx.stop.line : ctx.start.line,
      column: ctx.stop ? ctx.stop.charPositionInLine : ctx.start.charPositionInLine
    }
  }
}

// TODO: define the functions for parsing
class CGenerator implements CCalcVisitor<es.Expression> {
  visitProgram?: ((ctx: cparser.ProgramContext) => es.Expression) | undefined
  visitStatement?: ((ctx: cparser.StatementContext) => es.Expression) | undefined
  visitDeclaration?: ((ctx: cparser.DeclarationContext) => es.Expression) | undefined
  visitExpression?: ((ctx: cparser.ExpressionContext) => es.Expression) | undefined
  visitAssignment?: ((ctx: cparser.AssignmentContext) => es.Expression) | undefined
  visitAssignment_operator?: ((ctx: cparser.Assignment_operatorContext) => es.Expression) | undefined
  visitBinary_operator?: ((ctx: cparser.Binary_operatorContext) => es.Expression) | undefined
  visitUnary_operator?: ((ctx: cparser.Unary_operatorContext) => es.Expression) | undefined
  visitType?: ((ctx: cparser.TypeContext) => es.Expression) | undefined
  visit(tree: ParseTree): es.Expression {
    throw new Error('Method not implemented.')
  }
  visitChildren(node: RuleNode): es.Expression {
    throw new Error('Method not implemented.')
  }
  visitTerminal(node: TerminalNode): es.Expression {
    throw new Error('Method not implemented.')
  }
  visitErrorNode(node: ErrorNode): es.Expression {
    throw new Error('Method not implemented.')
  }
  
}

// generate C-parser 
function convertExpression(expression: cparser.ExpressionContext): es.Expression {
  const generator = new CGenerator()
  return expression.accept(generator)
}

// display parser in Source Format?? I think
function convertSource(expression: cparser.ExpressionContext): es.Program {
  return {
    type: 'Program',
    sourceType: 'script',
    body: [
      {
        type: 'ExpressionStatement',
        expression: convertExpression(expression)
      }
    ]
  }
}

const inputStream = CharStreams.fromString("int main() {int x = 2+3; return 0;}")
const lexer = new CCalcLexer(inputStream)
const tokenStream = new CommonTokenStream(lexer)
const parser = new cparser.CalcParser(tokenStream)
parser.buildParseTree = true
const tree = parser.expression()
const program = convertSource(tree);
console.log(program);
console.log(program.body);

// export function parse(source: string, context: Context) {
//   let program: es.Program | undefined
``
//   if (context.variant === 'calc') {
//     const inputStream = CharStreams.fromString(source)
//     const lexer = new CalcLexer(inputStream)
//     const tokenStream = new CommonTokenStream(lexer)
//     const parser = new CalcParser(tokenStream)
//     parser.buildParseTree = true
//     try {
//       const tree = parser.expression()
//       program = convertSource(tree)
//     } catch (error) {
//       if (error instanceof FatalSyntaxError) {
//         context.errors.push(error)
//       } else {
//         throw error
//       }
//     }
//     const hasErrors = context.errors.find(m => m.severity === ErrorSeverity.ERROR)
//     if (program && !hasErrors) {
//       return program
//     } else {
//       return undefined
//     }
//   } else {
//     return undefined
//   }
// }
