// * * * * *
// *       *
// *       *
// *       *
// * * * * *  

for(row = 1;row<6;row++){
    str=''
    for(col=1;col<6;col++){
        if(col == 1|| col ==5 || row==5 || row == 1){
            str=str+'*'
        }else{
            str=str+' '
        }
    }
    console.log(str);
}


// 1
// 0 1
// 1 0 1
// 0 1 0 1


for(row=1;row<=5;row++){
    str=''
    for(col=1;col<row;col++){
        if((row+col) % 2 == 0){
            str=str+'1'
        }else{
            str=str+'0'
        }
        
    }
    console.log(str);
    
}

