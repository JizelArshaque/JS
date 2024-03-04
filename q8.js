// HCF/GCD  of 2 numbers
// num1 = 12 = 1,2,4,6,12
// num2 = 28 = 1,2,4,6,7,14,28

// here common factors are 1,2,4 and we have to print HCF so we need 4
// factors wont ever be greater tha its own number so i should be less than both

num1 = 3
num2 = 6

hcf=0

for(i=1;i<=num1&&i<=num2;i++){
    if(num1%i==0 && num2%i==0){
        hcf=i
    }
}
console.log(hcf);
