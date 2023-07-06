let obj = {num:2}

let addToThis = function(a,b,c){
    return this.num+a+b+c;
};

// call
console.log(addToThis.call(obj,3,4,5));

//apply
let arr = [3,4,5]
console.log(addToThis.apply(obj,arr));

//bind
let bound = addToThis.bind(obj);
console.log(bound(3,4,5));