function uniteUnique(...arr) {
    let uniqueArr = [];
    arr.forEach(function(subArr){
        subArr.forEach(function (el){
            if(!uniqueArr.includes(el))
            uniqueArr.push(el)
        });
    });
    return uniqueArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);