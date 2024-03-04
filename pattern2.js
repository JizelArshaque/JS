
// 1 1 1 1 
// 2 2 2 2 
// 3 3 3 3
// 4 4 4 4

num=0
for(i = 1;i<=4;i++){
    num++
    str=''
    for(j=1;j<=4;j++){
        str = num + ' ' + str
    }
    console.log(str);
}