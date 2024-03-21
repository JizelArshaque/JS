function d(a,b){
    console.log(a);
    b()
}

function osh(){
    console.log('inside loops');
}

d(3,osh)

setTimeout(()=>{console.log('hi da');},3000)