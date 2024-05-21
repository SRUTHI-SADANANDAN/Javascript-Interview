// import {mystring,myfunc} from './variables.js';
// import handleinput from './variables.js'

// console.log(mystring);
// console.log(myfunc());

// console.log(handleinput());

import * as  utils from './variables.js' /*to import all at a time in a js file*/

console.log(utils.myfunc());

console.log(utils.default());/*here function handlechange is export as export default so we need to console like this*/


// hidden tricks in js
const value = "10";
// normal way to convert a string into number

// const convertedvalue = parseInt(value);
// another ways
// const convertedvalue = value | 0;
// const convertedvalue = value | 0;

// console.log(typeof convertedvalue);

// NUllish Coalescing in js
const obj = {
    id:0,
    name:"sree",
    bool:false

}
const newobj = obj.bool ?? 18;

console.log(newobj);

// self invoking function
(
    function myfunction(){
        console.log("hi"); 
    }
)()

