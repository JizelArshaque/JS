// reverse of a number
// i=121
// num=i
// reverse=0

// remainder = 0

// while(num>0){
//     remainder = num %10
//     reverse= (reverse*10)+remainder
//     num = Math.floor(num/10)
// }
// console.log(reverse);

// if(i==reverse){
//     console.log(`palindrome`);
// }else{
//     console.log(`not palindrome!`);
// }


i =1223

remainder=0
reverse = 0
 while(i>0){
    remainder = i%10
    reverse= (reverse*10)+remainder
    i = Math.floor(i/10)

 }
 console.log(reverse);