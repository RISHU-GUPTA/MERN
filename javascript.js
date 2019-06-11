//Day 1
console.log("Hello World !");
/*Variables can be defined in three ways:
1. a=10;
2. var b=12; //function level scope, goes to upward direction; variable hoisting
3. let c=5; // block level scope, goes to downword , goes to call stack*/

//Day 2
x=10;
10
y=20;
20
x+y;
30
isNaN(x)
false
z="Rishu Gupta"
"Rishu Gupta"
x+y+z;
"30Rishu Gupta"
z+x+y;
"Rishu Gupta1020"
`${x+y}`+z;
"30Rishu Gupta"
x="10";
y="20";
x+y;
"1020"
x="10";
y="20";
y-x;
x+y;
"1020"
x="10";
y="20";
y-x;
10
typeof z;
"string"
typeof x;
"string"
var a=55;
undefined
typeof a;
"number"
typeof b;
"undefined"
typeof y;
"string"
parseInt(y);
20
y;
"20"
parseFloat(y);
20
var d=new Number (1000);
undefined
d;
Number {1000}__proto__: Number[[PrimitiveValue]]: 1000
d++;
1000
d
1001
d instanceof Number;
false
d instanceof Number;
false
d instanceof Object;
false
var d=new Number (1000);
undefined
d instanceof Number;
true
d instanceof Object;
true
let a=5;
VM925:1 Uncaught SyntaxError: Identifier 'a' has already been declared
    at <anonymous>:1:1
(anonymous) @ VM925:1
var a=5;
undefined
var b=10;
undefined
`The value of a is ${a} and b is ${b}`;
"The value of a is 5 and b is 10"
"the value of a is "+a+" and b is "+b;
"the value of a is 5 and b is 10"
var arr=["rishu",5,true,[1,2,3]];
undefined
arr;
(4) ["rishu", 5, true, Array(3)]
arr.push("gupta");
5
arr;
(5) ["rishu", 5, true, Array(3), "gupta"]
arr instanceof Object;
true
arr instanceof of Number;
VM1705:1 Uncaught SyntaxError: Unexpected identifier

