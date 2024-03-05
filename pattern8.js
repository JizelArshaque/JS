//    *
//   * *
//  * * *
// * * * *
//* * * * *
// * * * *
//  * * *
//   * *
//    *



for(row =1;row<=6;row++){
    str=''
    for(spa=6;spa>row;spa--){
        str=str+ " "
    }
    for(col=1;col<row;col++){
        str= str+'* '
    }
    console.log(str);
}

for(row =1;row<=5;row++){
    str=''
    for(spa=1;spa<row;spa++){
        str=str+" "
    }
    for(col=5;col>row;col--){
        str= str+' *'
    }
    console.log(str);
}



