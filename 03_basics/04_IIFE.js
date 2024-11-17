// Immediately Invoked Function Expression (IIFE)

(function chai(){
    console.log(`DB CONNECTED`);
})();


// ()()

// first () is for function def and second () is for calling 
// every time we have to end the function the only the next time it will work

( () => {
    console.log(`Sai Sharan`);
    
} )();

// Visualise it as a function itself
// eg
( (name) => {
    console.log(`DB CONNECTED TO ${name}`);
    
} )("Sai Sharan");

//  Named IIFE
( function chai(name){
    console.log(`DB CONNECTED TO ${name}`);
    
} )("Sai Sharan")