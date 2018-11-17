var age = prompt("What is your age?");
console.log(age);

var data = new Date();
var currentYear = data.getFullYear();

var birthYear = currentYear - age;

document.getElementById("year").innerHTML= birthYear;
