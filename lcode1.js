var expect = function(val) {
    function toBe(val1){
        if(val !== val1){
           throw new Error("Not Equal");
        }
    }

    function notTobeVal(va1l){
        if(val === val1){
            throw new Error ("Equal")
        }
    }
};

 expect(5).toBe(5); // true
 expect(5).notToBe(5); // throws "Equal"
