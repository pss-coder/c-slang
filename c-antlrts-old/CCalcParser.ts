// Generated from CCalc.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { CCalcListener } from "./CCalcListener";
import { CCalcVisitor } from "./CCalcVisitor";


export class CCalcParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly ID = 13;
	public static readonly INT = 14;
	public static readonly RULE_program = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_declaration = 2;
	public static readonly RULE_expression = 3;
	public static readonly RULE_assignment = 4;
	public static readonly RULE_assignment_operator = 5;
	public static readonly RULE_binary_operator = 6;
	public static readonly RULE_unary_operator = 7;
	public static readonly RULE_type = 8;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "statement", "declaration", "expression", "assignment", "assignment_operator", 
		"binary_operator", "unary_operator", "type",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'int main() {'", "'return 0; }'", "';'", "','", "'='", "'+'", 
		"'-'", "'*'", "'/'", "'%'", "'!'", "'int'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "ID", 
		"INT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(CCalcParser._LITERAL_NAMES, CCalcParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return CCalcParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "CCalc.g4"; }

	// @Override
	public get ruleNames(): string[] { return CCalcParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return CCalcParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(CCalcParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, CCalcParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 18;
			this.match(CCalcParser.T__0);
			this.state = 20;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 19;
				this.statement();
				}
				}
				this.state = 22;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CCalcParser.T__11) | (1 << CCalcParser.ID) | (1 << CCalcParser.INT))) !== 0));
			this.state = 24;
			this.match(CCalcParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, CCalcParser.RULE_statement);
		try {
			this.state = 30;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 26;
				this.declaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 27;
				this.expression();
				this.state = 28;
				this.match(CCalcParser.T__2);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, CCalcParser.RULE_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 32;
			this.type();
			this.state = 33;
			this.match(CCalcParser.ID);
			this.state = 38;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CCalcParser.T__3) {
				{
				{
				this.state = 34;
				this.match(CCalcParser.T__3);
				this.state = 35;
				this.match(CCalcParser.ID);
				}
				}
				this.state = 40;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 41;
			this.match(CCalcParser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, CCalcParser.RULE_expression);
		try {
			this.state = 54;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CCalcParser.T__11:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 43;
				this.assignment();
				}
				break;
			case CCalcParser.INT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 44;
				this.match(CCalcParser.INT);
				this.state = 45;
				this.binary_operator();
				this.state = 46;
				this.match(CCalcParser.INT);
				this.state = 47;
				this.match(CCalcParser.T__2);
				}
				break;
			case CCalcParser.ID:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 49;
				this.match(CCalcParser.ID);
				this.state = 50;
				this.binary_operator();
				this.state = 51;
				this.match(CCalcParser.ID);
				this.state = 52;
				this.match(CCalcParser.T__2);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignment(): AssignmentContext {
		let _localctx: AssignmentContext = new AssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, CCalcParser.RULE_assignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 56;
			this.type();
			this.state = 57;
			this.match(CCalcParser.ID);
			this.state = 58;
			this.match(CCalcParser.T__4);
			this.state = 59;
			this.match(CCalcParser.INT);
			this.state = 60;
			this.match(CCalcParser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignment_operator(): Assignment_operatorContext {
		let _localctx: Assignment_operatorContext = new Assignment_operatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, CCalcParser.RULE_assignment_operator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 62;
			this.match(CCalcParser.T__4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public binary_operator(): Binary_operatorContext {
		let _localctx: Binary_operatorContext = new Binary_operatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, CCalcParser.RULE_binary_operator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 64;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CCalcParser.T__5) | (1 << CCalcParser.T__6) | (1 << CCalcParser.T__7) | (1 << CCalcParser.T__8) | (1 << CCalcParser.T__9))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unary_operator(): Unary_operatorContext {
		let _localctx: Unary_operatorContext = new Unary_operatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, CCalcParser.RULE_unary_operator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 66;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CCalcParser.T__5) | (1 << CCalcParser.T__6) | (1 << CCalcParser.T__10))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type(): TypeContext {
		let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, CCalcParser.RULE_type);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 68;
			this.match(CCalcParser.T__11);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x10I\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x03\x02\x03\x02\x06\x02\x17\n\x02" +
		"\r\x02\x0E\x02\x18\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x05" +
		"\x03!\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04\'\n\x04\f\x04\x0E" +
		"\x04*\v\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x059\n\x05\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t" +
		"\x03\t\x03\n\x03\n\x03\n\x02\x02\x02\v\x02\x02\x04\x02\x06\x02\b\x02\n" +
		"\x02\f\x02\x0E\x02\x10\x02\x12\x02\x02\x04\x03\x02\b\f\x04\x02\b\t\r\r" +
		"\x02D\x02\x14\x03\x02\x02\x02\x04 \x03\x02\x02\x02\x06\"\x03\x02\x02\x02" +
		"\b8\x03\x02\x02\x02\n:\x03\x02\x02\x02\f@\x03\x02\x02\x02\x0EB\x03\x02" +
		"\x02\x02\x10D\x03\x02\x02\x02\x12F\x03\x02\x02\x02\x14\x16\x07\x03\x02" +
		"\x02\x15\x17\x05\x04\x03\x02\x16\x15\x03\x02\x02\x02\x17\x18\x03\x02\x02" +
		"\x02\x18\x16\x03\x02\x02\x02\x18\x19\x03\x02\x02\x02\x19\x1A\x03\x02\x02" +
		"\x02\x1A\x1B\x07\x04\x02\x02\x1B\x03\x03\x02\x02\x02\x1C!\x05\x06\x04" +
		"\x02\x1D\x1E\x05\b\x05\x02\x1E\x1F\x07\x05\x02\x02\x1F!\x03\x02\x02\x02" +
		" \x1C\x03\x02\x02\x02 \x1D\x03\x02\x02\x02!\x05\x03\x02\x02\x02\"#\x05" +
		"\x12\n\x02#(\x07\x0F\x02\x02$%\x07\x06\x02\x02%\'\x07\x0F\x02\x02&$\x03" +
		"\x02\x02\x02\'*\x03\x02\x02\x02(&\x03\x02\x02\x02()\x03\x02\x02\x02)+" +
		"\x03\x02\x02\x02*(\x03\x02\x02\x02+,\x07\x05\x02\x02,\x07\x03\x02\x02" +
		"\x02-9\x05\n\x06\x02./\x07\x10\x02\x02/0\x05\x0E\b\x0201\x07\x10\x02\x02" +
		"12\x07\x05\x02\x0229\x03\x02\x02\x0234\x07\x0F\x02\x0245\x05\x0E\b\x02" +
		"56\x07\x0F\x02\x0267\x07\x05\x02\x0279\x03\x02\x02\x028-\x03\x02\x02\x02" +
		"8.\x03\x02\x02\x0283\x03\x02\x02\x029\t\x03\x02\x02\x02:;\x05\x12\n\x02" +
		";<\x07\x0F\x02\x02<=\x07\x07\x02\x02=>\x07\x10\x02\x02>?\x07\x05\x02\x02" +
		"?\v\x03\x02\x02\x02@A\x07\x07\x02\x02A\r\x03\x02\x02\x02BC\t\x02\x02\x02" +
		"C\x0F\x03\x02\x02\x02DE\t\x03\x02\x02E\x11\x03\x02\x02\x02FG\x07\x0E\x02" +
		"\x02G\x13\x03\x02\x02\x02\x06\x18 (8";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CCalcParser.__ATN) {
			CCalcParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CCalcParser._serializedATN));
		}

		return CCalcParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CCalcParser.RULE_program; }
	// @Override
	public enterRule(listener: CCalcListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: CCalcListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CCalcVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public declaration(): DeclarationContext | undefined {
		return this.tryGetRuleContext(0, DeclarationContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CCalcParser.RULE_statement; }
	// @Override
	public enterRule(listener: CCalcListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CCalcListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CCalcVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationContext extends ParserRuleContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CCalcParser.ID);
		} else {
			return this.getToken(CCalcParser.ID, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CCalcParser.RULE_declaration; }
	// @Override
	public enterRule(listener: CCalcListener): void {
		if (listener.enterDeclaration) {
			listener.enterDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CCalcListener): void {
		if (listener.exitDeclaration) {
			listener.exitDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CCalcVisitor<Result>): Result {
		if (visitor.visitDeclaration) {
			return visitor.visitDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public assignment(): AssignmentContext | undefined {
		return this.tryGetRuleContext(0, AssignmentContext);
	}
	public INT(): TerminalNode[];
	public INT(i: number): TerminalNode;
	public INT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CCalcParser.INT);
		} else {
			return this.getToken(CCalcParser.INT, i);
		}
	}
	public binary_operator(): Binary_operatorContext | undefined {
		return this.tryGetRuleContext(0, Binary_operatorContext);
	}
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CCalcParser.ID);
		} else {
			return this.getToken(CCalcParser.ID, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CCalcParser.RULE_expression; }
	// @Override
	public enterRule(listener: CCalcListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CCalcListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CCalcVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentContext extends ParserRuleContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public ID(): TerminalNode { return this.getToken(CCalcParser.ID, 0); }
	public INT(): TerminalNode { return this.getToken(CCalcParser.INT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CCalcParser.RULE_assignment; }
	// @Override
	public enterRule(listener: CCalcListener): void {
		if (listener.enterAssignment) {
			listener.enterAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: CCalcListener): void {
		if (listener.exitAssignment) {
			listener.exitAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CCalcVisitor<Result>): Result {
		if (visitor.visitAssignment) {
			return visitor.visitAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Assignment_operatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CCalcParser.RULE_assignment_operator; }
	// @Override
	public enterRule(listener: CCalcListener): void {
		if (listener.enterAssignment_operator) {
			listener.enterAssignment_operator(this);
		}
	}
	// @Override
	public exitRule(listener: CCalcListener): void {
		if (listener.exitAssignment_operator) {
			listener.exitAssignment_operator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CCalcVisitor<Result>): Result {
		if (visitor.visitAssignment_operator) {
			return visitor.visitAssignment_operator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Binary_operatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CCalcParser.RULE_binary_operator; }
	// @Override
	public enterRule(listener: CCalcListener): void {
		if (listener.enterBinary_operator) {
			listener.enterBinary_operator(this);
		}
	}
	// @Override
	public exitRule(listener: CCalcListener): void {
		if (listener.exitBinary_operator) {
			listener.exitBinary_operator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CCalcVisitor<Result>): Result {
		if (visitor.visitBinary_operator) {
			return visitor.visitBinary_operator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Unary_operatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CCalcParser.RULE_unary_operator; }
	// @Override
	public enterRule(listener: CCalcListener): void {
		if (listener.enterUnary_operator) {
			listener.enterUnary_operator(this);
		}
	}
	// @Override
	public exitRule(listener: CCalcListener): void {
		if (listener.exitUnary_operator) {
			listener.exitUnary_operator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CCalcVisitor<Result>): Result {
		if (visitor.visitUnary_operator) {
			return visitor.visitUnary_operator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CCalcParser.RULE_type; }
	// @Override
	public enterRule(listener: CCalcListener): void {
		if (listener.enterType) {
			listener.enterType(this);
		}
	}
	// @Override
	public exitRule(listener: CCalcListener): void {
		if (listener.exitType) {
			listener.exitType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CCalcVisitor<Result>): Result {
		if (visitor.visitType) {
			return visitor.visitType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


