// Problem-1
// function factorial(n){
//   let answer = 1;
//   if (n == 0 || n == 1){
//     return answer;
//   }else{
//     for(var i = n; i >= 1; i--){
//       answer = answer * i;
//     }
//     return answer;
//   }  
// }
// let n = 5;
// answer = factorial(n)
// console.log("The factorial of " + n + " is " + answer);

// Problem-2
//  var n=2;
//  var cube;
//  var cube=n*n*n; 
//  console.log("Cube of a Number = "+cube);

// // Problem-3
// function areaTriangle() {
//    let area;
//    let side = 20;
//    area = Math.sqrt(3)/4*side*side;
//    console.log(Math.round(area));
// }
// areaTriangle();



// Problem-4
// function getDays (year, month) {
// 	return new Date(year, month, 0 ).getDate() ;
// }
// const date = new Date();
// const year = date.getFullYear();
// const month = date.getMonth() +1; 
// const daysInMonth = getDays(2022, 2);
// console.log(daysInMonth);
  
  // Problem-5
//   function cToF(celsius) 
// {
//   var cTemp = celsius;
//   var cToFahr = cTemp * 9 / 5 + 32;
//   var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
//     console.log(message);
// } 
// cToF(12);
// // console.log('\xB0'); this \xB0 is for a degree symbol

// Problem 6
// function findSum(n) {
// 	let result = 0;
// 	for(let i = 1; i <= n; i++) {
// 	  result = result + i;
// 	}
// 	return result
//   }
//   let n = 10;
//   console.log(`Sum of numebers from 1 to ${n} is ${findSum(n)}`)

// Problem 7
// JavaScript program to find Nth term
// in the given Series
	// "use strict"
	// function nthTerm(num){
	//   let term
	//   term = num*num
	//   console.log(term)
	// }
	// nthTerm(18)

	// Problem 8
    // var str ="lorem Ipsum";
	// str = str.replace(" ","");
	// console.log(str.length);
    
// Problem 9
// function findRoots(a, b, c) {
// 		if (a == 0) {
// 			console.log("Invalid");
// 			return;
// 		}
// 		let d = b * b - 4 * a * c;
// 		let sqrt_val = Math.sqrt(Math.abs(d));
// 		if (d > 0) {
// 			console.log("Roots are real and different \n" + " ");
//             console.log((-b + sqrt_val) / (2 * a) + " "+ (-b - sqrt_val) / (2 * a));
// 		}
// 		else if (d == 0) {
// 			console.log("Roots are real and same \n" + " ");
//             console.log(-b / (2 * a) + " "+ -b / (2 * a)) ;
// 		}
// 		else // d < 0
// 		{ 
// 			console.log("Roots are complex \n");
// 			console.log(-b / (2 * a) + " + i"+ sqrt_val + " "+ -b / (2 * a)+ " - i" + sqrt_val);
// 		}
// 	}
// 		let a = 1, b = 5, c = 6;
// 		findRoots(a, b, c);

// Problem 12 
// function palindrome(str) {
// 	var len = str.length ;
// 	for (var i = 0 ; i < Math.floor(len / 2); i++) {
// 	 if (str[i] !==str [len-1-i] ) {
// 		 return false ;
// 	 }
// 	}
// 	return true ;
// }

// str = prompt("Enter some string","");
// if (palindrome(str)) {
// console.log(str+"is palindrome");
// } else {
// 	console.log(str+"not a palindrome");
// }

// Problem 11
const points = [3 ,3 ,4, 4 ,7 ,8];
points.sort(function(a, b){return b - a});
console.log(points);