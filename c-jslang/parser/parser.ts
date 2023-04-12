import { CharStreams, CommonTokenStream } from "antlr4ts";
import { CJsLexer } from "../lang/CJsLexer";
import { CJsParser } from "../lang/CJsParser";
import { TreeBuilder } from "../ast/TreeBuilder";

export function parser(source: string) {

    // Build Parse Tree
    const inputStream = CharStreams.fromString(source)
    const lexer = new CJsLexer(inputStream)
    const tokenStream = new CommonTokenStream(lexer)
    const parser = new CJsParser(tokenStream)
    parser.buildParseTree = true

    // Using TreeBuilder to build SyntaxTree
    const treeBuilder = new TreeBuilder()
    const syntaxTree = parser.program().accept(treeBuilder)
    return syntaxTree;
}

// const prog = `int main() {return 2+3;}`
// console.log(
//     JSON.stringify(
//         parser(prog),
//          null, 
//          2)
// )