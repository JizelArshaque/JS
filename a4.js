input = [4,5,6]

// out = [11,10,9]
sum=0
for(let i of input){
    sum +=i
}
newArr=[]
for( let k in input){
    newArr[k] = sum-input[k] 
}

input = newArr
console.log(input);