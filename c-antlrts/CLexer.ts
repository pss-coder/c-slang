// Generated from src/grammar/C.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class CLexer extends Lexer {
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

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "T__16", 
		"T__17", "T__18", "T__19", "T__20", "T__21", "T__22", "T__23", "T__24", 
		"T__25", "T__26", "T__27", "ID", "INT", "FLOAT", "STRING", "CHAR",
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
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(CLexer._LITERAL_NAMES, CLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return CLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(CLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "C.g4"; }

	// @Override
	public get ruleNames(): string[] { return CLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return CLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return CLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return CLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02#\xC7\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x03" +
		"\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03" +
		"\x06\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n" +
		"\x03\n\x03\v\x03\v\x03\f\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F" +
		"\x03\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03\x13\x03\x13" +
		"\x03\x13\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x16" +
		"\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17" +
		"\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19" +
		"\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C" +
		"\x03\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x07\x1E\x97\n\x1E\f\x1E\x0E\x1E" +
		"\x9A\v\x1E\x03\x1F\x06\x1F\x9D\n\x1F\r\x1F\x0E\x1F\x9E\x03 \x06 \xA2\n" +
		" \r \x0E \xA3\x03 \x03 \x07 \xA8\n \f \x0E \xAB\v \x03 \x03 \x06 \xAF" +
		"\n \r \x0E \xB0\x05 \xB3\n \x03!\x03!\x03!\x03!\x07!\xB9\n!\f!\x0E!\xBC" +
		"\v!\x03!\x03!\x03\"\x03\"\x03\"\x03\"\x05\"\xC4\n\"\x03\"\x03\"\x02\x02" +
		"\x02#\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b" +
		"\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02" +
		"\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13%\x02\x14\'\x02\x15)\x02" +
		"\x16+\x02\x17-\x02\x18/\x02\x191\x02\x1A3\x02\x1B5\x02\x1C7\x02\x1D9\x02" +
		"\x1E;\x02\x1F=\x02 ?\x02!A\x02\"C\x02#\x03\x02\x07\x05\x02C\\aac|\x06" +
		"\x022;C\\aac|\x03\x022;\x04\x02$$^^\x04\x02))^^\x02\xCF\x02\x03\x03\x02" +
		"\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02" +
		"\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02" +
		"\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02" +
		"\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02" +
		"\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02" +
		"\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02\x02" +
		")\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03\x02" +
		"\x02\x02\x021\x03\x02\x02\x02\x023\x03\x02\x02\x02\x025\x03\x02\x02\x02" +
		"\x027\x03\x02\x02\x02\x029\x03\x02\x02\x02\x02;\x03\x02\x02\x02\x02=\x03" +
		"\x02\x02\x02\x02?\x03\x02\x02\x02\x02A\x03\x02\x02\x02\x02C\x03\x02\x02" +
		"\x02\x03E\x03\x02\x02\x02\x05G\x03\x02\x02\x02\x07I\x03\x02\x02\x02\t" +
		"K\x03\x02\x02\x02\vM\x03\x02\x02\x02\rO\x03\x02\x02\x02\x0FR\x03\x02\x02" +
		"\x02\x11U\x03\x02\x02\x02\x13W\x03\x02\x02\x02\x15Z\x03\x02\x02\x02\x17" +
		"\\\x03\x02\x02\x02\x19_\x03\x02\x02\x02\x1Ba\x03\x02\x02\x02\x1Dc\x03" +
		"\x02\x02\x02\x1Fe\x03\x02\x02\x02!g\x03\x02\x02\x02#i\x03\x02\x02\x02" +
		"%k\x03\x02\x02\x02\'n\x03\x02\x02\x02)q\x03\x02\x02\x02+u\x03\x02\x02" +
		"\x02-{\x03\x02\x02\x02/\x80\x03\x02\x02\x021\x85\x03\x02\x02\x023\x8C" +
		"\x03\x02\x02\x025\x8E\x03\x02\x02\x027\x90\x03\x02\x02\x029\x92\x03\x02" +
		"\x02\x02;\x94\x03\x02\x02\x02=\x9C\x03\x02\x02\x02?\xB2\x03\x02\x02\x02" +
		"A\xB4\x03\x02\x02\x02C\xBF\x03\x02\x02\x02EF\x07=\x02\x02F\x04\x03\x02" +
		"\x02\x02GH\x07.\x02\x02H\x06\x03\x02\x02\x02IJ\x07*\x02\x02J\b\x03\x02" +
		"\x02\x02KL\x07+\x02\x02L\n\x03\x02\x02\x02MN\x07?\x02\x02N\f\x03\x02\x02" +
		"\x02OP\x07?\x02\x02PQ\x07?\x02\x02Q\x0E\x03\x02\x02\x02RS\x07#\x02\x02" +
		"ST\x07?\x02\x02T\x10\x03\x02\x02\x02UV\x07>\x02\x02V\x12\x03\x02\x02\x02" +
		"WX\x07>\x02\x02XY\x07?\x02\x02Y\x14\x03\x02\x02\x02Z[\x07@\x02\x02[\x16" +
		"\x03\x02\x02\x02\\]\x07@\x02\x02]^\x07?\x02\x02^\x18\x03\x02\x02\x02_" +
		"`\x07-\x02\x02`\x1A\x03\x02\x02\x02ab\x07/\x02\x02b\x1C\x03\x02\x02\x02" +
		"cd\x07,\x02\x02d\x1E\x03\x02\x02\x02ef\x071\x02\x02f \x03\x02\x02\x02" +
		"gh\x07\'\x02\x02h\"\x03\x02\x02\x02ij\x07#\x02\x02j$\x03\x02\x02\x02k" +
		"l\x07-\x02\x02lm\x07-\x02\x02m&\x03\x02\x02\x02no\x07/\x02\x02op\x07/" +
		"\x02\x02p(\x03\x02\x02\x02qr\x07k\x02\x02rs\x07p\x02\x02st\x07v\x02\x02" +
		"t*\x03\x02\x02\x02uv\x07h\x02\x02vw\x07n\x02\x02wx\x07q\x02\x02xy\x07" +
		"c\x02\x02yz\x07v\x02\x02z,\x03\x02\x02\x02{|\x07e\x02\x02|}\x07j\x02\x02" +
		"}~\x07c\x02\x02~\x7F\x07t\x02\x02\x7F.\x03\x02\x02\x02\x80\x81\x07x\x02" +
		"\x02\x81\x82\x07q\x02\x02\x82\x83\x07k\x02\x02\x83\x84\x07f\x02\x02\x84" +
		"0\x03\x02\x02\x02\x85\x86\x07u\x02\x02\x86\x87\x07v\x02\x02\x87\x88\x07" +
		"t\x02\x02\x88\x89\x07w\x02\x02\x89\x8A\x07e\x02\x02\x8A\x8B\x07v\x02\x02" +
		"\x8B2\x03\x02\x02\x02\x8C\x8D\x07}\x02\x02\x8D4\x03\x02\x02\x02\x8E\x8F" +
		"\x07\x7F\x02\x02\x8F6\x03\x02\x02\x02\x90\x91\x07]\x02\x02\x918\x03\x02" +
		"\x02\x02\x92\x93\x07_\x02\x02\x93:\x03\x02\x02\x02\x94\x98\t\x02\x02\x02" +
		"\x95\x97\t\x03\x02\x02\x96\x95\x03\x02\x02\x02\x97\x9A\x03\x02\x02\x02" +
		"\x98\x96\x03\x02\x02\x02\x98\x99\x03\x02\x02\x02\x99<\x03\x02\x02\x02" +
		"\x9A\x98\x03\x02\x02\x02\x9B\x9D\t\x04\x02\x02\x9C\x9B\x03\x02\x02\x02" +
		"\x9D\x9E\x03\x02\x02\x02\x9E\x9C\x03\x02\x02\x02\x9E\x9F\x03\x02\x02\x02" +
		"\x9F>\x03\x02\x02\x02\xA0\xA2\t\x04\x02\x02\xA1\xA0\x03\x02\x02\x02\xA2" +
		"\xA3\x03\x02\x02\x02\xA3\xA1\x03\x02\x02\x02\xA3\xA4\x03\x02\x02\x02\xA4" +
		"\xA5\x03\x02\x02\x02\xA5\xA9\x070\x02\x02\xA6\xA8\t\x04\x02\x02\xA7\xA6" +
		"\x03\x02\x02\x02\xA8\xAB\x03\x02\x02\x02\xA9\xA7\x03\x02\x02\x02\xA9\xAA" +
		"\x03\x02\x02\x02\xAA\xB3\x03\x02\x02\x02\xAB\xA9\x03\x02\x02\x02\xAC\xAE" +
		"\x070\x02\x02\xAD\xAF\t\x04\x02\x02\xAE\xAD\x03\x02\x02\x02\xAF\xB0\x03" +
		"\x02\x02\x02\xB0\xAE\x03\x02\x02\x02\xB0\xB1\x03\x02\x02\x02\xB1\xB3\x03" +
		"\x02\x02\x02\xB2\xA1\x03\x02\x02\x02\xB2\xAC\x03\x02\x02\x02\xB3@\x03" +
		"\x02\x02\x02\xB4\xBA\x07$\x02\x02\xB5\xB9\n\x05\x02\x02\xB6\xB7\x07^\x02" +
		"\x02\xB7\xB9\v\x02\x02\x02\xB8\xB5\x03\x02\x02\x02\xB8\xB6\x03\x02\x02" +
		"\x02\xB9\xBC\x03\x02\x02\x02\xBA\xB8\x03\x02\x02\x02\xBA\xBB\x03\x02\x02" +
		"\x02\xBB\xBD\x03\x02\x02\x02\xBC\xBA\x03\x02\x02\x02\xBD\xBE\x07$\x02" +
		"\x02\xBEB\x03\x02\x02\x02\xBF\xC3\x07)\x02\x02\xC0\xC4\n\x06\x02\x02\xC1" +
		"\xC2\x07^\x02\x02\xC2\xC4\v\x02\x02\x02\xC3\xC0\x03\x02\x02\x02\xC3\xC1" +
		"\x03\x02\x02\x02\xC4\xC5\x03\x02\x02\x02\xC5\xC6\x07)\x02\x02\xC6D\x03" +
		"\x02\x02\x02\f\x02\x98\x9E\xA3\xA9\xB0\xB2\xB8\xBA\xC3\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CLexer.__ATN) {
			CLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CLexer._serializedATN));
		}

		return CLexer.__ATN;
	}

}

