// Generated from src/grammar/C.g4 by ANTLR 4.9.0-SNAPSHOT


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

import { CListener } from "./CListener";
import { CVisitor } from "./CVisitor";


export class CParser extends Parser {
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
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly ID = 29;
	public static readonly INT = 30;
	public static readonly FLOAT = 31;
	public static readonly STRING = 32;
	public static readonly CHAR = 33;
	public static readonly RULE_program = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_declaration = 2;
	public static readonly RULE_expression = 3;
	public static readonly RULE_assignment = 4;
	public static readonly RULE_equality = 5;
	public static readonly RULE_relational = 6;
	public static readonly RULE_additive = 7;
	public static readonly RULE_multiplicative = 8;
	public static readonly RULE_unary = 9;
	public static readonly RULE_postfix = 10;
	public static readonly RULE_primary = 11;
	public static readonly RULE_assignment_operator = 12;
	public static readonly RULE_equality_operator = 13;
	public static readonly RULE_relational_operator = 14;
	public static readonly RULE_additive_operator = 15;
	public static readonly RULE_multiplicative_operator = 16;
	public static readonly RULE_unary_operator = 17;
	public static readonly RULE_postfix_operator = 18;
	public static readonly RULE_type = 19;
	public static readonly RULE_struct_declaration = 20;
	public static readonly RULE_struct_member_list = 21;
	public static readonly RULE_struct_member = 22;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "statement", "declaration", "expression", "assignment", "equality", 
		"relational", "additive", "multiplicative", "unary", "postfix", "primary", 
		"assignment_operator", "equality_operator", "relational_operator", "additive_operator", 
		"multiplicative_operator", "unary_operator", "postfix_operator", "type", 
		"struct_declaration", "struct_member_list", "struct_member",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "';'", "','", "'('", "')'", "'='", "'=='", "'!='", "'<'", "'<='", 
		"'>'", "'>='", "'+'", "'-'", "'*'", "'/'", "'%'", "'!'", "'++'", "'--'", 
		"'int'", "'float'", "'char'", "'void'", "'struct'", "'{'", "'}'", "'['", 
		"']'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "ID", "INT", "FLOAT", "STRING", "CHAR",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(CParser._LITERAL_NAMES, CParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return CParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "C.g4"; }

