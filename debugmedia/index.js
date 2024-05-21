// FUNCTIONS

function myFunction(){
    let a=10;
    myFunction3();
    return a;
}

function myFunction2(){
    let a=6;
    myFunction3();

    console.log(a);
}

function myFunction3(){
    console.log("completed")
}

console.log(myFunction());
console.log(myFunction2());

function sum(z){
    let a=10;
    let b=z;
    let c= a+b;
    return c;

}
console.log(sum(2));


// ARROW FUNCTIONS
myfunc = (c)=>{
    return c
}
console.log(myfunc(8));

// STRING METHODS
let a = "sruthi k k"

console.log(a.length);
console.log(a.indexOf("u"));
console.log(a.lastIndexOf("k"));
console.log(a.search("t"));
console.log(a.includes("p"));

let x="debug m";
let y= x.slice(-4);
console.log(y);

// NUMBER METHOD

let c=90
let v="80";

console.log(c.toString());/*number to string*/
console.log(parseInt(v));/*string to number*/

// ARRAY METHODS
let arr=["a","k","s","j"];
arr[0] ="c"
console.log(arr);
arr.push("n");
console.log(arr);
arr.pop();
console.log(arr);
arr.unshift("p"); /*front push*/
console.log(arr);
arr.shift();/*front delete*/
console.log(arr);
arr.splice(0,1);/*used  for deleting ,first indexx represents start index,second represents how many elements sholud delete*/
console.log(arr);

let array =["a","d","f","g","k"]
array.splice(2,0, "l","m","k")/*used to add elements to the desired place,first index represents from wher it should add,second index represents zero that menas nothing to be delete*/
console.log(array);
let newarray = array.slice(2);/*from where we want a new array*/
console.log(newarray);


function btnclick(){
    alert("you clicked me")
}




// SPREAD OPERATOR

// const globalPlayer = {
//     id:1,
//     name:"bot",
//     powerlevel:100
// }
// const player1={...globalPlayer};/*copy*/
// player1.name = "Bot2"
// console.log(player1);
// console.log(globalPlayer);


// in case of array
// const array1 = ["john","martin","lalu","bolu"];
// const array2 = ["chottu","mottu","lambbu"];
// const player = [...array1,...array2,"jeeva"];
// console.log(player);
// console.log(array1);
// console.log(array2);

// rest
const array1 = ["john","martin","lal"];

const [first,second,third] = array1;
console.log(first);


const globalPlayer = {
    id:1,
    name:"bot",
    powerlevel:100
}

const {id,...rest} = globalPlayer;
console.log(id,rest);



// // const globalPlayer = {
// //     id:1,
// //     name:"bot",
// //     powerlevel:100
// // }

// // const {id,...rest} = globalPlayer;
// // console.log(id,rest);


// // const globalPlayer = [
// //     {
// //     id:1,
// //     name:"bot",
// //     powerlevel:100
// //     },
// //     {
// //         id:2,
// //         name:"bot1",
// //         powerlevel:100
// //     },
// //         {
// //             id:3,
// //             name:"bot2",
// //             powerlevel:100
// //         },
// // ]

// // for (let i=0;i<globalPlayer.length;i++){
// //     console.log(globalPlayer[i]);
// // }
// // // Foreach reruns same array
// // globalPlayer.forEach(function(value,index,array){
// //     console.log(value.name);
// //     console.log(index);
// //     console.log(array);
// // })

// // // using arrow function
// // globalPlayer.forEach((value,index,array)=>{
// //     console.log(value.name);
// //     console.log(index);
// //     console.log(array);
// // })


// // using map
// const globalPlayer = [
//         {
//         id:1,
//         name:"bot",
//         powerlevel:100
//         },
//         {
//             id:2,
//             name:"bot1",
//             powerlevel:100
//         },
//             {
//                 id:3,
//                 name:"bot2",
//                 powerlevel:100
//             },
//     ]
    
// // const newarr = globalPlayer.map((data)=>(data.name)) /*map returns new array*/
// // console.log(newarr);

// // filter method
// // const newarr = globalPlayer.filter((value)=>value.name==="bot2"&& value.id==3);
// // console.log(newarr);

// // map
// const newarr = globalPlayer.map((data)=>(data.name)) /*map returns new array*/
// console.log(newarr);

// // reduce    it will take 4 arguments total,value,index,array
// // const numberarray = [1,2,3,4,6,7]
// // const reducedarray = numberarray.reduce((total,value)=> total+value,1);
// // console.log(reducedarray);
// // // using normal loop
// // let total = 0;
// // for(i=0;i<numberarray.length;i++){
// //     total=total+numberarray[i];

// // }
// // console.log(total);

// // find method :- to take specific element from object

// const emp=[{
//     emp_id:1,
//     emp_name:"sruthi",
//     company:"google"
// },
// {
//     emp_id:2,
//     emp_name:"sujay",
//     company:"google"
// },
// {
//     emp_id:3,
//     emp_name:"nandhu",
//     company:"google"
// },

// ]

// const newemp = emp.find(value=>(value.emp_name==="sujay"));
// console.log(newemp);


// // sort

// const numberarray = [1,2,3,4,6,7];
// const newarr1=numberarray.sort((a,b)=>b-a);
// console.log(newarr1);
// // Flat method
// const nestedarray =[10,20,30,[50,50,40],30,40,[80]];
// const flatedarray = nestedarray.flat(Infinity);
// console.log(flatedarray);

document.getElementById("head").style.color ="red";
document.querySelector("#head").style.color="blue";

