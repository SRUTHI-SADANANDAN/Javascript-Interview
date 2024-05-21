// localStorage.setItem("","");/*used to set items as key value*/
// localStorage.getItem(""); /*used to retrive item,take only key*/
// localStorage.removeItem(""); /*remove only one item*/
// localStorage.clear();/*remove multiple items */
// localStorage.key();/*retreiving key*/


// localStorage.setItem("id","0");
// localStorage.setItem("token","ab");

// localStorage.setItem("name","sree");
// localStorage.removeItem("id");
// console.log(localStorage.key(0));

// localStorage.clear();

// document.write(localStorage.getItem("id"));

// const obj = {
//     id:0,
//     name:"sruthi"
// }

// localStorage.setItem("data",JSON.stringify(obj));
// document.write(JSON.parse(localStorage.getItem("data")));


const input = document.querySelector("input");
const Loginbutn = document.querySelector("#login");
const logoutbtn = document.querySelector("#logout");
const h1 = document.querySelector("h1");

Loginbutn.onclick = ()=>{
    if(input.value){
        localStorage.setItem("token",input.value);
        h1.innerHTML="welcome user";
    }
}

logoutbtn.onclick = ()=>{
    localStorage.clear();
    location.reload();
}