grammar CJs;

program : stat | stat program;


stat: assg ';'
    | expr ';'
    | ifStat
    | def 
    | whileStat
    | block
    | return ';'
    ;

return : 'return' (expr)?;


varDef: type ID | type assg;


assg: ID '=' expr
      | '*'ID '=' expr;


whileStat : 'while' '(' expr ')' block;


ifStat  : 'if' '(' expr ')' block 'else' block ;


def : varDef ';' | funDef;


funDef : type funcName '(' ')' '{' program '}'
       | type funcName  '(' (varDef) (',' varDef)* ')' '{' program '}';

funcName: ID;

expr: ID
    | INT
    | CHAR
    | funCall
    | unaryOp expr
    | expr binaryOp expr
    | '(' expr ')'
    ;


funCall : funcName '(' expr (',' expr)* ')'
        | funcName '(' ')';


unaryOp :   '++' 
          | '--' 
          | '!'
          | '*'
          | '&'
          | '+'
          | '-'
          ;
          


binaryOp : '*' 
         | '+' 
         | '-' 
         | '/' 
         | '%' 
         | '&&' 
         | '||' 
         | '==' 
         | '<'
         | '>'
         | '>='
         | '<='
         ;


block : '{' program '}';


type  : 'void'
      | 'int'
      | 'char' 
      | 'void*'
      | 'int*'
      | 'char*'
      ;







//==================================== Lexical components =========================================

CHAR : '\'' .*? '\'';
STRING : '"' (' '..'~')* '"';
WS     : [ \t\n\r]+ -> skip ;
ADD    : '+' ;
SUB    : '-' ;
MUL    : '*' ;
DIV    : '/' ;
MOD    : '%' ;
COMMA  : ',';
PRINT  : 'print';
COLON  : ';';
EQ  : '=';

AND : '&&' ;
OR : '||' ;
NOT : '!' ;
LPAREN : '(' ;
RPAREN : ')' ;
LCURLY : '{' ;
RCURLY : '}' ;

INT : [0-9]+ ;




ID: [a-zA-Z_][a-zA-Z_0-9]* ;