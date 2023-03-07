// Generated from src/grammar/C.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ProgramContext } from "./CParser";
import { StatementContext } from "./CParser";
import { DeclarationContext } from "./CParser";
import { ExpressionContext } from "./CParser";
import { AssignmentContext } from "./CParser";
import { EqualityContext } from "./CParser";
import { RelationalContext } from "./CParser";
import { AdditiveContext } from "./CParser";
import { MultiplicativeContext } from "./CParser";
import { UnaryContext } from "./CParser";
import { PostfixContext } from "./CParser";
import { PrimaryContext } from "./CParser";
import { Assignment_operatorContext } from "./CParser";
import { Equality_operatorContext } from "./CParser";
import { Relational_operatorContext } from "./CParser";
import { Additive_operatorContext } from "./CParser";
import { Multiplicative_operatorContext } from "./CParser";
import { Unary_operatorContext } from "./CParser";
import { Postfix_operatorContext } from "./CParser";
import { TypeContext } from "./CParser";
import { Struct_declarationContext } from "./CParser";
import { Struct_member_listContext } from "./CParser";
import { Struct_memberContext } from "./CParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `CParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface CVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `CParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `CParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `CParser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaration?: (ctx: DeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CParser.assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment?: (ctx: AssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `CParser.equality`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEquality?: (ctx: EqualityContext) => Result;

	/**
	 * Visit a parse tree produced by `CParser.relational`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelational?: (ctx: RelationalContext) => Result;

	/**
	 * Visit a parse tree produced by `CParser.additive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditive?: (ctx: AdditiveContext) => Result;

	/**
	 * Visit a parse tree produced by `CParser.multiplicative`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicative?: (ctx: MultiplicativeContext) => Result;

	/**
	 * Visit a parse tree produced by `CParser.unary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnary?: (ctx: UnaryContext) => Result;

	/**
	 * Visit a parse tree produced by `CParser.postfix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostfix?: (ctx: PostfixContext) => Result;

	/**
	 * Visit a parse tree produced by `CParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimary?: (ctx: PrimaryContext) => Result;

	/**
	 * Visit a parse tree produced by `CParser.assignment_operator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment_operator?: (ctx: Assignment_operatorContext) => Result;

	/**
	 * Visit a parse tree produced by `CParser.equality_operator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEquality_operator?: (ctx: Equality_operatorContext) => Result;

	/**
	 * Visit a parse tree produced by `CParser.relational_operator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelational_operator?: (ctx: Relational_operatorContext) => Result;

	/**
	 * Visit a parse tree produced by `CParser.additive_operator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditive_operator?: (ctx: Additive_operatorContext) => Result;

	/**
	 * Visit a parse tree produced by `CParser.multiplicative_operator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicative_operator?: (ctx: Multiplicative_operatorContext) => Result;

	/**
	 * Visit a parse tree produced by `CParser.unary_operator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnary_operator?: (ctx: Unary_operatorContext) => Result;

	/**
	 * Visit a parse tree produced by `CParser.postfix_operator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostfix_operator?: (ctx: Postfix_operatorContext) => Result;

	/**
	 * Visit a parse tree produced by `CParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `CParser.struct_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStruct_declaration?: (ctx: Struct_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CParser.struct_member_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStruct_member_list?: (ctx: Struct_member_listContext) => Result;

	/**
	 * Visit a parse tree produced by `CParser.struct_member`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStruct_member?: (ctx: Struct_memberContext) => Result;
}

