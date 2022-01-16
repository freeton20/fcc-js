function addTogether(...args) {
    if(args[1]){
        if(Number.isInteger(args[1]) && Number.isInteger(args[0])){
            return args[1]+args[0];
        }else{
            return undefined;
        }
    }else{
        if(Number.isInteger(args[0])){
            return function(n){
                if(Number.isInteger(n)) {
                    return n + args[0];
                }
            }
        }else{
            return undefined;
        }
    }
}

let r = addTogether(2)(3);
console.log(r);

addTogether(2,3);