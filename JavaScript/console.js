var a=10;
undefined
var b="rishu';
VM159:1 Uncaught SyntaxError: Invalid or unexpected token
var b="rishu";
undefined
console.log('hi %s your marks is %d ',b,a); 
VM276:1 hi rishu your marks is 10 
undefined
console.log('%c this is designed','color:#e5fd87');
VM425:1  this is designed
undefined
console.log('%c this is designed','color:#e5rd87');
VM431:1  this is designed
undefined
console.log('%c this is designed','color:#e5fd57');
VM439:1  this is designed
undefined
console.log('%c this is designed','color:#e8fd57');
VM445:1  this is designed
undefined
console.log('%c this is designed','color:#228B22');
VM479:1  this is designed
undefined
console.time('Draw frame');
var a=20;
var b=30;
var c=a+b*10-a;
console.log(c);
// Execute some code...

console.timeEnd('Draw frame');
VM556:5 300
VM556:8 Draw frame: 0.245849609375ms
undefined
%s	String
%d or %i	Integer
%f	Floating point value
%o	Expandable DOM element (as displayed in the ‘Elements’ tab of the dev tools)
%O	Expandable JavaScript object
%c	Formats the output using the CSS style you provide
VM561:1 Uncaught SyntaxError: Unexpected token %
console.log('%cThis text is styled!', 'color: #86CC00; background-color: blue; font-size: 20px; padding: 3px;')

VM566:1 This text is styled!
undefined
console.log('%cThis text is styled!', 'color: #86CC00; background-color: black; font-size: 20px; padding: 3px;')

VM576:1 This text is styled!
undefined
/*The console.assert() method takes two parameters, a boolean expression, and an object. If the result of the expression is false the object will be printed in the console.
VM588:1 Uncaught SyntaxError: Invalid or unexpected token
/*The console.assert() method takes two parameters, a boolean expression, and an object. If the result of the expression is false the object will be printed in the console.*/
undefined
var count = 5;
console.assert(count > 10, 'count is not larger than 10');
VM602:2 Assertion failed: count is not larger than 10
(anonymous) @ VM602:2
undefined
/*console.count(label)
The console.count() method will output the number of times that the count() method has been called. You will only get an accurate count if this method is called at the same line, with the same label each time.

This method can be useful for finding out how many times a function is being called in your code. */
undefined
function clickHandler() {
    console.count('Click handler called');
}
for (var i = 0; i < 3; i++) {
    clickHandler();
}

VM631:2 Click handler called: 1
VM631:2 Click handler called: 2
VM631:2 Click handler called: 3
undefined
var data = [
    {first_name: 'Matt', last_name: 'West', occupation: 'Programmer'},
    {first_name: 'Vince', last_name: 'Vaughn', occupation: 'Actor'},
    {first_name: 'Larry', last_name: 'Page', occupation: 'CEO'}  
];

console.table(data);

VM636:7 (index)first_namelast_nameoccupation0"Matt""West""Programmer"1"Vince""Vaughn""Actor"2"Larry""Page""CEO"Array(3)0: {first_name: "Matt", last_name: "West", occupation: "Programmer"}1: {first_name: "Vince", last_name: "Vaughn", occupation: "Actor"}2: {first_name: "Larry", last_name: "Page", occupation: "CEO"}length: 3__proto__: Array(0)
undefined
