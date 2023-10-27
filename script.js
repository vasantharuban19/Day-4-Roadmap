var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload = function(){
    var data = request.response;
    //console.log(data);
    var result = JSON.parse(data);
    console.log(result);
    for(var i=0;i<result.length;i++){
        console.log(result[i].area);
    }

}

/*var a =10;
var b =20;
var c = 30;
var d = 10;
//function example:-
function add(a,b){
    console.log(a+b);
 }
function mul(num1,num2){
    console.log(num1*num2);
}
function sub(c,d){
  console.log(c-d);
}
sub(c,d);
mul(a,b);
add(10,10);
*/
//using return
/*function multi(a,b,c){
    return a*b*c; 
}

multi(2,3,4);
multi(3,4,5);
*/

//print odd numbers in an array [1,2,3,4,5,6,7,8,9,10,11,12,13]

/*var result = [];
function odd(arr){
  for(var i=0;i<arr.length;i=i+1){
    if(arr[i]%2!==0){
        result.push(arr[i]);
    }
  }
  return result;
}
console.log(odd([15,18,23,14,16,24]));
*/

//using annoymous function

/*var result = [];
var a = function (arr){
  for(var i=0;i<arr.length;i=i+1){
    if(arr[i]%2!==0){
        result.push(arr[i]);
    }
  }
  return result;
}
console.log(a([15,18,23,14,16,24]));
*/

//IIFE
// (function (a,b){
//     console.log (a+b)
//  })(1,2)
//({})()
/*var result = [];
(function (arr){
  for(var i=0;i<arr.length;i=i+1){
    if(arr[i]%2!==0){
        result.push(arr[i]);
    }
  }
  console.log(result) 
})([1,2,3,4,5,6,7,8])
*/

//Arrow functions (ES6)

/*var result = [];
var odd =(arr)=>{
  for(var i=0;i<arr.length;i=i+1){
    if(arr[i]%2!==0){
        result.push(arr[i]);
    }
  }
  return result;
}
odd([15,18,23,14,16,24]);
*/
//var variablename=()=>{}variablename()