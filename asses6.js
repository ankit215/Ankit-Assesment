//QUESTION 6
var email = "ankit@gmail.com";
var reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/;

var t1 = reg.test(email);
console.log(t1);// true