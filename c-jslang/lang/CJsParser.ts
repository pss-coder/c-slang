// Generated from CJs.g4 by ANTLR 4.9.0-SNAPSHOT


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

import { CJsListener } from "./CJsListener";
import { CJsVisitor } from "./CJsVisitor";


export class CJsParser extends Parser {
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
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly CHAR = 19;
	public static readonly STRING = 20;
	public static readonly WS = 21;
	public static readonly ADD = 22;
	public static readonly SUB = 23;
	public static readonly MUL = 24;
	public static readonly DIV = 25;
	public static readonly MOD = 26;
	public static readonly COMMA = 27;
	public static readonly PRINT = 28;
	public static readonly COLON = 29;
	public static readonly EQ = 30;
	public static readonly AND = 31;
	public static readonly OR = 32;
	public static readonly NOT = 33;
	public static readonly LPAREN = 34;
	public static readonly RPAREN = 35;
	public static readonly LCURLY = 36;
	public static readonly RCURLY = 37;
	public static readonly INT = 38;
	public static readonly ID = 39;
	public static readonly RULE_program = 0;
	public static readonly RULE_stat = 1;
	public static readonly RULE_return = 2;
	public static readonly RULE_varDef = 3;
	public static readonly RULE_assg = 4;
	public static readonly RULE_whileStat = 5;
	public static readonly RULE_ifStat = 6;
	public static readonly RULE_def = 7;
	public static readonly RULE_funDef = 8;
	public static readonly RULE_funcName = 9;
	public static readonly RULE_expr = 10;
	public static readonly RULE_funCall = 11;
	public static readonly RULE_unaryOp = 12;
	public static readonly RULE_binaryOp = 13;
	public static readonly RULE_block = 14;
	public static readonly RULE_type = 15;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "stat", "return", "varDef", "assg", "whileStat", "ifStat", 
		"def", "funDef", "funcName", "expr", "funCall", "unaryOp", "binaryOp", 
		"block", "type",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'return'", "'while'", "'if'", "'else'", "'++'", "'--'", "'&'", 
		"'=='", "'<'", "'>'", "'>='", "'<='", "'void'", "'int'", "'char'", "'void*'", 
		"'int*'", "'char*'", undefined, undefined, undefined, "'+'", "'-'", "'*'", 
		"'/'", "'%'", "','", "'print'", "';'", "'='", "'&&'", "'||'", "'!'", "'('", 
		"')'", "'{'", "'}'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "CHAR", "STRING", 
		"WS", "ADD", "SUB", "MUL", "DIV", "MOD", "COMMA", "PRINT", "COLON", "EQ", 
		"AND", "OR", "NOT", "LPAREN", "RPAREN", "LCURLY", "RCURLY", "INT", "ID",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(CJsParser._LITERAL_NAMES, CJsParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return CJsParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "CJs.g4"; }

