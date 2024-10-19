// singleton



// Object.create. --- constructor method


// object literals

// to use a Symbol inside an objectfirst we have to declare it outside then use [] fro declaring
// const mysym=Symbol('key1')

const jsUser = { 
    name : "Sai",
    mysym : "key1" ,// not it will be having the prorperties of a symbol
    "Fullnm" : "Sai Sharan",         // now there is no chance that we can access this value by using dot "."  *** its because it has a space in between and it is not allowed while calling the value from the object so we shall us the []    
    age : 18,

    location : 'blr',
    email : "saisharan794@gmail.com",
    isLoggedIn : false ,
    lastLogInDays : ["Monday","Saturday"]



}

//  accessing an object

console.log(jsUser["location"])
console.log(jsUser.location)  
console.log(jsUser["Full nm"])    
// console.log(jsUser.Fullnm)    


//  to modidfy the values of the object


// jsUser.email = "saisharan@gmail.com"

// Object.freeze(jsUser) // what this does is that it wont change the actual value that is in the object


jsUser.greeting= function(){
    console.log("HEY GUYS")
}

jsUser.greetingTwo= function(){
    console.log(`hello js user ${this.name}`)     // string interpolation
    //  to give reference to the same object We use !! "this" !!
}



console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())