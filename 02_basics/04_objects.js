// const tinderUser = new Object() -- singleton object

const tinderUser = {}  // nonsingleton object

tinderUser.id = "123.ssm"
tinderUser.name="Sammy"
tinderUser.isloggedIn = "false"


console.log(tinderUser);



// ----------------------------------------------


const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",3:"b"}

const obj3 = {obj1 ,obj2}
console.log(obj3);   //now the same problem arises that had happend for arrays that is it becomes a nested array...we do not want that

const obj4 = Object.assign({},obj1,obj2)  //this also we use less
console.log(obj4);

const obj5= {...obj1,...obj2}
console.log(obj5);


console.log(Object.keys(tinderUser)) // important -- the returned data type is a array
console.log(Object.values(tinderUser)) 
console.log(Object.entries(tinderUser)) 


console.log(tinderUser.hasOwnProperty('IsLoggedIn'))