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

expr: ID
    | INT
    | CHAR
    | STRING
    | funCall
    | unaryOp expr
    | expr binaryOp expr
    | '(' expr ')'
    | arrAccess
    ;

return : 'return' (expr)?;


varDef: type ID 
    | type assg 
    | structInit
    | arrDef
    ;

structInit: 'struct' ID ID ;

assg: ID '=' expr
      | '*'ID '=' expr;


whileStat : 'while' '(' expr ')' block;


ifStat  : 'if' '(' expr ')' block 'else' block ;


def : varDef ';' | funDef | structDef;


funDef : type funcName '(' ')' '{' program '}'
       | type funcName  '(' (varDef) (',' varDef)* ')' '{' program '}';

funcName: ID;




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


structMember: type ID ';' ;
structDef: 'struct' ID '{' (structMember)* '}' ';' ;

arrDef: type ID'[]' '=' '{' expr (',' expr)* '}' ; 
arrAccess: ID ('[' INT ']')* ;

//==================================== Lexical components =========================================

CHAR : '\'' .*? '\'';
STRING : '"' (' '..'~')* '"';
WS     : [ \t\n\r]+ -> skip ;
ADD    : '+' ;
SUB    : '-' ;
MUL    : '*' ;
DIV    : '/' ;
MOD    : '%' ;

ARRAY  : '[]' ;

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