// console.log("running 1");

// setTimeout(()=>{
//     console.log("running 2")
// },5000);

// console.log("running 3");
// // here running 2 prints only after 5 sec 

// console.log("start");

// function getDatafromApi(){
//     setTimeout(()=>{
//        return console.log("hii")
//     },3000);
    
// }

// console.log(getDatafromApi()); /*here nothing will be print because the function has nothing to be display, hii is inside the setimeout*/

// console.log("end");



console.log("running 1");

function getDatafromApi(callback){
    setTimeout(()=>{
        callback("sruthi");
    })
}
 
getDatafromApi((value)=>{
    console.log(value);
})
console.log("running 2");