// pairs whose sum is 6

a = [2,3,4,5]

for(let j of a ){
    for(let q of a ){
        if(j+q == 6){
            console.log(j,q);
            break;
        }
    }
}