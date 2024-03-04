// armstrong number or not 

i =153
temp = i
sum = 0

while(i>0){
    sum += (i%10)**3
    i = Math.floor(i/10)
    console.log(i,sum);
}
console.log(sum);

if(temp == sum){
    console.log('armstrong');
}else{
    console.log(`not armstrong`);
}