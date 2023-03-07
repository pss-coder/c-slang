// Generated from src/grammar/C.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `CParser`.
 */
export interface CListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `CParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `CParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `CParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `CParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `CParser.declaration`.
	 * @param ctx the parse tree
	 */
	enterDeclaration?: (ctx: DeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `CParser.declaration`.
	 * @param ctx the parse tree
	 */
	exitDeclaration?: (ctx: DeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `CParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CParser.assignment`.
	 * @param ctx the parse tree
	 */
	enterAssignment?: (ctx: AssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `CParser.assignment`.
	 * @param ctx the parse tree
	 */
	exitAssignment?: (ctx: AssignmentContext) => void;

	/**
	 * Enter a parse tree produced by `CParser.equality`.
	 * @param ctx the parse tree
	 */
	enterEquality?: (ctx: EqualityContext) => void;
	/**
	 * Exit a parse tree produced by `CParser.equality`.
	 * @param ctx the parse tree
	 */
	exitEquality?: (ctx: EqualityContext) => void;

	/**
	 * Enter a parse tree produced by `CParser.relational`.
	 * @param ctx the parse tree
	 */
	enterRelational?: (ctx: RelationalContext) => void;
	/**
	 * Exit a parse tree produced by `CParser.relational`.
	 * @param ctx the parse tree
	 */
	exitRelational?: (ctx: RelationalContext) => void;

	/**
	 * Enter a parse tree produced by `CParser.additive`.
	 * @param ctx the parse tree
	 */
	enterAdditive?: (ctx: AdditiveContext) => void;
	/**
	 * Exit a parse tree produced by `CParser.additive`.
	 * @param ctx the parse tree
	 */
	exitAdditive?: (ctx: AdditiveContext) => void;

	/**
	 * Enter a parse tree produced by `CParser.multiplicative`.
	 * @param ctx the parse tree
	 */
	enterMultiplicative?: (ctx: MultiplicativeContext) => void;
	/**
	 * Exit a parse tree produced by `CParser.multiplicative`.
	 * @param ctx the parse tree
	 */
	exitMultiplicative?: (ctx: MultiplicativeContext) => void;

	/**
	 * Enter a parse tree produced by `CParser.unary`.
	 * @param ctx the parse tree
	 */
	enterUnary?: (ctx: UnaryContext) => void;
	/**
	 * Exit a parse tree produced by `CParser.unary`.
	 * @param ctx the parse tree
	 */
	exitUnary?: (ctx: UnaryContext) => void;

	/**
	 * Enter a parse tree produced by `CParser.postfix`.
	 * @param ctx the parse tree
	 */
	enterPostfix?: (ctx: PostfixContext) => void;
	/**
	 * Exit a parse tree produced by `CParser.postfix`.
	 * @param ctx the parse tree
	 */
	exitPostfix?: (ctx: PostfixContext) => void;

	/**
	 * Enter a parse tree produced by `CParser.primary`.
	 * @param ctx the parse tree
	 */
	enterPrimary?: (ctx: PrimaryContext) => void;
	/**
	 * Exit a parse tree produced by `CParser.primary`.
	 * @param ctx the parse tree
	 */
	exitPrimary?: (ctx: PrimaryContext) => void;

	/**
	 * Enter a parse tree produced by `CParser.assignment_operator`.
	 * @param ctx the parse tree
	 */
	enterAssignment_operator?: (ctx: Assignment_operatorContext) => void;
	/**
	 * Exit a parse tree produced by `CParser.assignment_operator`.
	 * @param ctx the parse tree
	 */
	exitAssignment_operator?: (ctx: Assignment_operatorContext) => void;

	/**
	 * Enter a parse tree produced by `CParser.equality_operator`.
	 * @param ctx the parse tree
	 */
	enterEquality_operator?: (ctx: Equality_operatorContext) => void;
	/**
	 * Exit a parse tree produced by `CParser.equality_operator`.
	 * @param ctx the parse tree
	 */
	exitEquality_operator?: (ctx: Equality_operatorContext) => void;

	/**
	 * Enter a parse tree produced by `CParser.relational_operator`.
	 * @param ctx the parse tree
	 */
	enterRelational_operator?: (ctx: Relational_operatorContext) => void;
	/**
	 * Exit a parse tree produced by `CParser.relational_operator`.
	 * @param ctx the parse tree
	 */
	exitRelational_operator?: (ctx: Relational_operatorContext) => void;

	/**
	 * Enter a parse tree produced by `CParser.additive_operator`.
	 * @param ctx the parse tree
	 */
	enterAdditive_operator?: (ctx: Additive_operatorContext) => void;
	/**
	 * Exit a parse tree produced by `CParser.additive_operator`.
	 * @param ctx the parse tree
	 */
	exitAdditive_operator?: (ctx: Additive_operatorContext) => void;

	/**
	 * Enter a parse tree produced by `CParser.multiplicative_operator`.
	 * @param ctx the parse tree
	 */
	enterMultiplicative_operator?: (ctx: Multiplicative_operatorContext) => void;
	/**
	 * Exit a parse tree produced by `CParser.multiplicative_operator`.
	 * @param ctx the parse tree
	 */
	exitMultiplicative_operator?: (ctx: Multiplicative_operatorContext) => void;

	/**
	 * Enter a parse tree produced by `CParser.unary_operator`.
	 * @param ctx the parse tree
	 */
	enterUnary_operator?: (ctx: Unary_operatorContext) => void;
	/**
	 * Exit a parse tree produced by `CParser.unary_operator`.
	 * @param ctx the parse tree
	 */
	exitUnary_operator?: (ctx: Unary_operatorContext) => void;

	/**
	 * Enter a parse tree produced by `CParser.postfix_operator`.
	 * @param ctx the parse tree
	 */
	enterPostfix_operator?: (ctx: Postfix_operatorContext) => void;
	/**
	 * Exit a parse tree produced by `CParser.postfix_operator`.
	 * @param ctx the parse tree
	 */
	exitPostfix_operator?: (ctx: Postfix_operatorContext) => void;

	/**
	 * Enter a parse tree produced by `CParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `CParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;

	/**
	 * Enter a parse tree produced by `CParser.struct_declaration`.
	 * @param ctx the parse tree
	 */
	enterStruct_declaration?: (ctx: Struct_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `CParser.struct_declaration`.
	 * @param ctx the parse tree
	 */
	exitStruct_declaration?: (ctx: Struct_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `CParser.struct_member_list`.
	 * @param ctx the parse tree
	 */
	enterStruct_member_list?: (ctx: Struct_member_listContext) => void;
	/**
	 * Exit a parse tree produced by `CParser.struct_member_list`.
	 * @param ctx the parse tree
	 */
	exitStruct_member_list?: (ctx: Struct_member_listContext) => void;

	/**
	 * Enter a parse tree produced by `CParser.struct_member`.
	 * @param ctx the parse tree
	 */
	enterStruct_member?: (ctx: Struct_memberContext) => void;
	/**
	 * Exit a parse tree produced by `CParser.struct_member`.
	 * @param ctx the parse tree
	 */
	exitStruct_member?: (ctx: Struct_memberContext) => void;
}