	// @Override
	public get ruleNames(): string[] { return CParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return CParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(CParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, CParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 47;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 46;
				this.statement();
				}
				}
				this.state = 49;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (CParser.T__2 - 3)) | (1 << (CParser.T__11 - 3)) | (1 << (CParser.T__12 - 3)) | (1 << (CParser.T__16 - 3)) | (1 << (CParser.T__19 - 3)) | (1 << (CParser.T__20 - 3)) | (1 << (CParser.T__21 - 3)) | (1 << (CParser.T__22 - 3)) | (1 << (CParser.T__23 - 3)) | (1 << (CParser.ID - 3)) | (1 << (CParser.INT - 3)) | (1 << (CParser.FLOAT - 3)) | (1 << (CParser.STRING - 3)) | (1 << (CParser.CHAR - 3)))) !== 0));
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
		this.enterRule(_localctx, 2, CParser.RULE_statement);
		try {
			this.state = 55;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CParser.T__19:
			case CParser.T__20:
			case CParser.T__21:
			case CParser.T__22:
			case CParser.T__23:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 51;
				this.declaration();
				}
				break;
			case CParser.T__2:
			case CParser.T__11:
			case CParser.T__12:
			case CParser.T__16:
			case CParser.ID:
			case CParser.INT:
			case CParser.FLOAT:
			case CParser.STRING:
			case CParser.CHAR:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 52;
				this.expression();
				this.state = 53;
				this.match(CParser.T__0);
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
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, CParser.RULE_declaration);
		let _la: number;
		try {
			this.state = 69;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CParser.T__19:
			case CParser.T__20:
			case CParser.T__21:
			case CParser.T__22:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 57;
				this.type();
				this.state = 58;
				this.match(CParser.ID);
				this.state = 63;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CParser.T__1) {
					{
					{
					this.state = 59;
					this.match(CParser.T__1);
					this.state = 60;
					this.match(CParser.ID);
					}
					}
					this.state = 65;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 66;
				this.match(CParser.T__0);
				}
				break;
			case CParser.T__23:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 68;
				this.struct_declaration();
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
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, CParser.RULE_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 71;
			this.assignment();
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
		this.enterRule(_localctx, 8, CParser.RULE_assignment);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 73;
			this.equality();
			this.state = 79;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CParser.T__4) {
				{
				{
				this.state = 74;
				this.assignment_operator();
				this.state = 75;
				this.equality();
				}
				}
				this.state = 81;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	public equality(): EqualityContext {
		let _localctx: EqualityContext = new EqualityContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, CParser.RULE_equality);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 82;
			this.relational();
			this.state = 88;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CParser.T__5 || _la === CParser.T__6) {
				{
				{
				this.state = 83;
				this.equality_operator();
				this.state = 84;
				this.relational();
				}
				}
				this.state = 90;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	public relational(): RelationalContext {
		let _localctx: RelationalContext = new RelationalContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, CParser.RULE_relational);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 91;
			this.additive();
			this.state = 97;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__7) | (1 << CParser.T__8) | (1 << CParser.T__9) | (1 << CParser.T__10))) !== 0)) {
				{
				{
				this.state = 92;
				this.relational_operator();
				this.state = 93;
				this.additive();
				}
				}
				this.state = 99;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	public additive(): AdditiveContext {
		let _localctx: AdditiveContext = new AdditiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, CParser.RULE_additive);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 100;
			this.multiplicative();
			this.state = 106;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CParser.T__11 || _la === CParser.T__12) {
				{
				{
				this.state = 101;
				this.additive_operator();
				this.state = 102;
				this.multiplicative();
				}
				}
				this.state = 108;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	public multiplicative(): MultiplicativeContext {
		let _localctx: MultiplicativeContext = new MultiplicativeContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, CParser.RULE_multiplicative);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 109;
			this.unary();
			this.state = 115;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__13) | (1 << CParser.T__14) | (1 << CParser.T__15))) !== 0)) {
				{
				{
				this.state = 110;
				this.multiplicative_operator();
				this.state = 111;
				this.unary();
				}
				}
				this.state = 117;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	public unary(): UnaryContext {
		let _localctx: UnaryContext = new UnaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, CParser.RULE_unary);
		try {
			this.state = 122;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CParser.T__2:
			case CParser.ID:
			case CParser.INT:
			case CParser.FLOAT:
			case CParser.STRING:
			case CParser.CHAR:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 118;
				this.postfix();
				}
				break;
			case CParser.T__11:
			case CParser.T__12:
			case CParser.T__16:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 119;
				this.unary_operator();
				this.state = 120;
				this.unary();
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
	public postfix(): PostfixContext {
		let _localctx: PostfixContext = new PostfixContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, CParser.RULE_postfix);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 124;
			this.primary();
			this.state = 128;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CParser.T__17 || _la === CParser.T__18) {
				{
				{
				this.state = 125;
				this.postfix_operator();
				}
				}
				this.state = 130;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	public primary(): PrimaryContext {
		let _localctx: PrimaryContext = new PrimaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, CParser.RULE_primary);
		try {
			this.state = 140;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CParser.T__2:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 131;
				this.match(CParser.T__2);
				this.state = 132;
				this.expression();
				this.state = 133;
				this.match(CParser.T__3);
				}
				break;
			case CParser.ID:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 135;
				this.match(CParser.ID);
				}
				break;
			case CParser.INT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 136;
				this.match(CParser.INT);
				}
				break;
			case CParser.FLOAT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 137;
				this.match(CParser.FLOAT);
				}
				break;
			case CParser.STRING:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 138;
				this.match(CParser.STRING);
				}
				break;
			case CParser.CHAR:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 139;
				this.match(CParser.CHAR);
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
	public assignment_operator(): Assignment_operatorContext {
		let _localctx: Assignment_operatorContext = new Assignment_operatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, CParser.RULE_assignment_operator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 142;
			this.match(CParser.T__4);
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
	public equality_operator(): Equality_operatorContext {
		let _localctx: Equality_operatorContext = new Equality_operatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, CParser.RULE_equality_operator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 144;
			_la = this._input.LA(1);
			if (!(_la === CParser.T__5 || _la === CParser.T__6)) {
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
	public relational_operator(): Relational_operatorContext {
		let _localctx: Relational_operatorContext = new Relational_operatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, CParser.RULE_relational_operator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 146;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__7) | (1 << CParser.T__8) | (1 << CParser.T__9) | (1 << CParser.T__10))) !== 0))) {
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
	public additive_operator(): Additive_operatorContext {
		let _localctx: Additive_operatorContext = new Additive_operatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, CParser.RULE_additive_operator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 148;
			_la = this._input.LA(1);
			if (!(_la === CParser.T__11 || _la === CParser.T__12)) {
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
	public multiplicative_operator(): Multiplicative_operatorContext {
		let _localctx: Multiplicative_operatorContext = new Multiplicative_operatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, CParser.RULE_multiplicative_operator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 150;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__13) | (1 << CParser.T__14) | (1 << CParser.T__15))) !== 0))) {
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
		this.enterRule(_localctx, 34, CParser.RULE_unary_operator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 152;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__11) | (1 << CParser.T__12) | (1 << CParser.T__16))) !== 0))) {
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
	public postfix_operator(): Postfix_operatorContext {
		let _localctx: Postfix_operatorContext = new Postfix_operatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, CParser.RULE_postfix_operator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 154;
			_la = this._input.LA(1);
			if (!(_la === CParser.T__17 || _la === CParser.T__18)) {
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
		this.enterRule(_localctx, 38, CParser.RULE_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 156;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__19) | (1 << CParser.T__20) | (1 << CParser.T__21) | (1 << CParser.T__22))) !== 0))) {
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
	public struct_declaration(): Struct_declarationContext {
		let _localctx: Struct_declarationContext = new Struct_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, CParser.RULE_struct_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 158;
			this.match(CParser.T__23);
			this.state = 159;
			this.match(CParser.ID);
			this.state = 160;
			this.match(CParser.T__24);
			this.state = 162;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__19) | (1 << CParser.T__20) | (1 << CParser.T__21) | (1 << CParser.T__22))) !== 0)) {
				{
				this.state = 161;
				this.struct_member_list();
				}
			}

			this.state = 164;
			this.match(CParser.T__25);
			this.state = 165;
			this.match(CParser.T__0);
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
	public struct_member_list(): Struct_member_listContext {
		let _localctx: Struct_member_listContext = new Struct_member_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, CParser.RULE_struct_member_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 167;
			this.struct_member();
			this.state = 172;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CParser.T__1) {
				{
				{
				this.state = 168;
				this.match(CParser.T__1);
				this.state = 169;
				this.struct_member();
				}
				}
				this.state = 174;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	public struct_member(): Struct_memberContext {
		let _localctx: Struct_memberContext = new Struct_memberContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, CParser.RULE_struct_member);
		try {
			this.state = 184;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 175;
				this.type();
				this.state = 176;
				this.match(CParser.ID);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 178;
				this.type();
				this.state = 179;
				this.match(CParser.ID);
				this.state = 180;
				this.match(CParser.T__26);
				this.state = 181;
				this.match(CParser.INT);
				this.state = 182;
				this.match(CParser.T__27);
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

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03#\xBD\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x03\x02\x06\x022\n\x02\r\x02\x0E\x023\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x05\x03:\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04@\n\x04" +
		"\f\x04\x0E\x04C\v\x04\x03\x04\x03\x04\x03\x04\x05\x04H\n\x04\x03\x05\x03" +
		"\x05\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06P\n\x06\f\x06\x0E\x06S\v\x06" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07Y\n\x07\f\x07\x0E\x07\\\v\x07" +
		"\x03\b\x03\b\x03\b\x03\b\x07\bb\n\b\f\b\x0E\be\v\b\x03\t\x03\t\x03\t\x03" +
		"\t\x07\tk\n\t\f\t\x0E\tn\v\t\x03\n\x03\n\x03\n\x03\n\x07\nt\n\n\f\n\x0E" +
		"\nw\v\n\x03\v\x03\v\x03\v\x03\v\x05\v}\n\v\x03\f\x03\f\x07\f\x81\n\f\f" +
		"\f\x0E\f\x84\v\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r" +
		"\x05\r\x8F\n\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x11" +
		"\x03\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03\x14\x03\x14\x03\x15\x03\x15" +
		"\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16\xA5\n\x16\x03\x16\x03\x16\x03" +
		"\x16\x03\x17\x03\x17\x03\x17\x07\x17\xAD\n\x17\f\x17\x0E\x17\xB0\v\x17" +
		"\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18" +
		"\x05\x18\xBB\n\x18\x03\x18\x02\x02\x02\x19\x02\x02\x04\x02\x06\x02\b\x02" +
		"\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C" +
		"\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x02\x02\t\x03\x02\b" +
		"\t\x03\x02\n\r\x03\x02\x0E\x0F\x03\x02\x10\x12\x04\x02\x0E\x0F\x13\x13" +
		"\x03\x02\x14\x15\x03\x02\x16\x19\x02\xB8\x021\x03\x02\x02\x02\x049\x03" +
		"\x02\x02\x02\x06G\x03\x02\x02\x02\bI\x03\x02\x02\x02\nK\x03\x02\x02\x02" +
		"\fT\x03\x02\x02\x02\x0E]\x03\x02\x02\x02\x10f\x03\x02\x02\x02\x12o\x03" +
		"\x02\x02\x02\x14|\x03\x02\x02\x02\x16~\x03\x02\x02\x02\x18\x8E\x03\x02" +
		"\x02\x02\x1A\x90\x03\x02\x02\x02\x1C\x92\x03\x02\x02\x02\x1E\x94\x03\x02" +
		"\x02\x02 \x96\x03\x02\x02\x02\"\x98\x03\x02\x02\x02$\x9A\x03\x02\x02\x02" +
		"&\x9C\x03\x02\x02\x02(\x9E\x03\x02\x02\x02*\xA0\x03\x02\x02\x02,\xA9\x03" +
		"\x02\x02\x02.\xBA\x03\x02\x02\x0202\x05\x04\x03\x0210\x03\x02\x02\x02" +
		"23\x03\x02\x02\x0231\x03\x02\x02\x0234\x03\x02\x02\x024\x03\x03\x02\x02" +
		"\x025:\x05\x06\x04\x0267\x05\b\x05\x0278\x07\x03\x02\x028:\x03\x02\x02" +
		"\x0295\x03\x02\x02\x0296\x03\x02\x02\x02:\x05\x03\x02\x02\x02;<\x05(\x15" +
		"\x02<A\x07\x1F\x02\x02=>\x07\x04\x02\x02>@\x07\x1F\x02\x02?=\x03\x02\x02" +
		"\x02@C\x03\x02\x02\x02A?\x03\x02\x02\x02AB\x03\x02\x02\x02BD\x03\x02\x02" +
		"\x02CA\x03\x02\x02\x02DE\x07\x03\x02\x02EH\x03\x02\x02\x02FH\x05*\x16" +
		"\x02G;\x03\x02\x02\x02GF\x03\x02\x02\x02H\x07\x03\x02\x02\x02IJ\x05\n" +
		"\x06\x02J\t\x03\x02\x02\x02KQ\x05\f\x07\x02LM\x05\x1A\x0E\x02MN\x05\f" +
		"\x07\x02NP\x03\x02\x02\x02OL\x03\x02\x02\x02PS\x03\x02\x02\x02QO\x03\x02" +
		"\x02\x02QR\x03\x02\x02\x02R\v\x03\x02\x02\x02SQ\x03\x02\x02\x02TZ\x05" +
		"\x0E\b\x02UV\x05\x1C\x0F\x02VW\x05\x0E\b\x02WY\x03\x02\x02\x02XU\x03\x02" +
		"\x02\x02Y\\\x03\x02\x02\x02ZX\x03\x02\x02\x02Z[\x03\x02\x02\x02[\r\x03" +
		"\x02\x02\x02\\Z\x03\x02\x02\x02]c\x05\x10\t\x02^_\x05\x1E\x10\x02_`\x05" +
		"\x10\t\x02`b\x03\x02\x02\x02a^\x03\x02\x02\x02be\x03\x02\x02\x02ca\x03" +
		"\x02\x02\x02cd\x03\x02\x02\x02d\x0F\x03\x02\x02\x02ec\x03\x02\x02\x02" +
		"fl\x05\x12\n\x02gh\x05 \x11\x02hi\x05\x12\n\x02ik\x03\x02\x02\x02jg\x03" +
		"\x02\x02\x02kn\x03\x02\x02\x02lj\x03\x02\x02\x02lm\x03\x02\x02\x02m\x11" +
		"\x03\x02\x02\x02nl\x03\x02\x02\x02ou\x05\x14\v\x02pq\x05\"\x12\x02qr\x05" +
		"\x14\v\x02rt\x03\x02\x02\x02sp\x03\x02\x02\x02tw\x03\x02\x02\x02us\x03" +
		"\x02\x02\x02uv\x03\x02\x02\x02v\x13\x03\x02\x02\x02wu\x03\x02\x02\x02" +
		"x}\x05\x16\f\x02yz\x05$\x13\x02z{\x05\x14\v\x02{}\x03\x02\x02\x02|x\x03" +
		"\x02\x02\x02|y\x03\x02\x02\x02}\x15\x03\x02\x02\x02~\x82\x05\x18\r\x02" +
		"\x7F\x81\x05&\x14\x02\x80\x7F\x03\x02\x02\x02\x81\x84\x03\x02\x02\x02" +
		"\x82\x80\x03\x02\x02\x02\x82\x83\x03\x02\x02\x02\x83\x17\x03\x02\x02\x02" +
		"\x84\x82\x03\x02\x02\x02\x85\x86\x07\x05\x02\x02\x86\x87\x05\b\x05\x02" +
		"\x87\x88\x07\x06\x02\x02\x88\x8F\x03\x02\x02\x02\x89\x8F\x07\x1F\x02\x02" +
		"\x8A\x8F\x07 \x02\x02\x8B\x8F\x07!\x02\x02\x8C\x8F\x07\"\x02\x02\x8D\x8F" +
		"\x07#\x02\x02\x8E\x85\x03\x02\x02\x02\x8E\x89\x03\x02\x02\x02\x8E\x8A" +
		"\x03\x02\x02\x02\x8E\x8B\x03\x02\x02\x02\x8E\x8C\x03\x02\x02\x02\x8E\x8D" +
		"\x03\x02\x02\x02\x8F\x19\x03\x02\x02\x02\x90\x91\x07\x07\x02\x02\x91\x1B" +
		"\x03\x02\x02\x02\x92\x93\t\x02\x02\x02\x93\x1D\x03\x02\x02\x02\x94\x95" +
		"\t\x03\x02\x02\x95\x1F\x03\x02\x02\x02\x96\x97\t\x04\x02\x02\x97!\x03" +
		"\x02\x02\x02\x98\x99\t\x05\x02\x02\x99#\x03\x02\x02\x02\x9A\x9B\t\x06" +
		"\x02\x02\x9B%\x03\x02\x02\x02\x9C\x9D\t\x07\x02\x02\x9D\'\x03\x02\x02" +
		"\x02\x9E\x9F\t\b\x02\x02\x9F)\x03\x02\x02\x02\xA0\xA1\x07\x1A\x02\x02" +
		"\xA1\xA2\x07\x1F\x02\x02\xA2\xA4\x07\x1B\x02\x02\xA3\xA5\x05,\x17\x02" +
		"\xA4\xA3\x03\x02\x02\x02\xA4\xA5\x03\x02\x02\x02\xA5\xA6\x03\x02\x02\x02" +
		"\xA6\xA7\x07\x1C\x02\x02\xA7\xA8\x07\x03\x02\x02\xA8+\x03\x02\x02\x02" +
		"\xA9\xAE\x05.\x18\x02\xAA\xAB\x07\x04\x02\x02\xAB\xAD\x05.\x18\x02\xAC" +
		"\xAA\x03\x02\x02\x02\xAD\xB0\x03\x02\x02\x02\xAE\xAC\x03\x02\x02\x02\xAE" +
		"\xAF\x03\x02\x02\x02\xAF-\x03\x02\x02\x02\xB0\xAE\x03\x02\x02\x02\xB1" +
		"\xB2\x05(\x15\x02\xB2\xB3\x07\x1F\x02\x02\xB3\xBB\x03\x02\x02\x02\xB4" +
		"\xB5\x05(\x15\x02\xB5\xB6\x07\x1F\x02\x02\xB6\xB7\x07\x1D\x02\x02\xB7" +
		"\xB8\x07 \x02\x02\xB8\xB9\x07\x1E\x02\x02\xB9\xBB\x03\x02\x02\x02\xBA" +
		"\xB1\x03\x02\x02\x02\xBA\xB4\x03\x02\x02\x02\xBB/\x03\x02\x02\x02\x11" +
		"39AGQZclu|\x82\x8E\xA4\xAE\xBA";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CParser.__ATN) {
			CParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CParser._serializedATN));
		}

		return CParser.__ATN;
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
	public get ruleIndex(): number { return CParser.RULE_program; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
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
	public get ruleIndex(): number { return CParser.RULE_statement; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationContext extends ParserRuleContext {
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.ID);
		} else {
			return this.getToken(CParser.ID, i);
		}
	}
	public struct_declaration(): Struct_declarationContext | undefined {
		return this.tryGetRuleContext(0, Struct_declarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_declaration; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterDeclaration) {
			listener.enterDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitDeclaration) {
			listener.exitDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitDeclaration) {
			return visitor.visitDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public assignment(): AssignmentContext {
		return this.getRuleContext(0, AssignmentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_expression; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentContext extends ParserRuleContext {
	public equality(): EqualityContext[];
	public equality(i: number): EqualityContext;
	public equality(i?: number): EqualityContext | EqualityContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EqualityContext);
		} else {
			return this.getRuleContext(i, EqualityContext);
		}
	}
	public assignment_operator(): Assignment_operatorContext[];
	public assignment_operator(i: number): Assignment_operatorContext;
	public assignment_operator(i?: number): Assignment_operatorContext | Assignment_operatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Assignment_operatorContext);
		} else {
			return this.getRuleContext(i, Assignment_operatorContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_assignment; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterAssignment) {
			listener.enterAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitAssignment) {
			listener.exitAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitAssignment) {
			return visitor.visitAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EqualityContext extends ParserRuleContext {
	public relational(): RelationalContext[];
	public relational(i: number): RelationalContext;
	public relational(i?: number): RelationalContext | RelationalContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RelationalContext);
		} else {
			return this.getRuleContext(i, RelationalContext);
		}
	}
	public equality_operator(): Equality_operatorContext[];
	public equality_operator(i: number): Equality_operatorContext;
	public equality_operator(i?: number): Equality_operatorContext | Equality_operatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Equality_operatorContext);
		} else {
			return this.getRuleContext(i, Equality_operatorContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_equality; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterEquality) {
			listener.enterEquality(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitEquality) {
			listener.exitEquality(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitEquality) {
			return visitor.visitEquality(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RelationalContext extends ParserRuleContext {
	public additive(): AdditiveContext[];
	public additive(i: number): AdditiveContext;
	public additive(i?: number): AdditiveContext | AdditiveContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AdditiveContext);
		} else {
			return this.getRuleContext(i, AdditiveContext);
		}
	}
	public relational_operator(): Relational_operatorContext[];
	public relational_operator(i: number): Relational_operatorContext;
	public relational_operator(i?: number): Relational_operatorContext | Relational_operatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Relational_operatorContext);
		} else {
			return this.getRuleContext(i, Relational_operatorContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_relational; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterRelational) {
			listener.enterRelational(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitRelational) {
			listener.exitRelational(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitRelational) {
			return visitor.visitRelational(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AdditiveContext extends ParserRuleContext {
	public multiplicative(): MultiplicativeContext[];
	public multiplicative(i: number): MultiplicativeContext;
	public multiplicative(i?: number): MultiplicativeContext | MultiplicativeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MultiplicativeContext);
		} else {
			return this.getRuleContext(i, MultiplicativeContext);
		}
	}
	public additive_operator(): Additive_operatorContext[];
	public additive_operator(i: number): Additive_operatorContext;
	public additive_operator(i?: number): Additive_operatorContext | Additive_operatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Additive_operatorContext);
		} else {
			return this.getRuleContext(i, Additive_operatorContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_additive; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterAdditive) {
			listener.enterAdditive(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitAdditive) {
			listener.exitAdditive(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitAdditive) {
			return visitor.visitAdditive(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultiplicativeContext extends ParserRuleContext {
	public unary(): UnaryContext[];
	public unary(i: number): UnaryContext;
	public unary(i?: number): UnaryContext | UnaryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UnaryContext);
		} else {
			return this.getRuleContext(i, UnaryContext);
		}
	}
	public multiplicative_operator(): Multiplicative_operatorContext[];
	public multiplicative_operator(i: number): Multiplicative_operatorContext;
	public multiplicative_operator(i?: number): Multiplicative_operatorContext | Multiplicative_operatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Multiplicative_operatorContext);
		} else {
			return this.getRuleContext(i, Multiplicative_operatorContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_multiplicative; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterMultiplicative) {
			listener.enterMultiplicative(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitMultiplicative) {
			listener.exitMultiplicative(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitMultiplicative) {
			return visitor.visitMultiplicative(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnaryContext extends ParserRuleContext {
	public postfix(): PostfixContext | undefined {
		return this.tryGetRuleContext(0, PostfixContext);
	}
	public unary_operator(): Unary_operatorContext | undefined {
		return this.tryGetRuleContext(0, Unary_operatorContext);
	}
	public unary(): UnaryContext | undefined {
		return this.tryGetRuleContext(0, UnaryContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_unary; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterUnary) {
			listener.enterUnary(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitUnary) {
			listener.exitUnary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitUnary) {
			return visitor.visitUnary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PostfixContext extends ParserRuleContext {
	public primary(): PrimaryContext {
		return this.getRuleContext(0, PrimaryContext);
	}
	public postfix_operator(): Postfix_operatorContext[];
	public postfix_operator(i: number): Postfix_operatorContext;
	public postfix_operator(i?: number): Postfix_operatorContext | Postfix_operatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Postfix_operatorContext);
		} else {
			return this.getRuleContext(i, Postfix_operatorContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_postfix; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterPostfix) {
			listener.enterPostfix(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitPostfix) {
			listener.exitPostfix(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitPostfix) {
			return visitor.visitPostfix(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public ID(): TerminalNode | undefined { return this.tryGetToken(CParser.ID, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(CParser.INT, 0); }
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(CParser.FLOAT, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(CParser.STRING, 0); }
	public CHAR(): TerminalNode | undefined { return this.tryGetToken(CParser.CHAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_primary; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterPrimary) {
			listener.enterPrimary(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitPrimary) {
			listener.exitPrimary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitPrimary) {
			return visitor.visitPrimary(this);
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
	public get ruleIndex(): number { return CParser.RULE_assignment_operator; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterAssignment_operator) {
			listener.enterAssignment_operator(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitAssignment_operator) {
			listener.exitAssignment_operator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitAssignment_operator) {
			return visitor.visitAssignment_operator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Equality_operatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_equality_operator; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterEquality_operator) {
			listener.enterEquality_operator(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitEquality_operator) {
			listener.exitEquality_operator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitEquality_operator) {
			return visitor.visitEquality_operator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Relational_operatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_relational_operator; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterRelational_operator) {
			listener.enterRelational_operator(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitRelational_operator) {
			listener.exitRelational_operator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitRelational_operator) {
			return visitor.visitRelational_operator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Additive_operatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_additive_operator; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterAdditive_operator) {
			listener.enterAdditive_operator(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitAdditive_operator) {
			listener.exitAdditive_operator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitAdditive_operator) {
			return visitor.visitAdditive_operator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Multiplicative_operatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_multiplicative_operator; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterMultiplicative_operator) {
			listener.enterMultiplicative_operator(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitMultiplicative_operator) {
			listener.exitMultiplicative_operator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitMultiplicative_operator) {
			return visitor.visitMultiplicative_operator(this);
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
	public get ruleIndex(): number { return CParser.RULE_unary_operator; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterUnary_operator) {
			listener.enterUnary_operator(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitUnary_operator) {
			listener.exitUnary_operator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitUnary_operator) {
			return visitor.visitUnary_operator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Postfix_operatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_postfix_operator; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterPostfix_operator) {
			listener.enterPostfix_operator(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitPostfix_operator) {
			listener.exitPostfix_operator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitPostfix_operator) {
			return visitor.visitPostfix_operator(this);
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
	public get ruleIndex(): number { return CParser.RULE_type; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterType) {
			listener.enterType(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitType) {
			listener.exitType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitType) {
			return visitor.visitType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Struct_declarationContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(CParser.ID, 0); }
	public struct_member_list(): Struct_member_listContext | undefined {
		return this.tryGetRuleContext(0, Struct_member_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_struct_declaration; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterStruct_declaration) {
			listener.enterStruct_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitStruct_declaration) {
			listener.exitStruct_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitStruct_declaration) {
			return visitor.visitStruct_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Struct_member_listContext extends ParserRuleContext {
	public struct_member(): Struct_memberContext[];
	public struct_member(i: number): Struct_memberContext;
	public struct_member(i?: number): Struct_memberContext | Struct_memberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Struct_memberContext);
		} else {
			return this.getRuleContext(i, Struct_memberContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_struct_member_list; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterStruct_member_list) {
			listener.enterStruct_member_list(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitStruct_member_list) {
			listener.exitStruct_member_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitStruct_member_list) {
			return visitor.visitStruct_member_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Struct_memberContext extends ParserRuleContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public ID(): TerminalNode { return this.getToken(CParser.ID, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(CParser.INT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_struct_member; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterStruct_member) {
			listener.enterStruct_member(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitStruct_member) {
			listener.exitStruct_member(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitStruct_member) {
			return visitor.visitStruct_member(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


