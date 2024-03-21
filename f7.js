// function phno(a){
//     len = a.length
//     if(len == 10){
//         console.log('a phone number ');
//     }else{
//         console.log('not a phone  numebr ');
//     }
// }

// phno("9995633935")

const vmobile = (a)=>{
    return a.length==10?`${a}is a mobile number `:`not a mobile number `
}

console.log(vmobile("9995633935"));