const strnobj = {
    id:0,
    name:"sruthi",
    company:"google"
}

// json object

const strnjson = `{
    "id":0,
    "name:"sree",
    "comapny":"google"
}`
// to convert json to object we use JSON.parse
const parsedjson = JSON.parse(strnjson);
const parsedstrng = JSON.stringify(strnobj);
console.log(parsedstrng);
console.log(parsedjson);