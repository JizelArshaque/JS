// duplicate elements in the given array

a=[1,33,2,4,5,6,2]

for(i =0;i<a.length;i++){
    for(j =i+1;j<a.length;j++){
        if(a[i]==a[j]){
            console.log(a[i]);
        }
    }
}