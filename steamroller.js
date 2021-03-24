function steamrollArray(arr) {
    let r = []
    function func(a){
        a.forEach(function (el){
            if(Array.isArray(el) === true){
                func(el);
            }else{
                r.push(el);
            }
        })
    }
    func(arr);
    return r;
}

steamrollArray([1, [2], [3, [[4]]]]);