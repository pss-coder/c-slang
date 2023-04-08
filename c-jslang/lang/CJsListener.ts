// Generated from ./lang/CJs.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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


/**
 * This interface defines a complete listener for a parse tree produced by
 * `CJsParser`.
 */
export interface CJsListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `CJsParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `CJsParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `CJsParser.stat`.
	 * @param ctx the parse tree
	 */
	enterStat?: (ctx: StatContext) => void;
	/**
	 * Exit a parse tree produced by `CJsParser.stat`.
	 * @param ctx the parse tree
	 */
	exitStat?: (ctx: StatContext) => void;

	/**
	 * Enter a parse tree produced by `CJsParser.return`.
	 * @param ctx the parse tree
	 */
	enterReturn?: (ctx: ReturnContext) => void;
	/**
	 * Exit a parse tree produced by `CJsParser.return`.
	 * @param ctx the parse tree
	 */
	exitReturn?: (ctx: ReturnContext) => void;

	/**
	 * Enter a parse tree produced by `CJsParser.varDef`.
	 * @param ctx the parse tree
	 */
	enterVarDef?: (ctx: VarDefContext) => void;
	/**
	 * Exit a parse tree produced by `CJsParser.varDef`.
	 * @param ctx the parse tree
	 */
	exitVarDef?: (ctx: VarDefContext) => void;

	/**
	 * Enter a parse tree produced by `CJsParser.structInit`.
	 * @param ctx the parse tree
	 */
	enterStructInit?: (ctx: StructInitContext) => void;
	/**
	 * Exit a parse tree produced by `CJsParser.structInit`.
	 * @param ctx the parse tree
	 */
	exitStructInit?: (ctx: StructInitContext) => void;

	/**
	 * Enter a parse tree produced by `CJsParser.assg`.
	 * @param ctx the parse tree
	 */
	enterAssg?: (ctx: AssgContext) => void;
	/**
	 * Exit a parse tree produced by `CJsParser.assg`.
	 * @param ctx the parse tree
	 */
	exitAssg?: (ctx: AssgContext) => void;

	/**
	 * Enter a parse tree produced by `CJsParser.whileStat`.
	 * @param ctx the parse tree
	 */
	enterWhileStat?: (ctx: WhileStatContext) => void;
	/**
	 * Exit a parse tree produced by `CJsParser.whileStat`.
	 * @param ctx the parse tree
	 */
	exitWhileStat?: (ctx: WhileStatContext) => void;

	/**
	 * Enter a parse tree produced by `CJsParser.ifStat`.
	 * @param ctx the parse tree
	 */
	enterIfStat?: (ctx: IfStatContext) => void;
	/**
	 * Exit a parse tree produced by `CJsParser.ifStat`.
	 * @param ctx the parse tree
	 */
	exitIfStat?: (ctx: IfStatContext) => void;

	/**
	 * Enter a parse tree produced by `CJsParser.def`.
	 * @param ctx the parse tree
	 */
	enterDef?: (ctx: DefContext) => void;
	/**
	 * Exit a parse tree produced by `CJsParser.def`.
	 * @param ctx the parse tree
	 */
	exitDef?: (ctx: DefContext) => void;

	/**
	 * Enter a parse tree produced by `CJsParser.funDef`.
	 * @param ctx the parse tree
	 */
	enterFunDef?: (ctx: FunDefContext) => void;
	/**
	 * Exit a parse tree produced by `CJsParser.funDef`.
	 * @param ctx the parse tree
	 */
	exitFunDef?: (ctx: FunDefContext) => void;

	/**
	 * Enter a parse tree produced by `CJsParser.funcName`.
	 * @param ctx the parse tree
	 */
	enterFuncName?: (ctx: FuncNameContext) => void;
	/**
	 * Exit a parse tree produced by `CJsParser.funcName`.
	 * @param ctx the parse tree
	 */
	exitFuncName?: (ctx: FuncNameContext) => void;

	/**
	 * Enter a parse tree produced by `CJsParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `CJsParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;

	/**
	 * Enter a parse tree produced by `CJsParser.funCall`.
	 * @param ctx the parse tree
	 */
	enterFunCall?: (ctx: FunCallContext) => void;
	/**
	 * Exit a parse tree produced by `CJsParser.funCall`.
	 * @param ctx the parse tree
	 */
	exitFunCall?: (ctx: FunCallContext) => void;

	/**
	 * Enter a parse tree produced by `CJsParser.unaryOp`.
	 * @param ctx the parse tree
	 */
	enterUnaryOp?: (ctx: UnaryOpContext) => void;
	/**
	 * Exit a parse tree produced by `CJsParser.unaryOp`.
	 * @param ctx the parse tree
	 */
	exitUnaryOp?: (ctx: UnaryOpContext) => void;

	/**
	 * Enter a parse tree produced by `CJsParser.binaryOp`.
	 * @param ctx the parse tree
	 */
	enterBinaryOp?: (ctx: BinaryOpContext) => void;
	/**
	 * Exit a parse tree produced by `CJsParser.binaryOp`.
	 * @param ctx the parse tree
	 */
	exitBinaryOp?: (ctx: BinaryOpContext) => void;

	/**
	 * Enter a parse tree produced by `CJsParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `CJsParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `CJsParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `CJsParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;

	/**
	 * Enter a parse tree produced by `CJsParser.structMember`.
	 * @param ctx the parse tree
	 */
	enterStructMember?: (ctx: StructMemberContext) => void;
	/**
	 * Exit a parse tree produced by `CJsParser.structMember`.
	 * @param ctx the parse tree
	 */
	exitStructMember?: (ctx: StructMemberContext) => void;

	/**
	 * Enter a parse tree produced by `CJsParser.structDef`.
	 * @param ctx the parse tree
	 */
	enterStructDef?: (ctx: StructDefContext) => void;
	/**
	 * Exit a parse tree produced by `CJsParser.structDef`.
	 * @param ctx the parse tree
	 */
	exitStructDef?: (ctx: StructDefContext) => void;
}

