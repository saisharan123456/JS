const coding =[ "js","ruby","java","pyhton","cpp"]

// coding.forEach( function (item) {
//     console.log(item);
// })

// coding.forEach( (item) => {
//     console.log(item);
    
// })

// function printme(item){
//     console.log(item);
// }

// coding.forEach(printme)


// coding.forEach( (item,index,arr) =>{
//     console.log(item,index,arr);
// } )

const mycoding = [
    {
        languageName : "javascript",
        languageFilename : "js"
    },
    {
        languageName : "python",
        languageFilename : "py"
    },
    {
        languageName : "c",
        languageFilename : "c"
    }
]

mycoding.forEach((item)=> {
    console.log(item.languageName);
    
})