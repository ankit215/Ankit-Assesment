//QUESTION 4
var a = 'ankit';
var b = 20;
console.log("Hi, my name is " +a+ " and my age is " +b+ ".");

//=> Hi, my name is ankit and my age is 20.(STRING LITERAL)
//=> Single or double quotes are used to with regular strings. 
//=> Here we have to use + for concatenate a variable in our string.
//=> it is an old method.


console.log(`Hi, my name is ${a} and my age is ${b}.`)
//=> Hi, my name is ankit and my age is 20.(Template LITERAL)
//=> Template Literals use back-ticks rather than the single or double quotes we're used to with regular strings. 
//=> The template literal can contain placeholders using the ${ } syntax.
//=> The value populated in placeholders including the text between them gets passed to a function. 
//=> This is determined on the expression before the template string. 
//=> If no expression exists before the template literal, the default template is used.