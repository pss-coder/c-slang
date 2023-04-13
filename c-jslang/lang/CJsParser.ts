// Generated from ./lang/CJs.g4 by ANTLR 4.9.0-SNAPSHOT


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
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly CHAR = 22;
	public static readonly STRING = 23;
	public static readonly WS = 24;
	public static readonly ADD = 25;
	public static readonly SUB = 26;
	public static readonly MUL = 27;
	public static readonly DIV = 28;
	public static readonly MOD = 29;
	public static readonly ARRAY = 30;
	public static readonly COMMA = 31;
	public static readonly PRINT = 32;
	public static readonly COLON = 33;
	public static readonly EQ = 34;
	public static readonly AND = 35;
	public static readonly OR = 36;
	public static readonly NOT = 37;
	public static readonly LPAREN = 38;
	public static readonly RPAREN = 39;
	public static readonly LCURLY = 40;
	public static readonly RCURLY = 41;
	public static readonly INT = 42;
	public static readonly ID = 43;
	public static readonly RULE_program = 0;
	public static readonly RULE_stat = 1;
	public static readonly RULE_return = 2;
	public static readonly RULE_varDef = 3;
	public static readonly RULE_structInit = 4;
	public static readonly RULE_assg = 5;
	public static readonly RULE_whileStat = 6;
	public static readonly RULE_ifStat = 7;
	public static readonly RULE_def = 8;
	public static readonly RULE_funDef = 9;
	public static readonly RULE_funcName = 10;
	public static readonly RULE_expr = 11;
	public static readonly RULE_funCall = 12;
	public static readonly RULE_unaryOp = 13;
	public static readonly RULE_binaryOp = 14;
	public static readonly RULE_block = 15;
	public static readonly RULE_type = 16;
	public static readonly RULE_structMember = 17;
	public static readonly RULE_structDef = 18;
	public static readonly RULE_arrDef = 19;
	public static readonly RULE_arrAccess = 20;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "stat", "return", "varDef", "structInit", "assg", "whileStat", 
		"ifStat", "def", "funDef", "funcName", "expr", "funCall", "unaryOp", "binaryOp", 
		"block", "type", "structMember", "structDef", "arrDef", "arrAccess",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'return'", "'struct'", "'while'", "'if'", "'else'", "'++'", 
		"'--'", "'&'", "'=='", "'<'", "'>'", "'>='", "'<='", "'void'", "'int'", 
		"'char'", "'void*'", "'int*'", "'char*'", "'['", "']'", undefined, undefined, 
		undefined, "'+'", "'-'", "'*'", "'/'", "'%'", "'[]'", "','", "'print'", 
		"';'", "'='", "'&&'", "'||'", "'!'", "'('", "')'", "'{'", "'}'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "CHAR", "STRING", "WS", "ADD", "SUB", "MUL", "DIV", "MOD", 
		"ARRAY", "COMMA", "PRINT", "COLON", "EQ", "AND", "OR", "NOT", "LPAREN", 
		"RPAREN", "LCURLY", "RCURLY", "INT", "ID",
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
			this.state = 46;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 42;
				this.stat();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 43;
				this.stat();
				this.state = 44;
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
			this.state = 61;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 48;
				this.assg();
				this.state = 49;
				this.match(CJsParser.COLON);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 51;
				this.expr(0);
				this.state = 52;
				this.match(CJsParser.COLON);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 54;
				this.ifStat();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 55;
				this.def();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 56;
				this.whileStat();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 57;
				this.block();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 58;
				this.return();
				this.state = 59;
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
			this.state = 63;
			this.match(CJsParser.T__0);
			this.state = 65;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CJsParser.T__5) | (1 << CJsParser.T__6) | (1 << CJsParser.T__7) | (1 << CJsParser.CHAR) | (1 << CJsParser.STRING) | (1 << CJsParser.ADD) | (1 << CJsParser.SUB) | (1 << CJsParser.MUL))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (CJsParser.NOT - 37)) | (1 << (CJsParser.LPAREN - 37)) | (1 << (CJsParser.INT - 37)) | (1 << (CJsParser.ID - 37)))) !== 0)) {
				{
				this.state = 64;
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
			this.state = 75;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 67;
				this.type();
				this.state = 68;
				this.match(CJsParser.ID);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 70;
				this.type();
				this.state = 71;
				this.assg();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 73;
				this.structInit();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 74;
				this.arrDef();
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
	public structInit(): StructInitContext {
		let _localctx: StructInitContext = new StructInitContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, CJsParser.RULE_structInit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 77;
			this.match(CJsParser.T__1);
			this.state = 78;
			this.match(CJsParser.ID);
			this.state = 79;
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
	// @RuleVersion(0)
	public assg(): AssgContext {
		let _localctx: AssgContext = new AssgContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, CJsParser.RULE_assg);
		try {
			this.state = 88;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CJsParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 81;
				this.match(CJsParser.ID);
				this.state = 82;
				this.match(CJsParser.EQ);
				this.state = 83;
				this.expr(0);
				}
				break;
			case CJsParser.MUL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 84;
				this.match(CJsParser.MUL);
				this.state = 85;
				this.match(CJsParser.ID);
				this.state = 86;
				this.match(CJsParser.EQ);
				this.state = 87;
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
		this.enterRule(_localctx, 12, CJsParser.RULE_whileStat);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 90;
			this.match(CJsParser.T__2);
			this.state = 91;
			this.match(CJsParser.LPAREN);
			this.state = 92;
			this.expr(0);
			this.state = 93;
			this.match(CJsParser.RPAREN);
			this.state = 94;
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
		this.enterRule(_localctx, 14, CJsParser.RULE_ifStat);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 96;
			this.match(CJsParser.T__3);
			this.state = 97;
			this.match(CJsParser.LPAREN);
			this.state = 98;
			this.expr(0);
			this.state = 99;
			this.match(CJsParser.RPAREN);
			this.state = 100;
			this.block();
			this.state = 101;
			this.match(CJsParser.T__4);
			this.state = 102;
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
		this.enterRule(_localctx, 16, CJsParser.RULE_def);
		try {
			this.state = 109;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 104;
				this.varDef();
				this.state = 105;
				this.match(CJsParser.COLON);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 107;
				this.funDef();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 108;
				this.structDef();
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
		this.enterRule(_localctx, 18, CJsParser.RULE_funDef);
		let _la: number;
		try {
			this.state = 135;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 111;
				this.type();
				this.state = 112;
				this.funcName();
				this.state = 113;
				this.match(CJsParser.LPAREN);
				this.state = 114;
				this.match(CJsParser.RPAREN);
				this.state = 115;
				this.match(CJsParser.LCURLY);
				this.state = 116;
				this.program();
				this.state = 117;
				this.match(CJsParser.RCURLY);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 119;
				this.type();
				this.state = 120;
				this.funcName();
				this.state = 121;
				this.match(CJsParser.LPAREN);
				{
				this.state = 122;
				this.varDef();
				}
				this.state = 127;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CJsParser.COMMA) {
					{
					{
					this.state = 123;
					this.match(CJsParser.COMMA);
					this.state = 124;
					this.varDef();
					}
					}
					this.state = 129;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 130;
				this.match(CJsParser.RPAREN);
				this.state = 131;
				this.match(CJsParser.LCURLY);
				this.state = 132;
				this.program();
				this.state = 133;
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
		this.enterRule(_localctx, 20, CJsParser.RULE_funcName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 137;
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
		let _startState: number = 22;
		this.enterRecursionRule(_localctx, 22, CJsParser.RULE_expr, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 153;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				{
				this.state = 140;
				this.match(CJsParser.ID);
				}
				break;

			case 2:
				{
				this.state = 141;
				this.match(CJsParser.INT);
				}
				break;

			case 3:
				{
				this.state = 142;
				this.match(CJsParser.CHAR);
				}
				break;

			case 4:
				{
				this.state = 143;
				this.match(CJsParser.STRING);
				}
				break;

			case 5:
				{
				this.state = 144;
				this.funCall();
				}
				break;

			case 6:
				{
				this.state = 145;
				this.unaryOp();
				this.state = 146;
				this.expr(4);
				}
				break;

			case 7:
				{
				this.state = 148;
				this.match(CJsParser.LPAREN);
				this.state = 149;
				this.expr(0);
				this.state = 150;
				this.match(CJsParser.RPAREN);
				}
				break;

			case 8:
				{
				this.state = 152;
				this.arrAccess();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 161;
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
					this.state = 155;
					if (!(this.precpred(this._ctx, 3))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
					}
					this.state = 156;
					this.binaryOp();
					this.state = 157;
					this.expr(4);
					}
					}
				}
				this.state = 163;
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
		this.enterRule(_localctx, 24, CJsParser.RULE_funCall);
		let _la: number;
		try {
			this.state = 180;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 164;
				this.funcName();
				this.state = 165;
				this.match(CJsParser.LPAREN);
				this.state = 166;
				this.expr(0);
				this.state = 171;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CJsParser.COMMA) {
					{
					{
					this.state = 167;
					this.match(CJsParser.COMMA);
					this.state = 168;
					this.expr(0);
					}
					}
					this.state = 173;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 174;
				this.match(CJsParser.RPAREN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 176;
				this.funcName();
				this.state = 177;
				this.match(CJsParser.LPAREN);
				this.state = 178;
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
		this.enterRule(_localctx, 26, CJsParser.RULE_unaryOp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 182;
			_la = this._input.LA(1);
			if (!(((((_la - 6)) & ~0x1F) === 0 && ((1 << (_la - 6)) & ((1 << (CJsParser.T__5 - 6)) | (1 << (CJsParser.T__6 - 6)) | (1 << (CJsParser.T__7 - 6)) | (1 << (CJsParser.ADD - 6)) | (1 << (CJsParser.SUB - 6)) | (1 << (CJsParser.MUL - 6)) | (1 << (CJsParser.NOT - 6)))) !== 0))) {
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
		this.enterRule(_localctx, 28, CJsParser.RULE_binaryOp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 184;
			_la = this._input.LA(1);
			if (!(((((_la - 9)) & ~0x1F) === 0 && ((1 << (_la - 9)) & ((1 << (CJsParser.T__8 - 9)) | (1 << (CJsParser.T__9 - 9)) | (1 << (CJsParser.T__10 - 9)) | (1 << (CJsParser.T__11 - 9)) | (1 << (CJsParser.T__12 - 9)) | (1 << (CJsParser.ADD - 9)) | (1 << (CJsParser.SUB - 9)) | (1 << (CJsParser.MUL - 9)) | (1 << (CJsParser.DIV - 9)) | (1 << (CJsParser.MOD - 9)) | (1 << (CJsParser.AND - 9)) | (1 << (CJsParser.OR - 9)))) !== 0))) {
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
		this.enterRule(_localctx, 30, CJsParser.RULE_block);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 186;
			this.match(CJsParser.LCURLY);
			this.state = 187;
			this.program();
			this.state = 188;
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
		this.enterRule(_localctx, 32, CJsParser.RULE_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 190;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CJsParser.T__13) | (1 << CJsParser.T__14) | (1 << CJsParser.T__15) | (1 << CJsParser.T__16) | (1 << CJsParser.T__17) | (1 << CJsParser.T__18))) !== 0))) {
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
	public structMember(): StructMemberContext {
		let _localctx: StructMemberContext = new StructMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, CJsParser.RULE_structMember);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 192;
			this.type();
			this.state = 193;
			this.match(CJsParser.ID);
			this.state = 194;
			this.match(CJsParser.COLON);
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
	public structDef(): StructDefContext {
		let _localctx: StructDefContext = new StructDefContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, CJsParser.RULE_structDef);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 196;
			this.match(CJsParser.T__1);
			this.state = 197;
			this.match(CJsParser.ID);
			this.state = 198;
			this.match(CJsParser.LCURLY);
			this.state = 202;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CJsParser.T__13) | (1 << CJsParser.T__14) | (1 << CJsParser.T__15) | (1 << CJsParser.T__16) | (1 << CJsParser.T__17) | (1 << CJsParser.T__18))) !== 0)) {
				{
				{
				this.state = 199;
				this.structMember();
				}
				}
				this.state = 204;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 205;
			this.match(CJsParser.RCURLY);
			this.state = 206;
			this.match(CJsParser.COLON);
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
	public arrDef(): ArrDefContext {
		let _localctx: ArrDefContext = new ArrDefContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, CJsParser.RULE_arrDef);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 208;
			this.type();
			this.state = 209;
			this.match(CJsParser.ID);
			this.state = 210;
			this.match(CJsParser.ARRAY);
			this.state = 211;
			this.match(CJsParser.EQ);
			this.state = 212;
			this.match(CJsParser.LCURLY);
			this.state = 213;
			this.expr(0);
			this.state = 218;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CJsParser.COMMA) {
				{
				{
				this.state = 214;
				this.match(CJsParser.COMMA);
				this.state = 215;
				this.expr(0);
				}
				}
				this.state = 220;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 221;
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
	public arrAccess(): ArrAccessContext {
		let _localctx: ArrAccessContext = new ArrAccessContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, CJsParser.RULE_arrAccess);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 223;
			this.match(CJsParser.ID);
			this.state = 229;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 224;
					this.match(CJsParser.T__19);
					this.state = 225;
					this.match(CJsParser.INT);
					this.state = 226;
					this.match(CJsParser.T__20);
					}
					}
				}
				this.state = 231;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
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
		case 11:
			return this.expr_sempred(_localctx as ExprContext, predIndex);
		}
		return true;
	}
	private expr_sempred(_localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03-\xEB\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x05\x021\n\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03@" +
		"\n\x03\x03\x04\x03\x04\x05\x04D\n\x04\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05N\n\x05\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07" +
		"[\n\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x05\np\n\n\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x07\v\x80\n\v\f\v\x0E\v\x83\v\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v" +
		"\x8A\n\v\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\x9C\n\r\x03\r\x03\r\x03\r\x03\r" +
		"\x07\r\xA2\n\r\f\r\x0E\r\xA5\v\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x07\x0E\xAC\n\x0E\f\x0E\x0E\x0E\xAF\v\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x05\x0E\xB7\n\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13" +
		"\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x07\x14\xCB\n\x14\f\x14\x0E\x14" +
		"\xCE\v\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03" +
		"\x15\x03\x15\x03\x15\x03\x15\x07\x15\xDB\n\x15\f\x15\x0E\x15\xDE\v\x15" +
		"\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x07\x16\xE6\n\x16\f\x16" +
		"\x0E\x16\xE9\v\x16\x03\x16\x02\x02\x03\x18\x17\x02\x02\x04\x02\x06\x02" +
		"\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A" +
		"\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02\x02\x05\x05\x02\b" +
		"\n\x1B\x1D\'\'\x05\x02\v\x0F\x1B\x1F%&\x03\x02\x10\x15\x02\xF2\x020\x03" +
		"\x02\x02\x02\x04?\x03\x02\x02\x02\x06A\x03\x02\x02\x02\bM\x03\x02\x02" +
		"\x02\nO\x03\x02\x02\x02\fZ\x03\x02\x02\x02\x0E\\\x03\x02\x02\x02\x10b" +
		"\x03\x02\x02\x02\x12o\x03\x02\x02\x02\x14\x89\x03\x02\x02\x02\x16\x8B" +
		"\x03\x02\x02\x02\x18\x9B\x03\x02\x02\x02\x1A\xB6\x03\x02\x02\x02\x1C\xB8" +
		"\x03\x02\x02\x02\x1E\xBA\x03\x02\x02\x02 \xBC\x03\x02\x02\x02\"\xC0\x03" +
		"\x02\x02\x02$\xC2\x03\x02\x02\x02&\xC6\x03\x02\x02\x02(\xD2\x03\x02\x02" +
		"\x02*\xE1\x03\x02\x02\x02,1\x05\x04\x03\x02-.\x05\x04\x03\x02./\x05\x02" +
		"\x02\x02/1\x03\x02\x02\x020,\x03\x02\x02\x020-\x03\x02\x02\x021\x03\x03" +
		"\x02\x02\x0223\x05\f\x07\x0234\x07#\x02\x024@\x03\x02\x02\x0256\x05\x18" +
		"\r\x0267\x07#\x02\x027@\x03\x02\x02\x028@\x05\x10\t\x029@\x05\x12\n\x02" +
		":@\x05\x0E\b\x02;@\x05 \x11\x02<=\x05\x06\x04\x02=>\x07#\x02\x02>@\x03" +
		"\x02\x02\x02?2\x03\x02\x02\x02?5\x03\x02\x02\x02?8\x03\x02\x02\x02?9\x03" +
		"\x02\x02\x02?:\x03\x02\x02\x02?;\x03\x02\x02\x02?<\x03\x02\x02\x02@\x05" +
		"\x03\x02\x02\x02AC\x07\x03\x02\x02BD\x05\x18\r\x02CB\x03\x02\x02\x02C" +
		"D\x03\x02\x02\x02D\x07\x03\x02\x02\x02EF\x05\"\x12\x02FG\x07-\x02\x02" +
		"GN\x03\x02\x02\x02HI\x05\"\x12\x02IJ\x05\f\x07\x02JN\x03\x02\x02\x02K" +
		"N\x05\n\x06\x02LN\x05(\x15\x02ME\x03\x02\x02\x02MH\x03\x02\x02\x02MK\x03" +
		"\x02\x02\x02ML\x03\x02\x02\x02N\t\x03\x02\x02\x02OP\x07\x04\x02\x02PQ" +
		"\x07-\x02\x02QR\x07-\x02\x02R\v\x03\x02\x02\x02ST\x07-\x02\x02TU\x07$" +
		"\x02\x02U[\x05\x18\r\x02VW\x07\x1D\x02\x02WX\x07-\x02\x02XY\x07$\x02\x02" +
		"Y[\x05\x18\r\x02ZS\x03\x02\x02\x02ZV\x03\x02\x02\x02[\r\x03\x02\x02\x02" +
		"\\]\x07\x05\x02\x02]^\x07(\x02\x02^_\x05\x18\r\x02_`\x07)\x02\x02`a\x05" +
		" \x11\x02a\x0F\x03\x02\x02\x02bc\x07\x06\x02\x02cd\x07(\x02\x02de\x05" +
		"\x18\r\x02ef\x07)\x02\x02fg\x05 \x11\x02gh\x07\x07\x02\x02hi\x05 \x11" +
		"\x02i\x11\x03\x02\x02\x02jk\x05\b\x05\x02kl\x07#\x02\x02lp\x03\x02\x02" +
		"\x02mp\x05\x14\v\x02np\x05&\x14\x02oj\x03\x02\x02\x02om\x03\x02\x02\x02" +
		"on\x03\x02\x02\x02p\x13\x03\x02\x02\x02qr\x05\"\x12\x02rs\x05\x16\f\x02" +
		"st\x07(\x02\x02tu\x07)\x02\x02uv\x07*\x02\x02vw\x05\x02\x02\x02wx\x07" +
		"+\x02\x02x\x8A\x03\x02\x02\x02yz\x05\"\x12\x02z{\x05\x16\f\x02{|\x07(" +
		"\x02\x02|\x81\x05\b\x05\x02}~\x07!\x02\x02~\x80\x05\b\x05\x02\x7F}\x03" +
		"\x02\x02\x02\x80\x83\x03\x02\x02\x02\x81\x7F\x03\x02\x02\x02\x81\x82\x03" +
		"\x02\x02\x02\x82\x84\x03\x02\x02\x02\x83\x81\x03\x02\x02\x02\x84\x85\x07" +
		")\x02\x02\x85\x86\x07*\x02\x02\x86\x87\x05\x02\x02\x02\x87\x88\x07+\x02" +
		"\x02\x88\x8A\x03\x02\x02\x02\x89q\x03\x02\x02\x02\x89y\x03\x02\x02\x02" +
		"\x8A\x15\x03\x02\x02\x02\x8B\x8C\x07-\x02\x02\x8C\x17\x03\x02\x02\x02" +
		"\x8D\x8E\b\r\x01\x02\x8E\x9C\x07-\x02\x02\x8F\x9C\x07,\x02\x02\x90\x9C" +
		"\x07\x18\x02\x02\x91\x9C\x07\x19\x02\x02\x92\x9C\x05\x1A\x0E\x02\x93\x94" +
		"\x05\x1C\x0F\x02\x94\x95\x05\x18\r\x06\x95\x9C\x03\x02\x02\x02\x96\x97" +
		"\x07(\x02\x02\x97\x98\x05\x18\r\x02\x98\x99\x07)\x02\x02\x99\x9C\x03\x02" +
		"\x02\x02\x9A\x9C\x05*\x16\x02\x9B\x8D\x03\x02\x02\x02\x9B\x8F\x03\x02" +
		"\x02\x02\x9B\x90\x03\x02\x02\x02\x9B\x91\x03\x02\x02\x02\x9B\x92\x03\x02" +
		"\x02\x02\x9B\x93\x03\x02\x02\x02\x9B\x96\x03\x02\x02\x02\x9B\x9A\x03\x02" +
		"\x02\x02\x9C\xA3\x03\x02\x02\x02\x9D\x9E\f\x05\x02\x02\x9E\x9F\x05\x1E" +
		"\x10\x02\x9F\xA0\x05\x18\r\x06\xA0\xA2\x03\x02\x02\x02\xA1\x9D\x03\x02" +
		"\x02\x02\xA2\xA5\x03\x02\x02\x02\xA3\xA1\x03\x02\x02\x02\xA3\xA4\x03\x02" +
		"\x02\x02\xA4\x19\x03\x02\x02\x02\xA5\xA3\x03\x02\x02\x02\xA6\xA7\x05\x16" +
		"\f\x02\xA7\xA8\x07(\x02\x02\xA8\xAD\x05\x18\r\x02\xA9\xAA\x07!\x02\x02" +
		"\xAA\xAC\x05\x18\r\x02\xAB\xA9\x03\x02\x02\x02\xAC\xAF\x03\x02\x02\x02" +
		"\xAD\xAB\x03\x02\x02\x02\xAD\xAE\x03\x02\x02\x02\xAE\xB0\x03\x02\x02\x02" +
		"\xAF\xAD\x03\x02\x02\x02\xB0\xB1\x07)\x02\x02\xB1\xB7\x03\x02\x02\x02" +
		"\xB2\xB3\x05\x16\f\x02\xB3\xB4\x07(\x02\x02\xB4\xB5\x07)\x02\x02\xB5\xB7" +
		"\x03\x02\x02\x02\xB6\xA6\x03\x02\x02\x02\xB6\xB2\x03\x02\x02\x02\xB7\x1B" +
		"\x03\x02\x02\x02\xB8\xB9\t\x02\x02\x02\xB9\x1D\x03\x02\x02\x02\xBA\xBB" +
		"\t\x03\x02\x02\xBB\x1F\x03\x02\x02\x02\xBC\xBD\x07*\x02\x02\xBD\xBE\x05" +
		"\x02\x02\x02\xBE\xBF\x07+\x02\x02\xBF!\x03\x02\x02\x02\xC0\xC1\t\x04\x02" +
		"\x02\xC1#\x03\x02\x02\x02\xC2\xC3\x05\"\x12\x02\xC3\xC4\x07-\x02\x02\xC4" +
		"\xC5\x07#\x02\x02\xC5%\x03\x02\x02\x02\xC6\xC7\x07\x04\x02\x02\xC7\xC8" +
		"\x07-\x02\x02\xC8\xCC\x07*\x02\x02\xC9\xCB\x05$\x13\x02\xCA\xC9\x03\x02" +
		"\x02\x02\xCB\xCE\x03\x02\x02\x02\xCC\xCA\x03\x02\x02\x02\xCC\xCD\x03\x02" +
		"\x02\x02\xCD\xCF\x03\x02\x02\x02\xCE\xCC\x03\x02\x02\x02\xCF\xD0\x07+" +
		"\x02\x02\xD0\xD1\x07#\x02\x02\xD1\'\x03\x02\x02\x02\xD2\xD3\x05\"\x12" +
		"\x02\xD3\xD4\x07-\x02\x02\xD4\xD5\x07 \x02\x02\xD5\xD6\x07$\x02\x02\xD6" +
		"\xD7\x07*\x02\x02\xD7\xDC\x05\x18\r\x02\xD8\xD9\x07!\x02\x02\xD9\xDB\x05" +
		"\x18\r\x02\xDA\xD8\x03\x02\x02\x02\xDB\xDE\x03\x02\x02\x02\xDC\xDA\x03" +
		"\x02\x02\x02\xDC\xDD\x03\x02\x02\x02\xDD\xDF\x03\x02\x02\x02\xDE\xDC\x03" +
		"\x02\x02\x02\xDF\xE0\x07+\x02\x02\xE0)\x03\x02\x02\x02\xE1\xE7\x07-\x02" +
		"\x02\xE2\xE3\x07\x16\x02\x02\xE3\xE4\x07,\x02\x02\xE4\xE6\x07\x17\x02" +
		"\x02\xE5\xE2\x03\x02\x02\x02\xE6\xE9\x03\x02\x02\x02\xE7\xE5\x03\x02\x02" +
		"\x02\xE7\xE8\x03\x02\x02\x02\xE8+\x03\x02\x02\x02\xE9\xE7\x03\x02\x02" +
		"\x02\x110?CMZo\x81\x89\x9B\xA3\xAD\xB6\xCC\xDC\xE7";
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
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public ID(): TerminalNode | undefined { return this.tryGetToken(CJsParser.ID, 0); }
	public assg(): AssgContext | undefined {
		return this.tryGetRuleContext(0, AssgContext);
	}
	public structInit(): StructInitContext | undefined {
		return this.tryGetRuleContext(0, StructInitContext);
	}
	public arrDef(): ArrDefContext | undefined {
		return this.tryGetRuleContext(0, ArrDefContext);
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


export class StructInitContext extends ParserRuleContext {
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CJsParser.ID);
		} else {
			return this.getToken(CJsParser.ID, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CJsParser.RULE_structInit; }
	// @Override
	public enterRule(listener: CJsListener): void {
		if (listener.enterStructInit) {
			listener.enterStructInit(this);
		}
	}
	// @Override
	public exitRule(listener: CJsListener): void {
		if (listener.exitStructInit) {
			listener.exitStructInit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CJsVisitor<Result>): Result {
		if (visitor.visitStructInit) {
			return visitor.visitStructInit(this);
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
	public structDef(): StructDefContext | undefined {
		return this.tryGetRuleContext(0, StructDefContext);
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
	public STRING(): TerminalNode | undefined { return this.tryGetToken(CJsParser.STRING, 0); }
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
	public arrAccess(): ArrAccessContext | undefined {
		return this.tryGetRuleContext(0, ArrAccessContext);
	}
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


export class StructMemberContext extends ParserRuleContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public ID(): TerminalNode { return this.getToken(CJsParser.ID, 0); }
	public COLON(): TerminalNode { return this.getToken(CJsParser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CJsParser.RULE_structMember; }
	// @Override
	public enterRule(listener: CJsListener): void {
		if (listener.enterStructMember) {
			listener.enterStructMember(this);
		}
	}
	// @Override
	public exitRule(listener: CJsListener): void {
		if (listener.exitStructMember) {
			listener.exitStructMember(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CJsVisitor<Result>): Result {
		if (visitor.visitStructMember) {
			return visitor.visitStructMember(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructDefContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(CJsParser.ID, 0); }
	public LCURLY(): TerminalNode { return this.getToken(CJsParser.LCURLY, 0); }
	public RCURLY(): TerminalNode { return this.getToken(CJsParser.RCURLY, 0); }
	public COLON(): TerminalNode { return this.getToken(CJsParser.COLON, 0); }
	public structMember(): StructMemberContext[];
	public structMember(i: number): StructMemberContext;
	public structMember(i?: number): StructMemberContext | StructMemberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StructMemberContext);
		} else {
			return this.getRuleContext(i, StructMemberContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CJsParser.RULE_structDef; }
	// @Override
	public enterRule(listener: CJsListener): void {
		if (listener.enterStructDef) {
			listener.enterStructDef(this);
		}
	}
	// @Override
	public exitRule(listener: CJsListener): void {
		if (listener.exitStructDef) {
			listener.exitStructDef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CJsVisitor<Result>): Result {
		if (visitor.visitStructDef) {
			return visitor.visitStructDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrDefContext extends ParserRuleContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public ID(): TerminalNode { return this.getToken(CJsParser.ID, 0); }
	public ARRAY(): TerminalNode { return this.getToken(CJsParser.ARRAY, 0); }
	public EQ(): TerminalNode { return this.getToken(CJsParser.EQ, 0); }
	public LCURLY(): TerminalNode { return this.getToken(CJsParser.LCURLY, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public RCURLY(): TerminalNode { return this.getToken(CJsParser.RCURLY, 0); }
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
	public get ruleIndex(): number { return CJsParser.RULE_arrDef; }
	// @Override
	public enterRule(listener: CJsListener): void {
		if (listener.enterArrDef) {
			listener.enterArrDef(this);
		}
	}
	// @Override
	public exitRule(listener: CJsListener): void {
		if (listener.exitArrDef) {
			listener.exitArrDef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CJsVisitor<Result>): Result {
		if (visitor.visitArrDef) {
			return visitor.visitArrDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrAccessContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(CJsParser.ID, 0); }
	public INT(): TerminalNode[];
	public INT(i: number): TerminalNode;
	public INT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CJsParser.INT);
		} else {
			return this.getToken(CJsParser.INT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CJsParser.RULE_arrAccess; }
	// @Override
	public enterRule(listener: CJsListener): void {
		if (listener.enterArrAccess) {
			listener.enterArrAccess(this);
		}
	}
	// @Override
	public exitRule(listener: CJsListener): void {
		if (listener.exitArrAccess) {
			listener.exitArrAccess(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CJsVisitor<Result>): Result {
		if (visitor.visitArrAccess) {
			return visitor.visitArrAccess(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


