// const add = (a,b) =>{
//     return a+b ;
// }

// const sub = (a,b) =>{
//     return a-b ;
// }

// const multi = (a,b) =>{
//     return a*b ;
// }

// const div = (a,b) =>{
//     return a/b ;
// }

// to export the values in other file
// module.exports = {
//     addFn : add,
//     subFn : sub,
//     multiFn : multi,
//     divFn : div
// } ;

//-------------------------------------
// another way of exporting

exports.add =(a,b)=>{
    return a+b ;
}

exports.sub =(a,b)=>{
    return a-b ;
}

exports.multi =(a,b)=>{
    return a*b ;
}

exports.div =(a,b)=>{
    return a/b ;
}