a = 1
b = 10
c= 100


if( a>b && a>c){
    if(b>c){
        console.log(b,'is the second largest');
        console.log(a,b,c);
    }else{
        console.log(c,'is the second largest');
        console.log(a,c,b);
    }
}else if( b>a && b>c){
    if(a>c){
        console.log(a,'is the second largest');
        console.log(b,a,c);
    }else{
        console.log(c,'is the second largest');
        console.log(b,c,a);
    }
}else if(c>a && c>b){
    if(a>b){
        console.log(a,'is the second largest');
        console.log(c,a,b);
    }else{
        console.log(b,'is the second largest');
        console.log(c,b,a);
    }
}else{
    console.log('all numbers are equal!');
}






















// if(a<b && a<c){
//     if(b<c){
//         console.log(b);
//     }else{
//         console.log(c);
//     }
// }else{
//     console.log(a);
// }

// if( a>b && a>c){
//     console.log(a);
// }else{
//     if(b>a && b>c){
//         console.log(b);
//     }else{
//         console.log(c);
//     }
// }



