// console.log("Monday")
// console.log("Tuesday")
// console.log("Wednesday")
// console.log("Thursday")
// console.log("Friday")
// console.log("Saturday")
// console.log("Sunday")

// console.table({a:1, b:3})
// console.table([0,1,2,3,4])

// console.error("This is an error")

// console.warn("WARNING!")

// function myfunction(){
//     alert("My first JavaScript function")
// }

// function nameDisplay(){
//     alert("Tatiana")
// }

// function weather(){
//     alert("It's sunny today")
// }

// function day(){
//     alert("Today is Thursday")
// }
var num1=20;
var num2=5;
var num3;
var word1="Hello";
var word2="World";
var word3;

function add(){
    num3=num1+num2;
    alert("The sum is: "+num3)
}

function subtract(){
    num3=num1-num2;
    alert("The difference is: "+num3)
}

function multiply(){
    num3=num1*num2;
    alert("The product is: "+num3)
}

function divide(){
    num3=num1/num2;
    alert("The quotient is: "+num3)
}

function stringtest(){
    word3=word1+" "+word2;
    alert(word3);
}

function lighton(){
    document.getElementById('bulb').src="http://w3schools.com/js/pic_bulbon.gif"
}

function lightoff(){
    document.getElementById('bulb').src="http://w3schools.com/js/pic_bulboff.gif"
}