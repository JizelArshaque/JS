// #
// # #
// # # #
// # # # #


/* for (let col = 0; col < 5; col++) {
    str= ' '
    for(row = 0; row<col;row++){
        str= str+'# '
    }
    console.log(str);
    
} */

// 1
// 1 2 
// 1 2 3 
// 1 2 3 4 

for (row =1;row<5;row++){
    str = ''
    for(col= 1;col<=row;col++){
        str = str + col + " "
    }
    console.log(str);
}