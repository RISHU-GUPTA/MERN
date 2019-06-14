function global(){
var a=10;
b=5;
var add=function add(x,y){
return x+y;
}
}
undefined
a;
/*VM214:1 Uncaught ReferenceError: a is not defined
    at <anonymous>:1:1
(anonymous) @ VM214:1 */
global();
undefined
function global(){
var a=10;
b=5;
var add=function add(x,y){
console.log(x+y);
}
return {add};
}
undefined
global();
{add: ƒ}
var e=global();
undefined
e[0];
undefined
e.add();
VM334:5 NaN
undefined
e.add(2,5);
VM334:5 7
undefined
function global(){
var a=10;
b=5;
var add=function add(x,y){
console.log(x+y);
}
return [add];
}
undefined
e.[0](2,5);
//VM497:1 Uncaught SyntaxError: Unexpected token [
var e=global();
undefined
e.[0](2,5);
//VM518:1 Uncaught SyntaxError: Unexpected token [
e[0]add(5,4);
//VM575:1 Uncaught SyntaxError: Unexpected identifier
e[0](5,4);
VM472:5 9
undefined
e
[ƒ]0: ƒ add(x,y)length: 1__proto__: Array(0)
function global(){
var a=10;
b=5;
var add=function (x,y){
console.log(x+y);
}
return [add];
}
undefined
var e=global();
undefined
e;
[ƒ]0: ƒ (x,y)arguments: nullcaller: nulllength: 2name: "add"prototype: {constructor: ƒ}__proto__: ƒ ()[[FunctionLocation]]: VM619:4[[Scopes]]: Scopes[1]length: 1__proto__: Array(0)
function global(){
var a=10;
b=5;
var add=function (x,y){
console.log(x+y);
}
return {add};
}
undefined
e;
[ƒ]0: ƒ (x,y)length: 1__proto__: Array(0)
var e=global();
undefined
e;
{add: ƒ}
e.add(1,2);
VM661:5 3
undefined
var aam=(x,y)=> x+y;
undefined
aam(1,8);
9
