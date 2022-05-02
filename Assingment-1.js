// Problem-1
function factorial(n){
  let answer = 1;
  if (n == 0 || n == 1){
    return answer;
  }else{
    for(var i = n; i >= 1; i--){
      answer = answer * i;
    } return answer;
  }  
}
let n = 5;
answer = factorial(n)
console.log("The factorial of " + n + " is " + answer);


// Problem-2
 var n=2;
 var cube;
 var cube=n*n*n; 
 console.log("Cube of a Number = "+cube);


// Problem-3
function areaTriangle() {
   let area;
   let side = 20;
   area = Math.sqrt(3)/4*side*side;
   console.log(Math.round(area));
}
areaTriangle();


// Problem-4
function getDays (year, month) {
	return new Date(year, month, 0 ).getDate() ;
}
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() +1; 
const daysInMonth = getDays(2022, 2);
console.log(daysInMonth);
  

//   Problem-5
  function cToF(celsius) {
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
} 
cToF(12);
// console.log('\xB0'); this \xB0 is for a degree symbol


// Problem 6
function findSum(n) {
	let result = 0;
	for(let i = 1; i <= n; i++) {
	  result = result + i;
	}
	return result
  }
  let n = 10;
  console.log(`Sum of numebers from 1 to ${n} is ${findSum(n)}`)


// Problem 7
/*JavaScript program to find Nth term
in the given Series*/
	"use strict"
	function nthTerm(num){
	  let term
	  term = num*num
	  console.log(term)
	}
	nthTerm(18)


	// Problem 8
    var str ="lorem Ipsum";
	str = str.replace(" ","");
	console.log(str.length);
    

// Problem 9
function findRoots(a, b, c) {
		if (a == 0) {
			console.log("Invalid");
			return;
		}
		let d = b * b - 4 * a * c;
		let sqrt_val = Math.sqrt(Math.abs(d));
		if (d > 0) {
			console.log("Roots are real and different \n" + " ");
            console.log((-b + sqrt_val) / (2 * a) + " "+ (-b - sqrt_val) / (2 * a));
		}
		else if (d == 0) {
			console.log("Roots are real and same \n" + " ");
            console.log(-b / (2 * a) + " "+ -b / (2 * a)) ;
		}
		else /* d < 0*/	{ 
			console.log("Roots are complex \n");
			console.log(-b / (2 * a) + " + i"+ sqrt_val + " "+ -b / (2 * a)+ " - i" + sqrt_val);
		}
	}
		let a = 1, b = 5, c = 6;
		findRoots(a, b, c);


// problem 10 
function sortEvenArray(array, n){
    let evenArr=[];
    let oddArr=[];
    let result =[];
    for(let i=0; i<=n; i++){
        if(i%2 == 0){
evenArr.push(array[i]);
        } else {
            oddArr.push(array[i]);
        }
    }
    evenArr.sort((a,b)=>a-b);
    for(let i=0;i<n;i++){
        if(i%2 ==0){
            result.push(evenArr.shift())
        }else(
            result.push(oddArr.shift()) 
        )
    }
    return result;
} 
let ans = sortEvenArray([3,9,1,44,6],5);
console.log(ans);


// Problem 11
function asc(arr) {
    let map = new Map
    let c = 1;
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1)
        }
        else {
            map.set(arr[i], c)
        }
    }
    let narr = [...map];
    let tmp;
    for (i = 0; i < narr.length; i++) {
        for (j = i + 1; j < narr.length; j++) {
            if (narr[i][1] > narr[j][1]) {
                tmp = narr[i];
                narr[i] = narr[j];
                narr[j] = tmp;
            } else if ((narr[i][1] == narr[j][1])) {
                if (narr[i][0] > narr[j][0]) {
                    tmp = narr[i];
                    narr[i] = narr[j];
                    narr[j] = tmp;
                }
            }
        }
    }  return narr;
}
arr = [3 ,3 ,4, 4, 7, 8];
console.log(asc(arr));
var x = 5;
var y = 6;
var z = x=y;
console.log("Value of z "+z);

// problem 12 
function isPalindrome(n) {
    var rev = 0;
    for (var i = n; Math.trunc(i) > 0; i /= 10) {
        rev = ((rev*10) + (Math.trunc(i)%10));
        }
    return (n==rev);
}
var count = 0;
function countPal(min,  max) {
    for (var i = min; i <=max; i++) {
        if(isPalindrome(i))       
        count++;
       }
       console.log(count);
}
    countPal(1, 5);

// problem 13 
function nthTerm(num){
    let term = num*(num+1);
    return term;
    // console.log(nthTerm(4));
}
console.log(nthTerm(4));

// problem 14 
function leftRotate(arr, n, k){
    let mod = k % n;
    for (let i = 0; i < n; i++)
        console.log((arr[(mod + i) % n]) + " ");
       console.log("\n");
}
let arr = [ 1 ,2 ,3 ,4 ,5, 6, 7];
let n = arr.length;
k = 3;
leftRotate(arr, n, k);

// problem 15 
function evaluatePostfix(exp) { 
        let stack=[];      
        for(let i=0;i<exp.length;i++) {
            let c=exp[i]; 
            if(! isNaN( parseInt(c) ))
            stack.push(c.charCodeAt(0) - '0'.charCodeAt(0));
            else {
                let val1 = stack.pop();
                let val2 = stack.pop();
                switch(c) {
                    case '+':
                    stack.push(val2+val1);
                    break;
                      
                    case '-':
                    stack.push(val2- val1);
                    break;
                      
                    case '/':
                    stack.push(val2/val1);
                    break;
                      
                    case '*':
                    stack.push(val2*val1);
                    break;
              }
            }
        }  return stack.pop();  
	}
let exp="531*+9-";
console.log("postfix evaluation: "+evaluatePostfix(exp));