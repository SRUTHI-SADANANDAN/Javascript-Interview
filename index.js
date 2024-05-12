// const [items,setItems] = useState([])

// useEffect(()=>{
//     axios.get(()=>{
        
//     })
// }
// function myFunction(){
//     const arr = [10,20,30,40]
//    let element= 40;
//     var isElement = false
//     for(i=0;i<arr.lemgth;i++)
//         if(arr[i]==element){
//             console.log(true)
//         }
//         else{
//             console.log(false)
//         }
        
    
// }



// function myFunction() {
//     const arr = [10, 20, 30, 40];
//     let element = 50;
//     let isElement = false;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === element) {
//             isElement = true;
//             break;
//         }
//     }
//     console.log(isElement);
// }

// myFunction(); 


// function myFunction(arr, element) {
//     let isElement = false;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === element) {
//             isElement = true;
//             break; 
//         }
//     }
//     console.log(isElement);
// }

// const array = [10, 20, 30, 40];
// const element = 40;
// myFunction(array, element); 



// var string = "welcome guys"

// var reversedString = reverseBySeperator("string","");
// var reverseEntireWord = reverseBySeperator("reversedString","");
//  function reverseBySeperator(string,seperator){
//     return (string.split(seperator).reverse().join(seperator))
//  }
//  console.log("Reverse Entire Word:", reverseEntireWord);





//  Data types

// Primitive=> string,number,boolean,Bigint,null,undefined,symbol,


// Reference or Non Primitive
// arrays, objects, Functions


// Hoisting: Using variable before declaring

// x=10;
// console.log(x);
// var x;  /*declaration*/

// js do not support initialization in hoeisting it will givw undefined
// console.log(x)
// var x=10;


// function Hoisting
// Hello();
// function Hello(){
//    x=10
//    console.log("hello world",x);
//    var x;
// }


// difference between == and ===
// == check the value
// === check the value and type
// var x=10;
// var y='10';
// console.log(x==y,x===y);

// difference between var and let
// var have function scope and let have block scope
// block cope means inside curly braces like inside for loop braces
// in here we can call var anywhere inside the function , but in the case of let, if we defined let inside a block and call let outside the block it will show like not defined.

// function Sruthi(){
//    var x=0;
//    let y=10;
//    for(i=0;i<10;i++){
//       var k=20;
//       let j=30;
//    }
//    console.log(x,y,k)
//    console.log(j)

// }
// Sruthi()

// implicit type cursion
// if we add a number type and string the result will be always string.the number will coverts to string.
// but if we subtract the string typw will converts to number and result will be number
// var w=1;
// var w="1";
// console.log(w+w)

// var f=20;
// var g="90"
// console.log(f-g)

// var a= 3;
// var f="sruthi"
// console.log(a+f);

// NaN : it  stands for not a number

// console.log(typeof NaN)

// if want to check the given value is number or not we can use isNan function
// console.log(isNaN(2)) /*false, because 2 is a number*/
// console.log(isNaN("hii")); /*true, beacuse the value is string */
// console.log(isNaN("8")); /* false, the string will convert to number,beacuase inside the string is a  number  */
// console.log(isNaN(undefined)); /*true, beacuse it can't covert to nothing */
// console.log(isNaN(true)) /*false, because if we convert true it become 1, so one is anumber */
// console.log(isNaN(false)) /*false, because if we convert false it become 0, so zero is anumber */
// console.log(isNaN(null)) /*false*/
// console.log(isNaN(Symbol)) /*true*/
// console.log(isNaN(BigInt))
// differnce between pass by value and pass by refernce
//  pass by value is only in the case of primitive data types
// different memory location
// let d=30; 
// x=d;
// console.log(x)

// pass by refernce is only in the case of non primitive data types
// same memory space
// let obj1={name:"sruthi"}
// obj2=obj1
// obj2.name="nandhu"
// console.log(obj1,obj2)

// immediately invoked function IIFE: we can run a function immediatly when it defines
// (
//    function(x){
//       console.log("hello world",x);
//    }
// )(7);

// higher order functions

// function that returns a function
function Hello(){
   return function hii(){
      console.log("hello")
   }
}
var x= Hello()
console.log(x())

// Passed a function as argument in another function
function Hii(fn){
   fn();
}
Hii(()=>{console.log("hey")});


// difffernce between call(),apply(),bind()
// call()
let player={
   firstname:"sruthi",
   lastname:"k",
  
}

const employee={
   firstname:"Nandhu",
   lastname:"k",
}

 function fullname(place,age){
      console.log(this.firstname+" "+this.lastname+","+place+","+age)
   }
fullname.call(player)
fullname.call(employee,"kannur",20);
fullname.apply(employee,["kannur",20]); /*apply()*/

let fn=fullname.bind(employee);/*bind()*/
fn();


// exec() and test()    :-these are regular expression methods in javascript
// if i have as string and i want to search a specific word letter pattern or index we use this,
// if we use exec() wether pattern is match it will return the index and the correct pattern and if that not matches it will return null.
// if we use test() it will retrun boolean value.if this match return true and otherwise false.


// var word="hello sruthi"
// console.log(/e/.exec(word));
// console.log(/s/.test(word)); /*true*/

//map and foreach
// map returns new array while foreach returns undefined
const arr=[{name:"sruthi"},{name:"savitha"}]

// const map= arr.map((item,index)=>{
//    item.age=10;
//    return item;
   
// }
   
// )
// console.log(map);  /*will return the same ARRAY*/

const foreach = arr.forEach((item,index)=>{
   item.age=20;
   
})
console.log(arr)  /*will return UNDEFINED*/


// slice() and splice()  :-array methods use to take array elemnts at a perticular intervel
// slice not effect original array but splice effect orginal array

const array =["c","c++","java","oops","react"]
// const slice = array.slice(2,5);
// console.log(slice);
// console.log(array);

// const splice = array.splice(2,5);
// console.log(splice);
// console.log(array);


// reverse string
const string = "hello world";
// const arra = string.split("");
// const reverse = arra.reverse();
// const join = arra.join("");
// console.log(join);

// const res = string.split("").reverse().join("")

// console.log(res)
// using for loop
let result="";
for(i=string.length-1;i>=0;i--){
   result =result+ string[i];

}   console.log(result)

// remove duplicates form an array
// first way using set
const numbers = [1,2,3,4,4,3,2,2,11,1,1,8];
let unique = [...new Set(numbers)];
console.log(unique)
// second way using reduce method

// redue contains two parameter that is a callback function it contains two parameters that are accumulator and current,the next parameter is the accumulators initial value that is an empty array,
// reduce iterate array, for each iteration  will get values, it will be the current
const uniqu= numbers.reduce((accu,curr)=>{
   if(!accu.includes(curr)){ /*if there is no current element in the accumulator it will push the value to the accumulator*/
      accu.push(curr)
   }
   return accu
},[])
console.log(uniqu)