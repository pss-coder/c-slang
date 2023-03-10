// Generated from CCalc.g4 by ANTLR 4.9.0-SNAPSHOT


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


export class CCalcLexer extends Lexer {
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
		"T__9", "T__10", "T__11", "ID", "INT",
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
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(CCalcLexer._LITERAL_NAMES, CCalcLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return CCalcLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(CCalcLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "CCalc.g4"; }

	// @Override
	public get ruleNames(): string[] { return CCalcLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return CCalcLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return CCalcLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return CCalcLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x10Z\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03" +
		"\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\r" +
		"\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x07\x0EQ\n\x0E\f\x0E\x0E\x0ET\v\x0E" +
		"\x03\x0F\x06\x0FW\n\x0F\r\x0F\x0E\x0FX\x02\x02\x02\x10\x03\x02\x03\x05" +
		"\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13" +
		"\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x03\x02" +
		"\x05\x05\x02C\\aac|\x06\x022;C\\aac|\x03\x022;\x02[\x02\x03\x03\x02\x02" +
		"\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02" +
		"\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02" +
		"\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02" +
		"\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02" +
		"\x02\x1D\x03\x02\x02\x02\x03\x1F\x03\x02\x02\x02\x05,\x03\x02\x02\x02" +
		"\x078\x03\x02\x02\x02\t:\x03\x02\x02\x02\v<\x03\x02\x02\x02\r>\x03\x02" +
		"\x02\x02\x0F@\x03\x02\x02\x02\x11B\x03\x02\x02\x02\x13D\x03\x02\x02\x02" +
		"\x15F\x03\x02\x02\x02\x17H\x03\x02\x02\x02\x19J\x03\x02\x02\x02\x1BN\x03" +
		"\x02\x02\x02\x1DV\x03\x02\x02\x02\x1F \x07k\x02\x02 !\x07p\x02\x02!\"" +
		"\x07v\x02\x02\"#\x07\"\x02\x02#$\x07o\x02\x02$%\x07c\x02\x02%&\x07k\x02" +
		"\x02&\'\x07p\x02\x02\'(\x07*\x02\x02()\x07+\x02\x02)*\x07\"\x02\x02*+" +
		"\x07}\x02\x02+\x04\x03\x02\x02\x02,-\x07t\x02\x02-.\x07g\x02\x02./\x07" +
		"v\x02\x02/0\x07w\x02\x0201\x07t\x02\x0212\x07p\x02\x0223\x07\"\x02\x02" +
		"34\x072\x02\x0245\x07=\x02\x0256\x07\"\x02\x0267\x07\x7F\x02\x027\x06" +
		"\x03\x02\x02\x0289\x07=\x02\x029\b\x03\x02\x02\x02:;\x07.\x02\x02;\n\x03" +
		"\x02\x02\x02<=\x07?\x02\x02=\f\x03\x02\x02\x02>?\x07-\x02\x02?\x0E\x03" +
		"\x02\x02\x02@A\x07/\x02\x02A\x10\x03\x02\x02\x02BC\x07,\x02\x02C\x12\x03" +
		"\x02\x02\x02DE\x071\x02\x02E\x14\x03\x02\x02\x02FG\x07\'\x02\x02G\x16" +
		"\x03\x02\x02\x02HI\x07#\x02\x02I\x18\x03\x02\x02\x02JK\x07k\x02\x02KL" +
		"\x07p\x02\x02LM\x07v\x02\x02M\x1A\x03\x02\x02\x02NR\t\x02\x02\x02OQ\t" +
		"\x03\x02\x02PO\x03\x02\x02\x02QT\x03\x02\x02\x02RP\x03\x02\x02\x02RS\x03" +
		"\x02\x02\x02S\x1C\x03\x02\x02\x02TR\x03\x02\x02\x02UW\t\x04\x02\x02VU" +
		"\x03\x02\x02\x02WX\x03\x02\x02\x02XV\x03\x02\x02\x02XY\x03\x02\x02\x02" +
		"Y\x1E\x03\x02\x02\x02\x05\x02RX\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CCalcLexer.__ATN) {
			CCalcLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CCalcLexer._serializedATN));
		}

		return CCalcLexer.__ATN;
	}

}

