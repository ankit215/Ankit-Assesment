//QUESTION 6
var email = "ankit@gmail.com";
var reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/;

var a = reg.test(email);
console.log(a);// true
