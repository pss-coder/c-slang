// Generated from ./lang/CJs.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ProgramContext } from "./CJsParser";
import { StatContext } from "./CJsParser";
import { ReturnContext } from "./CJsParser";
import { VarDefContext } from "./CJsParser";
import { StructInitContext } from "./CJsParser";
import { AssgContext } from "./CJsParser";
import { WhileStatContext } from "./CJsParser";
import { IfStatContext } from "./CJsParser";
import { DefContext } from "./CJsParser";
import { FunDefContext } from "./CJsParser";
import { FuncNameContext } from "./CJsParser";
import { ExprContext } from "./CJsParser";
import { FunCallContext } from "./CJsParser";
import { UnaryOpContext } from "./CJsParser";
import { BinaryOpContext } from "./CJsParser";
import { BlockContext } from "./CJsParser";
import { TypeContext } from "./CJsParser";
import { StructMemberContext } from "./CJsParser";
import { StructDefContext } from "./CJsParser";
import { ArrDefContext } from "./CJsParser";
import { ArrAccessContext } from "./CJsParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `CJsParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface CJsVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `CJsParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `CJsParser.stat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStat?: (ctx: StatContext) => Result;

	/**
	 * Visit a parse tree produced by `CJsParser.return`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturn?: (ctx: ReturnContext) => Result;

	/**
	 * Visit a parse tree produced by `CJsParser.varDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarDef?: (ctx: VarDefContext) => Result;

	/**
	 * Visit a parse tree produced by `CJsParser.structInit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructInit?: (ctx: StructInitContext) => Result;

	/**
	 * Visit a parse tree produced by `CJsParser.assg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssg?: (ctx: AssgContext) => Result;

	/**
	 * Visit a parse tree produced by `CJsParser.whileStat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileStat?: (ctx: WhileStatContext) => Result;

	/**
	 * Visit a parse tree produced by `CJsParser.ifStat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStat?: (ctx: IfStatContext) => Result;

	/**
	 * Visit a parse tree produced by `CJsParser.def`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDef?: (ctx: DefContext) => Result;

	/**
	 * Visit a parse tree produced by `CJsParser.funDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunDef?: (ctx: FunDefContext) => Result;

	/**
	 * Visit a parse tree produced by `CJsParser.funcName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFuncName?: (ctx: FuncNameContext) => Result;

	/**
	 * Visit a parse tree produced by `CJsParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr?: (ctx: ExprContext) => Result;

	/**
	 * Visit a parse tree produced by `CJsParser.funCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunCall?: (ctx: FunCallContext) => Result;

	/**
	 * Visit a parse tree produced by `CJsParser.unaryOp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryOp?: (ctx: UnaryOpContext) => Result;

	/**
	 * Visit a parse tree produced by `CJsParser.binaryOp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinaryOp?: (ctx: BinaryOpContext) => Result;

	/**
	 * Visit a parse tree produced by `CJsParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `CJsParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `CJsParser.structMember`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructMember?: (ctx: StructMemberContext) => Result;

	/**
	 * Visit a parse tree produced by `CJsParser.structDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructDef?: (ctx: StructDefContext) => Result;

	/**
	 * Visit a parse tree produced by `CJsParser.arrDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrDef?: (ctx: ArrDefContext) => Result;

	/**
	 * Visit a parse tree produced by `CJsParser.arrAccess`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrAccess?: (ctx: ArrAccessContext) => Result;
}