	// @Override
	public get ruleNames(): string[] { return CJsParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return CJsParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(CJsParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, CJsParser.RULE_program);
		try {
			this.state = 36;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 32;
				this.stat();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 33;
				this.stat();
				this.state = 34;
				this.program();
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
	public stat(): StatContext {
		let _localctx: StatContext = new StatContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, CJsParser.RULE_stat);
		try {
			this.state = 51;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 38;
				this.assg();
				this.state = 39;
				this.match(CJsParser.COLON);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 41;
				this.expr(0);
				this.state = 42;
				this.match(CJsParser.COLON);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 44;
				this.ifStat();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 45;
				this.def();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 46;
				this.whileStat();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 47;
				this.block();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 48;
				this.return();
				this.state = 49;
				this.match(CJsParser.COLON);
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
	public return(): ReturnContext {
		let _localctx: ReturnContext = new ReturnContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, CJsParser.RULE_return);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 53;
			this.match(CJsParser.T__0);
			this.state = 55;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CJsParser.T__4) | (1 << CJsParser.T__5) | (1 << CJsParser.T__6) | (1 << CJsParser.CHAR) | (1 << CJsParser.ADD) | (1 << CJsParser.SUB) | (1 << CJsParser.MUL))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (CJsParser.NOT - 33)) | (1 << (CJsParser.LPAREN - 33)) | (1 << (CJsParser.INT - 33)) | (1 << (CJsParser.ID - 33)))) !== 0)) {
				{
				this.state = 54;
				this.expr(0);
				}
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
	public varDef(): VarDefContext {
		let _localctx: VarDefContext = new VarDefContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, CJsParser.RULE_varDef);
		try {
			this.state = 63;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 57;
				this.type();
				this.state = 58;
				this.match(CJsParser.ID);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 60;
				this.type();
				this.state = 61;
				this.assg();
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
	public assg(): AssgContext {
		let _localctx: AssgContext = new AssgContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, CJsParser.RULE_assg);
		try {
			this.state = 72;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CJsParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 65;
				this.match(CJsParser.ID);
				this.state = 66;
				this.match(CJsParser.EQ);
				this.state = 67;
				this.expr(0);
				}
				break;
			case CJsParser.MUL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 68;
				this.match(CJsParser.MUL);
				this.state = 69;
				this.match(CJsParser.ID);
				this.state = 70;
				this.match(CJsParser.EQ);
				this.state = 71;
				this.expr(0);
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
	public whileStat(): WhileStatContext {
		let _localctx: WhileStatContext = new WhileStatContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, CJsParser.RULE_whileStat);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 74;
			this.match(CJsParser.T__1);
			this.state = 75;
			this.match(CJsParser.LPAREN);
			this.state = 76;
			this.expr(0);
			this.state = 77;
			this.match(CJsParser.RPAREN);
			this.state = 78;
			this.block();
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
	public ifStat(): IfStatContext {
		let _localctx: IfStatContext = new IfStatContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, CJsParser.RULE_ifStat);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 80;
			this.match(CJsParser.T__2);
			this.state = 81;
			this.match(CJsParser.LPAREN);
			this.state = 82;
			this.expr(0);
			this.state = 83;
			this.match(CJsParser.RPAREN);
			this.state = 84;
			this.block();
			this.state = 85;
			this.match(CJsParser.T__3);
			this.state = 86;
			this.block();
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
	public def(): DefContext {
		let _localctx: DefContext = new DefContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, CJsParser.RULE_def);
		try {
			this.state = 92;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 88;
				this.varDef();
				this.state = 89;
				this.match(CJsParser.COLON);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 91;
				this.funDef();
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
	public funDef(): FunDefContext {
		let _localctx: FunDefContext = new FunDefContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, CJsParser.RULE_funDef);
		let _la: number;
		try {
			this.state = 118;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 94;
				this.type();
				this.state = 95;
				this.funcName();
				this.state = 96;
				this.match(CJsParser.LPAREN);
				this.state = 97;
				this.match(CJsParser.RPAREN);
				this.state = 98;
				this.match(CJsParser.LCURLY);
				this.state = 99;
				this.program();
				this.state = 100;
				this.match(CJsParser.RCURLY);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 102;
				this.type();
				this.state = 103;
				this.funcName();
				this.state = 104;
				this.match(CJsParser.LPAREN);
				{
				this.state = 105;
				this.varDef();
				}
				this.state = 110;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CJsParser.COMMA) {
					{
					{
					this.state = 106;
					this.match(CJsParser.COMMA);
					this.state = 107;
					this.varDef();
					}
					}
					this.state = 112;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 113;
				this.match(CJsParser.RPAREN);
				this.state = 114;
				this.match(CJsParser.LCURLY);
				this.state = 115;
				this.program();
				this.state = 116;
				this.match(CJsParser.RCURLY);
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
	public funcName(): FuncNameContext {
		let _localctx: FuncNameContext = new FuncNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, CJsParser.RULE_funcName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 120;
			this.match(CJsParser.ID);
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

	public expr(): ExprContext;
	public expr(_p: number): ExprContext;
	// @RuleVersion(0)
	public expr(_p?: number): ExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExprContext = new ExprContext(this._ctx, _parentState);
		let _prevctx: ExprContext = _localctx;
		let _startState: number = 20;
		this.enterRecursionRule(_localctx, 20, CJsParser.RULE_expr, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 134;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				{
				this.state = 123;
				this.match(CJsParser.ID);
				}
				break;

			case 2:
				{
				this.state = 124;
				this.match(CJsParser.INT);
				}
				break;

			case 3:
				{
				this.state = 125;
				this.match(CJsParser.CHAR);
				}
				break;

			case 4:
				{
				this.state = 126;
				this.funCall();
				}
				break;

			case 5:
				{
				this.state = 127;
				this.unaryOp();
				this.state = 128;
				this.expr(3);
				}
				break;

			case 6:
				{
				this.state = 130;
				this.match(CJsParser.LPAREN);
				this.state = 131;
				this.expr(0);
				this.state = 132;
				this.match(CJsParser.RPAREN);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 142;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new ExprContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CJsParser.RULE_expr);
					this.state = 136;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 137;
					this.binaryOp();
					this.state = 138;
					this.expr(3);
					}
					}
				}
				this.state = 144;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
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
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public funCall(): FunCallContext {
		let _localctx: FunCallContext = new FunCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, CJsParser.RULE_funCall);
		let _la: number;
		try {
			this.state = 161;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 145;
				this.funcName();
				this.state = 146;
				this.match(CJsParser.LPAREN);
				this.state = 147;
				this.expr(0);
				this.state = 152;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CJsParser.COMMA) {
					{
					{
					this.state = 148;
					this.match(CJsParser.COMMA);
					this.state = 149;
					this.expr(0);
					}
					}
					this.state = 154;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 155;
				this.match(CJsParser.RPAREN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 157;
				this.funcName();
				this.state = 158;
				this.match(CJsParser.LPAREN);
				this.state = 159;
				this.match(CJsParser.RPAREN);
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
	public unaryOp(): UnaryOpContext {
		let _localctx: UnaryOpContext = new UnaryOpContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, CJsParser.RULE_unaryOp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 163;
			_la = this._input.LA(1);
			if (!(((((_la - 5)) & ~0x1F) === 0 && ((1 << (_la - 5)) & ((1 << (CJsParser.T__4 - 5)) | (1 << (CJsParser.T__5 - 5)) | (1 << (CJsParser.T__6 - 5)) | (1 << (CJsParser.ADD - 5)) | (1 << (CJsParser.SUB - 5)) | (1 << (CJsParser.MUL - 5)) | (1 << (CJsParser.NOT - 5)))) !== 0))) {
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
	public binaryOp(): BinaryOpContext {
		let _localctx: BinaryOpContext = new BinaryOpContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, CJsParser.RULE_binaryOp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 165;
			_la = this._input.LA(1);
			if (!(((((_la - 8)) & ~0x1F) === 0 && ((1 << (_la - 8)) & ((1 << (CJsParser.T__7 - 8)) | (1 << (CJsParser.T__8 - 8)) | (1 << (CJsParser.T__9 - 8)) | (1 << (CJsParser.T__10 - 8)) | (1 << (CJsParser.T__11 - 8)) | (1 << (CJsParser.ADD - 8)) | (1 << (CJsParser.SUB - 8)) | (1 << (CJsParser.MUL - 8)) | (1 << (CJsParser.DIV - 8)) | (1 << (CJsParser.MOD - 8)) | (1 << (CJsParser.AND - 8)) | (1 << (CJsParser.OR - 8)))) !== 0))) {
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
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, CJsParser.RULE_block);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 167;
			this.match(CJsParser.LCURLY);
			this.state = 168;
			this.program();
			this.state = 169;
			this.match(CJsParser.RCURLY);
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
		this.enterRule(_localctx, 30, CJsParser.RULE_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 171;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CJsParser.T__12) | (1 << CJsParser.T__13) | (1 << CJsParser.T__14) | (1 << CJsParser.T__15) | (1 << CJsParser.T__16) | (1 << CJsParser.T__17))) !== 0))) {
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 10:
			return this.expr_sempred(_localctx as ExprContext, predIndex);
		}
		return true;
	}
	private expr_sempred(_localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03)\xB0\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x05\x02\'\n\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x036" +
		"\n\x03\x03\x04\x03\x04\x05\x04:\n\x04\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x05\x05B\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x05\x06K\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03" +
		"\t\x03\t\x05\t_\n\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x07\no\n\n\f\n\x0E\nr\v\n\x03\n\x03\n" +
		"\x03\n\x03\n\x03\n\x05\ny\n\n\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\x89\n\f\x03\f\x03\f" +
		"\x03\f\x03\f\x07\f\x8F\n\f\f\f\x0E\f\x92\v\f\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x07\r\x99\n\r\f\r\x0E\r\x9C\v\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r" +
		"\x05\r\xA4\n\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x11\x03\x11\x03\x11\x02\x02\x03\x16\x12\x02\x02\x04\x02\x06" +
		"\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02" +
		"\x1A\x02\x1C\x02\x1E\x02 \x02\x02\x05\x05\x02\x07\t\x18\x1A##\x05\x02" +
		"\n\x0E\x18\x1C!\"\x03\x02\x0F\x14\x02\xB4\x02&\x03\x02\x02\x02\x045\x03" +
		"\x02\x02\x02\x067\x03\x02\x02\x02\bA\x03\x02\x02\x02\nJ\x03\x02\x02\x02" +
		"\fL\x03\x02\x02\x02\x0ER\x03\x02\x02\x02\x10^\x03\x02\x02\x02\x12x\x03" +
		"\x02\x02\x02\x14z\x03\x02\x02\x02\x16\x88\x03\x02\x02\x02\x18\xA3\x03" +
		"\x02\x02\x02\x1A\xA5\x03\x02\x02\x02\x1C\xA7\x03\x02\x02\x02\x1E\xA9\x03" +
		"\x02\x02\x02 \xAD\x03\x02\x02\x02\"\'\x05\x04\x03\x02#$\x05\x04\x03\x02" +
		"$%\x05\x02\x02\x02%\'\x03\x02\x02\x02&\"\x03\x02\x02\x02&#\x03\x02\x02" +
		"\x02\'\x03\x03\x02\x02\x02()\x05\n\x06\x02)*\x07\x1F\x02\x02*6\x03\x02" +
		"\x02\x02+,\x05\x16\f\x02,-\x07\x1F\x02\x02-6\x03\x02\x02\x02.6\x05\x0E" +
		"\b\x02/6\x05\x10\t\x0206\x05\f\x07\x0216\x05\x1E\x10\x0223\x05\x06\x04" +
		"\x0234\x07\x1F\x02\x0246\x03\x02\x02\x025(\x03\x02\x02\x025+\x03\x02\x02" +
		"\x025.\x03\x02\x02\x025/\x03\x02\x02\x0250\x03\x02\x02\x0251\x03\x02\x02" +
		"\x0252\x03\x02\x02\x026\x05\x03\x02\x02\x0279\x07\x03\x02\x028:\x05\x16" +
		"\f\x0298\x03\x02\x02\x029:\x03\x02\x02\x02:\x07\x03\x02\x02\x02;<\x05" +
		" \x11\x02<=\x07)\x02\x02=B\x03\x02\x02\x02>?\x05 \x11\x02?@\x05\n\x06" +
		"\x02@B\x03\x02\x02\x02A;\x03\x02\x02\x02A>\x03\x02\x02\x02B\t\x03\x02" +
		"\x02\x02CD\x07)\x02\x02DE\x07 \x02\x02EK\x05\x16\f\x02FG\x07\x1A\x02\x02" +
		"GH\x07)\x02\x02HI\x07 \x02\x02IK\x05\x16\f\x02JC\x03\x02\x02\x02JF\x03" +
		"\x02\x02\x02K\v\x03\x02\x02\x02LM\x07\x04\x02\x02MN\x07$\x02\x02NO\x05" +
		"\x16\f\x02OP\x07%\x02\x02PQ\x05\x1E\x10\x02Q\r\x03\x02\x02\x02RS\x07\x05" +
		"\x02\x02ST\x07$\x02\x02TU\x05\x16\f\x02UV\x07%\x02\x02VW\x05\x1E\x10\x02" +
		"WX\x07\x06\x02\x02XY\x05\x1E\x10\x02Y\x0F\x03\x02\x02\x02Z[\x05\b\x05" +
		"\x02[\\\x07\x1F\x02\x02\\_\x03\x02\x02\x02]_\x05\x12\n\x02^Z\x03\x02\x02" +
		"\x02^]\x03\x02\x02\x02_\x11\x03\x02\x02\x02`a\x05 \x11\x02ab\x05\x14\v" +
		"\x02bc\x07$\x02\x02cd\x07%\x02\x02de\x07&\x02\x02ef\x05\x02\x02\x02fg" +
		"\x07\'\x02\x02gy\x03\x02\x02\x02hi\x05 \x11\x02ij\x05\x14\v\x02jk\x07" +
		"$\x02\x02kp\x05\b\x05\x02lm\x07\x1D\x02\x02mo\x05\b\x05\x02nl\x03\x02" +
		"\x02\x02or\x03\x02\x02\x02pn\x03\x02\x02\x02pq\x03\x02\x02\x02qs\x03\x02" +
		"\x02\x02rp\x03\x02\x02\x02st\x07%\x02\x02tu\x07&\x02\x02uv\x05\x02\x02" +
		"\x02vw\x07\'\x02\x02wy\x03\x02\x02\x02x`\x03\x02\x02\x02xh\x03\x02\x02" +
		"\x02y\x13\x03\x02\x02\x02z{\x07)\x02\x02{\x15\x03\x02\x02\x02|}\b\f\x01" +
		"\x02}\x89\x07)\x02\x02~\x89\x07(\x02\x02\x7F\x89\x07\x15\x02\x02\x80\x89" +
		"\x05\x18\r\x02\x81\x82\x05\x1A\x0E\x02\x82\x83\x05\x16\f\x05\x83\x89\x03" +
		"\x02\x02\x02\x84\x85\x07$\x02\x02\x85\x86\x05\x16\f\x02\x86\x87\x07%\x02" +
		"\x02\x87\x89\x03\x02\x02\x02\x88|\x03\x02\x02\x02\x88~\x03\x02\x02\x02" +
		"\x88\x7F\x03\x02\x02\x02\x88\x80\x03\x02\x02\x02\x88\x81\x03\x02\x02\x02" +
		"\x88\x84\x03\x02\x02\x02\x89\x90\x03\x02\x02\x02\x8A\x8B\f\x04\x02\x02" +
		"\x8B\x8C\x05\x1C\x0F\x02\x8C\x8D\x05\x16\f\x05\x8D\x8F\x03\x02\x02\x02" +
		"\x8E\x8A\x03\x02\x02\x02\x8F\x92\x03\x02\x02\x02\x90\x8E\x03\x02\x02\x02" +
		"\x90\x91\x03\x02\x02\x02\x91\x17\x03\x02\x02\x02\x92\x90\x03\x02\x02\x02" +
		"\x93\x94\x05\x14\v\x02\x94\x95\x07$\x02\x02\x95\x9A\x05\x16\f\x02\x96" +
		"\x97\x07\x1D\x02\x02\x97\x99\x05\x16\f\x02\x98\x96\x03\x02\x02\x02\x99" +
		"\x9C\x03\x02\x02\x02\x9A\x98\x03\x02\x02\x02\x9A\x9B\x03\x02\x02\x02\x9B" +
		"\x9D\x03\x02\x02\x02\x9C\x9A\x03\x02\x02\x02\x9D\x9E\x07%\x02\x02\x9E" +
		"\xA4\x03\x02\x02\x02\x9F\xA0\x05\x14\v\x02\xA0\xA1\x07$\x02\x02\xA1\xA2" +
		"\x07%\x02\x02\xA2\xA4\x03\x02\x02\x02\xA3\x93\x03\x02\x02\x02\xA3\x9F" +
		"\x03\x02\x02\x02\xA4\x19\x03\x02\x02\x02\xA5\xA6\t\x02\x02\x02\xA6\x1B" +
		"\x03\x02\x02\x02\xA7\xA8\t\x03\x02\x02\xA8\x1D\x03\x02\x02\x02\xA9\xAA" +
		"\x07&\x02\x02\xAA\xAB\x05\x02\x02\x02\xAB\xAC\x07\'\x02\x02\xAC\x1F\x03" +
		"\x02\x02\x02\xAD\xAE\t\x04\x02\x02\xAE!\x03\x02\x02\x02\x0E&59AJ^px\x88" +
		"\x90\x9A\xA3";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CJsParser.__ATN) {
			CJsParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CJsParser._serializedATN));
		}

		return CJsParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public stat(): StatContext {
		return this.getRuleContext(0, StatContext);
	}
	public program(): ProgramContext | undefined {
		return this.tryGetRuleContext(0, ProgramContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CJsParser.RULE_program; }
	// @Override
	public enterRule(listener: CJsListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: CJsListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CJsVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatContext extends ParserRuleContext {
	public assg(): AssgContext | undefined {
		return this.tryGetRuleContext(0, AssgContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(CJsParser.COLON, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public ifStat(): IfStatContext | undefined {
		return this.tryGetRuleContext(0, IfStatContext);
	}
	public def(): DefContext | undefined {
		return this.tryGetRuleContext(0, DefContext);
	}
	public whileStat(): WhileStatContext | undefined {
		return this.tryGetRuleContext(0, WhileStatContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public return(): ReturnContext | undefined {
		return this.tryGetRuleContext(0, ReturnContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CJsParser.RULE_stat; }
	// @Override
	public enterRule(listener: CJsListener): void {
		if (listener.enterStat) {
			listener.enterStat(this);
		}
	}
	// @Override
	public exitRule(listener: CJsListener): void {
		if (listener.exitStat) {
			listener.exitStat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CJsVisitor<Result>): Result {
		if (visitor.visitStat) {
			return visitor.visitStat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnContext extends ParserRuleContext {
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CJsParser.RULE_return; }
	// @Override
	public enterRule(listener: CJsListener): void {
		if (listener.enterReturn) {
			listener.enterReturn(this);
		}
	}
	// @Override
	public exitRule(listener: CJsListener): void {
		if (listener.exitReturn) {
			listener.exitReturn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CJsVisitor<Result>): Result {
		if (visitor.visitReturn) {
			return visitor.visitReturn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarDefContext extends ParserRuleContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public ID(): TerminalNode | undefined { return this.tryGetToken(CJsParser.ID, 0); }
	public assg(): AssgContext | undefined {
		return this.tryGetRuleContext(0, AssgContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CJsParser.RULE_varDef; }
	// @Override
	public enterRule(listener: CJsListener): void {
		if (listener.enterVarDef) {
			listener.enterVarDef(this);
		}
	}
	// @Override
	public exitRule(listener: CJsListener): void {
		if (listener.exitVarDef) {
			listener.exitVarDef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CJsVisitor<Result>): Result {
		if (visitor.visitVarDef) {
			return visitor.visitVarDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssgContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(CJsParser.ID, 0); }
	public EQ(): TerminalNode { return this.getToken(CJsParser.EQ, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public MUL(): TerminalNode | undefined { return this.tryGetToken(CJsParser.MUL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CJsParser.RULE_assg; }
	// @Override
	public enterRule(listener: CJsListener): void {
		if (listener.enterAssg) {
			listener.enterAssg(this);
		}
	}
	// @Override
	public exitRule(listener: CJsListener): void {
		if (listener.exitAssg) {
			listener.exitAssg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CJsVisitor<Result>): Result {
		if (visitor.visitAssg) {
			return visitor.visitAssg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhileStatContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(CJsParser.LPAREN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(CJsParser.RPAREN, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CJsParser.RULE_whileStat; }
	// @Override
	public enterRule(listener: CJsListener): void {
		if (listener.enterWhileStat) {
			listener.enterWhileStat(this);
		}
	}
	// @Override
	public exitRule(listener: CJsListener): void {
		if (listener.exitWhileStat) {
			listener.exitWhileStat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CJsVisitor<Result>): Result {
		if (visitor.visitWhileStat) {
			return visitor.visitWhileStat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfStatContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(CJsParser.LPAREN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(CJsParser.RPAREN, 0); }
	public block(): BlockContext[];
	public block(i: number): BlockContext;
	public block(i?: number): BlockContext | BlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockContext);
		} else {
			return this.getRuleContext(i, BlockContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CJsParser.RULE_ifStat; }
	// @Override
	public enterRule(listener: CJsListener): void {
		if (listener.enterIfStat) {
			listener.enterIfStat(this);
		}
	}
	// @Override
	public exitRule(listener: CJsListener): void {
		if (listener.exitIfStat) {
			listener.exitIfStat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CJsVisitor<Result>): Result {
		if (visitor.visitIfStat) {
			return visitor.visitIfStat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefContext extends ParserRuleContext {
	public varDef(): VarDefContext | undefined {
		return this.tryGetRuleContext(0, VarDefContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(CJsParser.COLON, 0); }
	public funDef(): FunDefContext | undefined {
		return this.tryGetRuleContext(0, FunDefContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CJsParser.RULE_def; }
	// @Override
	public enterRule(listener: CJsListener): void {
		if (listener.enterDef) {
			listener.enterDef(this);
		}
	}
	// @Override
	public exitRule(listener: CJsListener): void {
		if (listener.exitDef) {
			listener.exitDef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CJsVisitor<Result>): Result {
		if (visitor.visitDef) {
			return visitor.visitDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunDefContext extends ParserRuleContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public funcName(): FuncNameContext {
		return this.getRuleContext(0, FuncNameContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(CJsParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(CJsParser.RPAREN, 0); }
	public LCURLY(): TerminalNode { return this.getToken(CJsParser.LCURLY, 0); }
	public program(): ProgramContext {
		return this.getRuleContext(0, ProgramContext);
	}
	public RCURLY(): TerminalNode { return this.getToken(CJsParser.RCURLY, 0); }
	public varDef(): VarDefContext[];
	public varDef(i: number): VarDefContext;
	public varDef(i?: number): VarDefContext | VarDefContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VarDefContext);
		} else {
			return this.getRuleContext(i, VarDefContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CJsParser.COMMA);
		} else {
			return this.getToken(CJsParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CJsParser.RULE_funDef; }
	// @Override
	public enterRule(listener: CJsListener): void {
		if (listener.enterFunDef) {
			listener.enterFunDef(this);
		}
	}
	// @Override
	public exitRule(listener: CJsListener): void {
		if (listener.exitFunDef) {
			listener.exitFunDef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CJsVisitor<Result>): Result {
		if (visitor.visitFunDef) {
			return visitor.visitFunDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FuncNameContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(CJsParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CJsParser.RULE_funcName; }
	// @Override
	public enterRule(listener: CJsListener): void {
		if (listener.enterFuncName) {
			listener.enterFuncName(this);
		}
	}
	// @Override
	public exitRule(listener: CJsListener): void {
		if (listener.exitFuncName) {
			listener.exitFuncName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CJsVisitor<Result>): Result {
		if (visitor.visitFuncName) {
			return visitor.visitFuncName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	public ID(): TerminalNode | undefined { return this.tryGetToken(CJsParser.ID, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(CJsParser.INT, 0); }
	public CHAR(): TerminalNode | undefined { return this.tryGetToken(CJsParser.CHAR, 0); }
	public funCall(): FunCallContext | undefined {
		return this.tryGetRuleContext(0, FunCallContext);
	}
	public unaryOp(): UnaryOpContext | undefined {
		return this.tryGetRuleContext(0, UnaryOpContext);
	}
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public binaryOp(): BinaryOpContext | undefined {
		return this.tryGetRuleContext(0, BinaryOpContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(CJsParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(CJsParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CJsParser.RULE_expr; }
	// @Override
	public enterRule(listener: CJsListener): void {
		if (listener.enterExpr) {
			listener.enterExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CJsListener): void {
		if (listener.exitExpr) {
			listener.exitExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CJsVisitor<Result>): Result {
		if (visitor.visitExpr) {
			return visitor.visitExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunCallContext extends ParserRuleContext {
	public funcName(): FuncNameContext {
		return this.getRuleContext(0, FuncNameContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(CJsParser.LPAREN, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(CJsParser.RPAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CJsParser.COMMA);
		} else {
			return this.getToken(CJsParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CJsParser.RULE_funCall; }
	// @Override
	public enterRule(listener: CJsListener): void {
		if (listener.enterFunCall) {
			listener.enterFunCall(this);
		}
	}
	// @Override
	public exitRule(listener: CJsListener): void {
		if (listener.exitFunCall) {
			listener.exitFunCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CJsVisitor<Result>): Result {
		if (visitor.visitFunCall) {
			return visitor.visitFunCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnaryOpContext extends ParserRuleContext {
	public NOT(): TerminalNode | undefined { return this.tryGetToken(CJsParser.NOT, 0); }
	public MUL(): TerminalNode | undefined { return this.tryGetToken(CJsParser.MUL, 0); }
	public ADD(): TerminalNode | undefined { return this.tryGetToken(CJsParser.ADD, 0); }
	public SUB(): TerminalNode | undefined { return this.tryGetToken(CJsParser.SUB, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CJsParser.RULE_unaryOp; }
	// @Override
	public enterRule(listener: CJsListener): void {
		if (listener.enterUnaryOp) {
			listener.enterUnaryOp(this);
		}
	}
	// @Override
	public exitRule(listener: CJsListener): void {
		if (listener.exitUnaryOp) {
			listener.exitUnaryOp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CJsVisitor<Result>): Result {
		if (visitor.visitUnaryOp) {
			return visitor.visitUnaryOp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BinaryOpContext extends ParserRuleContext {
	public MUL(): TerminalNode | undefined { return this.tryGetToken(CJsParser.MUL, 0); }
	public ADD(): TerminalNode | undefined { return this.tryGetToken(CJsParser.ADD, 0); }
	public SUB(): TerminalNode | undefined { return this.tryGetToken(CJsParser.SUB, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(CJsParser.DIV, 0); }
	public MOD(): TerminalNode | undefined { return this.tryGetToken(CJsParser.MOD, 0); }
	public AND(): TerminalNode | undefined { return this.tryGetToken(CJsParser.AND, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(CJsParser.OR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CJsParser.RULE_binaryOp; }
	// @Override
	public enterRule(listener: CJsListener): void {
		if (listener.enterBinaryOp) {
			listener.enterBinaryOp(this);
		}
	}
	// @Override
	public exitRule(listener: CJsListener): void {
		if (listener.exitBinaryOp) {
			listener.exitBinaryOp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CJsVisitor<Result>): Result {
		if (visitor.visitBinaryOp) {
			return visitor.visitBinaryOp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public LCURLY(): TerminalNode { return this.getToken(CJsParser.LCURLY, 0); }
	public program(): ProgramContext {
		return this.getRuleContext(0, ProgramContext);
	}
	public RCURLY(): TerminalNode { return this.getToken(CJsParser.RCURLY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CJsParser.RULE_block; }
	// @Override
	public enterRule(listener: CJsListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: CJsListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CJsVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
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
	public get ruleIndex(): number { return CJsParser.RULE_type; }
	// @Override
	public enterRule(listener: CJsListener): void {
		if (listener.enterType) {
			listener.enterType(this);
		}
	}
	// @Override
	public exitRule(listener: CJsListener): void {
		if (listener.exitType) {
			listener.exitType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CJsVisitor<Result>): Result {
		if (visitor.visitType) {
			return visitor.visitType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

