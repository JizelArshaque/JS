expense = [12000,23000,40000,34000,59000,43000]
lowest=expense[0]
for(let exp of expense){
    if(lowest>exp){
        lowest = exp
    }
    
}
console.log(lowest);
console.log('------------------------');

highest=expense[0]
for(let exp of expense){
    if(highest<exp){
        highest = exp
    }
    
}
console.log(highest);

console.log('------------------------');
sum=0
for(let i of expense){
    sum= sum+i
}
console.log(sum);
