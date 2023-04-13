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
	public static readonly CHAR = 20;
	public static readonly STRING = 21;
	public static readonly WS = 22;
	public static readonly ADD = 23;
	public static readonly SUB = 24;
	public static readonly MUL = 25;
	public static readonly DIV = 26;
	public static readonly MOD = 27;
	public static readonly COMMA = 28;
	public static readonly PRINT = 29;
	public static readonly COLON = 30;
	public static readonly EQ = 31;
	public static readonly AND = 32;
	public static readonly OR = 33;
	public static readonly NOT = 34;
	public static readonly LPAREN = 35;
	public static readonly RPAREN = 36;
	public static readonly LCURLY = 37;
	public static readonly RCURLY = 38;
	public static readonly INT = 39;
	public static readonly ID = 40;
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
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "stat", "return", "varDef", "structInit", "assg", "whileStat", 
		"ifStat", "def", "funDef", "funcName", "expr", "funCall", "unaryOp", "binaryOp", 
		"block", "type", "structMember", "structDef",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'return'", "'struct'", "'while'", "'if'", "'else'", "'++'", 
		"'--'", "'&'", "'=='", "'<'", "'>'", "'>='", "'<='", "'void'", "'int'", 
		"'char'", "'void*'", "'int*'", "'char*'", undefined, undefined, undefined, 
		"'+'", "'-'", "'*'", "'/'", "'%'", "','", "'print'", "';'", "'='", "'&&'", 
		"'||'", "'!'", "'('", "')'", "'{'", "'}'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "CHAR", 
		"STRING", "WS", "ADD", "SUB", "MUL", "DIV", "MOD", "COMMA", "PRINT", "COLON", 
		"EQ", "AND", "OR", "NOT", "LPAREN", "RPAREN", "LCURLY", "RCURLY", "INT", 
		"ID",
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
			this.state = 42;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 38;
				this.stat();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 39;
				this.stat();
				this.state = 40;
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
			this.state = 57;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 44;
				this.assg();
				this.state = 45;
				this.match(CJsParser.COLON);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 47;
				this.expr(0);
				this.state = 48;
				this.match(CJsParser.COLON);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 50;
				this.ifStat();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 51;
				this.def();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 52;
				this.whileStat();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 53;
				this.block();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 54;
				this.return();
				this.state = 55;
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
			this.state = 59;
			this.match(CJsParser.T__0);
			this.state = 61;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CJsParser.T__5) | (1 << CJsParser.T__6) | (1 << CJsParser.T__7) | (1 << CJsParser.CHAR) | (1 << CJsParser.STRING) | (1 << CJsParser.ADD) | (1 << CJsParser.SUB) | (1 << CJsParser.MUL))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (CJsParser.NOT - 34)) | (1 << (CJsParser.LPAREN - 34)) | (1 << (CJsParser.INT - 34)) | (1 << (CJsParser.ID - 34)))) !== 0)) {
				{
				this.state = 60;
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
			this.state = 70;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 63;
				this.type();
				this.state = 64;
				this.match(CJsParser.ID);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 66;
				this.type();
				this.state = 67;
				this.assg();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 69;
				this.structInit();
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
			this.state = 72;
			this.match(CJsParser.T__1);
			this.state = 73;
			this.match(CJsParser.ID);
			this.state = 74;
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
			this.state = 83;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CJsParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 76;
				this.match(CJsParser.ID);
				this.state = 77;
				this.match(CJsParser.EQ);
				this.state = 78;
				this.expr(0);
				}
				break;
			case CJsParser.MUL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 79;
				this.match(CJsParser.MUL);
				this.state = 80;
				this.match(CJsParser.ID);
				this.state = 81;
				this.match(CJsParser.EQ);
				this.state = 82;
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
			this.state = 85;
			this.match(CJsParser.T__2);
			this.state = 86;
			this.match(CJsParser.LPAREN);
			this.state = 87;
			this.expr(0);
			this.state = 88;
			this.match(CJsParser.RPAREN);
			this.state = 89;
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
			this.state = 91;
			this.match(CJsParser.T__3);
			this.state = 92;
			this.match(CJsParser.LPAREN);
			this.state = 93;
			this.expr(0);
			this.state = 94;
			this.match(CJsParser.RPAREN);
			this.state = 95;
			this.block();
			this.state = 96;
			this.match(CJsParser.T__4);
			this.state = 97;
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
			this.state = 104;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 99;
				this.varDef();
				this.state = 100;
				this.match(CJsParser.COLON);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 102;
				this.funDef();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 103;
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
			this.state = 130;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 106;
				this.type();
				this.state = 107;
				this.funcName();
				this.state = 108;
				this.match(CJsParser.LPAREN);
				this.state = 109;
				this.match(CJsParser.RPAREN);
				this.state = 110;
				this.match(CJsParser.LCURLY);
				this.state = 111;
				this.program();
				this.state = 112;
				this.match(CJsParser.RCURLY);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 114;
				this.type();
				this.state = 115;
				this.funcName();
				this.state = 116;
				this.match(CJsParser.LPAREN);
				{
				this.state = 117;
				this.varDef();
				}
				this.state = 122;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CJsParser.COMMA) {
					{
					{
					this.state = 118;
					this.match(CJsParser.COMMA);
					this.state = 119;
					this.varDef();
					}
					}
					this.state = 124;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 125;
				this.match(CJsParser.RPAREN);
				this.state = 126;
				this.match(CJsParser.LCURLY);
				this.state = 127;
				this.program();
				this.state = 128;
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
			this.state = 132;
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
			this.state = 147;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				{
				this.state = 135;
				this.match(CJsParser.ID);
				}
				break;

			case 2:
				{
				this.state = 136;
				this.match(CJsParser.INT);
				}
				break;

			case 3:
				{
				this.state = 137;
				this.match(CJsParser.CHAR);
				}
				break;

			case 4:
				{
				this.state = 138;
				this.match(CJsParser.STRING);
				}
				break;

			case 5:
				{
				this.state = 139;
				this.funCall();
				}
				break;

			case 6:
				{
				this.state = 140;
				this.unaryOp();
				this.state = 141;
				this.expr(3);
				}
				break;

			case 7:
				{
				this.state = 143;
				this.match(CJsParser.LPAREN);
				this.state = 144;
				this.expr(0);
				this.state = 145;
				this.match(CJsParser.RPAREN);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 155;
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
					this.state = 149;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 150;
					this.binaryOp();
					this.state = 151;
					this.expr(3);
					}
					}
				}
				this.state = 157;
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
			this.state = 174;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 158;
				this.funcName();
				this.state = 159;
				this.match(CJsParser.LPAREN);
				this.state = 160;
				this.expr(0);
				this.state = 165;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CJsParser.COMMA) {
					{
					{
					this.state = 161;
					this.match(CJsParser.COMMA);
					this.state = 162;
					this.expr(0);
					}
					}
					this.state = 167;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 168;
				this.match(CJsParser.RPAREN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 170;
				this.funcName();
				this.state = 171;
				this.match(CJsParser.LPAREN);
				this.state = 172;
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
			this.state = 176;
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
			this.state = 178;
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
			this.state = 180;
			this.match(CJsParser.LCURLY);
			this.state = 181;
			this.program();
			this.state = 182;
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
			this.state = 184;
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
			this.state = 186;
			this.type();
			this.state = 187;
			this.match(CJsParser.ID);
			this.state = 188;
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
			this.state = 190;
			this.match(CJsParser.T__1);
			this.state = 191;
			this.match(CJsParser.ID);
			this.state = 192;
			this.match(CJsParser.LCURLY);
			this.state = 196;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CJsParser.T__13) | (1 << CJsParser.T__14) | (1 << CJsParser.T__15) | (1 << CJsParser.T__16) | (1 << CJsParser.T__17) | (1 << CJsParser.T__18))) !== 0)) {
				{
				{
				this.state = 193;
				this.structMember();
				}
				}
				this.state = 198;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 199;
			this.match(CJsParser.RCURLY);
			this.state = 200;
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
			return this.precpred(this._ctx, 2);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03*\xCD\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x03\x02\x03\x02\x03\x02\x03\x02\x05\x02-\n\x02" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03<\n\x03\x03\x04\x03\x04\x05\x04" +
		"@\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05" +
		"I\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x05\x07V\n\x07\x03\b\x03\b\x03\b\x03\b\x03\b" +
		"\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x05\nk\n\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x07\v{\n\v\f\v\x0E\v~\v\v\x03\v" +
		"\x03\v\x03\v\x03\v\x03\v\x05\v\x85\n\v\x03\f\x03\f\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\x96\n\r" +
		"\x03\r\x03\r\x03\r\x03\r\x07\r\x9C\n\r\f\r\x0E\r\x9F\v\r\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x07\x0E\xA6\n\x0E\f\x0E\x0E\x0E\xA9\v\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\xB1\n\x0E\x03\x0F" +
		"\x03\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12" +
		"\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x07\x14" +
		"\xC5\n\x14\f\x14\x0E\x14\xC8\v\x14\x03\x14\x03\x14\x03\x14\x03\x14\x02" +
		"\x02\x03\x18\x15\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10" +
		"\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02" +
		"$\x02&\x02\x02\x05\x05\x02\b\n\x19\x1B$$\x05\x02\v\x0F\x19\x1D\"#\x03" +
		"\x02\x10\x15\x02\xD2\x02,\x03\x02\x02\x02\x04;\x03\x02\x02\x02\x06=\x03" +
		"\x02\x02\x02\bH\x03\x02\x02\x02\nJ\x03\x02\x02\x02\fU\x03\x02\x02\x02" +
		"\x0EW\x03\x02\x02\x02\x10]\x03\x02\x02\x02\x12j\x03\x02\x02\x02\x14\x84" +
		"\x03\x02\x02\x02\x16\x86\x03\x02\x02\x02\x18\x95\x03\x02\x02\x02\x1A\xB0" +
		"\x03\x02\x02\x02\x1C\xB2\x03\x02\x02\x02\x1E\xB4\x03\x02\x02\x02 \xB6" +
		"\x03\x02\x02\x02\"\xBA\x03\x02\x02\x02$\xBC\x03\x02\x02\x02&\xC0\x03\x02" +
		"\x02\x02(-\x05\x04\x03\x02)*\x05\x04\x03\x02*+\x05\x02\x02\x02+-\x03\x02" +
		"\x02\x02,(\x03\x02\x02\x02,)\x03\x02\x02\x02-\x03\x03\x02\x02\x02./\x05" +
		"\f\x07\x02/0\x07 \x02\x020<\x03\x02\x02\x0212\x05\x18\r\x0223\x07 \x02" +
		"\x023<\x03\x02\x02\x024<\x05\x10\t\x025<\x05\x12\n\x026<\x05\x0E\b\x02" +
		"7<\x05 \x11\x0289\x05\x06\x04\x029:\x07 \x02\x02:<\x03\x02\x02\x02;.\x03" +
		"\x02\x02\x02;1\x03\x02\x02\x02;4\x03\x02\x02\x02;5\x03\x02\x02\x02;6\x03" +
		"\x02\x02\x02;7\x03\x02\x02\x02;8\x03\x02\x02\x02<\x05\x03\x02\x02\x02" +
		"=?\x07\x03\x02\x02>@\x05\x18\r\x02?>\x03\x02\x02\x02?@\x03\x02\x02\x02" +
		"@\x07\x03\x02\x02\x02AB\x05\"\x12\x02BC\x07*\x02\x02CI\x03\x02\x02\x02" +
		"DE\x05\"\x12\x02EF\x05\f\x07\x02FI\x03\x02\x02\x02GI\x05\n\x06\x02HA\x03" +
		"\x02\x02\x02HD\x03\x02\x02\x02HG\x03\x02\x02\x02I\t\x03\x02\x02\x02JK" +
		"\x07\x04\x02\x02KL\x07*\x02\x02LM\x07*\x02\x02M\v\x03\x02\x02\x02NO\x07" +
		"*\x02\x02OP\x07!\x02\x02PV\x05\x18\r\x02QR\x07\x1B\x02\x02RS\x07*\x02" +
		"\x02ST\x07!\x02\x02TV\x05\x18\r\x02UN\x03\x02\x02\x02UQ\x03\x02\x02\x02" +
		"V\r\x03\x02\x02\x02WX\x07\x05\x02\x02XY\x07%\x02\x02YZ\x05\x18\r\x02Z" +
		"[\x07&\x02\x02[\\\x05 \x11\x02\\\x0F\x03\x02\x02\x02]^\x07\x06\x02\x02" +
		"^_\x07%\x02\x02_`\x05\x18\r\x02`a\x07&\x02\x02ab\x05 \x11\x02bc\x07\x07" +
		"\x02\x02cd\x05 \x11\x02d\x11\x03\x02\x02\x02ef\x05\b\x05\x02fg\x07 \x02" +
		"\x02gk\x03\x02\x02\x02hk\x05\x14\v\x02ik\x05&\x14\x02je\x03\x02\x02\x02" +
		"jh\x03\x02\x02\x02ji\x03\x02\x02\x02k\x13\x03\x02\x02\x02lm\x05\"\x12" +
		"\x02mn\x05\x16\f\x02no\x07%\x02\x02op\x07&\x02\x02pq\x07\'\x02\x02qr\x05" +
		"\x02\x02\x02rs\x07(\x02\x02s\x85\x03\x02\x02\x02tu\x05\"\x12\x02uv\x05" +
		"\x16\f\x02vw\x07%\x02\x02w|\x05\b\x05\x02xy\x07\x1E\x02\x02y{\x05\b\x05" +
		"\x02zx\x03\x02\x02\x02{~\x03\x02\x02\x02|z\x03\x02\x02\x02|}\x03\x02\x02" +
		"\x02}\x7F\x03\x02\x02\x02~|\x03\x02\x02\x02\x7F\x80\x07&\x02\x02\x80\x81" +
		"\x07\'\x02\x02\x81\x82\x05\x02\x02\x02\x82\x83\x07(\x02\x02\x83\x85\x03" +
		"\x02\x02\x02\x84l\x03\x02\x02\x02\x84t\x03\x02\x02\x02\x85\x15\x03\x02" +
		"\x02\x02\x86\x87\x07*\x02\x02\x87\x17\x03\x02\x02\x02\x88\x89\b\r\x01" +
		"\x02\x89\x96\x07*\x02\x02\x8A\x96\x07)\x02\x02\x8B\x96\x07\x16\x02\x02" +
		"\x8C\x96\x07\x17\x02\x02\x8D\x96\x05\x1A\x0E\x02\x8E\x8F\x05\x1C\x0F\x02" +
		"\x8F\x90\x05\x18\r\x05\x90\x96\x03\x02\x02\x02\x91\x92\x07%\x02\x02\x92" +
		"\x93\x05\x18\r\x02\x93\x94\x07&\x02\x02\x94\x96\x03\x02\x02\x02\x95\x88" +
		"\x03\x02\x02\x02\x95\x8A\x03\x02\x02\x02\x95\x8B\x03\x02\x02\x02\x95\x8C" +
		"\x03\x02\x02\x02\x95\x8D\x03\x02\x02\x02\x95\x8E\x03\x02\x02\x02\x95\x91" +
		"\x03\x02\x02\x02\x96\x9D\x03\x02\x02\x02\x97\x98\f\x04\x02\x02\x98\x99" +
		"\x05\x1E\x10\x02\x99\x9A\x05\x18\r\x05\x9A\x9C\x03\x02\x02\x02\x9B\x97" +
		"\x03\x02\x02\x02\x9C\x9F\x03\x02\x02\x02\x9D\x9B\x03\x02\x02\x02\x9D\x9E" +
		"\x03\x02\x02\x02\x9E\x19\x03\x02\x02\x02\x9F\x9D\x03\x02\x02\x02\xA0\xA1" +
		"\x05\x16\f\x02\xA1\xA2\x07%\x02\x02\xA2\xA7\x05\x18\r\x02\xA3\xA4\x07" +
		"\x1E\x02\x02\xA4\xA6\x05\x18\r\x02\xA5\xA3\x03\x02\x02\x02\xA6\xA9\x03" +
		"\x02\x02\x02\xA7\xA5\x03\x02\x02\x02\xA7\xA8\x03\x02\x02\x02\xA8\xAA\x03" +
		"\x02\x02\x02\xA9\xA7\x03\x02\x02\x02\xAA\xAB\x07&\x02\x02\xAB\xB1\x03" +
		"\x02\x02\x02\xAC\xAD\x05\x16\f\x02\xAD\xAE\x07%\x02\x02\xAE\xAF\x07&\x02" +
		"\x02\xAF\xB1\x03\x02\x02\x02\xB0\xA0\x03\x02\x02\x02\xB0\xAC\x03\x02\x02" +
		"\x02\xB1\x1B\x03\x02\x02\x02\xB2\xB3\t\x02\x02\x02\xB3\x1D\x03\x02\x02" +
		"\x02\xB4\xB5\t\x03\x02\x02\xB5\x1F\x03\x02\x02\x02\xB6\xB7\x07\'\x02\x02" +
		"\xB7\xB8\x05\x02\x02\x02\xB8\xB9\x07(\x02\x02\xB9!\x03\x02\x02\x02\xBA" +
		"\xBB\t\x04\x02\x02\xBB#\x03\x02\x02\x02\xBC\xBD\x05\"\x12\x02\xBD\xBE" +
		"\x07*\x02\x02\xBE\xBF\x07 \x02\x02\xBF%\x03\x02\x02\x02\xC0\xC1\x07\x04" +
		"\x02\x02\xC1\xC2\x07*\x02\x02\xC2\xC6\x07\'\x02\x02\xC3\xC5\x05$\x13\x02" +
		"\xC4\xC3\x03\x02\x02\x02\xC5\xC8\x03\x02\x02\x02\xC6\xC4\x03\x02\x02\x02" +
		"\xC6\xC7\x03\x02\x02\x02\xC7\xC9\x03\x02\x02\x02\xC8\xC6\x03\x02\x02\x02" +
		"\xC9\xCA\x07(\x02\x02\xCA\xCB\x07 \x02\x02\xCB\'\x03\x02\x02\x02\x0F," +
		";?HUj|\x84\x95\x9D\xA7\xB0\xC6";
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


