grammar C;

// Define the tokens used in C language
ID          : [a-zA-Z_] [a-zA-Z0-9_]* ;
INT         : [0-9]+ ;
FLOAT       : [0-9]+ '.' [0-9]* | '.' [0-9]+ ;
STRING      : '"' (~["\\] | '\\' .)* '"' ;
CHAR        : '\'' (~['\\] | '\\' .) '\'' ;

// Define the syntax rules
program     : statement+ ;
statement   : declaration | expression ';' ;
declaration : type ID (',' ID)* ';' | struct_declaration;
expression  : assignment ;
assignment  : equality (assignment_operator equality)* ;
equality    : relational (equality_operator relational)* ;
relational  : additive (relational_operator additive)* ;
additive    : multiplicative (additive_operator multiplicative)* ;
multiplicative : unary (multiplicative_operator unary)* ;
unary       : postfix | unary_operator unary ;
postfix     : primary (postfix_operator)* ;
primary     : '(' expression ')' | ID | INT | FLOAT | STRING | CHAR ;


// Define the operators used in C language
assignment_operator : '=' ;
equality_operator   : '==' | '!=' ;
relational_operator : '<' | '<=' | '>' | '>=' ;
additive_operator   : '+' | '-' ;
multiplicative_operator : '*' | '/' | '%' ;
unary_operator      : '+' | '-' | '!' ;
postfix_operator    : '++' | '--';

// Define the types used in C language
type        : 'int' | 'float' | 'char' | 'void' ;

// Struct
struct_declaration
            : 'struct' ID '{' struct_member_list? '}' ';' ;

struct_member_list
            : struct_member (',' struct_member)* ;

struct_member
            : type ID | type ID '[' INT ']' ;